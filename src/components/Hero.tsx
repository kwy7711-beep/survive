export function Hero({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="flex-grow flex flex-col items-center justify-center text-center relative px-6 h-full">
      
      {/* Tape and photo corners */}
      <div className="absolute top-4 right-8 w-24 h-6 bg-accent-tape shadow-sm transform rotate-6 border border-ink-900/5 mix-blend-multiply opacity-80"></div>
      <div className="absolute bottom-16 left-8 w-20 h-5 bg-accent-tape shadow-sm transform -rotate-3 border border-ink-900/5 mix-blend-multiply opacity-80"></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-4 border-accent-blood/10 pointer-events-none border-dashed transform rotate-12"></div>
      
      {/* Coffee stain */}
      <div className="absolute top-[20%] left-[20%] w-32 h-32 rounded-full border-[8px] border-ink-800 opacity-[0.03] pointer-events-none transform -scale-x-100 rotate-45" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}></div>
      <div className="absolute top-[21%] left-[22%] w-24 h-24 rounded-full border-[2px] border-ink-800 opacity-[0.02] pointer-events-none transform -scale-x-100 rotate-12" style={{ borderRadius: '50% 40% 30% 60% / 50% 30% 70% 40%' }}></div>

      <div className="border border-ink-900 px-6 py-2 mb-10 transform -rotate-1 border-dashed relative">
        <p className="text-accent-blood font-serif tracking-widest font-bold text-xs">TOP SECRET / SURVIVAL RECORD</p>
        {/* Red stamp */}
        <p className="absolute -top-4 -right-10 text-accent-blood font-hand text-3xl transform rotate-12 opacity-70 border-2 border-accent-blood px-2 pb-1 rounded-sm">CONFIDENTIAL</p>
      </div>
      
      <div className="relative flex flex-col items-center mb-10 z-10 w-full max-w-lg">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-ink-900 tracking-tight uppercase font-title drop-shadow-sm leading-none transform -rotate-1 whitespace-nowrap">
          러브발싸
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-title text-ink-800 mb-2 transform rotate-1 mt-2">
          in 무인도
        </h2>
      </div>
      
      <div className="mb-16 font-hand text-2xl text-ink-800 max-w-xs mx-auto leading-relaxed border-l-2 border-ink-900/20 pl-4 py-2 text-left">
        <p>생존과 맞바꾼 로맨스,</p>
        <p>기록 번호: 104-B</p>
      </div>
      
      <div className="flex z-10 mt-8">
        <button 
          onClick={onEnter}
          className="group flex items-center gap-3 text-ink-900 text-2xl font-bold font-hand hover:text-accent-blood transition-colors outline-none px-6 py-2 border-b-2 border-ink-900 border-dashed hover:border-accent-blood"
        >
          기록 엿보기 <span className="transform group-hover:translate-x-2 transition-transform opacity-70 font-sans">→</span>
        </button>
      </div>
    </div>
  );
}
