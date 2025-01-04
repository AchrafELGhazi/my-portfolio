// Import necessary dependencies from React and Three.js libraries
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

// Define the main Computers component that will render the 3D model
// Takes isMobile as a prop to handle responsive design
const Computers = ({ isMobile }) => {
  // Load the 3D model using useGLTF hook
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      {/* Add lighting to the scene */}
      {/* hemisphereLight: Creates ambient lighting from above and below */}
      <hemisphereLight intensity={2.5} groundColor='black' />

      {/* spotLight: Creates a focused beam of light */}
      <spotLight
        position={[-20, 50, 10]} // Position in 3D space (x, y, z)
        angle={0.12} // Spread angle of the light
        penumbra={1} // Softness of the light's edges
        intensity={1} // Brightness of the light
        castShadow // Enables shadow casting
        shadow-mapSize={1024} // Resolution of the shadows
      />

      {/* pointLight: Creates light that emanates in all directions from a point */}
      <pointLight intensity={2} />

      {/* Render the 3D model */}
      <primitive
        object={computer.scene} // The loaded 3D model
        scale={isMobile ? 0.5 : 0.62} // Scale based on device type
        position={isMobile ? [0, 0.2, -2.2] : [0, -1.8, -1.5]} // Position based on device type
        rotation={[-0.01, -0.2, -0.1]} // Slight rotation for better viewing angle
      />
    </mesh>
  );
};

// ComputersCanvas component: Wrapper for the 3D scene
const ComputersCanvas = () => {
  // State to track if the device is mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Create a media query for mobile devices
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set initial mobile state
    setIsMobile(mediaQuery.matches);

    // Handler function for media query changes
    const handleMediaQueryChange = event => {
      setIsMobile(event.matches);
    };

    // Add event listener for responsive changes
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Cleanup function to remove event listener
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    // Canvas: The main container for Three.js scene
    <Canvas
      frameloop='demand' // Renders frames only when needed
      shadows // Enable shadow rendering
      dpr={[1, 2]} // Device pixel ratio range
      camera={{ position: [20, 3, 5], fov: 25 }} // Camera position and field of view
      gl={{ preserveDrawingBuffer: true }} // Needed for taking screenshots
    >
      {/* Suspense: Handles loading state */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls: Enables camera movement controls */}
        <OrbitControls
          enableZoom={false} // Disable zooming
          maxPolarAngle={Math.PI / 2} // Limit vertical rotation
          minPolarAngle={Math.PI / 2} // Limit vertical rotation
        />
        {/* Render the Computers component */}
        <Computers isMobile={isMobile} />
      </Suspense>

      {/* Preload: Preloads all assets for better performance */}
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
