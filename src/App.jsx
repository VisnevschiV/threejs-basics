import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const Sphere = ({ position, args, textureUrl }) => {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, textureUrl);

  return (
    <mesh position={position} ref={ref} scale={1}>
      <sphereGeometry args={args} />
      <meshStandardMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
};

const SphereButton = ({ position, args, onClick }) => {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
      onClick={onClick}
      scale={isClicked ? 1.5 : 1}
    >
      <sphereGeometry args={args} />
      <meshStandardMaterial color={isHovered ? "lightblue" : "orange"} />
    </mesh>
  );
};

const Scene = () => {
  const [textureUrl, setTextureUrl] = useState("../general.jpg"); // Default texture URL
  const [index, setIndex] = useState(0); // Store the index in state

  const skyboxTextures = [
    "../general.jpg",
    "../Iorga.jpg",
    "../bookNr1.jpg",
    "../bookNr2.jpg",
    "../bookNr3.jpg",
  ];

  const changeTexture = (newIndex) => {
    setIndex(newIndex); // Update index
    setTextureUrl(skyboxTextures[newIndex]); // Change texture based on index
  };

  const renderSphereButtons = () => {
    switch (index) {
      case 0:
        return (
          <>
            <SphereButton 
              initialArgs={[1, 32, 32]} 
              position={[8, 0, -7]}  
              onClick={() => { 
                changeTexture(1); // Update index and texture
              }} 
            />

            <SphereButton 
              initialArgs={[1, 32, 32]} 
              position={[2, 0, -10]} 
              onClick={() => { 
                changeTexture(2); 
              }} 
            />

            <SphereButton 
              initialArgs={[1, 32, 32]} 
              position={[-2, 0, -9]} 
              onClick={() => { 
                changeTexture(3); 
              }} 
            />

            <SphereButton 
              initialArgs={[1, 32, 32]} 
              position={[-7, 0, -5]} 
              onClick={() => { 
                changeTexture(4); 
              }} 
            />
          </>
        );
      case 1:
        return (
          <SphereButton
            initialArgs={[1.5, 32, 32]}
            position={[-4, 0, -8]}
            onClick={() => {
              changeTexture(0); // Cycle back to index 0
            }}
          />
        );
      case 2:
        return (
          <SphereButton
            initialArgs={[2, 32, 32]}
            position={[6, 0, -3]}
            onClick={() => {
              changeTexture(0); // Cycle back to index 0
            }}
          />
        );
      case 3:
        return (
          <SphereButton
            initialArgs={[1.5, 32, 32]}
            position={[3, 0, -4]}
            onClick={() => {
              changeTexture(0); // Cycle back to index 0
            }}
          />
        );
      case 4:
        return (
          <SphereButton
            initialArgs={[2.5, 32, 32]}
            position={[-2, 0, -4]}
            onClick={() => {
              changeTexture(0); // Cycle back to index 0
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <ambientLight intensity={1} />
      <Sphere args={[10, 1000, 50, 5]} position={[0, 0, 0]} textureUrl={textureUrl} />
      {renderSphereButtons()} {/* Re-render buttons based on index */}
      <OrbitControls enableZoom={false}  rotateSpeed={-0.2} />
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
