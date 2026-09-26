import React, { useState } from 'react';
import { Eye, X, ZoomIn, ShieldCheck, Truck, Droplets, Gauge, Layers, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface GalleryItem {
  id: string;
  category: 'tankers' | 'pumps' | 'hoses' | 'operations';
  titleEn: string;
  titleTa: string;
  subtitleEn: string;
  subtitleTa: string;
  specsEn: string;
  specsTa: string;
  image: string;
  badgeEn: string;
  badgeTa: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'fleet-1',
    category: 'tankers',
    titleEn: 'Heavy Industrial Vacuum Tanker Fleet',
    titleTa: 'பெரிய வணிக வாக்கியூம் டேங்கர் வாகனங்கள்',
    subtitleEn: 'High capacity tankers ready for municipal, commercial, and residential dispatch at Chunkankadai depot.',
    subtitleTa: 'சுங்கான்கடை வாகன மையத்தில் தயார் நிலையில் உள்ள அதிநவீன டேங்கர்கள்.',
    specsEn: '9,000L Capacity · Dual Pneumatic Compressor · Euro-6 Spec',
    specsTa: '9,000 லிட்டர் கொள்ளளவு · இரட்டை கம்ப்ரசர் · நவீன தொழில்நுட்பம்',
    image: '/src/assets/images/tanker_fleet_depot_1790411438805.jpg',
    badgeEn: 'Flagship Fleet',
    badgeTa: 'முக்கிய வாகனம்',
  },
  {
    id: 'tanker-street',
    category: 'tankers',
    titleEn: 'Compact Urban Suction Tanker',
    titleTa: 'குறுகிய தெருக்களுக்கான சிறப்பு டேங்கர்',
    subtitleEn: 'Engineered specifically for narrow streets and interior lanes across Nagercoil and residential colonies.',
    subtitleTa: 'நாகர்கோவில் நகர்ப்புற மற்றும் குடியிருப்பு குறுகிய தெருக்களில் எளிதாக சென்று சுத்தம் செய்யும் வாகனம்.',
    specsEn: '4,500L Tank · Tight Turning Radius · Low Noise Exhaust',
    specsTa: '4,500 லிட்டர் டேங்க் · குறுகிய தெரு வசதி · குறைவான சத்தம்',
    image: '/src/assets/images/hero_vacuum_tanker_1790410943636.jpg',
    badgeEn: 'Narrow Lane Specialist',
    badgeTa: 'சந்து தெரு சேவை',
  },
  {
    id: 'pump-system',
    category: 'pumps',
    titleEn: 'High-Torque Italian Vacuum Suction Pump',
    titleTa: 'இத்தாலியன் உயர் திறன் வாக்கியூம் பம்ப் அமைப்பு',
    subtitleEn: 'Heavy-duty suction pump mechanism with brass valves, dual pressure gauges, and zero-odor exhaust filtration.',
    subtitleTa: 'அதிவேக உறிஞ்சும் பம்ப், பிராஸ் வால்வுகள் மற்றும் காற்று சுத்திகரிப்பு வடிகட்டி பொருத்தப்பட்டது.',
    specsEn: '1,200 m³/h Airflow · High Negative Vacuum · Self-Cooling',
    specsTa: '1,200 கன மீட்டர்/மணி காற்று விசை · உயர் அழுத்த உறிஞ்சுதல்',
    image: '/src/assets/images/vacuum_pump_gauges_1790411413024.jpg',
    badgeEn: 'Industrial Grade',
    badgeTa: 'தொழில்துறை தரம்',
  },
  {
    id: 'drainage-jetting',
    category: 'operations',
    titleEn: 'Rotary Water Jetting & Unblocking Machine',
    titleTa: 'சுழல் வாட்டர் ஜெட்டிங் & அடைப்பு நீக்கும் கருவி',
    subtitleEn: 'Clears dense grease clogs, soil deposits, and foreign obstructions in domestic and street sewer pipes.',
    subtitleTa: 'கழிவுநீர் குழாய்களில் படிந்துள்ள எண்ணெய் கழிவுகள், மண் மற்றும் அடைப்புகளை நீக்கும் சாதனம்.',
    specsEn: '250 Bar Water Pressure · Ceramic Plungers · 80m High-Pressure Hose',
    specsTa: '250 பார் நீர் அழுத்தம் · 80 மீட்டர் நீள உயர் அழுத்த பைப்',
    image: '/src/assets/images/drainage_cleaning_jetting_1790410957682.jpg',
    badgeEn: 'Pipeline Unblocker',
    badgeTa: 'குழாய் அடைப்பு நீக்கி',
  },
  {
    id: 'suction-hoses',
    category: 'hoses',
    titleEn: '150-Foot Heavy-Duty Flexible Spiral Hoses',
    titleTa: '150 அடி பலமான நெகிழ்வு சுருள் உறிஞ்சும் பைப்புகள்',
    subtitleEn: 'Reinforced spiral wire construction preventing pipe collapse under extreme vacuum, easily reaching deep tanks.',
    subtitleTa: 'அதிக அழுத்தத்திலும் உடையாத கம்பி பொருத்தப்பட்ட நெகிழ்வு பைப்புகள், தொலைதூர டேங்க்குகளையும் எட்டும்.',
    specsEn: '150 ft Continuous Reach · Leakproof Camlock Couplers · Oil Resistant',
    specsTa: '150 அடி தொடர் நீளம் · கசிவு இல்லாத இணைப்புகள்',
    image: '/src/assets/images/suction_hoses_rack_1790411426722.jpg',
    badgeEn: 'Long-Reach Gear',
    badgeTa: 'நீண்ட தூர பைப்',
  },
  {
    id: 'commercial-service',
    category: 'operations',
    titleEn: 'Institutional & Apartment Complex Evacuation',
    titleTa: 'அடுக்குமாடி & கல்வி நிறுவனங்கள் கழிவுநீர் அகற்றுதல்',
    subtitleEn: 'Large-scale scheduled pumping for colleges, hostels, hospitals, and apartment associations in Kanyakumari.',
    subtitleTa: 'கல்லூரிகள், விடுதிகள், மருத்துவமனைகள் மற்றும் குடியிருப்பு சங்கங்களுக்கான பெரிய அளவிலான சேவை.',
    specsEn: 'Multi-Trip Capability · Certified Sludge Transport · Fast Turnaround',
    specsTa: 'விரைவான சேவை · அரசு அங்கீகாரம் பெற்ற கழிவு போக்குவரத்து',
    image: '/src/assets/images/commercial_residential_suction_1790410969836.jpg',
    badgeEn: 'Commercial Heavy',
    badgeTa: 'நிறுவன சேவை',
  },
];

interface GallerySectionProps {
  lang: 'en' | 'ta';
  onBookClick: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ lang, onBookClick }) => {
  const [filter, setFilter] = useState<'all' | 'tankers' | 'pumps' | 'hoses' | 'operations'>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider text-amber-700 uppercase mb-2">
              {lang === 'en' ? 'Fleet & Technology Showcase' : 'எங்கள் வாகனங்கள் & உபகரணங்கள்'}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
              {lang === 'en'
                ? 'Modern Vacuum Tankers & High-Pressure Equipment'
                : 'அதிநவீன வாக்கியூம் டேங்கர்கள் மற்றும் நீர் ஜெட்டிங் கருவிகள்'}
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              {lang === 'en'
                ? 'Inspect our real sanitation machinery based at Chunkankadai, Nagercoil. High-power pneumatic vacuum pumps, 150-ft coiled hoses, and certified municipal transport vehicles.'
                : 'சுங்கான்கடை மையத்தில் உள்ள எங்கள் நவீன டேங்கர்கள், இத்தாலியன் வாக்கியூம் பம்புகள் மற்றும் 150 அடி நீண்ட பைப் உபகரணங்களை பார்வையிடுங்கள்.'}
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons allowed under frontend-design guidelines) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/80 rounded-xl self-start md:self-auto">
            {[
              { id: 'all', labelEn: 'All Gear (6)', labelTa: 'அனைத்தும் (6)' },
              { id: 'tankers', labelEn: 'Vacuum Tankers', labelTa: 'டேங்கர்கள்' },
              { id: 'pumps', labelEn: 'Suction Pumps', labelTa: 'பம்புகள்' },
              { id: 'hoses', labelEn: 'Long-Reach Hoses', labelTa: 'பைப்புகள்' },
              { id: 'operations', labelEn: 'On-Site Ops', labelTa: 'பணிகள்' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  filter === tab.id
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {lang === 'en' ? tab.labelEn : tab.labelTa}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group"
            >
              {/* Image Container with Zoom Affordance & Scrim */}
              <div
                onClick={() => setActiveModalItem(item)}
                className="relative h-56 sm:h-64 w-full bg-slate-900 overflow-hidden cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Subtle scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                {/* Top Badge: unboxed or quiet badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-mono font-bold tracking-wider text-amber-300 bg-slate-950/75 backdrop-blur-xs px-2.5 py-1 rounded">
                    {lang === 'en' ? item.badgeEn : item.badgeTa}
                  </span>
                </div>

                {/* Bottom Zoom Cue */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 text-xs text-white bg-slate-950/80 backdrop-blur-xs px-2.5 py-1 rounded">
                  <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'en' ? 'Inspect Details' : 'விவரங்களை பார்க்க'}</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors leading-snug">
                    {lang === 'en' ? item.titleEn : item.titleTa}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {lang === 'en' ? item.subtitleEn : item.subtitleTa}
                  </p>
                </div>

                {/* Specs metadata with separators */}
                <div className="pt-3 border-t border-slate-100 text-xs font-mono text-slate-500">
                  <span className="text-slate-700 font-medium">{lang === 'en' ? 'Specs: ' : 'விவரம்: '}</span>
                  <span>{lang === 'en' ? item.specsEn : item.specsTa}</span>
                </div>

                {/* Action Row */}
                <div className="pt-2 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveModalItem(item)}
                    className="font-semibold text-slate-700 hover:text-slate-900 underline underline-offset-4 decoration-amber-500 cursor-pointer"
                  >
                    {lang === 'en' ? 'View Technical Spec' : 'தொழில்நுட்ப விவரம்'}
                  </button>

                  <a
                    href={`tel:${BUSINESS_INFO.rawPhone}`}
                    className="font-mono text-amber-700 hover:text-amber-800 font-semibold"
                  >
                    7538810079
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Depot Callout Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-100 text-amber-800 rounded-xl shrink-0">
              <Truck className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                {lang === 'en' ? 'Need a specific vehicle dispatched to your property?' : 'உங்கள் தேவைக்கேற்ற வாகனத்தை வரவழைக்க வேண்டுமா?'}
              </h4>
              <p className="text-xs text-slate-600">
                {lang === 'en'
                  ? 'We match narrow-lane trucks for dense colonies or 9,000L heavy tankers for commercial institutions.'
                  : 'குறுகிய தெருக்களுக்கு சிறிய வாகனமும், நிறுவனங்களுக்கு பெரிய டேங்கரும் அனுப்பி வைக்கப்படும்.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onBookClick}
              className="flex-1 sm:flex-none px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              {lang === 'en' ? 'Request Fleet Dispatch' : 'வாகனம் வரவழைக்க'}
            </button>
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="flex-1 sm:flex-none px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors text-center whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 inline mr-1 text-emerald-400" />
              <span>75388 10079</span>
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox / High-Res Spec Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div>
                <span className="text-[11px] font-mono text-amber-700 uppercase font-bold tracking-wider">
                  {lang === 'en' ? activeModalItem.badgeEn : activeModalItem.badgeTa}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {lang === 'en' ? activeModalItem.titleEn : activeModalItem.titleTa}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto">
              <div className="relative h-72 sm:h-96 w-full bg-slate-900">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="p-6 space-y-4">
                <p className="text-sm text-slate-700 leading-relaxed">
                  {lang === 'en' ? activeModalItem.subtitleEn : activeModalItem.subtitleTa}
                </p>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
                  <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                    {lang === 'en' ? 'Operational Specifications:' : 'செயல்பாட்டு விவரங்கள்:'}
                  </div>
                  <div className="font-mono text-slate-700">
                    {lang === 'en' ? activeModalItem.specsEn : activeModalItem.specsTa}
                  </div>
                  <div className="text-slate-500 pt-1">
                    {lang === 'en'
                      ? 'Base Station: 18/48 B1, Raja Street, Ayyappa College Road, Chunkankadai, Nagercoil 629003'
                      : 'வாகன தளம்: 18/48 B1, ராஜா தெரு, ஐயப்பா கல்லூரி சாலை, சுங்கான்கடை, நாகர்கோவில் 629003'}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500 font-mono">
                {lang === 'en' ? 'Direct Hotline:' : 'அழைப்பு:'} <strong>75388 10079</strong>
              </span>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`tel:${BUSINESS_INFO.rawPhone}`}
                  className="flex-1 sm:flex-none px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 text-center"
                >
                  <Phone className="w-3.5 h-3.5 inline mr-1 text-emerald-400" />
                  <span>Call 7538810079</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setActiveModalItem(null);
                    onBookClick();
                  }}
                  className="flex-1 sm:flex-none px-4 py-2 bg-amber-500 text-slate-950 rounded-lg text-xs font-bold hover:bg-amber-400 cursor-pointer"
                >
                  {lang === 'en' ? 'Book Tanker' : 'பதிவு செய்'}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
