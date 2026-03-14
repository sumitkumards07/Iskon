import React from 'react';
import { motion } from 'framer-motion';

const FloatingActions: React.FC = () => {
  const phoneNumber = "9306592069";
  const whatsappNumber = "919306592069";

  return (
    <div className="fixed bottom-6 inset-x-0 z-50 pointer-events-none px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full pointer-events-auto">
        {/* Call Now Button */}
        <motion.a
          href={`tel:${phoneNumber}`}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-white text-background-dark px-5 py-3 rounded-full shadow-2xl border border-primary/20 group transition-all"
        >
          <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
            <span className="material-symbols-outlined text-lg font-bold">call</span>
          </div>
          <span className="text-sm font-bold tracking-tight">Call Now</span>
        </motion.a>

        {/* WhatsApp Button */}
        <motion.a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-white text-background-dark px-5 py-3 rounded-full shadow-2xl border border-primary/20 group transition-all"
        >
          <div className="size-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
            <span className="material-symbols-outlined text-lg font-bold">chat</span>
          </div>
          <span className="text-sm font-bold tracking-tight">WhatsApp</span>
        </motion.a>
      </div>
    </div>
  );
};

export default FloatingActions;
