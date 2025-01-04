'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Mobile menu button
  const MenuButton = () => (
    <motion.button
      onClick={() => setIsOpen(!isOpen)}
      className='fixed top-10 right-6 z-[5001] p-3 rounded-full'
      style={{
        backdropFilter: 'blur(16px) saturate(180%)',
        backgroundColor: 'rgba(17, 25, 40, 0.75)',
        border: '1px solid rgba(255, 255, 255, 0.125)',
      }}
    >
      {isOpen ? (
        <X className='w-6 h-6 text-gray-100' />
      ) : (
        <Menu className='w-6 h-6 text-gray-100' />
      )}
    </motion.button>
  );

  // Mobile menu modal
  const MobileMenu = () => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ type: 'spring', damping: 20 }}
          className='fixed inset-y-0 right-0 w-[250px] z-[5000] flex flex-col'
          style={{
            backdropFilter: 'blur(16px) saturate(180%)',
            backgroundColor: 'rgba(17, 25, 40, 0.95)',
            border: '1px solid rgba(255, 255, 255, 0.125)',
          }}
        >
          <div className='flex flex-col items-center justify-center h-full space-y-8'>
            {navItems.map((navItem, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={navItem.link}
                onClick={() => setIsOpen(false)}
                className='relative text-gray-100 flex items-center space-x-2 hover:text-neutral-300 transition-colors'
              >
                {navItem.icon && <span>{navItem.icon}</span>}
                <span className='text-lg'>{navItem.name}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Desktop navigation
  const DesktopNav = () => (
    <motion.div
      initial={{
        opacity: 1,
        y: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      className={cn(
        'flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 text-gray-500 mx-auto px-10 py-5 rounded-full items-center justify-center space-x-7',
        className
      )}
      style={{
        backdropFilter: 'blur(8px) saturate(180%)',
        backgroundColor: 'rgba(17, 25, 40, 0.75)',
        border: '1px solid rgba(255, 255, 255, 0.125)',
      }}
    >
      {navItems.map((navItem, idx) => (
        <Link
          key={`desktop-link-${idx}`}
          href={navItem.link}
          className={cn(
            'relative dark:text-gray-300 items-center text-gray-300 flex space-x-3 dark:hover:text-neutral-300 hover:text-neutral-500'
          )}
        >
          {navItem.icon && (
            <span className='block sm:hidden'>{navItem.icon}</span>
          )}
          <span className='text-sm text-gray-400 hover:scale-110 transition-all duration-300 ease-in-out !cursor-pointer'>
            {navItem.name}
          </span>
        </Link>
      ))}
    </motion.div>
  );

  return (
    <>
      {/* Show desktop nav on larger screens */}
      <div className='hidden sm:block'>
        <DesktopNav />
      </div>

      {/* Show mobile menu button and modal on smaller screens */}
      <div className='block sm:hidden'>
        <MenuButton />
        <MobileMenu />
      </div>
    </>
  );
};
