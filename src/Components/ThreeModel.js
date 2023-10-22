import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { useGLTF } from '@react-three/drei';
import {Model} from './model/Scenario'
import { Environment, OrbitControls } from "@react-three/drei";
import { TextureLoader } from 'three'; // Importa los módulos que necesitas

function Cubo() {
    const texture = new TextureLoader().load('/cieloazul.jpg'); // Ruta a tu imagen
 
    const mesh = useRef();

    useFrame(() => {
      if (mesh.current) {
        mesh.current.rotation.x += 0.001;
        mesh.current.rotation.y += 0.002;
      }
    });
  
    return (
        <mesh ref={mesh}>
          <boxGeometry args={[4, 4, 4]} /> {/* Utiliza boxGeometry proporcionado por R3F */}
          <meshBasicMaterial attach="material" map={texture} side={2} />
        </mesh>
      );
    }
    
function ThreeModel() {
  return (
    <Canvas
    style={{ width: '100%', height: '100vh' }} // Opcional, para controlar el tamaño del contenedor
    camera={{ position: [3, 5, 15] }}
    gl={{ antialias: true }} // Otras configuraciones de WebGL
    shadowMap
    size={[window.innerWidth, window.innerHeight]} // Tamaño del canvas
    pixelRatio={window.devicePixelRatio} >
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
