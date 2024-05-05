"use client";
import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useTheme } from "next-themes";
import { THREE } from "three";

export default function StarsBackground() {
  return (
    <Canvas
      className="dark:bg-dark bg-light -z-30"
      camera={{ position: [0, 0, 1] }}>
      <Stars />
    </Canvas>
  );
}

function Stars() {
  const ref = useRef<THREE.Points>(null);
  const { theme } = useTheme();
  const starColor = theme === "dark" ? "#c850c0" : "#1C1D20";
  const [sphere] = useState(() =>
    inSphere(new Float32Array(5000), { radius: 1.5 })
  );
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
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

function inSphere(buffer: Float32Array, { radius = 1 }: { radius?: number }) {
  const length = buffer.length;
  for (let i = 0; i < length; i += 3) {
    const randomValue = Math.random();
    const r =
      radius * Math.cbrt(randomValue < 1 ? randomValue : randomValue - 0.001);
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1 + Number.EPSILON);
    buffer[i] = r * Math.sin(phi) * Math.cos(theta);
    buffer[i + 1] = r * Math.sin(phi) * Math.sin(theta);
    buffer[i + 2] = r * Math.cos(phi);
  }
  return buffer;
}
