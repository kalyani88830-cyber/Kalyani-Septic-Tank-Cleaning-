import { ServiceItem, CoverageLocation, Testimonial } from '../types';

export const BUSINESS_INFO = {
  name: 'Kalyani Septic Tank Cleaning',
  nameFull: 'Kalyani Septic Tank Cleaning Nagercoil',
  nameTamil: 'கல்யாணி செப்டிக் டேங்க் கிளீனிங் நாகர்கோவில்',
  addressLine1: '18/48 B1, Raja Street, Ayyappa College Road',
  addressLine2: 'Chunkankadai, Nagercoil',
  pincode: '629003',
  district: 'Kanyakumari District, Tamil Nadu',
  primaryPhone: '+91 75388 10079',
  secondaryPhone: '+91 75388 10079',
  displayPhone: '+91 75388 10079',
  rawPhone: '7538810079',
  whatsappNumber: '917538810079',
  email: 'kalyani88830@gmail.com',
  workingHoursEn: '24 Hours Emergency Dispatch / Regular Service: 6:00 AM - 9:30 PM',
  workingHoursTa: '24 மணி நேர அவசர சேவை / வழக்கமான பணி: காலை 6:00 - இரவு 9:30',
  experienceYears: 14,
  tanksCleanedCount: '12,500+',
  tankerFleetCount: '6 Vacuum Tankers',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'septic_tank_residential',
    titleEn: 'Residential Septic Tank Cleaning',
    titleTa: 'வீட்டு செப்டிக் டேங்க் சுத்தம் செய்தல்',
    shortDescEn: 'Deep vacuum suction with high-capacity vacuum pumps, thorough bottom sludge removal, and odor-free transport.',
    shortDescTa: 'அதிநவீன வாக்கியூம் பம்ப் மூலம் துர்நாற்றமின்றி வீட்டு செப்டிக் டேங்க் முழுமையாக சுத்தம் செய்தல்.',
    featuresEn: [
      'High-vacuum suction with zero residue',
      'Long-reach flexible pipes up to 150 ft for narrow lanes',
      '100% mechanized - strictly Zero Manual Scavenging',
      'Safe transport & authorized disposal'
    ],
    featuresTa: [
      'அதிக சக்திவாய்ந்த வாக்கியூம் உறிஞ்சுதல்',
      'குறுகிய தெருக்களுக்கும் 150 அடி வரை நீளும் பைப் வசதி',
      '100% இயந்திரமயமானது - மனித உழைப்பு தடையை மதிக்கும் முறை',
      'அரசு அங்கீகாரம் பெற்ற சுத்திகரிப்பு கழிவு நீக்கம்'
    ],
    idealForEn: 'Individual houses, villas, and small duplex homes across Nagercoil and Chunkankadai.',
    idealForTa: 'நாகர்கோவில் மற்றும் சுங்கான்கடை பகுதி தனி வீடுகள் மற்றும் வில்லாக்கள்.',
    estimatedTime: '45 - 60 Mins',
    image: '/src/assets/images/hero_vacuum_tanker_1790410943636.jpg',
    startingPrice: 1800,
  },
  {
    id: 'drainage_unblocking',
    titleEn: 'Drainage & Sewer Line Clearing',
    titleTa: 'வடிகால் & கழிவுநீர் குழாய் அடைப்பு நீக்குதல்',
    shortDescEn: 'Clearing choked municipal connections, underground sewage pipes, grease accumulations, and root obstructions.',
    shortDescTa: 'பூமிக்கடியில் உள்ள கழிவுநீர் குழாய்களில் ஏற்படும் கடுமையான அடைப்புகள், கழிவுகளை அதிவேகத்தில் நீக்குதல்.',
    featuresEn: [
      'High-pressure rotary jetting nozzles',
      'Immediate unblocking of clogged sewer pipelines',
      'Inspection and root/hard sediment clearing',
      'Hygienic chemical spray post-clearance'
    ],
    featuresTa: [
      'உயர் அழுத்த நீர் பீய்ச்சும் நாசில்கள்',
      'கழிவுநீர் குழாய் அடைப்புகளை உடனடியாக நீக்குதல்',
      'வேர்கள் மற்றும் கடின படிவுகளை அகற்றுதல்',
      'சுத்தம் செய்தபின் கிருமிநாசினி தெளிப்பு'
    ],
    idealForEn: 'Blocked kitchen lines, bathroom main outflows, and underground community drainage channels.',
    idealForTa: 'சமையலறை, குளியலறை குழாய் அடைப்புகள் மற்றும் தெரு வடிகால் குழாய்கள்.',
    estimatedTime: '30 - 50 Mins',
    image: '/src/assets/images/drainage_cleaning_jetting_1790410957682.jpg',
    startingPrice: 1200,
  },
  {
    id: 'septic_tank_commercial',
    titleEn: 'Commercial & Campus Sludge Pumping',
    titleTa: 'வணிக வளாகங்கள் & கல்லூரி செப்டிக் சேவை',
    shortDescEn: 'Heavy 8,000L - 12,000L tankers equipped for colleges, marriage halls, hospitals, and apartment complexes.',
    shortDescTa: 'கல்லூரிகள், திருமண மண்டபங்கள், மருத்துவமனைகள் மற்றும் அடுக்குமாடி குடியிருப்புகளுக்கான பெரிய டேங்கர் சேவை.',
    featuresEn: [
      'Fleet of high-capacity 6,000L to 12,000L tankers',
      'Rapid turnaround to avoid business disruption',
      'Scheduled annual maintenance contracts (AMC) available',
      'Official service invoices and compliance certificate'
    ],
    featuresTa: [
      '6,000L முதல் 12,000L வரையிலான பெரிய வாகனங்கள்',
      'நிறுவன பணிகளுக்கு இடையூறின்றி அதிவேக சேவை',
      'வருடாந்திர பராமரிப்பு ஒப்பந்தம் (AMC) வசதி',
      'அதிகாரப்பூர்வ ஜிஎஸ்டி பில் மற்றும் சான்றிதழ்'
    ],
    idealForEn: 'Ayyappa College Road institutions, hotels, hospitals, and multi-tenant apartments in Kanyakumari dist.',
    idealForTa: 'ஐயப்ப கல்லூரி சாலை கல்வி நிறுவனங்கள், ஹோட்டல்கள், மருத்துவமனைகள்.',
    estimatedTime: '90 - 120 Mins',
    image: '/src/assets/images/commercial_residential_suction_1790410969836.jpg',
    startingPrice: 3500,
  },
  {
    id: 'water_jetting',
    titleEn: 'High Pressure Water Jetting',
    titleTa: 'உயர் அழுத்த வாட்டர் ஜெட்டிங்',
    shortDescEn: 'Industrial 250-bar pressurized water jetting to descale internal pipe walls and eliminate hardened grease.',
    shortDescTa: 'குழாய்களில் ஒட்டியுள்ள கடினமான பாசி, எண்ணெய் பிசுக்கு மற்றும் படிவுகளை உயர் அழுத்த நீரால் அகற்றுதல்.',
    featuresEn: [
      '250 Bar powerful industrial water pressure',
      'Safe for PVC, concrete, and stoneware lines',
      'Zero structural damage to plumbing infrastructure',
      'Prevents recurrent backflow and foul odors'
    ],
    featuresTa: [
      '250 பார் அதிவேக அழுத்த நீர் விசை',
      'பிவிசி மற்றும் சிமெண்ட் குழாய்களுக்கு பாதுகாப்பானது',
      'குழாய்களுக்கு சேதமின்றி நீண்டகால பலன்',
      'துர்நாற்றம் மற்றும் கழிவுநீர் திரும்புதலை தடுத்தல்'
    ],
    idealForEn: 'Restaurant grease traps, industrial sumps, and chronic sewer line clogs.',
    idealForTa: 'உணவக எண்ணெய் கழிவு குழாய்கள், தொழிற்சாலை சம்ப் மற்றும் நாள்பட்ட அடைப்புகள்.',
    estimatedTime: '40 - 70 Mins',
    image: '/src/assets/images/drainage_cleaning_jetting_1790410957682.jpg',
    startingPrice: 1500,
  },
  {
    id: 'emergency_pumping',
    titleEn: '24/7 Emergency Overflow Pumping',
    titleTa: '24/7 அவசர கழிவுநீர் உறிஞ்சும் சேவை',
    shortDescEn: 'Urgent rapid-dispatch service during sudden tank overflows, heavy rain sewer backups, or sanitary emergencies.',
    shortDescTa: 'மழைக்கால அடைப்புகள், திடீர் செப்டிக் டேங்க் நிரம்பி வழிதல் போன்ற அவசர நிலைகளுக்கு உடனடி சேவை.',
    featuresEn: [
      'Immediate tanker dispatch within 30-45 minutes',
      'Available day and night 24x7 across Nagercoil',
      'Priority routing to Chunkankadai & adjoining localities',
      'Immediate relief from health and hygiene hazard'
    ],
    featuresTa: [
      '30-45 நிமிடங்களுக்குள் விரைவு டேங்கர் வருகை',
      'இரவு பகல் எந்த நேரத்திலும் நாகர்கோவில் முழுவதும் சேவை',
      'சுங்கான்கடை மற்றும் சுற்றுவட்டாரத்திற்கு உடனடி முன்னுரிமை',
      'சுகாதார சீர்கேட்டை உடனடியாக சரிசெய்தல்'
    ],
    idealForEn: 'Emergency overflows, storm sewer backups, public event sanitation emergencies.',
    idealForTa: 'திடீர் கழிவுநீர் வழிதல் மற்றும் மழைக்கால அவசர சூழல்கள்.',
    estimatedTime: '30 - 60 Mins',
    image: '/src/assets/images/hero_vacuum_tanker_1790410943636.jpg',
    startingPrice: 2200,
  }
];

export const COVERAGE_AREAS: CoverageLocation[] = [
  {
    nameEn: 'Chunkankadai & Ayyappa College Road',
    nameTa: 'சுங்கான்கடை & ஐயப்ப கல்லூரி சாலை',
    distanceKm: 0.5,
    etaMins: 20,
    zone: 'immediate',
    descriptionEn: 'Immediate base area. Fast 20-30 min tanker arrival on Raja Street, Ayyappa College campus & surrounding residences.',
    descriptionTa: 'எங்கள் அலுவலக மையப்பகுதி. ராஜா தெரு, ஐயப்பா கல்லூரி சாலைகளுக்கு 20-30 நிமிடங்களில் டேங்கர் வந்து சேரும்.'
  },
  {
    nameEn: 'Nagercoil Town & Vadasery',
    nameTa: 'நாகர்கோவில் நகரம் & வடசேரி',
    distanceKm: 5.2,
    etaMins: 35,
    zone: 'immediate',
    descriptionEn: 'Daily frequent service across Vadasery bus stand area, Chetti Kulam, and main city corridors.',
    descriptionTa: 'வடசேரி பேருந்து நிலையம், செட்டிகுளம் மற்றும் நாகர்கோவில் முக்கிய நகர்ப் பகுதிகள்.'
  },
  {
    nameEn: 'Parvathipuram & Asaripallam',
    nameTa: 'பார்வதிபுரம் & ஆசாரிபள்ளம்',
    distanceKm: 4.0,
    etaMins: 30,
    zone: 'immediate',
    descriptionEn: 'Near Chunkankadai junction. Rapid response for Asaripallam Medical College sector and Parvathipuram flyover zone.',
    descriptionTa: 'ஆசாரிபள்ளம் மருத்துவக் கல்லூரி பகுதி மற்றும் பார்வதிபுரம் சுற்றுவட்டாரம்.'
  },
  {
    nameEn: 'Thuckalay & Padmanabhapuram',
    nameTa: 'தக்கலை & பத்மநாபபுரம்',
    distanceKm: 11.5,
    etaMins: 45,
    zone: 'extended',
    descriptionEn: 'Quick access via NH 66 highway corridor for residential and commercial premises.',
    descriptionTa: 'என்.ஹெச் 66 வழித்தடம் வழியாக தக்கலை மற்றும் பத்மநாபபுரம் சுற்றுவட்டாரங்கள்.'
  },
  {
    nameEn: 'Kottar & Meenakshipuram',
    nameTa: 'கோட்டார் & மீனாட்சிபுரம்',
    distanceKm: 7.8,
    etaMins: 40,
    zone: 'immediate',
    descriptionEn: 'Comprehensive commercial drainage and market sector septic maintenance.',
    descriptionTa: 'கோட்டார் சந்தை பகுதி, மீனாட்சிபுரம் மற்றும் வணிக நிறுவனங்கள்.'
  },
  {
    nameEn: 'Suchindram & Agastheeswaram',
    nameTa: 'சுசீந்திரம் & அகஸ்தீஸ்வரம்',
    distanceKm: 12.0,
    etaMins: 50,
    zone: 'extended',
    descriptionEn: 'Scheduled and emergency sanitation service across temple corridors and residential colonies.',
    descriptionTa: 'சுசீந்திரம் மற்றும் அகஸ்தீஸ்வரம் பகுதி வீடுகள் மற்றும் திருமண மண்டபங்கள்.'
  },
  {
    nameEn: 'Eraniel, Villukuri & Colachel',
    nameTa: 'இரணியல், வில்லுக்குறி & குளச்சல்',
    distanceKm: 14.5,
    etaMins: 55,
    zone: 'extended',
    descriptionEn: 'Regular scheduled morning and afternoon service slots available.',
    descriptionTa: 'வில்லுக்குறி, இரணியல் மற்றும் கடலோர குளச்சல் பகுதிகள்.'
  },
  {
    nameEn: 'Kanyakumari & Marthandam',
    nameTa: 'கன்னியாகுமரி & மார்த்தாண்டம்',
    distanceKm: 22.0,
    etaMins: 60,
    zone: 'extended',
    descriptionEn: 'Full tanker capacity service for institutions, resorts, hotels, and large estates.',
    descriptionTa: 'விடுதிகள், ரிசார்ட்டுகள் மற்றும் பெரிய வளாகங்களுக்கான சிறப்பு சேவை.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'S. Ramanathan',
    locality: 'Ayyappa College Road, Chunkankadai',
    service: 'Residential Septic Tank Cleaning',
    rating: 5,
    date: 'March 2026',
    commentEn: 'Our home is located in a narrow inner lane in Chunkankadai. Kalyani Septic Cleaning team brought 120 feet of hose without any difficulty. Fast, completely odorless, and very polite crew.',
    commentTa: 'எங்கள் வீடு சுங்கான்கடையில் குறுகிய தெருவில் உள்ளது. 120 அடி பைப் மூலம் எந்த சிரமமுமின்றி துர்நாற்றமின்றி நேர்த்தியாக சுத்தம் செய்தனர்.'
  },
  {
    name: 'M. Joseph Fernandez',
    locality: 'Parvathipuram, Nagercoil',
    service: 'Drainage Pipe Unblocking & Jetting',
    rating: 5,
    date: 'February 2026',
    commentEn: 'Severe kitchen drain blockage had caused overflow in our ground floor. Called Kalyani team and they arrived within 35 minutes with high pressure jetting machine. Cleared everything in 40 minutes.',
    commentTa: 'சமையலறை கழிவுநீர் குழாய் முழுமையாக அடைத்து நீர் தேங்கியது. அழைத்த 35 நிமிடங்களில் வந்து உயர் அழுத்த மிஷின் கொண்டு அடைப்பை சரிசெய்தனர்.'
  },
  {
    name: 'V. Sundaram',
    locality: 'Asaripallam, Nagercoil',
    service: 'Apartment Tank Suction (8,000L)',
    rating: 5,
    date: 'January 2026',
    commentEn: 'We manage a 12-flat apartment near Asaripallam. Kalyani vacuum tanker came on the exact scheduled slot. Heavy suction cleared the deep sludge at the bottom completely. Very reasonable pricing.',
    commentTa: '12 வீடுகள் கொண்ட எங்கள் குடியிருப்புக்கு சரியான நேரத்தில் வந்தனர். கீழே படிந்திருந்த கடின கழிவுகளையும் சக்திவாய்ந்த பம்ப் மூலம் சுத்தமாக எடுத்தனர்.'
  }
];

export const FAQS = [
  {
    qEn: 'How much hose pipe distance can your vacuum tankers reach?',
    qTa: 'உங்கள் டேங்கர் வாகனங்கள் எத்தனை அடி நீள பைப் வசதி கொண்டது?',
    aEn: 'Our specialized vacuum tankers carry up to 150 to 200 feet of flexible heavy-duty spiral suction pipes. Even if your building is deep inside a narrow street where the truck cannot enter, our team can reach easily without damaging your gates or plants.',
    aTa: 'எங்களிடம் 150 முதல் 200 அடி வரை நீளும் உயர் ரக பைப் வசதி உள்ளது. உங்கள் வீடு அல்லது கட்டிடம் குறுகிய சந்துகளில் அமைந்திருந்தாலும் வாகனம் வெளியே நின்றபடியே சிரமமின்றி சுத்தம் செய்ய முடியும்.'
  },
  {
    qEn: 'Is the cleaning process completely odorless and hygienic?',
    qTa: 'சுத்தம் செய்யும் போது துர்நாற்றம் அல்லது அசுத்தம் ஏற்படுமா?',
    aEn: 'Yes. We utilize completely sealed mechanical vacuum suction pumps. The waste is transferred directly through airtight pipes into the tanker body, preventing any spills, unpleasant smells, or environmental pollution in your neighborhood.',
    aTa: 'இல்லை, 100% மூடப்பட்ட ஏர்டைட் வாக்கியூம் முறையில் உறிஞ்சப்படுவதால் சுற்றுப்புறத்தில் துர்நாற்றம் வீசாது மற்றும் அசுத்தங்கள் வெளியில் சிந்தாது.'
  },
  {
    qEn: 'What is your response time for emergency overflow in Chunkankadai and Nagercoil?',
    qTa: 'சுங்கான்கடை மற்றும் நாகர்கோவிலில் அவசர காலங்களில் எவ்வளவு நேரத்தில் வருவீர்கள்?',
    aEn: 'Our headquarters is situated right at 18/48 B1, Raja Street, Ayyappa College Road, Chunkankadai. For Chunkankadai and neighboring Nagercoil zones, our average arrival time is just 20 to 35 minutes.',
    aTa: 'எங்கள் அலுவலகம் சுங்கான்கடை ராஜா தெரு, ஐயப்பா கல்லூரி சாலையிலேயே உள்ளதால் சுங்கான்கடை மற்றும் நாகர்கோவில் பகுதிக்கு 20 முதல் 35 நிமிடங்களுக்குள் விரைந்து வந்துவிடுவோம்.'
  },
  {
    qEn: 'Do you comply with government zero-manual scavenging laws?',
    qTa: 'மனித கழிவுகளை மனிதனே அள்ளும் தடை சட்டத்திற்கு உட்பட்டதா?',
    aEn: 'Strictly yes. We follow 100% mechanized suction adhering to the Prohibition of Employment as Manual Scavengers Act. No human enters any tank; modern heavy-duty machines and rotary jetting do all the work safely.',
    aTa: 'நிச்சயமாக. நாங்கள் 100% நவீன இயந்திரங்களை மட்டுமே பயன்படுத்துகிறோம். மனித உழைப்பு தடையை மதித்து, முழுமையாக பாதுகாப்பான இயந்திர உறிஞ்சுதல் முறை மட்டுமே செயல்படுத்தப்படுகிறது.'
  }
];
