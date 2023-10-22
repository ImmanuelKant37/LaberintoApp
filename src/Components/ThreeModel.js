import React, { Suspense, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import CuboDrageable from './CuboDrageable';
import { Model } from './model/Scenario';

function ThreeModel() {
  const [areControlsEnabled, setControlsEnabled] = useState(true);
  const [buttonColor, setButtonColor] = useState('red');

  const toggleControls = () => {
    setControlsEnabled(!areControlsEnabled);
    setButtonColor(buttonColor === 'red' ? 'green' : 'red');
  };

  const handleButtonClick = () => {
    console.log('Botón presionado');
    toggleControls();
  };

  return (
    <div>
      <button
        className="overlay-button"
        style={{ backgroundColor: buttonColor }}
        onClick={handleButtonClick}
      >
        {areControlsEnabled ? 'Desactivar Controles' : 'Activar Controles'}
      </button>

      <Canvas
        style={{ width: '100%', height: '100vh' }}
        camera={{ position: [3, 5, 15] }}
        gl={{ antialias: true }}
        shadowMap
        size={[window.innerWidth, window.innerHeight]}
        pixelRatio={window.devicePixelRatio}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model />
          <CuboDrageable />
        </Suspense>
        <Environment preset="sunset" />
        <OrbitControls enabled={areControlsEnabled} />
      </Canvas>
    </div>
  );
}

export default ThreeModel;
