// src/Data.js

const graphData = [
    {
      id: 0,
      position: [0, 0, 0],
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
  
  export default graphData;
  