import React from 'react';
import { motion } from 'framer-motion';

const Location: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-medium mb-4">Finding Serenity</h1>
          <p className="text-background-dark/60 text-lg max-w-2xl">
            Steps away from the sacred, miles away from the ordinary. Vrindavan Serenity is perfectly positioned for your spiritual practice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            {/* Proximity List */}
            <section>
              <h3 className="text-xl font-display font-medium mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary font-bold">near_me</span>
                Key Landmarks
              </h3>
              <div className="space-y-4">
                {[
                  { name: "ISKCON Krishna Balaram Mandir", dist: "100m", time: "2 min walk", icon: "temple_hindu" },
                  { name: "Prem Mandir", dist: "500m", time: "8 min walk", icon: "favorite" },
                  { name: "Banke Bihari Mandir", dist: "1.5km", time: "10 min by E-Rickshaw", icon: "auto_awesome" },
                  { name: "Vrindavan Railway Station", dist: "3km", time: "15 min drive", icon: "train" }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                      <span className="material-symbols-outlined font-bold">{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold">{item.name}</h4>
                      <div className="flex gap-4 text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
                        <span>{item.dist}</span>
                        <span className="text-primary">•</span>
                        <span>{item.time}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Travel Info */}
            <section className="bg-primary/5 p-8 rounded-[2rem] border border-primary/20">
               <h3 className="text-lg font-bold mb-4">How to Reach Us</h3>
               <div className="space-y-6">
                 <div>
                   <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Our Address</h4>
                   <p className="text-sm text-slate-800 font-medium">Krishna Balaram International Guest House, Bhaktivedanta Swami Marg, Raman Reiti, Vrindavan, Uttar Pradesh 281121</p>
                 </div>
                 <div>
                   <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">By Train</h4>
                   <p className="text-sm text-slate-600">The nearest major station is Mathura Junction (15km). Local trains also stop at Vrindavan Station.</p>
                 </div>
                 <div>
                   <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">By Road</h4>
                   <p className="text-sm text-slate-600">Well connected via the Yamuna Expressway. Private parking is available at the hotel.</p>
                 </div>
               </div>
            </section>
          </div>

          {/* Map Side */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white aspect-square relative group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALNNRjQbR2EV9H9cl-5mSaA1EZO0TvttHmTlwEmccZWLK-6uxCcQkxj2UB5S3O_gr-3kTKryINBU1I75NrLc1sLuULGFNxnpAOKTG_0yeOlpPlOkImzTKUyjaj4YZYLMkgWaFJ-_mr2EoF0Neqa2qk-G-15OQeajoQjk2QlbUDoHm9-wKFUKTHhJx9s20w7sp-YIyhTcXgLDpBcvxyH10PJLjMCIVh80Le5vk46P0QuX_h2-Sb2NLKoNECaxgrHVbDbBzTGN-hMg"
                alt="Detailed Map"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[15s]"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                 <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ repeat: Infinity, duration: 2 }}
                    className="text-primary drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                 >
                   <span className="material-symbols-outlined text-6xl font-bold fill-1">location_on</span>
                 </motion.div>
                 <span className="bg-background-dark text-white px-4 py-1.5 rounded-full text-xs font-black shadow-xl mt-2 whitespace-nowrap">
                   VRINDAVAN SERENITY
                 </span>
              </div>
              <div className="absolute bottom-10 inset-x-10">
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Krishna+Balaram+International+Guest+House,+Bhaktivedanta+Swami+Marg,+Raman+Reiti,+Vrindavan,+Uttar+Pradesh+281121"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-background-dark py-4 rounded-2xl font-black shadow-2xl hover:bg-primary transition-colors flex items-center justify-center gap-3"
                >
                  <span className="material-symbols-outlined font-bold">directions</span>
                  GET LIVE DIRECTIONS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
