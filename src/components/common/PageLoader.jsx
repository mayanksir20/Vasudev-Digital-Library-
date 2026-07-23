import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import logo from "../../assets/images/bg-remove-logo.webp";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#08111f] px-4">
      <div className="flex flex-col items-center text-center max-w-sm w-full mx-auto">
        {/* Graduation Cap */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
        >
          <GraduationCap
            size={56}
            className="text-yellow-400 drop-shadow-lg sm:w-[70px] sm:h-[70px]"
          />
        </motion.div>

        {/* Logo */}
        <div className="mt-4 sm:mt-5 h-24 w-24 sm:h-32 sm:w-32 bg-white rounded-full overflow-hidden border-2 border-gold/40 shadow-[0_0_15px_rgba(212,175,55,0.4)] flex items-center justify-center p-2">
          <motion.img
            src={logo}
            alt="Vasudev Digital Library"
            className="h-full w-full object-contain"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
          />
        </div>

        {/* Library Name */}
        <motion.h1
          className="mt-4 sm:mt-5 text-2xl sm:text-3xl font-bold text-white leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Vasudev Digital Library
        </motion.h1>

        <p className="mt-1.5 sm:mt-2 text-xs sm:text-base text-yellow-400 font-medium">
          Premium 24×7 Study Space
        </p>

        {/* Loading Bar */}
        <div className="mt-6 sm:mt-8 w-48 sm:w-64 h-2 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.4,
              ease: "linear",
            }}
          />
        </div>

        <motion.p
          className="mt-4 sm:mt-5 text-gray-300 text-xs sm:text-sm tracking-widest uppercase"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
}
