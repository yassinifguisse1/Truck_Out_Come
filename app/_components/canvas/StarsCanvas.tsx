import React, { useState, useRef, Suspense, forwardRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from 'three';
import * as random from "maath/random/dist/maath-random.esm";
import { Points as ThreePoints } from "three";

// Define props for Stars explicitly
interface StarsProps {
  stride?: number;
  frustumCulled?: boolean;
  // Add any other props you want to accept
}

// Create a forward ref for the Stars component
// eslint-disable-next-line react/display-name
const Stars = forwardRef<ThreePoints, StarsProps>((props, ref) => {
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    if (ref && typeof ref === "object" && "current" in ref) {
      const pointsRef = ref.current;
      if (pointsRef) {
        pointsRef.rotation.x -= delta / 10;
        pointsRef.rotation.y -= delta / 15;
      }
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
});

const StarsCanvas: React.FC = () => {
  const starsRef = useRef<THREE.Points>(null); // Define the ref here

  return (
    <div className="w-full min-h-screen absolute inset-0 z-[1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars ref={starsRef} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
