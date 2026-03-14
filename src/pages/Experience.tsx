import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const Experience: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-background-light min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-black tracking-widest uppercase text-xs mb-4 block"
          >
            Insights & Guides
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-medium text-background-dark mb-6"
          >
            Vrindavan <span className="text-primary italic">Experiences</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-slate-600 text-lg md:text-xl font-light leading-relaxed"
          >
            Discover the spiritual heart of India. From sacred rituals to practical travel tips, 
            explore our curated guides designed to make your Brij Yatra unforgettable.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col"
            >
              <Link to={`/experience/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-black tracking-widest uppercase text-primary border border-primary/10">
                  {post.category}
                </div>
              </Link>
              <div className="p-8 flex-grow flex flex-col">
                <div className="mb-4 flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span>{post.date}</span>
                  <span className="h-1 w-1 rounded-full bg-primary/30"></span>
                  <span>{post.author}</span>
                </div>
                <Link to={`/experience/${post.slug}`} className="block group/title">
                  <h3 className="text-2xl font-display font-medium text-background-dark mb-4 leading-tight group-hover/title:text-primary transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-slate-500 font-light leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <Link 
                    to={`/experience/${post.slug}`} 
                    className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest group/link"
                  >
                    Read Guide
                    <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
