import React from 'react';
import { Check, ArrowRight, ShieldCheck, Clock, Zap } from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/servicesData';
import { ServiceType } from '../types';

interface ServicesSectionProps {
  lang: 'en' | 'ta';
  onSelectService: (serviceId: ServiceType) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onSelectService }) => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-wider text-amber-700 uppercase mb-2">
            {lang === 'en' ? 'Core Capabilities' : 'எங்கள் முக்கிய சேவைகள்'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            {lang === 'en' 
              ? 'Complete Sanitation, Vacuum Tanker & Drainage Clearing' 
              : 'முழுமையான கழிவுநீர் அகற்றுதல் & வடிகால் அடைப்பு நீக்கும் சேவைகள்'}
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            {lang === 'en'
              ? 'From residential soak pit de-sludging to municipal high-pressure jetting and institutional waste pumping across Chunkankadai, Nagercoil, and Kanyakumari.'
              : 'தனி வீடுகள் முதல் அடுக்குமாடி கட்டிடங்கள், கல்லூரிகள் மற்றும் வணிக நிறுவனங்கள் வரை அனைத்து கழிவுநீர் பிரச்சனைகளுக்கும் நவீன தீர்வு.'}
          </p>
        </div>

        {/* Bento Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_LIST.map((service, index) => {
            const editorialNumber = `0${index + 1}.`;
            const isFeatured = index === 0 || index === 1;

            return (
              <div
                key={service.id}
                className={`bg-white rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Media banner if featured */}
                {service.image && (
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-800">
                    <img
                      src={service.image}
                      alt={service.titleEn}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                      <span className="flex items-center gap-1 font-medium bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        <span>{service.estimatedTime}</span>
                      </span>
                      <span className="font-mono text-amber-300 font-bold bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded">
                        {lang === 'en' ? 'From ₹' : 'தொடக்க கட்டணம் ₹'}{service.startingPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    {/* Editorial Number & Service Label */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-amber-600">
                        {editorialNumber}
                      </span>
                      {!service.image && (
                        <span className="text-xs font-mono font-semibold text-slate-500">
                          {lang === 'en' ? 'From ₹' : 'தொடக்க கட்டணம் ₹'}{service.startingPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 leading-snug">
                      {lang === 'en' ? service.titleEn : service.titleTa}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {lang === 'en' ? service.shortDescEn : service.shortDescTa}
                    </p>

                    {/* Feature bullet list */}
                    <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
                      {(lang === 'en' ? service.featuresEn : service.featuresTa).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For & Action Area */}
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="text-xs text-slate-500">
                      <strong className="text-slate-700 font-medium">
                        {lang === 'en' ? 'Ideal for: ' : 'பொருத்தமானது: '}
                      </strong>
                      <span>{lang === 'en' ? service.idealForEn : service.idealForTa}</span>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={() => onSelectService(service.id)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                      >
                        <span>{lang === 'en' ? 'Select & Book' : 'முன்பதிவு செய்'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={`tel:${BUSINESS_INFO.rawPhone}`}
                        className="inline-flex items-center justify-center px-3 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors"
                        title="Call for instant query"
                      >
                        7538810079
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Emergency Blockages */}
        <div className="mt-10 p-6 bg-amber-50 border border-amber-200 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-amber-100 text-amber-800 rounded-lg shrink-0">
              <Zap className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                {lang === 'en' ? 'Urgent Tank Overflow or Severe Drain Choke?' : 'திடீர் கழிவுநீர் வழிதல் அல்லது கடுமையான அடைப்பா?'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                {lang === 'en' 
                  ? 'Our Chunkankadai unit dispatches emergency suction tankers within 20 to 35 minutes across Nagercoil.' 
                  : 'சுங்கான்கடை மையம் 20-35 நிமிடங்களுக்குள் விரைவு வாகனத்தை அனுப்பி உடனடியாக சரிசெய்யும்.'}
              </p>
            </div>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.rawPhone}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold rounded-lg shadow-sm whitespace-nowrap transition-colors"
          >
            <span>{lang === 'en' ? 'Emergency Dispatch: 7538810079' : 'அவசர உதவி: 75388 10079'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
