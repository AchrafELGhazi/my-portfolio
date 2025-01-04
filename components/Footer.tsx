'use client';

import { FaLocationArrow } from 'react-icons/fa6';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHome,
  FaDownload,
} from 'react-icons/fa';
import Image from 'next/image';
import MagicButton from './MagicButton';
import { FloatingDock } from './ui/FloatingDock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const dockItems = [
    {
      title: 'Home',
      icon: (
        <FaHome className='w-full h-full text-neutral-500 dark:text-neutral-400' />
      ),
      href: '',
      onClick: scrollToTop,
    },
    {
      title: 'GitHub',
      icon: (
        <FaGithub className='w-full h-full text-neutral-500 dark:text-neutral-400' />
      ),
      href: 'https://github.com/AchrafELGhazi?tab=overview&from=2025-01-01&to=2025-01-04',
    },
    {
      title: 'LinkedIn',
      icon: (
        <FaLinkedin className='w-full h-full text-neutral-500 dark:text-neutral-400' />
      ),
      href: 'https://www.linkedin.com/in/achraf-el-ghazi-16b8bb2a7/',
    },
    {
      title: 'Email',
      icon: (
        <FaEnvelope className='w-full h-full text-neutral-500 dark:text-neutral-400' />
      ),
      href: 'mailto:a.elghazi@aui.ma',
    },
    {
      title: 'Resume',
      icon: (
        <FaDownload className='w-full h-full text-neutral-500 dark:text-neutral-400' />
      ),
      href: '/Achraf-EL-GHAZI-Resume.pdf',
    },
  ];

  return (
    <footer className='w-full pt-20 pb-10 relative' id='contact'>
      {/* background grid */}
      <div className='w-full absolute left-0 -bottom-72 min-h-96'>
        <Image
          src='/footer-grid.svg'
          alt='grid'
          className='w-full h-full opacity-50'
          width={1920}
          height={1080}
        />
      </div>

      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Ready to take <span className='text-purple'>your</span> digital
          presence to the next level?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href='mailto:a.elghazi@aui.ma'>
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>
      </div>

      <div className='flex flex-col gap-8 mt-16 items-center'>
        <p className='md:text-base text-gray-500 text-sm md:font-normal font-light'>
          Copyright © 2025 Achraf EL GHAZI
        </p>

        {/* Static Dock */}
        <FloatingDock
          items={dockItems}
          desktopClassName='relative rounded-full bg-white mx-auto bg-blur '
          mobileClassName='relative mx-auto'
        />
      </div>
    </footer>
  );
};

export default Footer;
