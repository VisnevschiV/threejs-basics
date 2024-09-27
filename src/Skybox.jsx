// src/components/Skybox.jsx

import React from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const Skybox = ({ textureUrl }) => {
  const texture = useLoader(THREE.TextureLoader, textureUrl);
  
  return (
    <mesh>
      <sphereGeometry args={[50, 100, 100]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
};

export default Skybox;
