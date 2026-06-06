import { useState } from 'react';
import { createPortal } from 'react-dom';
import { characters, Character } from '../data';
import { SectionHeader, Card, Badge } from './ui';
import { User, Paperclip, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Characters() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto w-full">
      <SectionHeader title="SURVIVOR LOG" subtitle="관찰 대상 목록" />
      
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/80 p-4 cursor-zoom-out"
              onClick={() => setSelectedImage(null)}
            >
              <div className="absolute top-4 right-4 bg-paper-100 rounded-full p-2 cursor-pointer shadow-lg hover:rotate-90 transition-transform">
                <X className="w-6 h-6 text-ink-900" />
              </div>
              <motion.img 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                src={selectedImage} 
                alt="캐릭터 확대" 
                className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm"
                referrerPolicy="no-referrer"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      <div className="flex flex-col gap-10 mt-8 relative">
        {/* Draw a vertical line matching notebook margin */}
        <div className="absolute top-0 bottom-0 left-6 sm:left-12 w-0.5 bg-accent-blood/30"></div>
        
        {characters.map((char, index) => (
          <div key={char.id} className="relative pl-12 md:pl-20">
            {/* Index marker */}
            <div className="absolute left-3 sm:left-9 top-4 w-6 h-6 rounded-full bg-paper-100 border border-accent-blood/50 flex items-center justify-center font-hand text-accent-blood font-bold text-sm transform -rotate-12">
              {index + 1}
            </div>

            <Card className="flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow relative bg-transparent border-none p-0 !bg-none before:!hidden">
              
              <div className="absolute -top-3 -right-2 w-12 h-6 bg-accent-tape mix-blend-multiply opacity-60 transform rotate-4"></div>

              {/* Photo Area */}
              <div 
                className="w-28 h-32 md:w-32 md:h-40 shrink-0 mx-auto md:mx-0 bg-paper-200 border-2 border-ink-900 border-dashed rounded-sm flex flex-col items-center justify-center transform -rotate-2 relative shadow-sm mt-4 md:mt-0 overflow-hidden cursor-zoom-in"
                onClick={() => char.image && setSelectedImage(char.image)}
              >
                <Paperclip className="absolute -top-4 -right-1 text-ink-900/40 w-6 h-6 transform rotate-45 z-10" />
                {char.image ? (
                  <img src={char.image} alt={char.name} className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90" referrerPolicy="no-referrer" />
                ) : (
                  <User strokeWidth={1.5} className="w-12 h-12 text-ink-900/30" />
                )}
                <div className="absolute bottom-1 w-full text-center font-hand text-ink-500 text-xs tracking-widest bg-paper-100/80 leading-none py-1 z-10">
                  NO.{char.id.replace('c', '0')}
                </div>
              </div>

              <div className="flex-grow flex flex-col pt-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="text-3xl font-hand font-bold text-ink-900">{char.name}</h3>
                  <div className="text-sm font-hand text-ink-500 transform rotate-1">
                    {char.age}살, {char.gender === 'M' ? '남' : '여'}, {char.job}
                  </div>
                  <div className="flex gap-2">
                    <Badge>{char.mbti}</Badge>
                    <Badge>{char.enneagram}</Badge>
                  </div>
                </div>

                <div className="space-y-2 mt-4 flex-grow">
                  <div className="pl-2 border-l-2 border-ink-900/20 py-1">
                    <span className="text-accent-blood font-hand font-bold mr-2 text-lg">외모:</span>
                    <span className="font-hand text-ink-800 text-lg">{char.appearance}</span>
                  </div>
                  <div className="pl-2 border-l-2 border-ink-900/20 py-1">
                    <span className="text-accent-blood font-hand font-bold mr-2 text-lg">성격:</span>
                    <span className="font-hand text-ink-800 text-lg">{char.personality}</span>
                  </div>
                </div>

                {/* Hand-written list box */}
                <div className="mt-4 p-3 border border-ink-900/20 rounded-md bg-paper-200/50 relative">
                  <p className="font-hand font-bold text-ink-900 text-xl border-b border-ink-900/20 pb-1 mb-2 inline-block">
                    소지품 체크리스트
                  </p>
                  <ul className="font-hand text-lg text-ink-800 space-y-1">
                    <li>✓ <strong className="text-ink-900">지참:</strong> {char.survivalItem}</li>
                    <li>✓ <strong className="text-ink-900">착용:</strong> {char.clothing}</li>
                    <li className="text-ink-500 opacity-60">✗ <strike>유실:</strike> <strike>{char.lostItem}</strike></li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        ))}
        
        {/* User Card */}
        <div className="relative pl-12 md:pl-20 mt-8">
          <div className="absolute left-3 sm:left-9 top-4 w-6 h-6 rounded-full bg-paper-100 border border-ink-900/50 flex items-center justify-center font-hand text-ink-900 font-bold text-sm transform">
            ?
          </div>
          <Card className="flex flex-col md:flex-row gap-6 p-6 border-2 border-ink-900/30 border-dashed bg-paper-200/30 hover:bg-paper-200/50 transition-colors cursor-pointer !bg-none before:!hidden">
            <div className="w-28 h-28 md:w-32 md:h-32 shrink-0 rounded-full border-2 border-ink-900 border-dotted flex items-center justify-center bg-paper-100">
              <span className="font-hand text-4xl text-ink-900/50">?</span>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-hand font-bold text-ink-900 mb-2 underline decoration-ink-900/30 decoration-wavy">나, 그리고 변수</h3>
              <p className="font-hand text-xl text-ink-800 leading-relaxed">
                나의 행동과 선택이 이들의 심리를 찌그러트리고, 생존의 방향을 바꿀 것이다. <br/>
                가장 주의해야 할 대상은 어쩌면... 나 자신일지도.
              </p>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
}
