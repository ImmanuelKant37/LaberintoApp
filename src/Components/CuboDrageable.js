import React, { useRef, useState } from 'react';

function CuboDrageable() {
  const [isDragging, setIsDragging] = useState(false);
  const cubeRef = useRef();
  const previousPosition = useRef([0, 0]);
  const sensitivity = 0.05; // Ajusta la sensibilidad según tus preferencias

  const handlePointerDown = (e) => {
    setIsDragging(true);
    previousPosition.current = [e.clientX, e.clientY];
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerMove = (e) => {
    if (isDragging) {
      const [clientX, clientY] = [e.clientX, e.clientY];
      const deltaX = (clientX - previousPosition.current[0]) * sensitivity;
      const deltaY = (clientY - previousPosition.current[1]) * sensitivity;

      const newPosition = [
        cubeRef.current.position.x + deltaX,
        cubeRef.current.position.y - deltaY, // Invertir la dirección del eje Y si es necesario
      ];

      cubeRef.current.position.x = newPosition[0];
      cubeRef.current.position.y = newPosition[1];

      previousPosition.current = [clientX, clientY];
    }
    else {
      setIsDragging(false);
  
    }
  };
 
  return (
    <mesh
      ref={cubeRef}
      onClick={() => console.log('Click en el cubo')}
      onPointerLeave={handlePointerUp}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
    >
      <boxGeometry args={[4, 4, 4]} />
      <meshBasicMaterial color="blue" />
    </mesh>
  );
}

export default CuboDrageable;
