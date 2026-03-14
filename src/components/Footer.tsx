import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-light border-t border-primary/10 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-3xl text-primary font-bold">temple_hindu</span>
            <span className="text-2xl font-display font-medium text-background-dark">Vrindavan Serenity</span>
          </div>
          <p className="text-sm text-background-dark/60 leading-relaxed mb-6">
            A boutique luxury hotel dedicated to providing a spiritual sanctuary for devotees and travelers from around the world.
          </p>
          <div className="flex gap-4">
            <a href="#" className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-background-dark transition-all">
              <span className="material-symbols-outlined text-xl font-bold">share</span>
            </a>
            <a href="#" className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-background-dark transition-all">
              <span className="material-symbols-outlined text-xl font-bold">camera</span>
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><Link to="/" className="hover:text-primary transition-colors">About Vrindavan</Link></li>
            <li><Link to="/rooms" className="hover:text-primary transition-colors">Our Suites</Link></li>
            <li><a href="#" className="hover:text-primary transition-colors">Restaurant Menu</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Pilgrim Reviews</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary text-sm font-bold">phone</span> 
              +91 9306592069
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary text-sm font-bold">mail</span> 
              amanbhatiya153@gmail.com
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary text-sm font-bold">location_on</span> 
              Krishna Balaram International Guest House, Bhaktivedanta Swami Marg, Raman Reiti, Vrindavan, Uttar Pradesh 281121
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Spiritual Experience</h4>
          <p className="text-xs text-slate-500 leading-relaxed italic border-l-2 border-primary pl-4">
            "Vrindavan is not just a place, it's a state of consciousness. We help you experience that divinity in comfort."
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
        <p>© 2024 Vrindavan Serenity Luxury Hotel. All spiritual rights reserved.</p>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-2">
          <Link to="/legal/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/legal/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          <Link to="/legal/refund-policy" className="hover:text-primary transition-colors">Refund Policy</Link>
          <Link to="/legal/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
