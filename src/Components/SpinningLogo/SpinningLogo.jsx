import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { softShadows } from "drei";

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

const TheGroup = () => {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.y += 0.01));
  const thetaAngle = Math.PI / 4;
  const phiAngle = [0, (2 * Math.PI) / 3, (4 * Math.PI) / 3];
  const radius = 1.5;
  return (
    // <group>
    <mesh ref={mesh}>
      <Ball />
      <Triangle
        position={[
          radius * Math.cos(thetaAngle) * Math.sin(phiAngle[0]),
          radius * Math.sin(thetaAngle),
          radius * Math.cos(thetaAngle) * Math.cos(phiAngle[0]),
        ]}
        color="#F4F1D0"
      />
      <Triangle
        position={[
          radius * Math.cos(thetaAngle) * Math.sin(phiAngle[1]),
          radius * Math.sin(thetaAngle),
          radius * Math.cos(thetaAngle) * Math.cos(phiAngle[1]),
        ]}
        color="#FCACACA"
      />
      <Triangle
        position={[
          radius * Math.cos(thetaAngle) * Math.sin(phiAngle[2]),
          radius * Math.sin(thetaAngle),
          radius * Math.cos(thetaAngle) * Math.cos(phiAngle[2]),
        ]}
        color="grey"
      />
    </mesh>

    // </group>
  );
};

function SpinningLogo() {
  return (
    <Canvas
      shadowMap
      colorManagement
      camera={{ position: [0, 1.4, 9], fov: 40 }}
      // color="#000000"
    >
      <ambientLight intensity={0.6} />
      <directionalLight
        castShadow
        position={[-5.5, 12, 3]}
        intensity={1.9}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
      />
      {/* <pointLight position={[-10, 0, -20]} intensity={0.5} /> */}
      {/* <pointLight position={[0, -10, 0]} intensity={1.5} /> */}

      {/* Plane to project shadow on */}
      <group>
        <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -3, 0]}
        >
          <planeBufferGeometry
            attach="geometry"
            args={[100, 100]}
            rotateX={Math.PI * 0.1}
          />
          <shadowMaterial attach="material" opacity={0.3} />
        </mesh>
      </group>

      <TheGroup />
      {/* <OrbitControls /> */}
    </Canvas>
  );
}

export default SpinningLogo;
