import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

interface MobileEmergencyBarProps {
  lang: 'en' | 'ta';
  onBookClick: () => void;
}

export const MobileEmergencyBar: React.FC<MobileEmergencyBarProps> = ({ lang, onBookClick }) => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Kalyani Septic Cleaning Nagercoil, I need urgent tanker dispatch or quotation.'
  )}`;

  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl">
      {/* Direct Call Button */}
      <a
        href={`tel:${BUSINESS_INFO.rawPhone}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-emerald-600 active:bg-emerald-700 text-white font-bold rounded-lg text-xs whitespace-nowrap"
      >
        <Phone className="w-3.5 h-3.5" />
        <span>{lang === 'en' ? 'Call 7538810079' : 'அழைக்க'}</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-slate-800 text-emerald-400 active:bg-slate-700 border border-slate-700 font-semibold rounded-lg text-xs whitespace-nowrap"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      {/* Book Tanker Anchor */}
      <button
        type="button"
        onClick={onBookClick}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-amber-500 active:bg-amber-600 text-slate-950 font-bold rounded-lg text-xs whitespace-nowrap cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>{lang === 'en' ? 'Book Tanker' : 'பதிவு'}</span>
      </button>
    </div>
  );
};
