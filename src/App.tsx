import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import { ErrorBoundary } from './components/ui/ErrorBoundary';

// Eager load Home
import HomePage from './pages/HomePage';

// Lazy load other pages
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const EventsPage = React.lazy(() => import('./pages/EventsPage'));
const TechnicalEventsPage = React.lazy(() => import('./pages/TechnicalEventsPage'));
const NonTechnicalEventsPage = React.lazy(() => import('./pages/NonTechnicalEventsPage'));
const EventDetailPage = React.lazy(() => import('./pages/EventDetailPage'));
const SchedulePage = React.lazy(() => import('./pages/SchedulePage'));
const RulesPage = React.lazy(() => import('./pages/RulesPage'));
const RegisterPage = React.lazy(() => import('./pages/RegisterPage'));
const RegisterSuccessPage = React.lazy(() => import('./pages/RegisterSuccessPage'));
const GalleryPage = React.lazy(() => import('./pages/GalleryPage'));
const ResultsPage = React.lazy(() => import('./pages/ResultsPage'));
const LeaderboardPage = React.lazy(() => import('./pages/LeaderboardPage'));
const ParticipantPage = React.lazy(() => import('./pages/ParticipantPage'));
const PassPage = React.lazy(() => import('./pages/PassPage'));
const AnnouncementsPage = React.lazy(() => import('./pages/AnnouncementsPage'));
const FAQPage = React.lazy(() => import('./pages/FAQPage'));
const VenuePage = React.lazy(() => import('./pages/VenuePage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const SponsorsPage = React.lazy(() => import('./pages/SponsorsPage'));
const CommandCenterPage = React.lazy(() => import('./pages/CommandCenterPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

// Loader component for Suspense
const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center bg-[#050505]">
    <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-[#FF6A00]"></div>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<Suspense fallback={<PageLoader />}><AboutPage /></Suspense>} />
          <Route path="events" element={<Suspense fallback={<PageLoader />}><EventsPage /></Suspense>} />
          <Route path="events/technical" element={<Suspense fallback={<PageLoader />}><TechnicalEventsPage /></Suspense>} />
          <Route path="events/non-technical" element={<Suspense fallback={<PageLoader />}><NonTechnicalEventsPage /></Suspense>} />
          <Route path="events/:slug" element={<Suspense fallback={<PageLoader />}><EventDetailPage /></Suspense>} />
          <Route path="schedule" element={<Suspense fallback={<PageLoader />}><SchedulePage /></Suspense>} />
          <Route path="rules" element={<Suspense fallback={<PageLoader />}><RulesPage /></Suspense>} />
          <Route path="register" element={<Suspense fallback={<PageLoader />}><RegisterPage /></Suspense>} />
          <Route path="register/success" element={<Suspense fallback={<PageLoader />}><RegisterSuccessPage /></Suspense>} />
          <Route path="gallery" element={<Suspense fallback={<PageLoader />}><GalleryPage /></Suspense>} />
          <Route path="results" element={<Suspense fallback={<PageLoader />}><ResultsPage /></Suspense>} />
          <Route path="leaderboard" element={<Suspense fallback={<PageLoader />}><LeaderboardPage /></Suspense>} />
          <Route path="participant" element={<Suspense fallback={<PageLoader />}><ParticipantPage /></Suspense>} />
          <Route path="pass" element={<Suspense fallback={<PageLoader />}><PassPage /></Suspense>} />
          <Route path="announcements" element={<Suspense fallback={<PageLoader />}><AnnouncementsPage /></Suspense>} />
          <Route path="faq" element={<Suspense fallback={<PageLoader />}><FAQPage /></Suspense>} />
          <Route path="venue" element={<Suspense fallback={<PageLoader />}><VenuePage /></Suspense>} />
          <Route path="contact" element={<Suspense fallback={<PageLoader />}><ContactPage /></Suspense>} />
          <Route path="sponsors" element={<Suspense fallback={<PageLoader />}><SponsorsPage /></Suspense>} />
          <Route path="command-center" element={<Suspense fallback={<PageLoader />}><CommandCenterPage /></Suspense>} />
          <Route path="*" element={<Suspense fallback={<PageLoader />}><NotFoundPage /></Suspense>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AnimatedRoutes />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
