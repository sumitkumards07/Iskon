import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const RoomDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const rooms = [
    {
      id: 'ac-2-bed',
      title: "Ac Room 2 bed",
      price: "₹1,650",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuByWC2ZHoI6gTvtBAA0RaiwhIPqlhebSYKsZC_MGJpISiL7mYEsgwoi6dn2MqtIS79lVB-K2XUGcJ46Ze-0q_DIFT3dZMkJKXD2EEwRLx6qjCWFhvW3SF1qNlpI0A6v64mU-A9alWV2YcR_2-4Lfl87cx6hJwY9QSCnhpcMW0GaZtas2zbEU5jHSB1JST7SRTtCj_zTWEck_mloi7VNSfotEkD1ABPCPtVmSKnvO6h0LkNVmC7c2Il6L2zdXQjjGjGO0AOKkpp8vg",
      desc: "Compact and comfortable with 2 beds and full AC, ideal for travelers.",
      longDesc: "Experience the perfect blend of simplicity and comfort. Our AC 2-bed rooms are designed for the modern pilgrim who values cleanliness, comfort, and peace. Each room is equipped with high-quality linens, adjustable air conditioning, and a serene atmosphere that complements your spiritual journey in Vrindavan.",
      amenities: ['2 Beds', 'AC', 'WiFi', 'TV', 'Hot Water', 'Daily Housekeeping']
    },
    {
      id: 'best-room',
      title: "Best Room",
      price: "₹2,445",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSF99jH2rl5elqmoOOHVkD4UVnLKiWlGCWG21zz5yn2amweXaL8U13gK6SuZDw7WsLC_rYajUWgAIfTb9stX8X39vVkKMZadZXxQ3Oq8ApzetCEwe7Dpnw5-xjYff0kUGaiu71ThIcZNyQc8EVMdDkrjTnZuMp-pLYQRa0QH7OxI7m8bdKCgVP-OJtC0M3yCRSki2vBu1oAaHECDDdGVAvbuk5XL4QTkMdJQ6UXKiXRFkrAgTs1drTRLowbOgHly-PcRUXVl6sGA",
      desc: "Our premium offering with the best views and comfort.",
      longDesc: "The 'Best Room' at Vrindavan Serenity is our flagship suite, offering unparalleled luxury and a panoramic view of the holy city. Designed with premium materials and traditional aesthetics, this suite provides a spacious living area, a majestic king-size bed, and a private sanctuary for meditation and relaxation.",
      amenities: ['Premium Bed', 'AC', 'High-Speed WiFi', 'Smart TV', 'Luxury Bath', 'Temple View'],
      badge: 'TOP CHOICE'
    },
    {
      id: 'ac-3-bed',
      title: "Ac room 3 bed",
      price: "₹2,050",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9fHE0kAT7kqAbJZiOo9IVoy0ZLk_K1SDrU_WwqX5vhhloRsWn2-i0HhfsAqdxwL1_hMwPvXoYKzEHX1VM_CN2BEGSGD3kETqO4GzqVBwti4qyS3fsMhCt9u-zd3rgs7BbREqwntMkJfUjdrT6-Y6pm7LmloAQO7UH4I8x7m_iTb9NO_vFNGUS1RpV3GwZAipANERGb8KoTDq96dXkm_2F8YMn1fE6BQKeg7xX9hyirCXgZbsZUbDV0rDsnP-Y2I7eQ878EiQKHw",
      desc: "Spacious room with 3 beds, perfect for groups.",
      longDesc: "Ideal for families or groups of pilgrims, our AC 3-bed room offers ample space and comfort for everyone. Maintain the collective spirit of your pilgrimage without compromising on luxury. The room features three comfortable beds, integrated storage, and a layout that promotes shared spiritual practice and rest.",
      amenities: ['3 Beds', 'AC', 'WiFi', 'TV', 'Hot Water', 'Extra Storage']
    }
  ];

  const room = rooms.find(r => r.id === id);

  if (!room) {
    return (
      <div className="pt-32 pb-20 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Room Not Found</h2>
        <Link to="/rooms" className="text-primary font-bold hover:underline">View All Rooms</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/rooms" className="flex items-center gap-2 text-primary font-bold mb-8 hover:-translate-x-1 transition-transform">
          <span className="material-symbols-outlined">arrow_back</span>
          BACK TO COLLECTIONS
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square"
          >
            <img src={room.img} alt={room.title} className="w-full h-full object-cover" />
          </motion.div>

          <div className="flex flex-col justify-center">
            <div className="mb-8">
              {room.badge && (
                <span className="bg-primary text-background-dark px-4 py-1.5 rounded-full text-xs font-black shadow-lg mb-6 inline-block">
                  {room.badge}
                </span>
              )}
              <h1 className="text-4xl md:text-5xl font-display font-medium mb-4">{room.title}</h1>
              <p className="text-3xl font-bold text-primary mb-6">{room.price} <span className="text-base text-slate-400 font-normal">/ night</span></p>
              <p className="text-background-dark/60 text-lg leading-relaxed mb-8">
                {room.longDesc}
              </p>
            </div>

            <div className="mb-10">
              <h3 className="font-bold mb-4 uppercase tracking-widest text-xs text-slate-400">Amenities</h3>
              <div className="flex flex-wrap gap-3">
                {room.amenities.map(amenity => (
                  <div key={amenity} className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-xl text-sm font-medium text-background-dark border border-primary/10">
                    <span className="material-symbols-outlined text-primary text-sm font-bold">check_circle</span>
                    {amenity}
                  </div>
                ))}
              </div>
            </div>

            <Link 
              to="/enquiry" 
              className="w-full h-16 bg-primary text-background-dark font-black text-lg rounded-2xl shadow-xl hover:shadow-primary/20 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined font-bold">event</span>
              CHECK AVAILABILITY & BOOK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
