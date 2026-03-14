import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Layout from './components/Layout';

// Lazy loaded components for code splitting
const Home = lazy(() => import('./pages/Home'));
const Rooms = lazy(() => import('./pages/Rooms'));
const RoomDetails = lazy(() => import('./pages/RoomDetails'));
const LocationPage = lazy(() => import('./pages/Location'));
const Enquiry = lazy(() => import('./pages/Enquiry'));
const Experience = lazy(() => import('./pages/Experience'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const LegalPage = lazy(() => import('./pages/LegalPage'));

// Simple loading fallback
const PageLoader = () => (
  <div className="min-h-screen bg-background-dark flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <SpeedInsights />
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/experience/:slug" element={<BlogPost />} />
            <Route path="/legal/:type" element={<LegalPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
