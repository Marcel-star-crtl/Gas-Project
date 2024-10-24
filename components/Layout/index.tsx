import React, { useState, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/images/LogoLGV.png';
import { Footer } from '../Footer';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Community', href: '/community' },
  { name: 'News', href: '/news' },
  { name: 'Contact Us', href: '/contact' },
];

export const AppLayout = ({ children }: { children: ReactNode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between pr-6 pl-6 py-4 lg:px-8" aria-label="Global" style={{ background: "#0A286E" }}>
          <div className="flex lg:flex-1">
            <Link href="/" legacyBehavior>
              <a className="-m-1.5 p-1.5 cursor-pointer">
                <span className="sr-only">Company</span>
                <Image
                  className="h-10 w-auto"
                  src={logo}
                  alt="Company Logo"
                />
              </a>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8" style={{ paddingRight: "80px" }}>
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} legacyBehavior>
                <a className="text-sm leading-6 text-white hover:text-[#B7E8EC]" style={{ fontFamily: "Montserrat-Regular" }}>
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        </nav>

        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel className="fixed inset-0 z-50 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" style={{ background: "#0A286E" }}>
            <div className="flex items-center justify-between">
              <Link href="/" legacyBehavior>
                <a className="-m-1.5 p-1.5 cursor-pointer">
                  <span className="sr-only">LGV Gas Systems</span>
                  <Image
                    className="h-8 w-auto"
                    src={logo}
                    alt="lgv-logo"
                  />
                </a>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} legacyBehavior>
                      <a 
                        className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-gray-50 hover:text-[#B7E8EC]" 
                        style={{ fontFamily: "Montserrat", fontWeight: "400" }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <>{children}</>
      <Footer />
    </main>
  );
};
