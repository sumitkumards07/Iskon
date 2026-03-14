import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Dr. Ananya Sharma",
    location: "London, UK",
    text: "The proximity to ISKCON is unbelievable. I could hear the bells for Mangala Aarti from my room. Truly a spiritual sanctuary with 5-star comfort.",
    rating: 5
  },
  {
    name: "Rajesh Mukerjee",
    location: "Kolkata, India",
    text: "Finding a hygienic and premium stay in Vrindavan was always a challenge until I found Serenity. The staff's devotion to service is remarkable.",
    rating: 5
  },
  {
    name: "Sowmya Reddy",
    location: "Hyderabad, India",
    text: "Perfect for families. We stayed with our parents and the 100m walk to the temple made it so easy for them to visit multiple times a day.",
    rating: 5
  },
  {
    name: "Michael J.",
    location: "California, USA",
    text: "A peaceful bubble in the middle of a vibrant city. The sattvic food was delicious and safe. Highly recommended for international travelers.",
    rating: 5
  },
  {
    name: "Priya Varma",
    location: "Delhi, India",
    text: "The Royal Brij theme is beautiful. It feels like staying in a palace but with the heart of a temple. Best hotel near Krishna Balaram Mandir.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-background-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4"
        >
          What Our Guests Say
        </motion.h3>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-medium text-background-dark mb-6"
        >
          Inspiring stories from pilgrims and travelers <br className="hidden md:block"/> who found peace at Shri Kainchi Dham.
        </motion.h2>
      </div>

      <div className="relative flex overflow-hidden group">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            }
          }}
          className="flex gap-8 whitespace-nowrap py-4 px-4"
        >
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div 
              key={idx}
              className="inline-block w-[350px] md:w-[450px] bg-white p-8 md:p-10 rounded-[2.5rem] border border-primary/5 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group/card"
            >
              <div className="flex text-primary mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm font-bold">star</span>
                ))}
              </div>
              <p className="text-lg md:text-xl font-light text-background-dark/80 whitespace-normal leading-relaxed mb-8 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-background-dark">{t.name}</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
