import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlay, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Swiper base styles (Yehi main CSS file zaroori hai)
import "swiper/css";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { videoGallery } from "../../data/siteData";

export default function VideoGallery() {
  const [active, setActive] = useState(null);

  return (
    <section className="section-pad relative bg-navy overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="Video Gallery"
            title="See the library in motion"
            subtitle="A closer look at our reading halls, chambers and the everyday rhythm of Vasudev Digital Library."
          />

          {/* Custom Navigation Arrows */}
          <div className="hidden md:flex items-center gap-3 mt-6 md:mt-0">
            <button 
              className="custom-prev flex h-11 w-11 items-center justify-center rounded-full glass-panel-light text-ivory hover:bg-gold hover:text-navy-deep transition-all cursor-pointer shadow-md"
              aria-label="Previous slide"
            >
              <FiChevronLeft size={20} />
            </button>
            <button 
              className="custom-next flex h-11 w-11 items-center justify-center rounded-full glass-panel-light text-ivory hover:bg-gold hover:text-navy-deep transition-all cursor-pointer shadow-md"
              aria-label="Next slide"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Video Slider */}
        <div className="relative mt-8">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {videoGallery.map((v, i) => (
              <SwiperSlide key={v.id}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <button
                    onClick={() => setActive(v)}
                    className="group relative w-full overflow-hidden rounded-2xl text-left block cursor-pointer focus:outline-none"
                  >
                    <div className="h-64 w-full relative bg-navy-deep overflow-hidden">
                      <img
                        src={v.thumb}
                        alt={v.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-navy-deep/40 transition-colors group-hover:bg-navy-deep/55" />
                      
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-navy-deep shadow-[0_0_0_8px_rgba(212,175,55,0.15)] transition-transform group-hover:scale-110">
                          <FiPlay className="ml-0.5" />
                        </span>
                      </span>
                    </div>

                    <div className="p-4 bg-navy-deep/60 backdrop-blur-sm">
                      <p className="font-heading text-sm font-semibold text-ivory line-clamp-1">
                        {v.title}
                      </p>
                    </div>
                  </button>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Mobile Navigation Arrows */}
          <div className="flex md:hidden items-center justify-center gap-4 mt-4">
            <button 
              className="custom-prev flex h-10 w-10 items-center justify-center rounded-full glass-panel-light text-ivory"
              aria-label="Previous slide"
            >
              <FiChevronLeft size={18} />
            </button>
            <button 
              className="custom-next flex h-10 w-10 items-center justify-center rounded-full glass-panel-light text-ivory"
              aria-label="Next slide"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>
      </Container>

      {/* Popup Modal with YouTube Iframe */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/90 backdrop-blur-md p-4 md:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel relative w-full max-w-3xl rounded-2xl p-4 md:p-6 shadow-2xl"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close video"
                className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full glass-panel-light text-ivory hover:bg-gold hover:text-navy-deep transition-colors cursor-pointer"
              >
                <FiX size={18} />
              </button>
              
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black flex items-center justify-center shadow-inner">
                <iframe
                  className="absolute inset-0 h-full w-full border-0"
                  src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1&rel=0`}
                  title={active.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <h3 className="mt-4 font-heading text-base md:text-lg font-semibold text-ivory">
                {active.title}
              </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}