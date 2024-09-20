import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { useRef, useState } from "react";
import {
  OrbitControls,
} from "@react-three/drei";
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';


const Sphere = ({ position, args, textureUrl }) => {
  const ref = useRef();

  // Load the texture using useLoader
  const texture = useLoader(THREE.TextureLoader, textureUrl);

  return (
    <mesh
      position={position}
      ref={ref}
      scale={1}
    >
      <sphereGeometry args={args} />
      <meshStandardMaterial
        map = {texture}
        side={THREE.BackSide}
      />
    </mesh>
  );
};

const SphereButton = ({ position, args, color }) => {
  const ref = useRef();

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
      scale={isClicked ? 1.5 : 1}
    >
      <sphereGeometry args={args} />
      <meshStandardMaterial
        color={isHovered ? "lightblue" : "orange"}
      />
    </mesh>
  );
};

const Scene = () => {

  return (
    <>
      <ambientLight intensity={1} />
      <Sphere args={[10, 1000, 50, 5]} position={[0, 0, 0]} textureUrl="../skybox.jpg" />
      <SphereButton args={[1, 1000, 50, 5]} position={[8, 0, 6]}  />
      <OrbitControls enableZoom={false} rotateSpeed={-0.2} />
    </>
  );
};

const App = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
      <Scene />
    </Canvas>
  );
};

export default App;
