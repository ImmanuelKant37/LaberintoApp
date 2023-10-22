import React, { useRef, Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { useGLTF } from '@react-three/drei';
import {Model} from './model/Scenario'
import { Environment, OrbitControls } from "@react-three/drei";

function ThreeModel() {
  return (
    <Canvas
    style={{ width: '100%', height: '100vh' }} // Opcional, para controlar el tamaño del contenedor
    camera={{ position: [0, 0, 5] }}
    gl={{ antialias: true }} // Otras configuraciones de WebGL
    shadowMap
    size={[window.innerWidth, window.innerHeight]} // Tamaño del canvas
    pixelRatio={window.devicePixelRatio} // Relación de píxeles
  >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <Environment preset="sunset" />
        <OrbitControls />
    </Canvas>
  );
}

export default ThreeModel;
