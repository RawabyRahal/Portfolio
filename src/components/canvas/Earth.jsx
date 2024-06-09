import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { Padding } from "@mui/icons-material";

const Earth = ({ isMobile }) => {
  const earth = useGLTF("./envelope/scene.gltf");

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 10, 5]} intensity={25} />
      <directionalLight position={[-5, 10, 5]} intensity={25} />
      <directionalLight position={[5, 10, -5]} intensity={25} />
      <directionalLight position={[-5, 10, -5]} intensity={25} />
      <primitive
        object={earth.scene}
        scale={isMobile ? 0.7 : 1}
        position={isMobile ? [-2, -1.85, 2.5] : [0.4, -3, -0.5]}
      />
    </>
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
  });
  return (
    <Canvas
    // style={{ width: "100%", height: "100%" }}
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.7,
        far: 200,
        position: [5, -3, 8],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {" "}
        <OrbitControls
          autoRotate
          autoRotateSpeed={3.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};
export default EarthCanvas;
