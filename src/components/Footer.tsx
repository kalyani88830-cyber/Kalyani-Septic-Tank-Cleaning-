import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface FooterProps {
  lang: 'en' | 'ta';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Purpose */}
          <div className="space-y-4">
            <div className="text-white text-lg font-bold tracking-tight">
              {lang === 'en' ? 'Kalyani Septic Cleaning' : 'கல்யாணி செப்டிக் கிளீனிங்'}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {lang === 'en'
                ? 'Reliable, 100% mechanized vacuum tanker suction and high-pressure drainage unblocking services across Chunkankadai, Nagercoil, and Kanyakumari district.'
                : 'சுங்கான்கடை, ஐயப்பா கல்லூரி சாலை, நாகர்கோவில் மற்றும் குமரி மாவட்டம் முழுவதும் நவீன இயந்திரங்கள் மூலம் செப்டிக் டேங்க் மற்றும் வடிகால் சுத்தம் செய்யும் சேவை.'}
            </p>
            <div className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{lang === 'en' ? 'Prohibition of Manual Scavenging Compliant' : 'அரசு விதிகளுக்கு உட்பட்ட இயந்திர சேவை'}</span>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="space-y-3">
            <div className="text-white font-semibold text-xs uppercase tracking-wider">
              {lang === 'en' ? 'Our Services' : 'சேவைகள்'}
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {lang === 'en' ? 'Residential Septic Tank Cleaning' : 'வீட்டு செப்டிக் டேங்க் சுத்தம்'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {lang === 'en' ? 'Drainage & Sewer Line Clearing' : 'வடிகால் கழிவுநீர் அடைப்பு நீக்குதல்'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {lang === 'en' ? 'Commercial & Campus Waste Pumping' : 'கல்லூரிகள் & நிறுவனங்கள் டேங்கர்'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {lang === 'en' ? 'High Pressure Water Jetting' : 'உயர் அழுத்த வாட்டர் ஜெட்டிங்'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {lang === 'en' ? '24/7 Emergency Overflow Pumping' : '24/7 அவசர டேங்கர் சேவை'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Localities */}
          <div className="space-y-3">
            <div className="text-white font-semibold text-xs uppercase tracking-wider">
              {lang === 'en' ? 'Coverage Areas' : 'முக்கிய சேவை பகுதிகள்'}
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>Chunkankadai & Raja Street</li>
              <li>Ayyappa College Road</li>
              <li>Nagercoil Town & Vadasery</li>
              <li>Parvathipuram & Asaripallam</li>
              <li>Thuckalay & Padmanabhapuram</li>
              <li>Kottar & Meenakshipuram</li>
              <li>Suchindram & Agastheeswaram</li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="space-y-3">
            <div className="text-white font-semibold text-xs uppercase tracking-wider">
              {lang === 'en' ? 'Office & Dispatch Station' : 'அலுவலக முகவரி & தொடர்பு'}
            </div>
            
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {BUSINESS_INFO.addressLine1},<br />
                  {BUSINESS_INFO.addressLine2},<br />
                  {BUSINESS_INFO.pincode}, {BUSINESS_INFO.district}
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.rawPhone}`}
                  className="font-mono text-white hover:text-amber-400 font-semibold"
                >
                  {BUSINESS_INFO.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-slate-300 hover:text-white underline underline-offset-2"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-500">
                <Clock className="w-3.5 h-3.5 shrink-0 mt-0.5 text-slate-400" />
                <span>{lang === 'en' ? BUSINESS_INFO.workingHoursEn : BUSINESS_INFO.workingHoursTa}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Quiet copyright row */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.nameFull}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Chunkankadai, Nagercoil 629003</span>
            <span>·</span>
            <a href={`tel:${BUSINESS_INFO.rawPhone}`} className="hover:text-slate-300">
              Tel: 7538810079
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
