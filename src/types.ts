export type ServiceType = 
  | 'septic_tank_residential'
  | 'septic_tank_commercial'
  | 'drainage_unblocking'
  | 'water_jetting'
  | 'grease_trap'
  | 'emergency_pumping';

export interface ServiceItem {
  id: ServiceType;
  titleEn: string;
  titleTa: string;
  shortDescEn: string;
  shortDescTa: string;
  featuresEn: string[];
  featuresTa: string[];
  idealForEn: string;
  idealForTa: string;
  estimatedTime: string;
  image?: string;
  startingPrice: number;
}

export interface Booking {
  id: string;
  customerName: string;
  phone: string;
  serviceType: ServiceType;
  propertyType: 'house' | 'apartment' | 'commercial' | 'institution';
  capacityLitres: number;
  hoseDistance: string;
  area: string;
  address: string;
  date: string;
  timeSlot: string;
  urgency: 'scheduled' | 'emergency';
  estimatedCost: number;
  notes?: string;
  status: 'confirmed' | 'dispatched' | 'completed';
  createdAt: string;
}

export interface CoverageLocation {
  nameEn: string;
  nameTa: string;
  distanceKm: number;
  etaMins: number;
  zone: 'immediate' | 'extended';
  descriptionEn: string;
  descriptionTa: string;
}

export interface Testimonial {
  name: string;
  locality: string;
  service: string;
  rating: number;
  date: string;
  commentEn: string;
  commentTa: string;
}
