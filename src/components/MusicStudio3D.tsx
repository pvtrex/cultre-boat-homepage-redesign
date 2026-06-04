import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Bounds, Center } from "@react-three/drei";
import * as THREE from "three";
import studioAsset from "@/assets/music_studio_scene.glb.asset.json";

function Model() {
  const { scene } = useGLTF(studioAsset.url);
  // Ensure textures decode in sRGB so colors match the source render
  scene.traverse((obj: any) => {
    if (obj.isMesh && obj.material) {
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      mats.forEach((m: any) => {
        if (m.map) m.map.colorSpace = THREE.SRGBColorSpace;
        if (m.emissiveMap) m.emissiveMap.colorSpace = THREE.SRGBColorSpace;
      });
    }
  });
  return <primitive object={scene} />;
}

useGLTF.preload(studioAsset.url);

export default function MusicStudio3D() {
  return (
    <Canvas
      camera={{ position: [6, 5, 7], fov: 32 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.1;
        gl.outputColorSpace = THREE.SRGBColorSpace;
      }}
    >
      {/* Soft fill so the dark room interior reads */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[6, 8, 4]} intensity={1.2} />
      {/* Warm interior accent matching the red walls */}
      <pointLight position={[0, 3, 0]} intensity={1.5} color="#ff6a55" distance={12} decay={2} />
      {/* Cool neon accent from the monitor side */}
      <pointLight position={[-2, 1.5, 2]} intensity={1.2} color="#8a5cff" distance={8} decay={2} />

      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.15}>
          <Center>
            <Model />
          </Center>
        </Bounds>
      </Suspense>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.9}
        minPolarAngle={Math.PI / 3.8}
        maxPolarAngle={Math.PI / 2.2}
      />
    </Canvas>
  );
}
