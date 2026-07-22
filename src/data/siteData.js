// Image Import
// Gallery images are imported here to be used in the gallery section 
import img1 from "../assets/images/gallery (1).webp";
import img2 from "../assets/images/gallery (2).webp";
import img3 from "../assets/images/gallery (3).webp";
import img4 from "../assets/images/gallery (4).webp";
import img5 from "../assets/images/gallery (5).webp";
import img6 from "../assets/images/gallery (6).webp";
import img7 from "../assets/images/gallery (7).webp";
import img8 from "../assets/images/gallery (8).webp";
import img9 from "../assets/images/gallery (9).webp";
import img10 from "../assets/images/gallery (10).webp";
import img11 from "../assets/images/gallery (11).webp";
import img12 from "../assets/images/gallery (12).webp";
import img13 from "../assets/images/gallery (13).webp";


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
  phones: ["8948810093"],
  whatsapp: "8948810093",
  email: "info@vasudevdigitallibrary.com",
  hours: {
    weekday: "5:00 AM – 12:00 AM (24×7 on request)",
    note: "Round-the-clock access available for enrolled members",
  },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14289.864417762827!2d82.53634496018162!3d26.44070051558359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3990936329e97be9%3A0xc9b78c8067528aa7!2sVasudev%20digital%20library!5e0!3m2!1sen!2sin!4v1784359184843!5m2!1sen!2sin",
  social: {
    facebook: "#",
    instagram: "https://www.instagram.com/vasudev_library_official",
    youtube: "https://www.youtube.com/@VasudevDigitallibrary",
    twitter: "#",
  },
};

// src/data/siteData.js
export const socialLinks = {
  facebook: "https://facebook.com/your-page",
  instagram: "https://www.instagram.com/vasudev_library_official",
  youtube: "https://www.youtube.com/@VasudevDigitallibrary",
  twitter: "https://twitter.com/your-handle"
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
  { title: "Trade License", issuer: " Nagarpalika, Akbarpur", year: "2023" },
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
  { id: 1, category: "Reading Halls", src: img1, alt: "Premium reading hall" },
  { id: 2, category: "Cabins", src: img2, alt: "Individual study cabin" },
  { id: 3, category: "Facilities", src: img3, alt: "Library facilities" },
  { id: 4, category: "Reading Halls", src: img4, alt: "Students reading" },
  { id: 5, category: "Events", src: img5, alt: "Library event" },
  { id: 6, category: "Cabins", src: img6, alt: "Study chamber" },
  { id: 7, category: "Facilities", src: img7, alt: "Library amenities" },
  { id: 8, category: "Reading Halls", src: img8, alt: "Silent reading zone" },
  { id: 9, category: "Events", src: img9, alt: "Library gathering" },
  { id: 10, category: "Cabins", src: img10, alt: "Private study space" },
  { id: 11, category: "Facilities", src: img11, alt: "Library infrastructure" },
  { id: 12, category: "Reading Halls", src: img12, alt: "Students studying" },
  { id: 13, category: "Events", src: img13, alt: "Library workshop" },
];


import videoGallery1 from "../assets/thumbnails/A Walkthrough of Vasudev Digital Library.webp";
import videoGallery2 from "../assets/thumbnails/Inside Our 24×7 Reading Hall.webp";
import videoGallery3 from "../assets/thumbnails/Meet Our Members.webp";
import videoGallery4 from "../assets/thumbnails/Library Facilities & Environment.webp";

export const videoGallery = [
  {
    id: 1,
    title: "A Walkthrough of Vasudev Digital Library",
    thumb: videoGallery1,
    youtubeId: "XHFV9jD82Wc" // Yaha apni YouTube video ID dalein (jaise dQw4w9WgXcQ)
  },
  {
    id: 2,
    title: "Inside Our 24×7 Reading Hall",
    thumb: videoGallery2,
    youtubeId: "kZBSg5UJ-l4"
  },
  {
    id: 3,
    title: "Meet Our Members",
    thumb: videoGallery3,
    youtubeId: "zGnUu0Ap63U"
  },
  {
    id: 4,
    title: "Library Facilities & Environment",
    thumb: videoGallery4,
    youtubeId: "gREEvnkJbj4"
  },
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
