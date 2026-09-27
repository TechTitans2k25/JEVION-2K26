import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import MobileBottomNav from './MobileBottomNav';
import Footer from './Footer';
import PageTransition from './PageTransition';
import { useIsMobile } from '../../hooks';

const Layout: React.FC = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const isHome = location.pathname === '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-[#F5F2EA] font-sans selection:bg-[#FF6A00] selection:text-white">
      <Navbar />
      
      <main className={`flex-grow ${isHome ? '' : 'pt-24'} pb-20 md:pb-0 relative overflow-hidden`}>
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>

      <Footer />
      
      {isMobile && <MobileBottomNav />}
    </div>
  );
};

export default Layout;
