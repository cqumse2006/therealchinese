import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import DailySentencePage from '@/pages/DailySentencePage';
import SubtextPage from '@/pages/SubtextPage';
import SocialMediaPage from '@/pages/SocialMediaPage';
import CommentsPage from '@/pages/CommentsPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import NotFound from '@/pages/NotFound';

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <GoogleAnalytics />
      <QueryClientProvider client={queryClient} data-id="95lpww9b0" data-path="src/App.tsx">
        <TooltipProvider data-id="n2tigjosw" data-path="src/App.tsx">
          <Router data-id="4ei3olzwy" data-path="src/App.tsx">
            <Layout data-id="kv58lvbv7" data-path="src/App.tsx">
              <Routes data-id="wa1mhb2hy" data-path="src/App.tsx">
                <Route path="/" element={<HomePage data-id="hzqqpsb3q" data-path="src/App.tsx" />} data-id="x94lecm9g" data-path="src/App.tsx" />
                <Route path="/daily-sentence" element={<DailySentencePage data-id="20bkhtxpn" data-path="src/App.tsx" />} data-id="l5k0e4l2m" data-path="src/App.tsx" />
                <Route path="/subtext" element={<SubtextPage data-id="lx599bzxt" data-path="src/App.tsx" />} data-id="4jg79hpk2" data-path="src/App.tsx" />
                <Route path="/social-media" element={<SocialMediaPage data-id="pyu94prt5" data-path="src/App.tsx" />} data-id="4af08swy4" data-path="src/App.tsx" />
                <Route path="/comments" element={<CommentsPage data-id="c02bp65p9" data-path="src/App.tsx" />} data-id="d4126atp4" data-path="src/App.tsx" />
                <Route path="/faq" element={<HomePage data-id="uhfzouzr5" data-path="src/App.tsx" />} data-id="6g2116iyq" data-path="src/App.tsx" />
                <Route path="/about" element={<AboutPage data-id="gaem2dhvg" data-path="src/App.tsx" />} data-id="twlwc2h1c" data-path="src/App.tsx" />
                <Route path="/contact" element={<ContactPage data-id="n059cls2k" data-path="src/App.tsx" />} data-id="xva5q7byr" data-path="src/App.tsx" />
                <Route path="*" element={<NotFound data-id="9imhdr1s5" data-path="src/App.tsx" />} data-id="5wnlc7ioo" data-path="src/App.tsx" />
              </Routes>
            </Layout>
          </Router>
          <Toaster data-id="d418mkuxk" data-path="src/App.tsx" />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;