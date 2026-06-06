import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hero } from './components/Hero';
import { Worldview } from './components/Worldview';
import { Characters } from './components/Characters';
import { IslandGuide } from './components/IslandGuide';
import { Scenarios } from './components/Scenarios';

type Tab = 'home' | 'worldview' | 'characters' | 'guide' | 'scenarios';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    let ctx: AudioContext;
    let waveNode: AudioBufferSourceNode;
    let masterGain: GainNode;

    const startAudio = () => {
      if (isPlayingAudio || ctx) return;
      
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContextClass) return;
        ctx = new AudioContextClass();
        masterGain = ctx.createGain();
        masterGain.gain.value = 0.15; // 은은한 볼륨
        masterGain.connect(ctx.destination);

        // 파도 소리 (Pink Noise + Lowpass Filter modulated by Sine Wave)
        const bufferSize = ctx.sampleRate * 5;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          data[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
          data[i] *= 0.11; 
          b6 = white * 0.115926;
        }

        waveNode = ctx.createBufferSource();
        waveNode.buffer = buffer;
        waveNode.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 200;

        const lfo = ctx.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.value = 0.1; // 파도 주기

        const lfoGain = ctx.createGain();
        lfoGain.gain.value = 400; // 필터 변화 범위

        lfo.connect(lfoGain);
        lfoGain.connect(filter.frequency);

        waveNode.connect(filter);
        filter.connect(masterGain);

        waveNode.start();
        lfo.start();

        // 갈매기 소리 (랜덤 간격)
        const playSeagull = () => {
          if (!ctx || ctx.state !== 'running') return;
          const osc = ctx.createOscillator();
          const pGain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(800, ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
          osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.3);
          
          pGain.gain.setValueAtTime(0, ctx.currentTime);
          pGain.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.1);
          pGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3);
          
          osc.connect(pGain);
          pGain.connect(masterGain);
          osc.start(ctx.currentTime);
          osc.stop(ctx.currentTime + 0.3);

          setTimeout(playSeagull, Math.random() * 8000 + 4000); // 4~12초 간격
        };
        setTimeout(playSeagull, 2000);

        setIsPlayingAudio(true);
      } catch (e) {
        console.warn('Audio initialization failed', e);
      }
    };

    const handleInteraction = () => {
      if (!isPlayingAudio) {
        startAudio();
      }
    };

    window.addEventListener('click', handleInteraction);
    return () => {
      window.removeEventListener('click', handleInteraction);
      if (ctx) ctx.close();
    };
  }, [isPlayingAudio]);

  const handleTabChange = (tabId: Tab) => {
    if (activeTab === tabId) return;
    setActiveTab(tabId);
  };

  const tabs: { id: Tab; label: string; rotation: number }[] = [
    { id: 'worldview', label: '세계관', rotation: -2 },
    { id: 'characters', label: '조난자 기록', rotation: 1 },
    { id: 'guide', label: '지형 및 탈출', rotation: -1 },
    { id: 'scenarios', label: '상황 기록', rotation: 2 },
  ];

  return (
    <div className="min-h-screen font-sans flex flex-col bg-[#e7d9c6] text-ink-900 relative">

      <nav className="fixed top-0 w-full z-50 bg-paper-100 shadow-[0_1px_5px_rgba(0,0,0,0.05)] border-b-2 border-ink-900/10 pointer-events-auto">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between relative pt-2">
          
          <div className="font-title font-bold text-2xl lg:text-3xl tracking-tighter flex items-center gap-2 pb-2 pl-4 pt-2 shrink-0 cursor-pointer" onClick={() => handleTabChange('home')}>
            <span className="text-accent-blood text-3xl font-title rotate-12 -mt-2 opacity-80">R</span>
            러브발싸 <span className="opacity-50 font-normal font-title text-xl lg:text-2xl pt-2 hidden sm:inline">in 무인도</span>
          </div>
          
          <div className="flex overflow-x-auto items-end space-x-1 px-4 sm:px-2 relative -bottom-0.5 z-20 pb-1 scrollbar-hide w-full sm:w-auto mt-2 sm:mt-0 justify-start sm:justify-end">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  style={{ transform: `rotate(${tab.rotation}deg)` }}
                  className={`
                    relative px-3 sm:px-4 py-2 font-hand text-base sm:text-xl lg:text-2xl transition-transform whitespace-nowrap
                    rounded-t-lg border-2 border-b-0 border-ink-900/40 border-dashed bg-paper-200
                    hover:bg-paper-100 flex-shrink-0
                    ${isActive 
                      ? 'bg-paper-100 text-ink-900 z-30 font-bold border-solid translate-y-[2px] pb-[10px] shadow-[-2px_-2px_4px_rgba(0,0,0,0.03)] scale-100' 
                      : 'text-ink-500 scale-95 z-10'}
                  `}
                >
                  <span className="opacity-80">
                    {tab.label}
                  </span>
                  {isActive && (
                    <div className="absolute -bottom-[6px] left-[1px] right-[1px] h-[7px] bg-paper-100 z-40"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-32 sm:pt-24 px-4 pb-12 flex flex-col relative z-10 max-w-4xl mx-auto w-full">
        <div className="w-full bg-paper-100 min-h-[80vh] flex flex-col shadow-[4px_4px_12px_rgba(0,0,0,0.05),-2px_-2px_10px_rgba(255,255,255,0.5)] border border-ink-900/5 relative">
          
          {/* Ring binder holes */}
          <div className="absolute -left-2 top-10 bottom-10 w-4 flex flex-col justify-around">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-3 h-3 rounded-full bg-[#d0beaa] shadow-inner border border-ink-900/10 hidden sm:block"></div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ 
                opacity: 0, 
                x: 30, 
                rotateY: -20, 
                transformOrigin: 'left center', 
                transformPerspective: 1200,
                filter: 'blur(10px) contrast(150%) sepia(80%)'
              }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                rotateY: 0, 
                transformOrigin: 'left center',
                filter: 'blur(0px) contrast(100%) sepia(0%)',
              }}
              exit={{ 
                opacity: 0, 
                x: -30, 
                rotateY: 20, 
                transformOrigin: 'left center',
                filter: 'blur(10px) contrast(150%) sepia(80%)'
              }}
              transition={{ 
                type: 'spring', stiffness: 120, damping: 20, duration: 0.6,
                filter: { duration: 0.8, ease: "easeOut" }
              }}
              className="p-4 sm:p-8 sm:pl-12 flex-grow flex flex-col"
            >
              {activeTab === 'home' && <Hero onEnter={() => handleTabChange('worldview')} />}
              {activeTab === 'worldview' && <Worldview />}
              {activeTab === 'characters' && <Characters />}
              {activeTab === 'guide' && <IslandGuide />}
              {activeTab === 'scenarios' && <Scenarios />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      
      <footer className="py-6 text-center text-sm font-hand text-ink-500 mt-auto relative z-10 w-full max-w-4xl mx-auto opacity-70">
        <p className="tracking-widest">© 2026 GANDA. 생존 일련번호: 8201.</p>
      </footer>
    </div>
  );
}
