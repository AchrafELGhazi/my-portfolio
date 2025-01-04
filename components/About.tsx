import React from 'react';
import { motion } from 'framer-motion';
import { ComputersCanvas } from './canvas';

const AboutMe = () => {
  return (
    <section className='w-full min-h-screen  flex items-center'>
      <div className='w-full'>
        <div className='flex flex-col lg:flex-row items-center'>
          {/* Left side content */}
          <div className='lg:w-[40%] p-0 md:p-12 lg:p-12 relative'>
            {/* Background accent */}
            {/* <div className='absolute -top-4 left-0 w-24 h-1 bg-gradient-to-r from-blue-800 to-purple-500' /> */}

            {/* Main content */}
            <div className='space-y-8'>
              {/* Header */}
              <div className='space-y-2'>
                <h1 className='text-4xl lg:text-5xl font-bold text-white'>
                  Achraf EL GHAZI
                </h1>
                <p className='text-lg text-[#C1C2D3] font-light'>
                  Software Developer & Computer Science Enthusiast
                </p>
              </div>

              {/* About text */}
              <div className='space-y-4 text-[#C1C2D3] font-light'>
                <p className='leading-relaxed'>
                  A dedicated software developer with a passion for building
                  efficient and user-friendly applications. I specialize in
                  full-stack development, utilizing modern technologies to
                  create innovative solutions that solve real-world problems.
                </p>
                <p className='leading-relaxed'>
                  With a strong focus on software engineering principles, I
                  strive to write clean, maintainable, and scalable code. I
                  enjoy tackling complex challenges, whether it's optimizing
                  backend systems, designing intuitive user interfaces, or
                  integrating cutting-edge technologies into my projects.
                </p>
              </div>

              {/* Philosophy section */}
              <div className='bg-[#10132E] rounded-2xl p-6 border border-white/[0.1]'>
                <div className='space-y-3'>
                  <h2 className='text-white text-xl font-medium'>
                    Development Philosophy
                  </h2>
                  <p className='text-[#C1C2D3] font-light leading-relaxed'>
                    I believe in the power of continuous learning and enjoy
                    exploring new frameworks, tools, and methodologies to stay
                    ahead in the ever-evolving tech landscape. My projects often
                    emphasize functionality, performance, and the seamless
                    integration of design and development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - 3D Computer */}
          <div className='lg:w-[58%] w-[95%] p-0 h-[500px] lg:h-[800px] relative flex items-center'>
              <ComputersCanvas />

            {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start'>
                  <motion.div
                    animate={{
                      y: [0, 24, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: 'loop',
                    }}
                    className='w-3 h-3 rounded-full bg-secondary mb-1'
                  />
                </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
