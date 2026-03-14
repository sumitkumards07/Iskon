import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-105" 
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(26, 42, 78, 0.4), rgba(26, 42, 78, 0.8)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0wu8UPxxhh7IWuOt2lr2xnF9J_NqkpAQAR6yVzBKcwporSEeekyZ7C3mKu9Hc3L7n8maEv3KlBtfMLNN5kMYZXn4ilQGRn2ZAZ_b9KJFHYSnyx0UHIPvn9GWX3lesIl-jXEiT0fwgK-PGuUSgGM5Gaw09T9rDSXMC2C9ZWmnuWzNjt02dUn1Xv8_4VmzyqC8IRWVeGAsXlq8ECOov_W8fuwGXMRCPH3zWO66neS0z1Wu36ISteCvmjfBvfS7M7MnH51u0cxipRg")` 
          }}
        />
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-7xl font-display font-medium text-white mb-6 leading-[1.1] mx-auto"
          >
            Your Sanctuary in the Holy City:<br/>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-primary italic"
            >
              The Premier Luxury Hotel Near ISKCON Vrindavan
            </motion.span>
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl text-slate-200 text-lg md:text-xl font-light mb-10 leading-relaxed mx-auto font-body"
          >
            Wake up to the sacred chants of the Krishna Balaram Mandir. Experience unparalleled luxury and spiritual tranquility just 100 meters from ISKCON Vrindavan.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/enquiry" 
              className="px-10 py-5 bg-primary text-background-dark rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl flex items-center gap-3 active:scale-95"
            >
              Reserve Your Serene Stay (Direct Booking Best Price)
            </Link>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
              Watch the Serenity
            </button>
          </motion.div>
        </div>
      </section>

      {/* Floating Search/Check Bar */}
      <section className="relative -mt-16 z-20 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-primary/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Check In</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary font-bold">calendar_today</span>
                <input 
                  type="date" 
                  className="w-full pl-10 pr-4 py-3 rounded-xl border-slate-200 bg-background-light text-sm focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Check Out</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary font-bold">calendar_today</span>
                <input 
                  type="date" 
                  className="w-full pl-10 pr-4 py-3 rounded-xl border-slate-200 bg-background-light text-sm focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Guests</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary font-bold">group</span>
                <select className="w-full pl-10 pr-4 py-3 rounded-xl border-slate-200 bg-background-light text-sm focus:ring-primary focus:border-primary appearance-none">
                  <option>2 Adults, 0 Children</option>
                  <option>1 Adult</option>
                  <option>2 Adults, 1 Child</option>
                </select>
              </div>
            </div>
            <button className="w-full bg-primary text-background-dark h-[50px] rounded-xl font-black text-sm tracking-widest flex items-center justify-center gap-2 hover:brightness-105 hover:scale-[1.02] transition-all shadow-lg">
              CHECK AVAILABILITY
              <span className="material-symbols-outlined font-bold">arrow_forward</span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* Featured Rooms Section */}
      <section className="py-24 bg-background-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h3 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">Luxury Accommodations</h3>
              <h2 className="text-4xl md:text-5xl font-display font-medium">Divine Comfort in Every Suite</h2>
            </div>
            <Link to="/rooms" className="text-primary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
              VIEW ALL ROOMS <span className="material-symbols-outlined font-bold">arrow_right_alt</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 'ac-2-bed',
                img: "/rooms/premium_room_1650.png",
                title: "Ac Room 2 bed",
                price: "₹1,650",
                desc: "Compact and comfortable with 2 beds and full AC, ideal for travelers."
              },
              {
                id: 'best-room',
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSF99jH2rl5elqmoOOHVkD4UVnLKiWlGCWG21zz5yn2amweXaL8U13gK6SuZDw7WsLC_rYajUWgAIfTb9stX8X39vVkKMZadZXxQ3Oq8ApzetCEwe7Dpnw5-xjYff0kUGaiu71ThIcZNyQc8EVMdDkrjTnZuMp-pLYQRa0QH7OxI7m8bdKCgVP-OJtC0M3yCRSki2vBu1oAaHECDDdGVAvbuk5XL4QTkMdJQ6UXKiXRFkrAgTs1drTRLowbOgHly-PcRUXVl6sGA",
                title: "Best Room",
                price: "₹2,445",
                desc: "Our premium offering with the best views and comfort.",
                badge: "TOP CHOICE"
              },
              {
                id: 'ac-3-bed',
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9fHE0kAT7kqAbJZiOo9IVoy0ZLk_K1SDrU_WwqX5vhhloRsWn2-i0HhfsAqdxwL1_hMwPvXoYKzEHX1VM_CN2BEGSGD3kETqO4GzqVBwti4qyS3fsMhCt9u-zd3rgs7BbREqwntMkJfUjdrT6-Y6pm7LmloAQO7UH4I8x7m_iTb9NO_vFNGUS1RpV3GwZAipANERGb8KoTDq96dXkm_2F8YMn1fE6BQKeg7xX9hyirCXgZbsZUbDV0rDsnP-Y2I7eQ878EiQKHw",
                title: "Ac room 3 bed",
                price: "₹2,050",
                desc: "Spacious room with 3 beds, perfect for groups."
              }
            ].map((room, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6">
                  <img src={room.img} alt={room.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  {room.badge && (
                    <div className="absolute top-6 left-6 bg-primary text-background-dark px-4 py-1.5 rounded-full text-xs font-black shadow-lg">
                      {room.badge}
                    </div>
                  )}
                  <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <p className="text-primary text-lg font-bold">{room.price} / Night</p>
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{room.title}</h4>
                <p className="text-slate-400 font-light line-clamp-2 mb-6">{room.desc}</p>
                <Link 
                  to={`/enquiry?room=${room.id}`} 
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all"
                >
                  BOOK NOW
                  <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h3 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">The Serenity Difference</h3>
          <h2 className="text-4xl md:text-5xl font-bold">Why Discriminating Seekers Choose Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: 'location_on',
              title: 'Sacred Proximity',
              desc: "Located just 2 minutes walking distance from ISKCON's main gate, ensuring you never miss a Mangala Aarti."
            },
            {
              icon: 'spa',
              title: 'Spiritual Serenity',
              desc: "Soundproofed rooms and meditation halls designed to preserve the quietude of your spiritual practice."
            },
            {
              icon: 'restaurant',
              title: 'Gourmet Sattvic Dining',
              desc: "Fine dining experience serving pure vegetarian, onion-free, and garlic-free cuisines prepared with devotion."
            }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-primary/5 border border-primary/10 transition-shadow hover:shadow-xl group"
            >
              <div className="size-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                <span className="material-symbols-outlined text-4xl font-bold">{feature.icon}</span>
              </div>
              <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Proximity / Map CTA */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALNNRjQbR2EV9H9cl-5mSaA1EZO0TvttHmTlwEmccZWLK-6uxCcQkxj2UB5S3O_gr-3kTKryINBU1I75NrLc1sLuULGFNxnpAOKTG_0yeOlpPlOkImzTKUyjaj4YZYLMkgWaFJ-_mr2EoF0Neqa2qk-G-15OQeajoQjk2QlbUDoHm9-wKFUKTHhJx9s20w7sp-YIyhTcXgLDpBcvxyH10PJLjMCIVh80Le5vk46P0QuX_h2-Sb2NLKoNECaxgrHVbDbBzTGN-hMg" 
                alt="Proximity Map"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[20s]"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <motion.div 
               initial={{ scale: 0 }}
               whileInView={{ scale: 1 }}
               viewport={{ once: true }}
               className="absolute -bottom-8 -right-8 bg-primary p-10 rounded-3xl hidden md:block shadow-2xl"
            >
              <div className="text-background-dark">
                <p className="text-5xl font-black mb-1">100m</p>
                <p className="text-sm font-bold uppercase tracking-widest">To ISKCON Gate</p>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">Location & Accessibility</h3>
              <h2 className="text-4xl font-display font-medium mb-6">At the Heart of Brij</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Vrindavan Serenity is strategically located to offer you the ease of walking to the most sacred sites while maintaining a bubble of peace away from the main road bustle.
              </p>
              <ul className="space-y-4">
                {[
                  "100 Meters to ISKCON (Krishna Balaram Mandir)",
                  "500 Meters to Prem Mandir",
                  "1.5 KM to Banke Bihari Mandir"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-sm font-bold">check_circle</span>
                    </div>
                    <span className="font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <Link to="/location" className="bg-background-dark text-white w-fit px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all text-center">
              Get Directions
            </Link>
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="mb-24 px-6 pt-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto rounded-[3rem] bg-primary p-12 md:p-20 text-center flex flex-col items-center shadow-2xl overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 p-20 opacity-10">
             <span className="material-symbols-outlined text-[300px]">temple_hindu</span>
          </div>
          <span className="material-symbols-outlined text-6xl text-background-dark mb-6 font-bold">mail_outline</span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-background-dark mb-6">Plan Your Pilgrimage</h2>
          <p className="max-w-xl text-background-dark/80 text-lg mb-10 font-medium">
            Have special requirements or planning a group visit? Leave your contact details and our concierge will curate your spiritual stay.
          </p>
          <div className="w-full max-w-lg flex flex-col sm:flex-row gap-4 relative z-10">
            <input 
              className="flex-1 px-6 py-4 rounded-2xl border-none bg-white text-slate-900 focus:ring-2 focus:ring-background-dark shadow-inner placeholder:text-slate-400" 
              placeholder="Your Email Address" 
              type="email"
            />
            <button className="bg-background-dark text-white px-10 py-4 rounded-2xl font-bold hover:brightness-125 hover:scale-105 transition-all shadow-xl">
              Send Inquiry
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
