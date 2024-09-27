import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';


const graphData = [
  {
    id: 0,
    position: [8, -2, -7],
    connections: [1, 2],
    textureUrl: "../bookNr1.jpg",
  },
  {
    id: 1,
    position: [5, 0, 0],
    connections: [0, 2],
    textureUrl: "../bookNr1.jpg",
  },
  {
    id: 2,
    position: [3, 4, 0],
    connections: [0, 1],
    textureUrl: "../bookNr1.jpg",
  },
  {
    id: 3,
    position: [-4, 3, 0],
    connections: [0],
    textureUrl: "../bookNr1.jpg",
  },
  // Add more nodes as needed
];


const Skybox = ({ position, args, textureUrl }) => {
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

  const renderFromList = () => {
    return (
      <>
        {graphData.map((item, i) => (
            <SphereButton 
              initialArgs={[1, 32, 32]} 
              position={item.position}  
              onClick={() => { 
                changeTexture(1); // Update index and texture
              }} 
            />
        ))}
      </>
    );
  };
  const renderSphereButtons = () => {
    switch (index) {
      case 0:
        return (
          <>
            <SphereButton 
              initialArgs={[1, 32, 32]} 
              position={[8, -2, -7]}  
              onClick={() => { 
                changeTexture(1); // Update index and texture
              }} 
            />

            <SphereButton 
              initialArgs={[1, 32, 32]} 
              position={[2, -3, -10]} 
              onClick={() => { 
                changeTexture(2); 
              }} 
            />

            <SphereButton 
              initialArgs={[1, 32, 32]} 
              position={[-2, -4, -9]} 
              onClick={() => { 
                changeTexture(3); 
              }} 
            />

            <SphereButton 
              initialArgs={[1, 32, 32]} 
              position={[-7, -4, -5]} 
              onClick={() => { 
                changeTexture(4); 
              }} 
            />
          </>
        );
      case 1:
        return (
          <>
          <SphereButton
            initialArgs={[1.5, 32, 32]}
            position={[-4, -2, -8]}
            onClick={() => {
              changeTexture(0); // Cycle back to index 0
            }}
          />
          <SphereButton
            initialArgs={[1.5, 32, 32]}
            position={[4, -3, -8]}
            onClick={() => {
              changeTexture(2); // Cycle back to index 0
            }}
          />
          <SphereButton
            initialArgs={[1.5, 32, 32]}
            position={[1, -3, -10]}
            onClick={() => {
              changeTexture(2); // Cycle back to index 0
            }}
          />
          <SphereButton
            initialArgs={[1.5, 32, 32]}
            position={[-1, -2, -10]}
            onClick={() => {
              changeTexture(3); // Cycle back to index 0
            }}
          />
          </>
        );
      case 2:
        return (
          <>
          <SphereButton
            initialArgs={[2, 32, 32]}
            position={[7, -2, -5]}
            onClick={() => {
              changeTexture(0); // Cycle back to index 0
            }}
          />
          <SphereButton
            initialArgs={[2, 32, 32]}
            position={[-7, -3, -2]}
            onClick={() => {
              changeTexture(1); // Cycle back to index 0
            }}
          />
          <SphereButton
            initialArgs={[2, 32, 32]}
            position={[7, -4, 2]}
            onClick={() => {
              changeTexture(3); // Cycle back to index 0
            }}
          />
          <SphereButton
            initialArgs={[2, 32, 32]}
            position={[9, -3, 0]}
            onClick={() => {
              changeTexture(4); // Cycle back to index 0
            }}
          />
          </>
        );
      case 3:
        return (
          <>
          <SphereButton
            initialArgs={[1.5, 32, 32]}
            position={[3, -2, -4]}
            onClick={() => {
              changeTexture(0); // Cycle back to index 0
            }}
          />
          <SphereButton
            initialArgs={[1.5, 32, 32]}
            position={[6, -3, 2]}
            onClick={() => {
              changeTexture(4); // Cycle back to index 0
            }}
            />
          <SphereButton
            initialArgs={[1.5, 32, 32]}
            position={[-4, -3, 4]}
            onClick={() => {
              changeTexture(2); // Cycle back to index 0
            }}
            />  
          <SphereButton
            initialArgs={[1.5, 32, 32]}
            position={[-10, -3, -1]}
            onClick={() => {
              changeTexture(1); // Cycle back to index 0
            }}
            />
          </>
          
        );
      case 4:
        return (
          <>
          <SphereButton
            initialArgs={[2.5, 32, 32]}
            position={[-2, -2, -4]}
            onClick={() => {
              changeTexture(0); // Cycle back to index 0
            }}
          />
          <SphereButton
            initialArgs={[2.5, 32, 32]}
            position={[-10, -2, 1]}
            onClick={() => {
              changeTexture(1); // Cycle back to index 0
            }}
          />
          <SphereButton
            initialArgs={[2.5, 32, 32]}
            position={[-7, -3, 6]}
            onClick={() => {
              changeTexture(2); // Cycle back to index 0
            }}
          />
          <SphereButton
            initialArgs={[2.5, 32, 32]}
            position={[-4, -4, 6]}
            onClick={() => {
              changeTexture(3); // Cycle back to index 0
            }}
          />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <ambientLight intensity={1} />
      <Skybox args={[10, 1000, 50, 5]} position={[0, 0, 0]} textureUrl={textureUrl} />
      {renderFromList()} {/* Re-render buttons based on index */}
      <OrbitControls enableZoom={true}  rotateSpeed={-0.2} />
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
