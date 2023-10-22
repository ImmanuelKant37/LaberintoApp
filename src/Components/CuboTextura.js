
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