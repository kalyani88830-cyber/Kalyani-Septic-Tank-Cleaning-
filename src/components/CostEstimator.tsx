import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Shield, Info, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';
import { ServiceType } from '../types';

interface CostEstimatorProps {
  lang: 'en' | 'ta';
  onApplyEstimate: (estimate: {
    propertyType: 'house' | 'apartment' | 'commercial' | 'institution';
    capacityLitres: number;
    hoseDistance: string;
    urgency: 'scheduled' | 'emergency';
    estimatedCost: number;
    serviceType: ServiceType;
  }) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ lang, onApplyEstimate }) => {
  const [propertyType, setPropertyType] = useState<'house' | 'apartment' | 'commercial' | 'institution'>('house');
  const [capacityLitres, setCapacityLitres] = useState<number>(3500);
  const [hoseDistance, setHoseDistance] = useState<string>('50-100');
  const [urgency, setUrgency] = useState<'scheduled' | 'emergency'>('scheduled');
  const [includeJetting, setIncludeJetting] = useState<boolean>(false);

  // Compute pricing
  const calculation = useMemo(() => {
    let baseRate = 1800;

    // Capacity scaling
    if (capacityLitres <= 2500) {
      baseRate = 1800;
    } else if (capacityLitres <= 4500) {
      baseRate = 2400;
    } else if (capacityLitres <= 6000) {
      baseRate = 3200;
    } else {
      baseRate = 4800;
    }

    // Property scaling (commercial waste sludge density)
    if (propertyType === 'apartment') baseRate += 400;
    if (propertyType === 'commercial') baseRate += 700;
    if (propertyType === 'institution') baseRate += 900;

    // Hose distance
    let hoseExtra = 0;
    if (hoseDistance === '50-100') hoseExtra = 200;
    if (hoseDistance === '100-150') hoseExtra = 400;

    // Urgency surcharge
    let urgencyFee = urgency === 'emergency' ? 400 : 0;

    // Jetting addon
    let jettingFee = includeJetting ? 800 : 0;

    const totalEstimate = baseRate + hoseExtra + urgencyFee + jettingFee;
    const minRange = Math.round(totalEstimate * 0.95);
    const maxRange = Math.round(totalEstimate * 1.08);

    // Duration estimation
    let durationMins = 45;
    if (capacityLitres >= 6000) durationMins = 90;
    if (includeJetting) durationMins += 25;

    // Vehicle recommendation
    let recommendedTanker = '4,500L Compact Vacuum Tanker (Standard)';
    if (capacityLitres > 4500) {
      recommendedTanker = '9,000L Heavy Industrial Vacuum Tanker';
    }

    return {
      totalEstimate,
      minRange,
      maxRange,
      durationMins,
      recommendedTanker
    };
  }, [propertyType, capacityLitres, hoseDistance, urgency, includeJetting]);

  const handleApply = () => {
    const serviceType: ServiceType = propertyType === 'commercial' || propertyType === 'institution'
      ? 'septic_tank_commercial'
      : urgency === 'emergency'
      ? 'emergency_pumping'
      : 'septic_tank_residential';

    onApplyEstimate({
      propertyType,
      capacityLitres,
      hoseDistance,
      urgency,
      estimatedCost: calculation.totalEstimate,
      serviceType,
    });
  };

  return (
    <section id="estimator" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-amber-700 uppercase mb-2">
            {lang === 'en' ? 'Transparent Pricing' : 'வெளிப்படையான கட்டணம்'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            {lang === 'en'
              ? 'Instant Cost & Capacity Calculator'
              : 'செப்டிக் டேங்க் கட்டண கணக்கீடு'}
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            {lang === 'en'
              ? 'Calculate an accurate estimate for your home or business in Chunkankadai and Nagercoil. No hidden charges or unexpected on-site additions.'
              : 'மறைமுக கட்டணங்கள் ஏதுமின்றி உங்கள் தேவைக்கான துல்லியமான செலவு மதிப்பீட்டை உடனடியாக அறிந்து கொள்ளுங்கள்.'}
          </p>
        </div>

        {/* Calculator layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-2xl space-y-6">
            
            {/* Step 1: Property Type */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                1. {lang === 'en' ? 'Select Property Type' : 'கட்டிட வகை'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'house', labelEn: 'Individual House', labelTa: 'தனி வீடு' },
                  { id: 'apartment', labelEn: 'Apartment', labelTa: 'அடுக்குமாடி' },
                  { id: 'commercial', labelEn: 'Commercial / Hotel', labelTa: 'ஹோட்டல் / கடை' },
                  { id: 'institution', labelEn: 'College / School', labelTa: 'கல்லூரி / பள்ளி' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPropertyType(item.id as any)}
                    className={`px-3 py-2.5 rounded-lg text-xs font-semibold border transition-all text-center cursor-pointer ${
                      propertyType === item.id
                        ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    {lang === 'en' ? item.labelEn : item.labelTa}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Tank Capacity */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  2. {lang === 'en' ? 'Estimated Tank Volume' : 'டேங்க் கொள்ளளவு'}
                </label>
                <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                  {capacityLitres.toLocaleString()} {lang === 'en' ? 'Litres' : 'லிட்டர்'}
                </span>
              </div>
              <input
                type="range"
                min="1500"
                max="10000"
                step="500"
                value={capacityLitres}
                onChange={(e) => setCapacityLitres(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                <span>1,500 L (Small House)</span>
                <span>4,000 L (Standard)</span>
                <span>7,000 L (Villas)</span>
                <span>10,000 L (Commercial)</span>
              </div>
            </div>

            {/* Step 3: Hose Distance from Parking Spot */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                3. {lang === 'en' ? 'Hose Distance (Truck to Tank)' : 'டேங்கர் நிறுத்தும் இடத்திலிருந்து தூரம்'}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'under-50', labelEn: 'Under 50 Feet', labelTa: '50 அடிக்குள்', noteEn: 'Standard driveway' },
                  { id: '50-100', labelEn: '50 - 100 Feet', labelTa: '50 - 100 அடி', noteEn: 'Inside compound' },
                  { id: '100-150', labelEn: '100 - 150 Feet', labelTa: '100 - 150 அடி', noteEn: 'Narrow inner street' },
                ].map((dist) => (
                  <button
                    key={dist.id}
                    type="button"
                    onClick={() => setHoseDistance(dist.id)}
                    className={`p-3 rounded-lg text-left border transition-all cursor-pointer ${
                      hoseDistance === dist.id
                        ? 'bg-amber-50/80 border-amber-600 text-slate-900 ring-1 ring-amber-600'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold">{lang === 'en' ? dist.labelEn : dist.labelTa}</div>
                    <div className="text-[10px] text-slate-500">{dist.noteEn}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Urgency & Add-ons */}
            <div className="pt-2 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  4. {lang === 'en' ? 'Dispatch Priority' : 'முன்னுரிமை'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setUrgency('scheduled')}
                    className={`py-2 px-2 text-xs font-semibold rounded-lg border text-center transition-colors cursor-pointer ${
                      urgency === 'scheduled'
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-700 border-slate-200'
                    }`}
                  >
                    {lang === 'en' ? 'Scheduled Day' : 'வழக்கமான நாள்'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setUrgency('emergency')}
                    className={`py-2 px-2 text-xs font-semibold rounded-lg border text-center transition-colors cursor-pointer ${
                      urgency === 'emergency'
                        ? 'bg-red-700 text-white border-red-700'
                        : 'bg-white text-slate-700 border-slate-200'
                    }`}
                  >
                    {lang === 'en' ? '⚡ 2-Hr Rush' : '⚡ உடனடி 2 மணி'}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  5. {lang === 'en' ? 'Optional Add-on' : 'கூடுதல் சேவை'}
                </label>
                <label className="flex items-center gap-2 p-2 bg-white border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-100/50">
                  <input
                    type="checkbox"
                    checked={includeJetting}
                    onChange={(e) => setIncludeJetting(e.target.checked)}
                    className="w-4 h-4 accent-amber-600 rounded"
                  />
                  <span className="text-xs font-medium text-slate-800">
                    {lang === 'en' ? '+ High Pressure Jetting (+₹800)' : '+ உயர் அழுத்த ஜெட்டிங் (+₹800)'}
                  </span>
                </label>
              </div>
            </div>

          </div>

          {/* Result Summary Card (Sticky) */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-800 space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-xs font-mono tracking-wider text-amber-400 uppercase">
                {lang === 'en' ? 'ESTIMATED QUOTATION' : 'மதிப்பீட்டு விலை'}
              </span>
              <span className="text-xs text-slate-400">
                {lang === 'en' ? 'Nagercoil & Chunkankadai' : 'நாகர்கோவில் & சுங்கான்கடை'}
              </span>
            </div>

            {/* Price display with tabular-nums */}
            <div>
              <div className="text-xs text-slate-400 mb-1">
                {lang === 'en' ? 'Expected Service Fee Range' : 'எதிர்பார்க்கப்படும் கட்டண வரம்பு'}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono tabular-nums text-white flex items-baseline gap-2">
                <span>₹{calculation.minRange.toLocaleString()}</span>
                <span className="text-xl text-slate-400 font-normal">–</span>
                <span className="text-amber-400">₹{calculation.maxRange.toLocaleString()}</span>
              </div>
              <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{lang === 'en' ? 'Includes vacuum pumping, safe transport & waste disposal' : 'வாகனம், உறிஞ்சுதல் மற்றும் கழிவுநீக்கம் அனைத்தும் அடங்கும்'}</span>
              </div>
            </div>

            {/* Specs Breakdown */}
            <div className="space-y-3 pt-3 border-t border-slate-800 text-xs">
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">{lang === 'en' ? 'Vehicle Assigned:' : 'பரிந்துரைக்கப்படும் வாகனம்:'}</span>
                <span className="font-semibold text-white">{calculation.recommendedTanker}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">{lang === 'en' ? 'Estimated Service Time:' : 'சுத்தம் செய்யும் நேரம்:'}</span>
                <span className="font-mono tabular-nums text-white">~{calculation.durationMins} Mins</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">{lang === 'en' ? 'Hose Required:' : 'பைப் நீளம்:'}</span>
                <span className="text-white">{hoseDistance} Feet Flexible Hose</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">{lang === 'en' ? 'Disposal Standard:' : 'கழிவு மேலாண்மை:'}</span>
                <span className="text-emerald-400">Govt. Authorized STP</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-2">
              <button
                type="button"
                onClick={handleApply}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-bold rounded-xl transition-colors cursor-pointer text-sm"
              >
                <span>{lang === 'en' ? 'Confirm Estimate & Book Now' : 'இந்த கட்டணத்தில் முன்பதிவு செய்க'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'en' ? 'Need a custom quote? Call 7538810079' : 'சந்தேகங்களுக்கு அழைக்க: 75388 10079'}</span>
              </a>
            </div>

            <div className="text-[11px] text-slate-400 flex items-start gap-1.5 pt-1">
              <Info className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
              <span>
                {lang === 'en'
                  ? 'Final price is confirmed upon physical inspection of solid concrete blockages or extraordinary depth.'
                  : 'கடின பாறை போன்ற படிவுகள் அல்லது மிக அதிக ஆழம் இருப்பின் ஆரம்ப ஆய்வுக்குப் பின் உறுதி செய்யப்படும்.'}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
