import React, { useState } from 'react';
import { Phone, CalendarCheck, Globe, Menu, X, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface HeaderProps {
  lang: 'en' | 'ta';
  setLang: (lang: 'en' | 'ta') => void;
  onOpenBookings: () => void;
  bookingCount: number;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, onOpenBookings, bookingCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors">
      {/* Top micro announcement bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium text-amber-400">
              <Clock className="w-3.5 h-3.5" />
              {lang === 'en' ? '24/7 Emergency Suction Tanker Service' : '24/7 அவசர கழிவுநீர் டேங்கர் சேவை'}
            </span>
            <span className="hidden md:inline text-slate-400">·</span>
            <span className="hidden md:inline text-slate-300">
              {lang === 'en' ? 'Chunkankadai, Ayyappa College Rd, Nagercoil' : 'சுங்கான்கடை, ஐயப்பா கல்லூரி சாலை, நாகர்கோவில்'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold">{lang === 'en' ? 'தமிழ்' : 'English'}</span>
            </button>
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="font-mono tabular-nums text-amber-400 hover:text-amber-300 font-semibold"
            >
              {BUSINESS_INFO.displayPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: 3 Zones */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors">
            {lang === 'en' ? 'Kalyani Septic Cleaning' : 'கல்யாணி செப்டிக் கிளீனிங்'}
          </span>
        </a>

        {/* Zone 2: 4-6 text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
          <a href="#services" className="hover:text-slate-900 hover:underline underline-offset-4 decoration-amber-500 transition-colors">
            {lang === 'en' ? 'Services' : 'சேவைகள்'}
          </a>
          <a href="#estimator" className="hover:text-slate-900 hover:underline underline-offset-4 decoration-amber-500 transition-colors">
            {lang === 'en' ? 'Cost Calculator' : 'கட்டண கணக்கீடு'}
          </a>
          <a href="#coverage" className="hover:text-slate-900 hover:underline underline-offset-4 decoration-amber-500 transition-colors">
            {lang === 'en' ? 'Coverage Areas' : 'சேவை பகுதிகள்'}
          </a>
          <a href="#gallery" className="hover:text-slate-900 hover:underline underline-offset-4 decoration-amber-500 transition-colors">
            {lang === 'en' ? 'Fleet & Gear' : 'வாகனங்கள்'}
          </a>
          <a href="#compliance" className="hover:text-slate-900 hover:underline underline-offset-4 decoration-amber-500 transition-colors">
            {lang === 'en' ? 'Why Kalyani' : 'ஏன் கல்யாணி'}
          </a>
          <a href="#contact" className="hover:text-slate-900 hover:underline underline-offset-4 decoration-amber-500 transition-colors">
            {lang === 'en' ? 'Contact Office' : 'தொடர்புக்கு'}
          </a>
          {bookingCount > 0 && (
            <button
              onClick={onOpenBookings}
              className="flex items-center gap-1.5 text-amber-700 hover:text-amber-800 transition-colors cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>{lang === 'en' ? 'My Bookings' : 'பதிவுகள்'} ({bookingCount})</span>
            </button>
          )}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${BUSINESS_INFO.rawPhone}`}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>Call 7538810079</span>
          </a>

          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 active:bg-amber-800 rounded-lg shadow-sm transition-colors whitespace-nowrap"
          >
            <span>{lang === 'en' ? 'Book Tanker' : 'டேங்கர் முன்பதிவு'}</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-800">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600"
            >
              {lang === 'en' ? 'Services' : 'சேவைகள்'}
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600"
            >
              {lang === 'en' ? 'Cost Calculator' : 'கட்டண கணக்கீடு'}
            </a>
            <a
              href="#coverage"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600"
            >
              {lang === 'en' ? 'Coverage Areas' : 'சேவை பகுதிகள்'}
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600"
            >
              {lang === 'en' ? 'Fleet & Equipment' : 'வாகனங்கள் & கருவிகள்'}
            </a>
            <a
              href="#compliance"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600"
            >
              {lang === 'en' ? 'Why Kalyani (Compliance & Equipment)' : 'ஏன் கல்யாணி (பாதுகாப்பு & உபகரணங்கள்)'}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600"
            >
              {lang === 'en' ? 'Contact Office' : 'தொடர்புக்கு'}
            </a>
            {bookingCount > 0 && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookings();
                }}
                className="text-left py-1 text-amber-700 font-semibold"
              >
                {lang === 'en' ? 'View My Bookings' : 'எனது பதிவுகள்'} ({bookingCount})
              </button>
            )}
          </nav>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call 75388 10079</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
