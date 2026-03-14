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
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="size-14 bg-white text-background-dark rounded-full shadow-2xl border border-primary/20 flex items-center justify-center group transition-all"
          title="Call Now"
        >
          <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
            <span className="material-symbols-outlined text-2xl font-bold">call</span>
          </div>
        </motion.a>

        {/* WhatsApp Button */}
        <motion.a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          className="size-14 bg-white text-background-dark rounded-full shadow-2xl border border-primary/20 flex items-center justify-center group transition-all"
          title="WhatsApp Us"
        >
          <div className="size-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
            <span className="material-symbols-outlined text-2xl font-bold">chat</span>
          </div>
        </motion.a>
      </div>
    </div>
  );
};

export default FloatingActions;
