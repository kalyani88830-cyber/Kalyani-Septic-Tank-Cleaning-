import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/servicesData';

interface FAQSectionProps {
  lang: 'en' | 'ta';
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold tracking-wider text-amber-700 uppercase mb-2">
            {lang === 'en' ? 'Questions & Answers' : 'அடிக்கடி கேட்கப்படும் கேள்விகள்'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            {lang === 'en' ? 'Frequently Asked Questions' : 'செப்டிக் டேங்க் சுத்தம் பற்றிய சந்தேகங்கள்'}
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900">
                    {lang === 'en' ? faq.qEn : faq.qTa}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {lang === 'en' ? faq.aEn : faq.aTa}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct contact note */}
        <div className="mt-8 text-center text-xs text-slate-500">
          <span>{lang === 'en' ? 'Have another specific question? Call our Chunkankadai desk directly at' : 'மேலும் சந்தேகங்கள் இருப்பின் நேரடியாக தொடர்பு கொள்க:'}</span>{' '}
          <a href={`tel:${BUSINESS_INFO.rawPhone}`} className="font-mono font-bold text-slate-900 hover:text-amber-600 underline">
            75388 10079
          </a>
        </div>

      </div>
    </section>
  );
};
