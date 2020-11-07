import React from "react";
import { Canvas } from "react-three-fiber";
import { softShadows, OrbitControls } from "drei";

softShadows();

const Ball = () => (
  <mesh castShadow position={[0, 0.2, 0]}>
    <sphereBufferGeometry attach="geometry" args={[1, 35, 35]} />
    <meshStandardMaterial attach="material" color="#FF5858" />
  </mesh>
);

const Triangle = ({ position, color }) => (
  <mesh
    castShadow
    position={position}
    rotation={[Math.atan(Math.sqrt(2)), Math.PI / 4, Math.PI / 2]}
  >
    <tetrahedronGeometry attach="geometry" args={[0.6, 0]} />
    <meshStandardMaterial attach="material" color={color} />
  </mesh>
);

function SpinningLogo() {
  return (
    <Canvas
      shadowMap
      colorManagement
      camera={{ position: [0, 0.5, 8], fov: 40 }}
      color="#000000"
    >
      <ambientLight intensity={0.6} />
      <directionalLight
        castShadow
        position={[-3, 10, 0]}
        intensity={1.9}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
      />

      <Ball />
      <Triangle
        position={[1, 1, 0.5]}
        color="#F4F1D0"
        rotation={[0.5 * Math.PI, 0.9 * Math.PI, 0]}
      />
      <Triangle
        position={[-1, 1, 0.5]}
        color="#FCACACA"
        rotation={[3.8, 0.5, 0.3]}
      />
      <Triangle position={[0, 1, -1]} color="grey" />
      <OrbitControls autoRotate autoRotateSpeed={5} />
    </Canvas>
  );
}

export default SpinningLogo;
