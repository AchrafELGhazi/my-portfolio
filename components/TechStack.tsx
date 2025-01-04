'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
const techStacks = [
  {
    id: 1,
    category: 'Frontend',
    skills: [
      { name: 'React.js', icon: '/react.png' },
      { name: 'Next.js', icon: '/next.png' },
      { name: 'TypeScript', icon: '/ts.svg' },
      { name: 'JavaScript', icon: '/js.png' },
      { name: 'Tailwind CSS', icon: '/tail.svg' },
      { name: 'Three.js', icon: '/three.svg' },
      { name: 'Framer Motion', icon: '/framer.svg' },
      { name: 'Redux', icon: '/redux.png' },
      { name: 'Acerternity', icon: '/aceternity.png' },
      { name: 'Shadcn UI', icon: '/shadcn.png' },
    ],
  },
  {
    id: 2,
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: '/node.png' },
      { name: 'Express.js', icon: '/express.png' },
      { name: 'PostgreSQL', icon: '/postgresql.png' },
      { name: 'MongoDB', icon: '/mongodb.png' },
      { name: 'Prisma', icon: '/prisma.png' },
    ],
  },
  {
    id: 3,
    category: 'Languages',
    skills: [
      { name: 'C', icon: '/c.png' },
      { name: 'Java', icon: '/java.png' },
      { name: 'Python', icon: '/python.png' },
      { name: 'javascript', icon: '/js.png' },
    ],
  },
  {
    id: 4,
    category: 'Tools & Others',
    skills: [{ name: 'Git', icon: '/git.png' }],
  },
];

const TechStack = ({ className }: { className?: string }) => {
  // Calculate the maximum number of skills across all categories
  const maxSkills = Math.max(
    ...techStacks.map(category => category.skills.length)
  );

  return (
    <div className={cn('w-full mx-auto max-w-7xl py-10', className)}>
      <h1 className='heading mb-10'>
        My<span className='text-purple'> Tech Stack</span>
      </h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {techStacks.map(category => {
          // Calculate the appropriate column span based on number of skills
          const shouldSpanFull = category.skills.length > 6;

          return (
            <div
              key={category.id}
              className={cn(
                'rounded-3xl border border-white/[0.1] overflow-hidden relative group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none',
                shouldSpanFull ? 'lg:col-span-2' : ''
              )}
              style={{
                background: 'rgb(4,7,29)',
                backgroundColor:
                  'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
              }}
            >
              <div className='p-6 lg:p-8'>
                <div className='flex items-center justify-between mb-6'>
                  <h3 className='text-lg lg:text-2xl font-bold text-white'>
                    {category.category}
                  </h3>
                  {/* <span className='text-sm text-white/60'>
                    {category.skills.length}{' '}
                    {category.skills.length === 1 ? 'skill' : 'skills'}
                  </span> */}
                </div>
                <div
                  className={cn(
                    'grid gap-4',
                    shouldSpanFull
                      ? 'grid-cols-2 md:grid-cols-4'
                      : 'grid-cols-2 md:grid-cols-3'
                  )}
                >
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className='flex items-center gap-3 p-3 rounded-lg bg-[#10132E] hover:bg-[#161A31] transition-colors group cursor-pointer'
                    >
                      <div className='w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-[#161A31] group-hover:bg-[#10132E] flex items-center justify-center transition-colors'>
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          className='w-5 h-5 lg:w-6 lg:h-6'
                          width={24}
                          height={24}
                        />
                      </div>
                      <span className='text-sm lg:text-base font-light text-[#C1C2D3]'>
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
