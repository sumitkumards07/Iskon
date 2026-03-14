import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Rooms: React.FC = () => {
  const rooms = [
    {
      id: 'ac-2-bed',
      title: "Ac Room 2 bed",
      price: "₹1,650",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuByWC2ZHoI6gTvtBAA0RaiwhIPqlhebSYKsZC_MGJpISiL7mYEsgwoi6dn2MqtIS79lVB-K2XUGcJ46Ze-0q_DIFT3dZMkJKXD2EEwRLx6qjCWFhvW3SF1qNlpI0A6v64mU-A9alWV2YcR_2-4Lfl87cx6hJwY9QSCnhpcMW0GaZtas2zbEU5jHSB1JST7SRTtCj_zTWEck_mloi7VNSfotEkD1ABPCPtVmSKnvO6h0LkNVmC7c2Il6L2zdXQjjGjGO0AOKkpp8vg",
      desc: "Compact and comfortable with 2 beds and full AC, ideal for travelers.",
      amenities: ['2 Beds', 'AC', 'WiFi', 'TV', 'Hot Water']
    },
    {
      id: 'best-room',
      title: "Best Room",
      price: "₹2,445",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSF99jH2rl5elqmoOOHVkD4UVnLKiWlGCWG21zz5yn2amweXaL8U13gK6SuZDw7WsLC_rYajUWgAIfTb9stX8X39vVkKMZadZXxQ3Oq8ApzetCEwe7Dpnw5-xjYff0kUGaiu71ThIcZNyQc8EVMdDkrjTnZuMp-pLYQRa0QH7OxI7m8bdKCgVP-OJtC0M3yCRSki2vBu1oAaHECDDdGVAvbuk5XL4QTkMdJQ6UXKiXRFkrAgTs1drTRLowbOgHly-PcRUXVl6sGA",
      desc: "Our premium offering with the best views and comfort.",
      amenities: ['Comfortable Bed', 'AC', 'WiFi', 'TV', 'Hot Water'],
      badge: 'TOP CHOICE'
    },
    {
      id: 'ac-3-bed',
      title: "Ac room 3 bed",
      price: "₹2,050",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9fHE0kAT7kqAbJZiOo9IVoy0ZLk_K1SDrU_WwqX5vhhloRsWn2-i0HhfsAqdxwL1_hMwPvXoYKzEHX1VM_CN2BEGSGD3kETqO4GzqVBwti4qyS3fsMhCt9u-zd3rgs7BbREqwntMkJfUjdrT6-Y6pm7LmloAQO7UH4I8x7m_iTb9NO_vFNGUS1RpV3GwZAipANERGb8KoTDq96dXkm_2F8YMn1fE6BQKeg7xX9hyirCXgZbsZUbDV0rDsnP-Y2I7eQ878EiQKHw",
      desc: "Spacious room with 3 beds, perfect for groups.",
      amenities: ['3 Beds', 'AC', 'WiFi', 'TV', 'Hot Water']
    }
  ];

  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-medium mb-4">Our Sacred Suites</h1>
          <p className="text-background-dark/60 text-lg max-w-2xl">
            Each room at Vrindavan Serenity is designed to provide a tranquil atmosphere for your spiritual journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {rooms.map((room, idx) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row bg-white rounded-[2rem] overflow-hidden shadow-xl border border-primary/10 hover:shadow-2xl transition-all group"
            >
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <img 
                  src={room.img} 
                  alt={room.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                {room.badge && (
                  <div className="absolute top-4 left-4 bg-primary text-background-dark px-3 py-1 rounded-full text-[10px] font-black">
                    {room.badge}
                  </div>
                )}
              </div>
              <div className="md:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-display font-medium group-hover:text-primary transition-colors">{room.title}</h3>
                    <p className="text-primary font-bold text-xl">{room.price}</p>
                  </div>
                  <p className="text-background-dark/50 text-sm mb-6 leading-relaxed">
                    {room.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {room.amenities.map(amenity => (
                      <span key={amenity} className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full text-slate-500">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
                <Link 
                  to={`/enquiry?room=${room.id}`} 
                  className="w-full bg-primary text-background-dark py-3 rounded-xl font-bold text-center hover:brightness-110 transition-all shadow-md active:scale-95"
                >
                  BOOK NOW
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
