import { SectionHeader } from './ui';

export function Worldview() {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <SectionHeader title="THE RULES" subtitle="세계관 및 생존 규칙" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 w-full">
        
        {/* Left Col */}
        <div className="relative">
          {/* Post-it / torn paper effect */}
          <div className="bg-paper-200 p-6 shadow-[2px_2px_4px_rgba(0,0,0,0.1)] transform -rotate-1 relative before:absolute before:top-[-10px] before:left-1/2 before:-translate-x-1/2 before:w-16 before:h-4 before:bg-accent-tape before:opacity-80 before:mix-blend-multiply before:shadow-sm">
            <h3 className="text-3xl font-hand font-bold text-ink-900 border-b-2 border-ink-900/30 pb-2 mb-4">
              ■ 기본 조건
            </h3>

            <ul className="space-y-4 text-ink-800 font-hand text-xl leading-relaxed">
              <li className="flex flex-col">
                <span className="font-bold underline decoration-ink-900/30">장소:</span>
                <span className="pl-4">문명과 단절된 이름 모를 무인도</span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold underline decoration-ink-900/30">표류자:</span>
                <span className="pl-4">총 8명 (남성 4, 여성 3, 그리고 당신)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Col */}
        <div className="relative pt-6">
          <h3 className="text-accent-blood text-2xl font-hand font-bold flex items-center gap-2 mb-4">
            <span className="text-3xl">※</span> 궁극의 목표
          </h3>
          
          <div className="p-4 border-l-4 border-accent-blood bg-accent-blood/5 flex flex-col gap-4">
             <p className="text-2xl font-hand text-ink-900 leading-relaxed">
               "매일 밤 추위와 짐승의 위협 속에서, 우리가 의지할 수 있는 것은 오직 서로의 체온뿐이다."
             </p>
             <div className="text-right text-ink-800 font-bold font-hand text-xl">
               <span className="bg-accent-tape px-2 py-1 transform rotate-2 inline-block">
                 목표: 누군가의 마음을 얻고 무사히 구조될 것.
               </span>
             </div>
          </div>

          <div className="mt-8 text-center opacity-40">
            <svg width="100" height="40" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto transform rotate-1">
              <path d="M10 20 Q 30 10, 50 30 T 90 20" strokeLinecap="round" strokeDasharray="4 4" />
              <path d="M85 15 L 90 20 L 85 25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        
      </div>
    </div>
  );
}
