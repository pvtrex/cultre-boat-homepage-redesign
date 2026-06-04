import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment, Center, Bounds } from "@react-three/drei";
import studioAsset from "@/assets/music_studio.glb.asset.json";

function Model() {
  const { scene } = useGLTF(studioAsset.url);
  return <primitive object={scene} />;
}

useGLTF.preload(studioAsset.url);

export default function MusicStudio3D() {
  return (
    <Canvas
      camera={{ position: [4, 2.5, 5], fov: 35 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 6, 3]} intensity={1.1} />
      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.1}>
          <Center>
            <Model />
          </Center>
        </Bounds>
        <Environment preset="studio" />
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.8}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI / 2.1}
      />
    </Canvas>
  );
}
