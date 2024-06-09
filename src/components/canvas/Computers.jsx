/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import CanvasLoader from "../Loader";
const CanvasLoader = lazy(() => import("../Loader"));

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={5} groundColor="black" />
      <spotLight
        position={[-1, 50, 1]}
        angle={0.12}
        penumbra={1}
        intensity={100}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={10} position={[-2, 3.5, 2]} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.55 : 0.9}
        position={isMobile ? [-2, -0.45, -1] : [-1.5, -0.3, -0.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      // dpr={[1, 2]}
      camera={{ position: [25, 10, 4], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ cursor: "pointer" }}
      title="Rotate"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
         autoRotateSpeed={7}
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
