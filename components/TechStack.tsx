'use client';

import React from 'react';
import { cn } from '@/lib/utils';

const techStacks = [
  {
    id: 1,
    category: 'Frontend',
    skills: [
      { name: 'React.js', icon: '/icons/react.svg' },
      { name: 'Next.js', icon: '/icons/next.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
      { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
    ],
  },
  {
    id: 2,
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: '/icons/node.svg' },
      { name: 'Express.js', icon: '/icons/express.svg' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
      { name: 'MongoDB', icon: '/icons/mongodb.svg' },
    ],
  },
  {
    id: 3,
    category: 'Tools & Others',
    skills: [
      { name: 'Git', icon: '/icons/git.svg' },
      { name: 'Docker', icon: '/icons/docker.svg' },
      { name: 'AWS', icon: '/icons/aws.svg' },
      { name: 'Firebase', icon: '/icons/firebase.svg' },
    ],
  },
];

 const TechStack = ({ className }: { className?: string }) => {
  return (
    <div className={cn('w-full py-10', className)}>
      <h1 className='heading mb-10'>
        My
        <span className='text-purple'> Tech Stack</span>
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {techStacks.map(category => (
          <div
            key={category.id}
            className='rounded-3xl border border-white/[0.1] overflow-hidden relative group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none'
            style={{
              background: 'rgb(4,7,29)',
              backgroundColor:
                'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
            }}
          >
            <div className='p-6 lg:p-8'>
              <h3 className='text-lg lg:text-2xl font-bold text-white mb-6'>
                {category.category}
              </h3>
              <div className='grid grid-cols-2 gap-4'>
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-3 p-3 rounded-lg bg-[#10132E] hover:bg-[#161A31] transition-colors group cursor-pointer'
                  >
                    <div className='w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-[#161A31] group-hover:bg-[#10132E] flex items-center justify-center transition-colors'>
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className='w-5 h-5 lg:w-6 lg:h-6'
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
        ))}
      </div>
    </div>
  );
};
export default TechStack;
