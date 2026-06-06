import { scenarios } from '../data';
import { SectionHeader } from './ui';

export function Scenarios() {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <SectionHeader title="START CONDITIONS" subtitle="발단 기록" />
      
      <div className="space-y-12 mt-12">
        {scenarios.map((scenario, index) => (
          <div key={scenario.id} className="relative">
            
            {/* Folder tab */}
            <div className={`absolute -top-6 ${index % 2 === 0 ? 'left-4' : 'right-4'} bg-paper-200 border-2 border-b-0 border-ink-900/60 px-4 py-1 font-hand text-ink-900 text-xl font-bold rounded-t-lg z-10 shadow-sm`}>
              시나리오 선택지 #{index + 1}
            </div>

             <div className="bg-paper-100 border-2 border-ink-900/60 rounded-sm p-6 sm:p-10 shadow-[8px_8px_0px_rgba(43,37,35,0.1)] relative z-0">
              
              <h3 className="text-3xl sm:text-4xl font-hand font-bold mb-4 text-ink-900 border-b-2 border-ink-900/20 pb-2 border-dotted w-full sm:w-fit">
                {scenario.title}
              </h3>
              
              <div className="bg-[#ccaf9b]/20 p-4 rounded-sm border border-ink-900/10 mb-6 font-hand text-xl text-ink-900 italic transform -rotate-1">
                "{scenario.background}"
              </div>
              
              <div className="font-hand text-lg text-ink-800">
                <p className="font-bold underline mb-2 text-accent-blood">초기 상태 브리핑:</p>
                <ul className="space-y-2">
                  {scenario.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <span className="text-ink-900/50">-</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        ))}

        <div className="mt-16 text-center">
          <p className="font-hand text-2xl text-ink-500 transform rotate-2 max-w-sm mx-auto p-4 border border-ink-900/20 bg-paper-200/50 shadow-sm">
            "어떤 길을 쓰든, 이 기록이 온전히 끝나기를."
          </p>
        </div>
      </div>
    </div>
  );
}
