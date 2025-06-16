import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const navItems = [
  { path: '/', label: 'Overview' },
  { path: '/daily-sentence', label: 'Daily Sentence' },
  { path: '/subtext', label: 'Subtext' },
  { path: '/social-media', label: 'Social Media' },
  { path: '/#faq', label: 'FAQ', isAnchor: true },
  { path: '/comments', label: 'Comments' },
  { path: '/contact', label: 'Contact' }];


  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.isAnchor && item.path === '/#faq') {
      // If we're not on the home page, navigate to home first
      if (location.pathname !== '/') {
        window.location.href = '/#faq';
      } else {
        // If we're on home page, scroll to FAQ section
        const faqSection = document.querySelector('#faq-section');
        if (faqSection) {
          faqSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
      return true; // Prevent default Link behavior
    }
    return false;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50" data-id="qminf5nn0" data-path="src/components/Layout.tsx">
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-50" data-id="4ed0oim1n" data-path="src/components/Layout.tsx">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="ysmjv6u4s" data-path="src/components/Layout.tsx">
          <div className="flex justify-between items-center h-16" data-id="ye0jnwz82" data-path="src/components/Layout.tsx">
            {/* Brand */}
            <Link to="/" className="flex items-center" data-id="yde3g55gj" data-path="src/components/Layout.tsx">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent" data-id="haw10cjjv" data-path="src/components/Layout.tsx">
                Chinese in Real Life
              </h1>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-1" data-id="sko1vxad5" data-path="src/components/Layout.tsx">
              {navItems.map((item) => {
                if (item.isAnchor) {
                  return (
                    <button
                      key={item.path}
                      onClick={() => handleNavClick(item)}
                      className={`text-sm px-3 py-2 rounded-md transition-colors ${'text-gray-700 hover:text-orange-600 hover:bg-orange-50'}`} data-id="errgnunys" data-path="src/components/Layout.tsx">

                      {item.label}
                    </button>);

                }

                return (
                  <Link key={item.path} to={item.path} data-id="j15ebyr8o" data-path="src/components/Layout.tsx">
                    <Button
                      variant={location.pathname === item.path ? "default" : "ghost"}
                      className={`text-sm ${
                      location.pathname === item.path ?
                      "bg-gradient-to-r from-orange-500 to-blue-500 text-white" :
                      "text-gray-700 hover:text-orange-600"}`
                      } data-id="toe2jmjav" data-path="src/components/Layout.tsx">
                      {item.label}
                    </Button>
                  </Link>);

              })}
            </nav>

            {/* Mobile menu button */}
            <Button variant="ghost" className="md:hidden" data-id="vv7qnqrfb" data-path="src/components/Layout.tsx">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-id="mi7wu26nv" data-path="src/components/Layout.tsx">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" data-id="eg14deuoa" data-path="src/components/Layout.tsx" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main data-id="9wdnfhl4p" data-path="src/components/Layout.tsx">
        {children}
      </main>

      <footer className="bg-white/80 border-t border-orange-200 py-8 mt-16" data-id="uw5egh8hg" data-path="src/components/Layout.tsx">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-id="kintj5rkn" data-path="src/components/Layout.tsx">
          <p className="text-gray-600" data-id="91s008h5l" data-path="src/components/Layout.tsx">© 2024 Chinese in Real Life. All rights reserved.</p>
        </div>
      </footer>
    </div>);

};

export default Layout;