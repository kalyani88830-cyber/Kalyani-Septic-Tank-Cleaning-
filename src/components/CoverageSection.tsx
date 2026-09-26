import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Phone, Check } from 'lucide-react';
import { COVERAGE_AREAS, BUSINESS_INFO } from '../data/servicesData';

interface CoverageSectionProps {
  lang: 'en' | 'ta';
  onSelectAreaForBooking: (areaName: string) => void;
}

export const CoverageSection: React.FC<CoverageSectionProps> = ({ lang, onSelectAreaForBooking }) => {
  const [selectedArea, setSelectedArea] = useState<string>(COVERAGE_AREAS[0].nameEn);

  const activeArea = COVERAGE_AREAS.find((a) => a.nameEn === selectedArea) || COVERAGE_AREAS[0];

  return (
    <section id="coverage" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-amber-700 uppercase mb-2">
            {lang === 'en' ? 'Operating Hub & Service Zones' : 'சேவை பகுதிகள் & மைய அலுவலகம்'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            {lang === 'en'
              ? 'Stationed in Chunkankadai, Serving Entire Nagercoil'
              : 'சுங்கான்கடையை மையமாகக் கொண்டு குமரி மாவட்டம் முழுவதும்'}
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            {lang === 'en'
              ? 'Our base fleet is stationed at Raja Street, Ayyappa College Road, Chunkankadai. This strategic location enables prompt 20 to 35-minute arrival across Nagercoil and surrounding taluks.'
              : 'எங்கள் வாகன மையம் சுங்கான்கடை ஐயப்பா கல்லூரி சாலையில் அமைந்துள்ளதால், நாகர்கோவில் மற்றும் சுற்றுவட்டார பகுதிகளுக்கு உடனடியாக வர முடிகிறது.'}
          </p>
        </div>

        {/* Layout: Interactive Zone Grid & Headquarters Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Areas List */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              {lang === 'en' ? 'Select a Locality for ETA & Coverage Details' : 'நேர விவரங்களை அறிய பகுதியை தேர்ந்தெடுக்கவும்'}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {COVERAGE_AREAS.map((item) => {
                const isSelected = selectedArea === item.nameEn;
                return (
                  <button
                    key={item.nameEn}
                    type="button"
                    onClick={() => setSelectedArea(item.nameEn)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                      isSelected
                        ? 'bg-amber-50/70 border-amber-600 shadow-xs ring-1 ring-amber-600'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="font-bold text-sm text-slate-900">
                        {lang === 'en' ? item.nameEn : item.nameTa}
                      </div>
                      <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                        {item.etaMins}m ETA
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-200/60">
                      <span>{item.distanceKm} km {lang === 'en' ? 'from base' : 'தொலைவு'}</span>
                      <span className="text-amber-700 font-medium">
                        {item.zone === 'immediate' ? (lang === 'en' ? 'Immediate Zone' : 'உடனடி பகுதி') : (lang === 'en' ? 'Regular Route' : 'வழக்கமான வழித்தடம்')}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Area Detail & Headquarter Card */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Selected Zone Card */}
            <div className="bg-slate-900 text-white p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                  {lang === 'en' ? 'ZONE COVERAGE REPORT' : 'பகுதி விவர அறிக்கை'}
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded">
                  {lang === 'en' ? 'Active Tankers Ready' : 'வாகனங்கள் தயார்'}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  {lang === 'en' ? activeArea.nameEn : activeArea.nameTa}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {lang === 'en' ? activeArea.descriptionEn : activeArea.descriptionTa}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-xs font-mono">
                <div>
                  <div className="text-slate-400">{lang === 'en' ? 'Average Arrival:' : 'சராசரி வருகை:'}</div>
                  <div className="text-base font-bold text-amber-400">~{activeArea.etaMins} Minutes</div>
                </div>
                <div>
                  <div className="text-slate-400">{lang === 'en' ? 'Base Distance:' : 'மையத்திலிருந்து:'}</div>
                  <div className="text-base font-bold text-white">{activeArea.distanceKm} Kilometers</div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectAreaForBooking(activeArea.nameEn)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <span>{lang === 'en' ? `Book Tanker for ${activeArea.nameEn}` : `இப்பகுதிக்கு டேங்கர் பதிவு செய்`}</span>
              </button>
            </div>

            {/* Chunkankadai Headquarters Location Card */}
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 text-sm">
                    {BUSINESS_INFO.nameFull}
                  </div>
                  <div className="text-slate-600 mt-0.5">
                    18/48 B1, Raja Street, Ayyappa College Road, Chunkankadai, Nagercoil 629003
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs text-slate-500">
                  {lang === 'en' ? 'Hotline Dispatch:' : 'அவசர அழைப்பு:'}
                </span>
                <a
                  href={`tel:${BUSINESS_INFO.rawPhone}`}
                  className="font-mono font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>75388 10079</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
