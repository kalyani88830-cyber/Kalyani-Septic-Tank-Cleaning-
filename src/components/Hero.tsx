import React from 'react';
import { Phone, MessageSquare, MapPin, ShieldCheck, ArrowRight, Truck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface HeroProps {
  lang: 'en' | 'ta';
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onBookClick }) => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Kalyani Septic Tank Cleaning Nagercoil, I would like to book a vacuum tanker service.'
  )}`;

  return (
    <section id="hero" className="relative overflow-hidden bg-white border-b border-slate-200 pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background subtle architectural grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location & Trust Marker (Unboxed metadata with separators) */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
              <span className="flex items-center gap-1.5 text-amber-700">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="font-semibold">Chunkankadai, Nagercoil</span>
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>18/48 B1, Raja Street, Ayyappa College Road</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="font-mono tabular-nums text-slate-500">PIN 629003</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
              {lang === 'en' ? (
                <>
                  Fast, Mechanized <span className="text-amber-600">Septic Tank & Drainage</span> Cleaning in Nagercoil
                </>
              ) : (
                <>
                  நாகர்கோவிலில் அதிநவீன <span className="text-amber-600">செப்டிக் டேங்க் & வடிகால்</span> சுத்தம் செய்யும் சேவை
                </>
              )}
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {lang === 'en' ? (
                <>
                  Equipped with high-torque Italian vacuum suction tankers and up to 150-foot flexible spiral hoses. 
                  We provide 100% mechanized, odorless septic tank evacuation and high-pressure drainage blockage clearance 
                  for homes, apartments, colleges, and commercial spaces across Kanyakumari district.
                </>
              ) : (
                <>
                  சுங்கான்கடை, ஐயப்பா கல்லூரி சாலை மற்றும் நாகர்கோவில் சுற்றுவட்டார வீடுகள், கல்வி நிறுவனங்கள், 
                  அடுக்குமாடி குடியிருப்புகளுக்கு துர்நாற்றமின்றி, 150 அடி நீள பைப் வசதியுடன் 100% இயந்திரமயமான 
                  செப்டிக் டேங்க் மற்றும் வடிகால் அடைப்பு நீக்கும் சேவை.
                </>
              )}
            </p>

            {/* Direct Callouts & Guarantees */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === 'en' ? 'Zero Manual Scavenging' : '100% இயந்திரமயமானது'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{lang === 'en' ? 'Up to 150 ft Long Hoses' : '150 அடி நீண்ட பைப்'}</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{lang === 'en' ? '24/7 Rapid Dispatch' : '24 மணி நேர அவசர சேவை'}</span>
              </div>
            </div>

            {/* Conversion CTA Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-white bg-slate-900 hover:bg-slate-800 active:scale-[0.99] rounded-lg shadow-md transition-all whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'en' ? 'Call Now: 75388 10079' : 'அழைக்க: 75388 10079'}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'en' ? 'WhatsApp Direct' : 'வாட்ஸ்அப் பதிவு'}</span>
              </a>

              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>{lang === 'en' ? 'Book Tanker Online' : 'ஆன்லைன் முன்பதிவு'}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* Evidence & Metrics (Adjacency rule) */}
            <div className="pt-4 border-t border-slate-100 flex items-center gap-6 sm:gap-8 text-xs sm:text-sm text-slate-600">
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-mono tabular-nums">
                  14+ <span className="text-xs font-normal text-slate-500 font-sans">{lang === 'en' ? 'Years in Service' : 'ஆண்டுகள்'}</span>
                </div>
              </div>
              <div className="h-8 w-px bg-slate-200"></div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-mono tabular-nums">
                  12,500+ <span className="text-xs font-normal text-slate-500 font-sans">{lang === 'en' ? 'Tanks Evacuated' : 'சுத்தம் செய்யப்பட்டவை'}</span>
                </div>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
              <div className="hidden sm:block">
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-mono tabular-nums">
                  20-35 <span className="text-xs font-normal text-slate-500 font-sans">{lang === 'en' ? 'Min Local ETA' : 'நிமிட வருகை'}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Marquee 16:9 Visual Carrier with Scrim & Zero-broken Fallback */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3]">
              
              {/* Background Tanker Image with fallback */}
              <img
                src="/src/assets/images/hero_vacuum_tanker_1790410943636.jpg"
                alt="Kalyani Septic Tank Cleaning Heavy Vacuum Suction Tanker in Nagercoil"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  // Fallback container visibility if asset fails
                  e.currentTarget.style.display = 'none';
                }}
              />

              {/* High-legibility scrim gradient for badges */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent pointer-events-none"></div>

              {/* Content overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-amber-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>FLEET READY FOR DISPATCH</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold leading-tight">
                  {lang === 'en' ? 'Commercial Vacuum Tanker Unit 01' : 'வணிக வாக்கியூம் டேங்கர் பிரிவு'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  {lang === 'en'
                    ? 'Heavy pneumatic vacuum suction with spiral coiled hoses reaching up to 150 feet.'
                    : '150 அடி வரை நீளும் உயர் அழுத்த உறிஞ்சும் பைப் வசதி கொண்ட வாகனம்.'}
                </p>
                <div className="pt-2 flex items-center justify-between text-xs text-slate-300 font-mono border-t border-white/10">
                  <span>Chunkankadai Base</span>
                  <a
                    href={`tel:${BUSINESS_INFO.rawPhone}`}
                    className="text-amber-400 hover:text-amber-300 underline underline-offset-2 font-bold"
                  >
                    Direct Dial 7538810079
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Address Card underneath */}
            <div className="mt-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3 text-xs text-slate-600">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-semibold">
                  {lang === 'en' ? 'Registered Office & Fleet Station:' : 'பதிவு அலுவலகம் & வாகன மையம்:'}
                </strong>
                <span>18/48 B1, Raja Street, Ayyappa College Road, Chunkankadai, Nagercoil 629003</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
