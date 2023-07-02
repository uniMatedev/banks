import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const NavigationBar = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const MenuItem = ({ href, children }) => (
    <Link href={href}>
      <div
        className={`${
          router.pathname === href
            ? 'text-white'
            : 'text-gray-500 hover:text-white'
        } px-3 py-2 rounded-md text-sm font-medium`}
      >
        {children}
      </div>
    </Link>
  );

  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="text-white text-xl font-bold cursor-pointer">BANKS</div>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <MenuItem href="/consulting">Consulting</MenuItem>
                <MenuItem href="/repair-service">Repair Service</MenuItem>
                <MenuItem href="/new-projects">New Projects</MenuItem>
                <MenuItem href="/tools">Tools</MenuItem>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MenuItem href="/consulting">Consulting</MenuItem>
            <MenuItem href="/repair-service">Repair Service</MenuItem>
            <MenuItem href="/new-projects">New Projects</MenuItem>
            <MenuItem href="/tools">Tools</MenuItem>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
