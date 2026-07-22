import {
  ShieldCheck,
  Lock,
  Clock,
  Zap,
  Wifi,
  Coffee,
  Users,
  Eye,
} from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { safetyTimeline } from "../../data/siteData";

// --- STEP 1: Yahan apni image import karein ---
import mainBgImage from "../../assets/images/banner-bg 1.webp";

import img1 from "../../assets/images/gallery (2).webp";
import img2 from "../../assets/images/gallery (3).webp";
import img3 from "../../assets/images/gallery (4).webp";
import img4 from "../../assets/images/gallery (5).webp";
import img5 from "../../assets/images/gallery (6).webp";
import img6 from "../../assets/images/gallery (7).webp";
import img7 from "../../assets/images/gallery (8).webp";
import img8 from "../../assets/images/gallery (9).webp";

// Inhe ek array mein daal lein
const bentoImages = [img1, img2, img3, img4, img5, img6, img7, img8];

const getIcon = (index) => {
  const icons = [ShieldCheck, Lock, Clock, Zap, Wifi, Coffee, Users, Eye];
  const Icon = icons[index % icons.length];
  return <Icon size={18} />;
};

export default function SafetyTimeline() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{
        // --- STEP 2: Yahan imported variable use karein ---
        backgroundImage: `linear-gradient(rgba(10, 20, 35, 0.92), rgba(10, 20, 35, 0.92)), url(${mainBgImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Safety & Comfort"
          title="A journey through every safeguard"
          subtitle="Every step of your day here is designed for your peace of mind."
        />

        <div className="relative mt-16 flex flex-col-reverse md:flex-row gap-12 justify-between">
          {/* --- LEFT: 600px Fixed Scrollable Roadmap --- */}
          <div className="w-full md:w-[48%] lg:w-[45%] h-[600px] overflow-y-auto no-scrollbar pr-4">
            <div className="relative ml-4 border-l border-gold/20">
              <div className="space-y-8 pb-10">
                {safetyTimeline.map((item, i) => (
                  <div key={item.title} className="relative pl-8">
                    <div className="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-navy border border-gold/40 text-gold shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                      {getIcon(i)}
                    </div>
                    <div className="glass-panel bg-navy/30 backdrop-blur-md rounded-2xl p-5 hover:border-gold/30 transition-all border border-white/5">
                      <h3 className="font-heading text-base font-semibold text-ivory">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-mist leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT: Bento Grid (Images import ka logic yahan bhi aise hi lagega) --- */}
          <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col gap-6">
            <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[400px]">
              {bentoImages.map((imgSrc, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-2xl ${
                    i === 0 || i === 3
                      ? "col-span-2 row-span-2"
                      : "col-span-1 row-span-1"
                  }`}
                >
                  <img
                    src={imgSrc} // Yahan imported variable use ho raha hai
                    alt={`Library feature ${i + 1}`}
                    className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-navy/20 hover:bg-transparent transition-colors" />
                </div>
              ))}
            </div>

            <div className="glass-panel bg-navy/30 backdrop-blur-md p-6 rounded-3xl flex justify-between items-center border border-white/5">
              {[
                { label: "Safety Grade", val: "A+" },
                { label: "Surveillance", val: "24/7" },
                { label: "Students", val: "500+" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-gold font-heading text-xl">{stat.val}</p>
                  <p className="text-mist text-[10px] uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
