"use client";
import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useTheme } from "next-themes";
import * as random from "maath/random/dist/maath-random.esm";

export default function StarsBackground() {
  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
      className=" dark:bg-dark bg-light -z-30 fixed"
      camera={{ position: [0, 0, 1] }}>
      <Stars />
    </Canvas>
  );
}

function Stars() {
  const ref = useRef<any>(null);
  const { theme } = useTheme();
  const starColor = theme === "dark" ? "#c850c0" : "#EA2027";
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(8000), { radius: 1.5 })
  );
  useFrame((_, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={starColor}
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
