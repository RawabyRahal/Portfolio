import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./earth_hologram/scene.gltf");

  return (
    <>
    <ambientLight intensity={5.5} />
    <directionalLight position={[5, 10, 5]} intensity={1} />
    <directionalLight position={[-5, 10, 5]} intensity={1} />
    <directionalLight position={[5, 10, -5]} intensity={1} />
    <directionalLight position={[-5, 10, -5]} intensity={1} />
    <primitive object={earth.scene} scale={1.55} position={[0.4, 0.1, -0.5]}/>
  </>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      // dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.7,
        far: 200,
        position: [-6, -3, -6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {" "}
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};
export default EarthCanvas;
