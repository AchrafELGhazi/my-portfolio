/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from '@/lib/utils'; // Imports a utility function for conditional class names.
import { IconLayoutNavbarCollapse } from '@tabler/icons-react'; // Imports a specific icon from the Tabler icons library.
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'; // Imports animation and motion utilities from Framer Motion library.
import Link from 'next/link'; // Imports the `Link` component for client-side navigation in Next.js.
import { useRef, useState } from 'react'; // Imports React hooks for state and references.

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[]; // Defines `items` prop type as an array of objects with title, icon, and href.
  desktopClassName?: string; // Optional class name for desktop layout.
  mobileClassName?: string; // Optional class name for mobile layout.
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[]; // Props type definition for mobile dock.
  className?: string; // Optional class name for styling.
}) => {
  const [open, setOpen] = useState(false); // State hook to track whether the mobile dock is open.
  return (
    <div className={cn('relative block md:hidden', className)}>
      {' '}
      <AnimatePresence>
   
        {open && ( // Conditionally renders the dock if `open` is true.
          <motion.div
            layoutId='nav' // Shared layout animation identifier.
            className='absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2' // Styles for positioning and layout.
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title} // Key prop for unique identification.
                initial={{ opacity: 0, y: 10 }} // Initial animation state.
                animate={{ opacity: 1, y: 0 }} // Animation state when entering.
                exit={{ opacity: 0, y: 10, transition: { delay: idx * 0.05 } }} // Animation state when exiting, with staggered delay.
                transition={{ delay: (items.length - 1 - idx) * 0.05 }} // Transition timing based on item index.
              >
                <Link
                  href={item.href} // Link to the specified href.
                  key={item.title}
                  className='h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center' // Styles for the link.
                >
                  <div className='h-4 w-4'>{item.icon}</div> 
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)} // Toggles the open state.
        className='h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center' // Styles for the toggle button.
      >
        <IconLayoutNavbarCollapse className='h-5 w-5 text-neutral-500 dark:text-neutral-400' />{' '}
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[]; // Props type definition for desktop dock.
  className?: string; // Optional class name for styling.
}) => {
  let mouseX = useMotionValue(Infinity); // Initializes motion value for mouse X position.
  return (
    <motion.div
      onMouseMove={e => mouseX.set(e.pageX)} // Updates `mouseX` on mouse move.
      onMouseLeave={() => mouseX.set(Infinity)} // Resets `mouseX` on mouse leave.
      className={cn(
        'mx-auto hidden md:flex h-16 gap-5 items-end rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3',
        className
      )} // Styles for desktop dock container.
      style={{
        backdropFilter: 'blur(8px) saturate(180%)', // Applies a blur and saturation effect.
        backgroundColor: 'rgba(17, 25, 40, 0.75)', // Background color with opacity.
        border: '1px solid rgba(255, 255, 255, 0.125)', // Border styling.
      }}
    >
      {items.map(item => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} /> // Renders `IconContainer` for each item.
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue; // Motion value for tracking mouse position.
  title: string; // Title of the icon.
  icon: React.ReactNode; // Icon element.
  href: string; // Link href.
}) {
  let ref = useRef<HTMLDivElement>(null); // Reference to the icon container element.

  let distance = useTransform(mouseX, val => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }; // Gets bounding rectangle of the icon container.

    return val - bounds.x - bounds.width / 2; // Calculates distance from the mouse to the center of the icon.
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]); // Transforms width based on distance.
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]); // Transforms height based on distance.

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]); // Transforms icon width based on distance.
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  ); // Transforms icon height based on distance.

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  }); // Smooth spring animation for width.
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  }); // Smooth spring animation for height.

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  }); // Smooth spring animation for icon width.
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  }); // Smooth spring animation for icon height.

  const [hovered, setHovered] = useState(false); // State for tracking hover status.

  return (
    <Link href={href} target={'_blank'}>
      <motion.div
        ref={ref} // Sets reference to the container.
        style={{ width, height }} // Applies dynamic width and height.
        onMouseEnter={() => setHovered(true)} // Sets hover state to true on mouse enter.
        onMouseLeave={() => setHovered(false)} // Sets hover state to false on mouse leave.
        className='aspect-square rounded-full bg-white bg-opacity-10  flex items-center justify-center relative' // Styles for the icon container.
      >
        <AnimatePresence>
          {hovered && ( // Conditionally renders tooltip on hover.
            <motion.div
              initial={{ opacity: 0, y: 10, x: '-50%' }} // Initial animation state for tooltip.
              animate={{ opacity: 1, y: 0, x: '-50%' }} // Animation state when entering.
              exit={{ opacity: 0, y: 2, x: '-50%' }} // Animation state when exiting.
              className='px-2 py-1 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs' // Styles for the tooltip.
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{
            width: widthIcon, // Dynamic icon width.
            height: heightIcon, // Dynamic icon height.
          }}
          className='flex items-center justify-center' // Centers the icon.
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}
