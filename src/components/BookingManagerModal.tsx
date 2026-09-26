import React from 'react';
import { X, CalendarCheck, MapPin, Phone, Trash2, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Booking } from '../types';
import { BUSINESS_INFO } from '../data/servicesData';

interface BookingManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: Booking[];
  onDeleteBooking: (id: string) => void;
  lang: 'en' | 'ta';
}

export const BookingManagerModal: React.FC<BookingManagerModalProps> = ({
  isOpen,
  onClose,
  bookings,
  onDeleteBooking,
  lang,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <CalendarCheck className="w-5 h-5 text-amber-600" />
            <h3 className="text-lg font-bold text-slate-900">
              {lang === 'en' ? 'My Scheduled Bookings' : 'எனது முன்பதிவுகள்'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 flex-1">
          {bookings.length === 0 ? (
            <div className="text-center py-10 space-y-3">
              <CalendarCheck className="w-12 h-12 text-slate-300 mx-auto" />
              <div className="text-sm font-semibold text-slate-700">
                {lang === 'en' ? 'No active bookings found' : 'முன்பதிவுகள் எதுவும் இல்லை'}
              </div>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                {lang === 'en'
                  ? 'Use the online booking form to schedule a vacuum tanker for septic tank emptying or drainage jetting.'
                  : 'செப்டிக் டேங்க் அல்லது கழிவுநீர் அடைப்பு நீக்க ஆன்லைன் படிவம் மூலம் பதிவு செய்யவும்.'}
              </p>
            </div>
          ) : (
            bookings.map((b) => {
              const waUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                `Hello, checking status of Booking ${b.id} for ${b.customerName} at ${b.area}.`
              )}`;

              return (
                <div
                  key={b.id}
                  className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded">
                          {b.id}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-emerald-700 font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Confirmed - Tanker Assigned</span>
                        </span>
                      </div>
                      <div className="font-bold text-slate-900 text-sm mt-1">{b.customerName}</div>
                    </div>

                    <button
                      onClick={() => onDeleteBooking(b.id)}
                      className="text-slate-400 hover:text-red-600 p-1 transition-colors"
                      title="Remove record"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    <div>
                      <span className="text-slate-400">Date & Slot:</span>{' '}
                      <strong>{b.date} ({b.timeSlot})</strong>
                    </div>
                    <div>
                      <span className="text-slate-400">Area:</span>{' '}
                      <strong>{b.area}</strong>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="text-slate-400">Address:</span> {b.address}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <span className="font-mono font-semibold text-slate-900">
                      Estimated: ₹{b.estimatedCost.toLocaleString()}
                    </span>

                    <div className="flex items-center gap-2">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 text-xs"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp Driver</span>
                      </a>

                      <a
                        href={`tel:${BUSINESS_INFO.rawPhone}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 text-xs"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call 7538810079</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 cursor-pointer"
          >
            {lang === 'en' ? 'Close' : 'மூடு'}
          </button>
        </div>

      </div>
    </div>
  );
};
