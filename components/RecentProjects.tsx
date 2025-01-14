"use client";

import Image from "next/image";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className='py-20'>
      <h1 className='heading'>
        A small selection of{' '}
        <span className='text-purple'>recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-0'>
        {projects.map(item => (
          <div
            className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'
            key={item.id}
          >
            <PinContainer title={item.smtitle} href={item.link}>
              <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                <div
                  className='relative w-full h-full overflow-hidden lg:rounded-3xl'
                  style={{ backgroundColor: '#13162D' }}
                >
                  {/* <img src='/bg.png' alt='bgimg' /> */}
                </div>
                <Image
                  src={item.img}
                  alt='cover'
                  className='z-10 h-full w-full rounded-xl absolute bottom-0'
                  width={500}
                  height={300}
                />
              </div>

              <h1 className='font-bold lg:text-xl md:text-xl text-base line-clamp-1'>
                {item.title}
              </h1>

              <p
                className='lg:text-md lg:font-normal font-light text-sm line-clamp-7'
                style={{
                  color: '#BEC1DD',
                  margin: '1vh 0',
                }}
              >
                {item.des}
              </p>

              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className='border border-white/[.2] rounded-full bg-black lg:w-9 lg:h-9 w-8 h-8 flex justify-center items-center'
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt='icon5'
                        className='p-2'
                        width={32}
                        height={32}
                      />
                    </div>
                  ))}
                </div>

                {/* <div className="flex justify-center items-center">
                  <p className="flex lg:text-lg md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-2 text-xs" color="#CBACF9" />
                </div> */}
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
