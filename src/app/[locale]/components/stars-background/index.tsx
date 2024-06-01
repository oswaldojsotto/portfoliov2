"use client";
import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useTheme } from "next-themes";

export default function StarsBackground() {
  return (
    <Canvas
      className=" dark:bg-dark bg-light -z-30"
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
    let randomValue = Math.random();
    randomValue = randomValue < 1 ? randomValue : 1 - Number.EPSILON;

    const r = radius * Math.cbrt(randomValue);

    const theta = Math.random() * 2 * Math.PI;

    const phi = Math.acos(1 - 2 * Math.random());

    const sinPhi = Math.sin(phi);
    if (sinPhi === 0) {
      buffer[i] = buffer[i + 1] = 0;
      buffer[i + 2] = r;
    } else {
      buffer[i] = r * sinPhi * Math.cos(theta);
      buffer[i + 1] = r * sinPhi * Math.sin(theta);
      buffer[i + 2] = r * Math.cos(phi);
    }
  }
  return buffer;
}
