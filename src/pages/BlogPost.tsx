import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (!post) {
      navigate('/experience');
    }
    window.scrollTo(0, 0);
  }, [post, navigate]);

  if (!post) return null;

  // Simple parser for the draft content
  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-2xl font-display font-medium text-background-dark mt-10 mb-4">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('* ')) {
        return <li key={index} className="ml-6 mb-2 text-slate-600 font-light list-disc">{line.replace('* ', '')}</li>;
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return <p key={index} className="text-slate-600 font-light leading-relaxed mb-4 text-justify">{line}</p>;
    });
  };

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <article className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link 
            to="/experience" 
            className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest mb-8 hover:-translate-x-1 transition-transform"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Guides
          </Link>
          <div className="flex items-center gap-4 text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">
            <span>{post.category}</span>
            <span className="h-1 w-1 rounded-full bg-primary/30"></span>
            <span>{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-medium text-background-dark leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">person</span>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-background-dark">{post.author}</p>
              <p className="text-[10px] text-slate-400 uppercase">Official Hotel Guide</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl"
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover" 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="prose prose-slate max-w-none"
        >
          {renderContent(post.content)}
        </motion.div>

        <div className="mt-20 pt-10 border-t border-slate-100">
          <div className="bg-background-dark/5 p-10 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h4 className="text-2xl font-display font-medium text-background-dark mb-2 text-primary">Experience this first-hand</h4>
              <p className="text-slate-600 font-light">Join us just 100 meters away from the divine Krishna Balaram Mandir.</p>
            </div>
            <Link 
              to="/enquiry" 
              className="px-10 py-5 bg-primary text-background-dark rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl active:scale-95 whitespace-nowrap"
            >
              Book Your Sanctuary
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
