// Central business data — single source of truth used across the site.

export const business = {
  name: "Vasudev Digital Library",
  tagline: "A Premium 24×7 Study Sanctuary",
  address: {
    line1: "Tiraha, Patel Nagar",
    line2: "Akbarpur, Uttar Pradesh - 224122",
    full: "Tiraha, Patel Nagar, Akbarpur, Uttar Pradesh - 224122",
  },
  director: "Aman Verma",
  founder: "Sabhajeet Verma",
  founderTitle: "Founder & Chairman",
  phones: ["8400298007", "8948810093"],
  whatsapp: "8400298007",
  email: "info@vasudevdigitallibrary.in",
  hours: {
    weekday: "5:00 AM – 12:00 AM (24×7 on request)",
    note: "Round-the-clock access available for enrolled members",
  },
  mapEmbed:
    "https://www.google.com/maps?q=Patel+Nagar,+Akbarpur,+Uttar+Pradesh+224122&output=embed",
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    twitter: "#",
  },
};

export const whatsappLink = (message = "Hi, I would like to know more about Vasudev Digital Library.") =>
  `https://wa.me/91${business.whatsapp}?text=${encodeURIComponent(message)}`;

export const telLink = (num) => `tel:+91${num}`;

export const facilities = [
  { icon: "snowflake", title: "Fully Air Conditioned", desc: "Climate-controlled halls held at a steady, comfortable temperature all day." },
  { icon: "chair", title: "Comfortable Seating", desc: "Ergonomic chairs built for long, focused study sessions." },
  { icon: "wifi", title: "High Speed WiFi", desc: "Uninterrupted high-bandwidth internet across every zone." },
  { icon: "droplet", title: "RO Drinking Water", desc: "Purified RO water available at all times." },
  { icon: "snow", title: "Cold Water", desc: "Chilled water on tap through the warmer months." },
  { icon: "flame", title: "Hot Water", desc: "Warm water available during winter." },
  { icon: "cabin", title: "Individual Study Chambers", desc: "Private, partitioned chambers for undistracted focus." },
  { icon: "box", title: "Separate Cabin for Every Student", desc: "A dedicated cabin assigned to each member." },
  { icon: "reading-box", title: "Personal Reading Box", desc: "Your own locked space for books and stationery." },
  { icon: "lamp", title: "LED Study Lights", desc: "Flicker-free LED lighting tuned for reading comfort." },
  { icon: "plug", title: "Charging Point", desc: "A dedicated charging point at every seat." },
  { icon: "leaf", title: "Peaceful Environment", desc: "A calm, green-adjacent setting away from street noise." },
  { icon: "mute", title: "Silent Zone", desc: "Strictly enforced silence in all reading areas." },
  { icon: "battery", title: "Power Backup", desc: "Seamless backup power — no interruption during outages." },
  { icon: "sparkle", title: "Clean Washrooms", desc: "Hygienic, regularly sanitised washrooms." },
  { icon: "camera", title: "CCTV Surveillance", desc: "Round-the-clock CCTV coverage across the premises." },
  { icon: "shield", title: "24×7 Security", desc: "On-site security for members at every hour." },
  { icon: "broom", title: "Daily Cleaning", desc: "Every zone cleaned and sanitised daily." },
  { icon: "sparkle", title: "Hygienic Environment", desc: "A spotless, well-maintained study environment." },
];

export const specialFacilities = [
  { title: "Modern Reading Area", desc: "An open, light-filled hall designed for long reading sessions." },
  { title: "Discussion Area", desc: "A dedicated space for group study and peer discussion." },
  { title: "Silent Reading Zone", desc: "A strictly silent chamber for deep, focused reading." },
  { title: "Digital Study Zone", desc: "A tech-enabled corner for digital resources and research." },
  { title: "Locker Facility", desc: "Secure lockers to store your belongings safely." },
  { title: "Book Storage", desc: "Dedicated shelving to keep your books organised." },
  { title: "Personal Desk", desc: "A private desk assigned to every member." },
  { title: "Reading Lamp", desc: "An individual lamp at every desk for late-night study." },
  { title: "Emergency Lights", desc: "Backup lighting that activates instantly during a power cut." },
];

export const safetyTimeline = [
  { title: "Separate Entry Gate", desc: "A dedicated, monitored entry point for every member." },
  { title: "Fire Extinguisher", desc: "Fire safety equipment installed and inspected regularly." },
  { title: "Emergency Exit Gate", desc: "Clearly marked, unobstructed emergency exits." },
  { title: "CCTV Coverage", desc: "Continuous surveillance across all common areas." },
  { title: "Emergency Lighting", desc: "Automatic backup lighting during power interruptions." },
  { title: "Open Rooftop", desc: "A fresh-air rooftop space to unwind between sessions." },
  { title: "Breakfast Area", desc: "A dedicated corner to start your day right." },
  { title: "Lunch Area", desc: "A comfortable space for a proper midday break." },
  { title: "Dinner Area", desc: "A calm space to wind down over dinner." },
  { title: "Relax & Rest Zone", desc: "A quiet lounge to recharge between long study blocks." },
];

export const certificates = [
  { title: "Government Registration Certificate", issuer: "Dept. of Registration, U.P.", year: "2023" },
  { title: "Fire Safety Compliance Certificate", issuer: "U.P. Fire Department", year: "2023" },
  { title: "Trade License", issuer: "Nagar Panchayat, Akbarpur", year: "2023" },
  { title: "Local Authority Approval", issuer: "Block Office, Akbarpur", year: "2023" },
];

export const studyMaterials = [
  { title: "UPSC", desc: "Prelims & Mains resources, answer-writing practice and previous year papers." },
  { title: "SSC", desc: "CGL, CHSL and MTS-focused notes with topic-wise practice sets." },
  { title: "Bank", desc: "IBPS, SBI PO/Clerk material covering quant, reasoning and English." },
  { title: "Railway", desc: "RRB NTPC and Group D preparation resources." },
  { title: "UP Police", desc: "Constable and SI exam-focused notes and mock tests." },
  { title: "Teaching", desc: "CTET, UPTET and state teaching-eligibility material." },
  { title: "State PCS", desc: "UPPCS-focused static GK, current affairs and mains material." },
  { title: "Current Affairs", desc: "Curated monthly current affairs digests." },
  { title: "Digital Resources", desc: "E-books, PDFs and recorded reference material." },
];

export const galleryCategories = ["All", "Reading Halls", "Cabins", "Facilities", "Events"];

export const galleryImages = [
  { id: 1, category: "Reading Halls", src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=900&auto=format&fit=crop", alt: "Premium reading hall" },
  { id: 2, category: "Cabins", src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=900&auto=format&fit=crop", alt: "Individual study cabin" },
  { id: 3, category: "Facilities", src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=900&auto=format&fit=crop", alt: "Library facilities" },
  { id: 4, category: "Reading Halls", src: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=900&auto=format&fit=crop", alt: "Students reading" },
  { id: 5, category: "Events", src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=900&auto=format&fit=crop", alt: "Library event" },
  { id: 6, category: "Cabins", src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=900&auto=format&fit=crop", alt: "Study chamber" },
  { id: 7, category: "Facilities", src: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=900&auto=format&fit=crop", alt: "Library amenities" },
  { id: 8, category: "Reading Halls", src: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=900&auto=format&fit=crop", alt: "Silent reading zone" },
  { id: 9, category: "Events", src: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=900&auto=format&fit=crop", alt: "Library gathering" },
];

export const videoGallery = [
  { id: 1, title: "A Walkthrough of Vasudev Digital Library", thumb: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=900&auto=format&fit=crop" },
  { id: 2, title: "Inside Our 24×7 Reading Hall", thumb: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=900&auto=format&fit=crop" },
  { id: 3, title: "Meet Our Members", thumb: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900&auto=format&fit=crop" },
];

export const testimonials = [
  { name: "Ritika Singh", exam: "UPSC Aspirant", quote: "The silence here is unlike anywhere else in Akbarpur. My focus hours doubled within the first month.", rating: 5 },
  { name: "Ankit Yadav", exam: "SSC CGL Qualified", quote: "My own cabin, my own light, my own pace. Vasudev Digital Library gave my preparation real structure.", rating: 5 },
  { name: "Priya Verma", exam: "UPPCS Aspirant", quote: "Clean, safe, and genuinely peaceful. The 24×7 access fit perfectly around my schedule.", rating: 5 },
  { name: "Mohd. Faizan", exam: "Bank PO Aspirant", quote: "The AC halls and high-speed WiFi make long study days feel effortless.", rating: 4 },
  { name: "Suman Kumari", exam: "Railway NTPC", quote: "The environment is so disciplined that you naturally feel like studying. Best library in the city.", rating: 5 },
  { name: "Rahul Sharma", exam: "Engineering Student", quote: "Perfect place for marathon study sessions. The seating comfort is top-notch.", rating: 5 },
  { name: "Neha Gupta", exam: "CA Foundation", quote: "I love the lighting and the dedicated charging ports at every desk. Very convenient.", rating: 4 },
  { name: "Vikram Singh", exam: "NDA Aspirant", quote: "The staff is very supportive and the library is always well-maintained. Highly recommended.", rating: 5 },
];

export const faqs = [
  { q: "What are the library timings?", a: "Vasudev Digital Library is open from 5:00 AM to 12:00 AM daily, with 24×7 access available for enrolled members on request." },
  { q: "Is the seating individual or shared?", a: "Every member is assigned an individual study chamber with a personal desk, reading light and storage box." },
  { q: "Do you provide drinking water?", a: "Yes — RO-purified drinking water is available at all times, along with both hot and cold water." },
  { q: "Is WiFi included in the membership?", a: "Yes, high-speed WiFi is included for every member across all reading zones." },
  { q: "How is student safety ensured?", a: "The premises are covered by CCTV surveillance, staffed with 24×7 security, and equipped with fire extinguishers and marked emergency exits." },
  { q: "Can I store my books at the library?", a: "Yes, personal lockers and dedicated book storage are available for every member." },
  { q: "What competitive exams do you support?", a: "We provide curated material for UPSC, SSC, Bank, Railway, UP Police, Teaching exams and State PCS, along with current affairs digests." },
  { q: "Is there a discussion area for group study?", a: "Yes, alongside our silent reading zone we maintain a separate discussion area for collaborative study." },
  { q: "How do I enroll?", a: "You can enroll by visiting us in person, calling us, or messaging us directly on WhatsApp." },
  { q: "Where exactly is the library located?", a: "We are located at Tiraha, Patel Nagar, Akbarpur, Uttar Pradesh - 224122 — see the map on our Contact page for directions." },
];
