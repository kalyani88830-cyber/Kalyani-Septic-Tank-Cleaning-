import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Phone, User, Send, CheckCircle2, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST, COVERAGE_AREAS } from '../data/servicesData';
import { Booking, ServiceType } from '../types';

interface BookingFormProps {
  lang: 'en' | 'ta';
  initialService?: ServiceType;
  initialEstimate?: {
    propertyType: 'house' | 'apartment' | 'commercial' | 'institution';
    capacityLitres: number;
    hoseDistance: string;
    urgency: 'scheduled' | 'emergency';
    estimatedCost: number;
    serviceType: ServiceType;
  } | null;
  onBookingCreated: (booking: Booking) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  lang,
  initialService,
  initialEstimate,
  onBookingCreated,
}) => {
  // Today's date YYYY-MM-DD
  const todayStr = new Date().toISOString().split('T')[0];

  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState<ServiceType>(initialService || 'septic_tank_residential');
  const [propertyType, setPropertyType] = useState<'house' | 'apartment' | 'commercial' | 'institution'>('house');
  const [capacityLitres, setCapacityLitres] = useState<number>(3500);
  const [hoseDistance, setHoseDistance] = useState<string>('50-100');
  const [area, setArea] = useState<string>('Chunkankadai & Ayyappa College Road');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState(todayStr);
  const [timeSlot, setTimeSlot] = useState('Morning 07:00 AM - 10:00 AM');
  const [urgency, setUrgency] = useState<'scheduled' | 'emergency'>('scheduled');
  const [notes, setNotes] = useState('');
  const [estimatedCost, setEstimatedCost] = useState<number>(2400);

  // Form states
  const [submittedBooking, setSubmittedBooking] = useState<Booking | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Sync initial estimate if provided
  useEffect(() => {
    if (initialEstimate) {
      setPropertyType(initialEstimate.propertyType);
      setCapacityLitres(initialEstimate.capacityLitres);
      setHoseDistance(initialEstimate.hoseDistance);
      setUrgency(initialEstimate.urgency);
      setEstimatedCost(initialEstimate.estimatedCost);
      setServiceType(initialEstimate.serviceType);
    }
  }, [initialEstimate]);

  useEffect(() => {
    if (initialService) {
      setServiceType(initialService);
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Basic validation
    if (!customerName.trim()) {
      setErrorMsg(lang === 'en' ? 'Please enter your name.' : 'தயவுசெய்து உங்கள் பெயரை உள்ளிடவும்.');
      return;
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg(lang === 'en' ? 'Please enter a valid 10-digit mobile number.' : 'சரியான 10 இலக்க மொபைல் எண்ணை உள்ளிடவும்.');
      return;
    }

    if (!address.trim()) {
      setErrorMsg(lang === 'en' ? 'Please enter your street address and landmark.' : 'தெரு முகவரி மற்றும் அடையாளத்தை உள்ளிடவும்.');
      return;
    }

    const newId = `KAL-${Math.floor(1000 + Math.random() * 9000)}`;

    const newBooking: Booking = {
      id: newId,
      customerName: customerName.trim(),
      phone: cleanPhone,
      serviceType,
      propertyType,
      capacityLitres,
      hoseDistance,
      area,
      address: address.trim(),
      date,
      timeSlot,
      urgency,
      estimatedCost,
      notes: notes.trim(),
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    };

    // Save to LocalStorage
    try {
      const existing = JSON.parse(localStorage.getItem('kalyani_bookings') || '[]');
      localStorage.setItem('kalyani_bookings', JSON.stringify([newBooking, ...existing]));
    } catch (err) {
      console.error('LocalStorage write error', err);
    }

    onBookingCreated(newBooking);
    setSubmittedBooking(newBooking);
  };

  const getWhatsAppMessage = (b: Booking) => {
    const text = `*New Booking - Kalyani Septic Cleaning*%0A
*Booking ID:* ${b.id}%0A
*Name:* ${b.customerName}%0A
*Phone:* ${b.phone}%0A
*Service:* ${b.serviceType}%0A
*Area:* ${b.area}%0A
*Address:* ${b.address}%0A
*Date:* ${b.date}%0A
*Slot:* ${b.timeSlot}%0A
*Estimated Cost:* ₹${b.estimatedCost}%0A
*Urgency:* ${b.urgency.toUpperCase()}%0A
${b.notes ? `*Notes:* ${b.notes}%0A` : ''}
Please confirm tanker arrival time. Thank you!`;
    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="booking" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-semibold tracking-wider text-amber-700 uppercase mb-2">
            {lang === 'en' ? 'Direct Dispatch Booking' : 'உடனடி வாகன முன்பதிவு'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            {lang === 'en' ? 'Schedule a Vacuum Tanker in Minutes' : 'நாகர்கோவில் டேங்கர் முன்பதிவு படிவம்'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {lang === 'en'
              ? 'Our driver and tanker team will verify your address and arrive at your scheduled time.'
              : 'உங்கள் முகவரியை உள்ளிட்டு நேரத்தை தேர்வு செய்யுங்கள். எங்கள் குழு உடனடியாக தொடர்பு கொள்ளும்.'}
          </p>
        </div>

        {/* Success Confirmation State */}
        {submittedBooking ? (
          <div className="bg-white border border-emerald-300 rounded-2xl p-6 sm:p-10 shadow-lg space-y-6">
            <div className="flex items-center gap-4 text-emerald-800">
              <div className="p-3 bg-emerald-100 rounded-full">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {lang === 'en' ? 'Tanker Booking Received!' : 'முன்பதிவு வெற்றிகரமாக பெறப்பட்டது!'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  {lang === 'en' ? 'Reference Number:' : 'பதிவு எண்:'}{' '}
                  <span className="font-mono font-bold text-amber-700 text-base">{submittedBooking.id}</span>
                </p>
              </div>
            </div>

            {/* Booking Details Card */}
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm space-y-2.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                <div>
                  <span className="text-slate-500">{lang === 'en' ? 'Customer:' : 'வாடிக்கையாளர்:'}</span>{' '}
                  <strong className="text-slate-900">{submittedBooking.customerName}</strong>
                </div>
                <div>
                  <span className="text-slate-500">{lang === 'en' ? 'Phone:' : 'தொலைபேசி:'}</span>{' '}
                  <strong className="font-mono text-slate-900">{submittedBooking.phone}</strong>
                </div>
                <div>
                  <span className="text-slate-500">{lang === 'en' ? 'Date & Time:' : 'நாள் & நேரம்:'}</span>{' '}
                  <strong>{submittedBooking.date} ({submittedBooking.timeSlot})</strong>
                </div>
                <div>
                  <span className="text-slate-500">{lang === 'en' ? 'Service Zone:' : 'பகுதி:'}</span>{' '}
                  <strong>{submittedBooking.area}</strong>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-200 text-slate-700">
                <span className="text-slate-500">{lang === 'en' ? 'Address:' : 'முகவரி:'}</span>{' '}
                <span>{submittedBooking.address}</span>
              </div>
              <div className="pt-2 border-t border-slate-200 flex items-center justify-between font-mono">
                <span className="text-slate-600">{lang === 'en' ? 'Estimated Fee:' : 'மதிப்பிடப்பட்ட கட்டணம்:'}</span>
                <span className="text-lg font-bold text-slate-900">₹{submittedBooking.estimatedCost.toLocaleString()}</span>
              </div>
            </div>

            {/* Confirmation actions */}
            <div className="space-y-3 pt-2">
              <a
                href={getWhatsAppMessage(submittedBooking)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-sm transition-colors text-sm"
              >
                <MessageSquare className="w-5 h-5" />
                <span>{lang === 'en' ? 'Send Instant WhatsApp to 7538810079' : 'வாட்ஸ்அப் மூலம் உடனடியாக அனுப்ப 75388 10079'}</span>
              </a>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.rawPhone}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs sm:text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'en' ? 'Call Office for Fast Track' : 'அலுவலகத்தை அழைக்க'}</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSubmittedBooking(null)}
                  className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  {lang === 'en' ? 'Book Another Service' : 'மற்றொரு பதிவு செய்ய'}
                </button>
              </div>
            </div>

          </div>
        ) : (
          /* Main Interactive Form */
          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            
            {errorMsg && (
              <div className="p-3.5 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-xs text-red-700">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Service Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                {lang === 'en' ? 'Select Required Service *' : 'தேவையான சேவை *'}
              </label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value as ServiceType)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {SERVICES_LIST.map((s) => (
                  <option key={s.id} value={s.id}>
                    {lang === 'en' ? s.titleEn : s.titleTa} (₹{s.startingPrice}+)
                  </option>
                ))}
              </select>
            </div>

            {/* Name and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {lang === 'en' ? 'Your Name *' : 'உங்கள் பெயர் *'}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder={lang === 'en' ? 'e.g. K. Senthil Kumar' : 'உதாரணம்: கே. செந்தில்குமார்'}
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {lang === 'en' ? 'Mobile / WhatsApp Number *' : 'மொபைல் / வாட்ஸ்அப் எண் *'}
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder={lang === 'en' ? '10 digit number (e.g. 7538810079)' : '10 இலக்க எண் (75388 10079)'}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 font-mono focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
            </div>

            {/* Area and Address */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {lang === 'en' ? 'Locality / Sector *' : 'பகுதி / இருப்பிடம் *'}
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    {COVERAGE_AREAS.map((c) => (
                      <option key={c.nameEn} value={c.nameEn}>
                        {lang === 'en' ? c.nameEn : c.nameTa} (~{c.etaMins} mins ETA)
                      </option>
                    ))}
                    <option value="Other Area in Kanyakumari District">
                      {lang === 'en' ? 'Other Area in Kanyakumari District' : 'கன்னியாகுமரி மாவட்டத்தின் பிற பகுதிகள்'}
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {lang === 'en' ? 'Door No, Street Name & Landmark *' : 'கதவு எண், தெரு பெயர் & அடையாளம் *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={
                    lang === 'en'
                      ? 'e.g. 18/48 B1, Raja Street, Near Ayyappa College Road, Chunkankadai'
                      : 'எ.கா: 18/48 B1, ராஜா தெரு, ஐயப்பா கல்லூரி சாலை அருகில், சுங்கான்கடை'
                  }
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Date and Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {lang === 'en' ? 'Preferred Date *' : 'விருப்பமான நாள் *'}
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="date"
                    min={todayStr}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {lang === 'en' ? 'Preferred Time Slot *' : 'நேர இடைவெளி *'}
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="Morning 07:00 AM - 10:00 AM">Morning 07:00 AM - 10:00 AM</option>
                    <option value="Mid-day 10:00 AM - 01:00 PM">Mid-day 10:00 AM - 01:00 PM</option>
                    <option value="Afternoon 01:00 PM - 04:00 PM">Afternoon 01:00 PM - 04:00 PM</option>
                    <option value="Evening 04:00 PM - 07:30 PM">Evening 04:00 PM - 07:30 PM</option>
                    <option value="⚡ Immediate 24/7 Emergency Dispatch">⚡ Immediate 24/7 Emergency Dispatch</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Special Instructions */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {lang === 'en' ? 'Special Notes or Hose Reach Requirements (Optional)' : 'கூடுதல் விவரங்கள் / பைப் தேவை (விருப்பத்தேர்வு)'}
              </label>
              <textarea
                rows={2}
                placeholder={
                  lang === 'en'
                    ? 'e.g. House is 80 feet inside narrow street; please bring extra hose length.'
                    : 'எ.கா: குறுகிய சந்தில் வீடு உள்ளது, கூடுதல் பைப் தேவை.'
                }
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                <span>{lang === 'en' ? 'Estimated Service Value:' : 'மதிப்பீட்டு தொகை:'}</span>{' '}
                <strong className="text-slate-900 font-mono text-sm">~₹{estimatedCost.toLocaleString()}</strong>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-bold rounded-xl shadow-md transition-colors text-sm cursor-pointer whitespace-nowrap"
              >
                <Send className="w-4 h-4" />
                <span>{lang === 'en' ? 'Confirm & Dispatch Tanker' : 'டேங்கரை உறுதி செய்'}</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};
