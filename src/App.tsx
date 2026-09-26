import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { CostEstimator } from './components/CostEstimator';
import { BookingForm } from './components/BookingForm';
import { CoverageSection } from './components/CoverageSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { MobileEmergencyBar } from './components/MobileEmergencyBar';
import { BookingManagerModal } from './components/BookingManagerModal';
import { Booking, ServiceType } from './types';

export default function App() {
  const [lang, setLang] = useState<'en' | 'ta'>('en');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isBookingsModalOpen, setIsBookingsModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<ServiceType | undefined>(undefined);
  const [selectedEstimateForBooking, setSelectedEstimateForBooking] = useState<any | null>(null);

  // Load bookings from LocalStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('kalyani_bookings');
      if (stored) {
        setBookings(JSON.parse(stored));
      }
    } catch (err) {
      console.error('Failed to load stored bookings', err);
    }
  }, []);

  const handleBookingCreated = (newBooking: Booking) => {
    setBookings((prev) => [newBooking, ...prev]);
  };

  const handleDeleteBooking = (id: string) => {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    try {
      localStorage.setItem('kalyani_bookings', JSON.stringify(updated));
    } catch (err) {
      console.error('Failed to update localStorage', err);
    }
  };

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceId: ServiceType) => {
    setSelectedServiceForBooking(serviceId);
    scrollToBooking();
  };

  const handleApplyEstimate = (estimate: any) => {
    setSelectedEstimateForBooking(estimate);
    scrollToBooking();
  };

  const handleSelectArea = (areaName: string) => {
    scrollToBooking();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased pb-16 sm:pb-0">
      {/* Top Bar Contract (3 Zones) */}
      <Header
        lang={lang}
        setLang={setLang}
        onOpenBookings={() => setIsBookingsModalOpen(true)}
        bookingCount={bookings.length}
      />

      {/* Hero Section */}
      <Hero
        lang={lang}
        onBookClick={scrollToBooking}
      />

      {/* Services Section */}
      <ServicesSection
        lang={lang}
        onSelectService={handleSelectService}
      />

      {/* Cost Calculator Section */}
      <CostEstimator
        lang={lang}
        onApplyEstimate={handleApplyEstimate}
      />

      {/* Booking Form Section */}
      <BookingForm
        lang={lang}
        initialService={selectedServiceForBooking}
        initialEstimate={selectedEstimateForBooking}
        onBookingCreated={handleBookingCreated}
      />

      {/* Coverage & Chunkankadai Hub Section */}
      <CoverageSection
        lang={lang}
        onSelectAreaForBooking={handleSelectArea}
      />

      {/* Why Choose Us & Machine Compliance */}
      <WhyChooseUs
        lang={lang}
      />

      {/* Fleet & Equipment Gallery Showcase */}
      <GallerySection
        lang={lang}
        onBookClick={scrollToBooking}
      />

      {/* Testimonials */}
      <TestimonialsSection
        lang={lang}
      />

      {/* FAQs */}
      <FAQSection
        lang={lang}
      />

      {/* Footer */}
      <Footer
        lang={lang}
      />

      {/* Floating Mobile Action Bar (<15% screen height cap) */}
      <MobileEmergencyBar
        lang={lang}
        onBookClick={scrollToBooking}
      />

      {/* Modal for My Bookings */}
      <BookingManagerModal
        isOpen={isBookingsModalOpen}
        onClose={() => setIsBookingsModalOpen(false)}
        bookings={bookings}
        onDeleteBooking={handleDeleteBooking}
        lang={lang}
      />
    </div>
  );
}
