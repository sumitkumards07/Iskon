import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { legalData } from '../data/legalDetails';

const LegalPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const content = type ? legalData[type] : null;

  useEffect(() => {
    if (!content) {
      navigate('/');
    }
    window.scrollTo(0, 0);
  }, [content, navigate]);

  if (!content) return null;

  return (
    <div className="pt-24 pb-20 bg-background-light min-h-screen">
      <article className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 border-b border-primary/10 pb-10"
        >
          <h1 className="text-4xl md:text-6xl font-display font-medium text-background-dark mb-4">
            {content.title}
          </h1>
          <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">
            Last Updated: {content.lastUpdated}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          {content.sections.map((section, idx) => (
            <div key={idx}>
              {section.heading && (
                <h2 className="text-2xl font-display font-medium text-background-dark mb-4 text-primary">
                  {section.heading}
                </h2>
              )}
              {Array.isArray(section.content) ? (
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 font-light leading-relaxed">
                      <span className="text-primary mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-600 font-light leading-relaxed text-justify">
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </motion.div>

        <div className="mt-20 p-10 bg-white rounded-[2rem] border border-slate-100 shadow-sm text-center">
          <p className="text-background-dark/60 font-light mb-6">
            Have questions about our policies? Contact our support team.
          </p>
          <a 
            href="mailto:amanbhatiya153@gmail.com" 
            className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest hover:gap-3 transition-all"
          >
            Email Support
            <span className="material-symbols-outlined text-sm">mail</span>
          </a>
        </div>
      </article>
    </div>
  );
};

export default LegalPage;
