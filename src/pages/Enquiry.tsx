import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Enquiry: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roomType: 'Ac Room 2 bed',
    guests: 2,
    checkIn: '',
    checkOut: '',
    requests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry! Our concierge will contact you shortly.');
  };

  return (
    <div className="pt-24 pb-20 px-6 bg-background-light">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-black mb-2">Plan Your Sacred Stay</h1>
          <p className="text-slate-600 text-lg">Vrindavan awaits you. Fill in the details below to check availability.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Form */}
          <div className="flex-1">
            <motion.form 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {/* Personal Info */}
              <section className="bg-white p-8 rounded-[2rem] shadow-lg border border-primary/5">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary font-bold">person</span>
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 p-1">Full Name</label>
                    <input 
                      required
                      className="w-full h-14 px-6 rounded-2xl bg-background-light border-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Radhe Shyam"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 p-1">Email Address</label>
                    <input 
                      required
                      type="email"
                      className="w-full h-14 px-6 rounded-2xl bg-background-light border-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="example@stay.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 p-1">Phone Number</label>
                    <div className="flex gap-2">
                      <div className="w-16 h-14 bg-primary/10 rounded-2xl flex items-center justify-center font-bold text-primary">+91</div>
                      <input 
                        required
                        className="flex-1 h-14 px-6 rounded-2xl bg-background-light border-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Booking Details */}
              <section className="bg-white p-8 rounded-[2rem] shadow-lg border border-primary/5">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary font-bold">meeting_room</span>
                  Stay Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 p-1">Room Type</label>
                    <select 
                      className="w-full h-14 px-6 rounded-2xl bg-background-light border-none focus:ring-2 focus:ring-primary transition-all"
                      value={formData.roomType}
                      onChange={(e) => setFormData({...formData, roomType: e.target.value})}
                    >
                      <option>Ac Room 2 bed</option>
                      <option>Best Room</option>
                      <option>Ac room 3 bed</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 p-1">Number of Guests</label>
                    <div className="flex items-center h-14 bg-background-light rounded-2xl px-2">
                      <button 
                        type="button"
                        onClick={() => setFormData({...formData, guests: Math.max(1, formData.guests - 1)})}
                        className="size-10 flex items-center justify-center hover:bg-primary/20 rounded-xl transition-colors"
                      >
                        <span className="material-symbols-outlined font-bold">remove</span>
                      </button>
                      <span className="flex-1 text-center font-bold">{formData.guests} Guests</span>
                      <button 
                        type="button"
                        onClick={() => setFormData({...formData, guests: formData.guests + 1})}
                        className="size-10 flex items-center justify-center hover:bg-primary/20 rounded-xl transition-colors"
                      >
                        <span className="material-symbols-outlined font-bold">add</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 p-1">Check In</label>
                    <input 
                      type="date"
                      className="w-full h-14 px-6 rounded-2xl bg-background-light border-none focus:ring-2 focus:ring-primary transition-all"
                      value={formData.checkIn}
                      onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 p-1">Check Out</label>
                    <input 
                      type="date"
                      className="w-full h-14 px-6 rounded-2xl bg-background-light border-none focus:ring-2 focus:ring-primary transition-all"
                      value={formData.checkOut}
                      onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                    />
                  </div>
                </div>
              </section>

              <button 
                 type="submit"
                 className="w-full h-16 bg-primary text-background-dark font-black text-lg rounded-2xl shadow-xl hover:shadow-primary/20 hover:scale-[1.01] active:scale-95 transition-all"
              >
                SEND ENQUIRY
              </button>
            </motion.form>
          </div>

          {/* Sidebar Info */}
          <aside className="lg:w-80 flex flex-col gap-8">
             <div className="bg-background-dark text-white p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Why Book With Us?</h3>
                  <ul className="space-y-4">
                    {[
                      { icon: 'priority_high', text: 'Priority Temple Access' },
                      { icon: 'restaurant', text: 'Free Sattvic Breakfast' },
                      { icon: 'support_agent', text: '24/7 Pilgrimage Guide' }
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-4 items-center">
                        <span className="material-symbols-outlined text-primary font-bold">{item.icon}</span>
                        <span className="text-sm font-medium opacity-90">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-10">
                   <span className="material-symbols-outlined text-[150px]">verified</span>
                </div>
             </div>

             <div className="bg-primary/5 p-8 rounded-[2rem] border border-primary/20 border-dashed">
                <h4 className="font-bold mb-4">Need Help?</h4>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  Our team is available 24/7 to assist with group bookings or special requirements.
                </p>
                <div className="flex flex-col gap-4">
                  <a href="tel:+918001234567" className="flex items-center gap-4 text-primary font-bold hover:translate-x-1 transition-transform">
                    <span className="material-symbols-outlined font-bold">call</span>
                    +91 800 123 4567
                  </a>
                  <a href="mailto:stay@vrindavanserenity.com" className="flex items-center gap-4 text-primary font-bold hover:translate-x-1 transition-transform">
                    <span className="material-symbols-outlined font-bold">mail</span>
                    Email Us
                  </a>
                </div>
             </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
