import { useState } from 'react';
import { createPortal } from 'react-dom';
import { locations, escapeRoutes, escapeBranches } from '../data';
import { SectionHeader, Card } from './ui';
import { Map, MapPin, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function IslandGuide() {
  const [isMapZoomed, setIsMapZoomed] = useState(false);

  return (
    <div className="max-w-4xl mx-auto w-full">
      <SectionHeader title="FIELD MAP" subtitle="지형 관측 및 가능성" />
      
      <div className="mt-12 space-y-16">
        
        {/* Draw a hand-drawn map container */}
        <div className="border border-ink-900/30 p-4 sm:p-8 relative bg-[#e3d3c0]">
          
          {/* Full map image */}
          <div 
            className="w-full mb-10 relative flex items-center justify-center bg-paper-100 overflow-hidden group hover:bg-paper-200/50 transition-colors border-2 border-ink-900 shadow-sm border-dashed p-2 cursor-zoom-in"
            onClick={() => setIsMapZoomed(true)}
          >
            <img 
              src="https://img.jjerrii.uk/survive/image.png" 
              alt="무인도 지도" 
              className="w-full object-contain rounded-sm"
              referrerPolicy="no-referrer"
            />
          </div>

          {typeof document !== 'undefined' && createPortal(
            <AnimatePresence>
              {isMapZoomed && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/80 p-4 cursor-zoom-out"
                  onClick={() => setIsMapZoomed(false)}
                >
                  <div className="absolute top-4 right-4 bg-paper-100 rounded-full p-2 cursor-pointer shadow-lg hover:rotate-90 transition-transform">
                    <X className="w-6 h-6 text-ink-900" />
                  </div>
                  <motion.img 
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    src="https://img.jjerrii.uk/survive/image.png" 
                    alt="무인도 지도 확대" 
                    className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm"
                    referrerPolicy="no-referrer"
                    onClick={(e) => e.stopPropagation()}
                  />
                </motion.div>
              )}
            </AnimatePresence>,
            document.body
          )}

          <h3 className="text-2xl font-hand font-bold text-ink-900 mb-6 flex items-center gap-2 transform -rotate-1">
            <Map className="w-6 h-6 text-accent-ocean" />
            <span className="bg-paper-100 px-3 py-1 shadow-sm">발견된 주요 거점들</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {locations.map((loc, idx) => (
              <div key={loc.id} className="bg-paper-100 p-4 shadow-sm border border-ink-900/10 transform transition-transform hover:-translate-y-1 relative" style={{ transform: `rotate(${Math.random() * 2 - 1}deg)` }}>
                <div className="absolute top-2 right-3 font-hand text-accent-jungle/40 text-4xl leading-none pointer-events-none">
                  #{idx + 1}
                </div>
                <h4 className="font-hand font-bold text-2xl text-ink-900 flex items-center gap-1 mb-2">
                  <MapPin className="w-4 h-4 text-accent-blood" /> {loc.name}
                </h4>
                <p className="font-hand text-lg text-ink-800 mb-3 ml-5">{loc.description}</p>
                <div className="ml-5 space-y-1 font-hand text-ink-500">
                  {loc.features.map((f, i) => (
                    <p key={i}>· {f}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Routes & Branches side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="relative p-6 border-2 border-ink-900 border-dashed">
            <div className="absolute -top-4 left-6 bg-paper-100 px-2 font-hand text-2xl font-bold text-ink-900">
              [ 생각형 탈출 루트 ]
            </div>
            
            <div className="space-y-6 mt-4">
              {escapeRoutes.map((route, idx) => (
                <div key={route.id} className="flex gap-4">
                  <div className="font-hand text-3xl text-accent-ocean mt-1">0{idx + 1}.</div>
                  <div>
                    <h4 className="font-hand font-bold text-2xl text-ink-900">{route.title}</h4>
                    <p className="font-hand text-lg text-ink-800">{route.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative p-6 bg-ink-900 text-paper-100 shadow-md transform rotate-1">
            <div className="absolute -top-3 right-4 w-12 h-6 bg-accent-tape mix-blend-screen opacity-50 transform -rotate-12 blur-[1px]"></div>
            
            <h3 className="font-hand font-bold text-3xl text-accent-blood mb-2 border-b border-paper-100/30 pb-2">
              변수 / 분기점
            </h3>
            <p className="font-hand text-paper-300 text-lg mb-6">
              * 탈출 가능성(100)을 달성할 경우 직면할 선택들.
            </p>
            
            <div className="space-y-4">
              {escapeBranches.map((branch) => (
                <div key={branch.id} className="border-l-2 border-accent-blood pl-4">
                  <h4 className="font-hand text-xl text-paper-100 underline decoration-wavy decoration-accent-blood/50 mb-1">{branch.title}</h4>
                  <p className="font-hand text-lg text-paper-300">{branch.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
