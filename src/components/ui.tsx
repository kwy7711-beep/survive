import { ReactNode } from 'react';

export function SectionHeader({ title, subtitle }: { title: ReactNode; subtitle?: ReactNode }) {
  return (
    <div className="mb-10 relative">
      <div className="flex items-end gap-4 mb-2">
        <h2 className="text-3xl md:text-5xl font-hand text-ink-900 tracking-wider relative inline-block font-bold transform -rotate-1 origin-bottom-left">
          {title}
        </h2>
        {subtitle && (
          <div className="font-hand text-ink-500 text-[10px] md:text-xs opacity-70 transform rotate-1 pb-1 md:pb-2 whitespace-nowrap shrink-0">
            ( {subtitle} )
          </div>
        )}
      </div>
      
      <div className="w-full relative h-[6px]">
        {/* Wobbly hand-drawn line */}
        <svg className="absolute inset-0 w-full h-full text-ink-800 opacity-30" preserveAspectRatio="none" viewBox="0 0 100 10">
          <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`
      bg-paper-100 border border-ink-900/10 rounded-sm p-6 relative shadow-sm 
      before:absolute before:inset-0 before:bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M0,19.5 L20,19.5%22 stroke=%22rgba(43,37,35,0.05)%22 stroke-width=%221%22 fill=%22none%22/%3E%3C/svg%3E')]
      ${className}
    `}>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block px-2 py-0.5 text-xs font-hand text-ink-800 border bg-paper-200 border-ink-900/20 transform rotate-[-2deg] opacity-80 decoration-ink-900/30 underline decoration-wavy shadow-[1px_1px_0px_rgba(0,0,0,0.05)]">
      {children}
    </span>
  );
}
