import React from 'react';
import { ShieldCheck, Truck, Droplets, CheckCircle, Award, Sparkles, Building2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface WhyChooseUsProps {
  lang: 'en' | 'ta';
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang }) => {
  const pillars = [
    {
      num: '01.',
      titleEn: '100% Mechanized — Strictly Zero Manual Scavenging',
      titleTa: '100% இயந்திரமயமானது — மனித கழிவு உழைப்பு தடையை மதிக்கும் முறை',
      descEn: 'Fully compliant with national sanitation guidelines. No human ever enters any tank. High-power pneumatic vacuum pumps do 100% of the extraction safely and cleanly.',
      descTa: 'மனிதர்கள் டேங்கிற்குள் இறங்காமல், முழுமையாக சக்திவாய்ந்த இயந்திரங்கள் மூலமே அனைத்து கழிவுகளும் பாதுகாப்பாக அகற்றப்படுகிறது.',
    },
    {
      num: '02.',
      titleEn: '150-Foot Heavy-Duty Flexible Suction Hoses',
      titleTa: '150 அடி வரை நீளும் பலமான உறிஞ்சும் பைப் வசதி',
      descEn: 'Houses inside tight streets or gated residences in Chunkankadai and Nagercoil can be serviced without any hassle. The truck parks comfortably outside while long hoses reach your tank.',
      descTa: 'குறுகிய சந்துகள், வீடுகளின் பின்புறம் உள்ள செப்டிக் டேங்க்குகளையும் டேங்கரை தெருவிலேயே நிறுத்தி 150 அடி பைப் மூலம் சுலபமாக சுத்தம் செய்யலாம்.',
    },
    {
      num: '03.',
      titleEn: 'Airtight Vacuum Suction — Zero Odor & Zero Spills',
      titleTa: 'மூடப்பட்ட வாக்கியூம் முறை — துர்நாற்றம் மற்றும் கழிவு சிந்துதல் இல்லை',
      descEn: 'Our modern vacuum tankers feature high-grade air filters and hermetic sealed connections, preventing foul odors from disturbing neighbors or pedestrians.',
      descTa: 'முழுமையாக காற்றுப்புகா முறையில் உறிஞ்சப்படுவதால் அக்கம்பக்கத்தினருக்கு துர்நாற்றம் வீசாது மற்றும் சாலையில் கழிவுகள் சிந்தாது.',
    },
    {
      num: '04.',
      titleEn: 'Authorized Municipal STP Environmental Disposal',
      titleTa: 'அரசு அங்கீகாரம் பெற்ற சுத்திகரிப்பு கழிவு நீக்கம்',
      descEn: 'We transport all collected septic sludge to government-designated sewage treatment facilities in accordance with Tamil Nadu pollution control regulations.',
      descTa: 'சேகரிக்கப்படும் கழிவுகள் அரசு அங்கீகாரம் பெற்ற சுத்திகரிப்பு நிலையங்களுக்கு மட்டுமே கொண்டு செல்லப்பட்டு முறைப்படி அழிக்கப்படுகிறது.',
    },
  ];

  return (
    <section id="compliance" className="py-16 sm:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase mb-2">
            {lang === 'en' ? 'OUR OPERATIONAL STANDARD' : 'எங்கள் செயல்பாட்டு தரம்'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight" style={{ textWrap: 'balance' }}>
            {lang === 'en'
              ? 'Sanitation Engineering Designed for Modern Hygiene'
              : 'நவீன சுகாதாரம் மற்றும் பாதுகாப்பு விதிமுறைகளுக்கு உட்பட்ட சேவை'}
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            {lang === 'en'
              ? 'Over 14 years of professional service across Chunkankadai, Nagercoil, and Kanyakumari. Built on punctuality, modern machinery, and zero manual intervention.'
              : '14 ஆண்டுகளுக்கும் மேலான அனுபவம், நவீன வாகனங்கள் மற்றும் மனித உழைப்பு தடையை முழுமையாக கடைபிடிக்கும் நம்பகமான நிறுவனம்.'}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((item) => (
            <div
              key={item.num}
              className="p-6 sm:p-8 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-slate-600 transition-colors flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="text-sm font-mono font-bold text-amber-400">
                  {item.num}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  {lang === 'en' ? item.titleEn : item.titleTa}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {lang === 'en' ? item.descEn : item.descTa}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-700/50 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Verified Compliance' : 'உறுதிப்படுத்தப்பட்ட தரம்'}</span>
                </span>
                <span className="font-mono">{BUSINESS_INFO.pincode} Nagercoil</span>
              </div>
            </div>
          ))}
        </div>

        {/* Fleet & Machine Snapshot Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <Truck className="w-5 h-5 text-amber-400" />
              <span>{BUSINESS_INFO.tankerFleetCount} Dedicated to Nagercoil & Chunkankadai</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Compact 4,000L trucks for narrow alleys + Heavy 9,000L & 12,000L tankers for institutions.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-colors whitespace-nowrap"
            >
              Direct Call 7538810079
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
