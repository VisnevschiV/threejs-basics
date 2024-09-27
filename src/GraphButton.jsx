// src/components/GraphButton.jsx

import React, { useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

// Helper function to calculate distance between two positions
const calculateDistance = (position1, position2) => {
  const vec1 = new THREE.Vector3(...position1);
  const vec2 = new THREE.Vector3(...position2);
  return vec1.distanceTo(vec2);
};

const GraphButton = ({ position, textureUrl, onClick, cameraPosition }) => {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);

  // Load the image texture
  const texture = useLoader(THREE.TextureLoader, textureUrl);

  // Calculate distance from camera
  const distance = calculateDistance(position, cameraPosition);

  // Scale decreases as the distance increases
  const scaleFactor = 1 / Math.max(distance, 1); // Prevent division by zero

  // Increase scale when hovered
  const scale = isHovered ? scaleFactor * 1.5 : scaleFactor;

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerOver={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={() => setIsHovered(false)}
      onClick={onClick}
      scale={[scale, scale, scale]}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default GraphButton;
