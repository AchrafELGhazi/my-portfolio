import React from 'react';
import { ComputersCanvas } from './canvas';

const AboutMe = () => {
  return (
    <section className='w-full mt-0 lg:mt-5 md:mt-5 min-h-screen flex items-center '>
      <div className='max-w-9xl mx-0 lg:mx-auto md:mx-auto w-full px-1 lg:px-10 md:px-'>
        <div className='flex flex-col lg:flex-row items-center gap-8'>
          {/* Left side content */}
          <div className='lg:w-[40%] relative'>
            <div className='space-y-10'>
              {/* Name and Title Section */}
              <div className='space-y-6'>
                {/* Decorative elements */}
                <div className='absolute -left-2 top-0 w-1 h-24 bg-gradient-to-b from-blue-500 to-purple-500'></div>
                <div className='absolute -top-6 -left-1 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500'></div>

                <div className='pl-4'>
                  <h1 className='text-4xl lg:text-6xl font-bold text-white tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80'>
                    Achraf EL GHAZI
                  </h1>
                  <div className='flex items-center gap-2 text-sm'>
                    <span className='px-4 py-1 bg-blue-500/10 rounded-full text-blue-400 font-medium border border-blue-500/20'>
                      Software Developer
                    </span>
                    <span className='px-4 py-1 bg-purple-500/10 rounded-full text-purple-400 font-medium border border-purple-500/20'>
                      CS Enthusiast
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className='space-y-6 text-[#C1C2D3] font-light'>
                <p className='text-md lg:text-lg leading-relaxed backdrop-blur-sm bg-[#10132E]/30 p-6 rounded-xl border border-white/5'>
                  A dedicated software developer with a passion for building
                  <span className='text-white font-medium'> efficient</span> and
                  <span className='text-white font-medium'>
                    {' '}
                    user-friendly
                  </span>{' '}
                  applications. I specialize in{' '}
                  <span className='text-blue-400'>full-stack development</span>,
                  utilizing modern technologies to create innovative solutions.
                </p>
                <p className='text-md lg:text-lg leading-relaxed backdrop-blur-sm bg-[#10132E]/30 p-6 rounded-xl border border-white/5'>
                  With a strong focus on{' '}
                  <span className='text-blue-400'>
                    software engineering principles
                  </span>
                  , I strive to write{' '}
                  <span className='font-medium text-white'>
                    clean, maintainable, and scalable
                  </span>{' '}
                  code. I enjoy tackling{' '}
                  <span className='text-purple-400'>complex challenges</span>,
                  from optimizing backend systems to crafting intuitive user
                  experiences.
                </p>
              </div>

              {/* Philosophy Card */}
              <div className='relative group'>
                {/* Animated border gradient */}
                <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500'></div>

                <div className='relative backdrop-blur-sm bg-[#10132E]/80 rounded-2xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300'>
                  <div className='space-y-4'>
                    <div className='flex items-center gap-4 mb-6'>
                      <div className='h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500'></div>
                      <h2 className='text-md lg:text-2xl font-semibold text-white'>
                        Development Philosophy
                      </h2>
                    </div>
                    <p className='text-md lg:text-lg text-[#C1C2D3] leading-relaxed'>
                      I believe in the power of{' '}
                      <span className='text-blue-400 font-medium'>
                        continuous learning
                      </span>{' '}
                      and exploring new technologies. My projects emphasize
                      <span className='text-white font-medium'>
                        {' '}
                        functionality
                      </span>
                      ,<span className='text-purple-400'> performance</span>,
                      and
                      <span className='text-blue-400'> innovation</span>,
                      staying ahead in the
                      <span className='text-white font-medium'>
                        {' '}
                        ever-evolving tech landscape
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - 3D Computer */}
          <div className='lg:w-[58%] w-full h-[500px] lg:h-[800px] relative  items-center hidden lg:flex'>
            <ComputersCanvas />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
