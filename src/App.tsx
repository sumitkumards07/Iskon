import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import RoomDetails from './pages/RoomDetails';
import LocationPage from './pages/Location';
import Enquiry from './pages/Enquiry';
import Experience from './pages/Experience';
import BlogPost from './pages/BlogPost';
import LegalPage from './pages/LegalPage';

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
      </Layout>
    </Router>
  );
};

export default App;
