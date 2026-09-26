import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data/servicesData';

interface TestimonialsSectionProps {
  lang: 'en' | 'ta';
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-wider text-amber-700 uppercase mb-2">
            {lang === 'en' ? 'Community Trust' : 'வாடிக்கையாளர் கருத்துக்கள்'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            {lang === 'en'
              ? 'Serving Families & Businesses in Chunkankadai & Nagercoil'
              : 'சுங்கான்கடை & நாகர்கோவில் வாடிக்கையாளர்களின் அனுபவம்'}
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            {lang === 'en'
              ? 'Real experiences from local homeowners, apartment welfare associations, and college road establishments.'
              : 'எங்கள் சேவையை பயன்படுத்திய உள்ளூர் மக்களின் உண்மை கருத்துக்கள்.'}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 p-6 sm:p-7 rounded-2xl flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Rating stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-mono font-semibold text-slate-500 ml-1.5">{t.date}</span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{lang === 'en' ? t.commentEn : t.commentTa}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-3 border-t border-slate-200">
                <div className="font-bold text-sm text-slate-900">{t.name}</div>
                <div className="text-xs text-slate-500">{t.locality}</div>
                <div className="text-xs text-amber-700 font-medium mt-0.5">{t.service}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
