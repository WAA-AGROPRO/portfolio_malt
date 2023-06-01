import { Canvas, useThree } from "@react-three/fiber";
import {
  Center,
  Text3D,
  OrbitControls,
} from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

export default function KevinThreeD() {


  return (
    <div className="kevin__container" style={{ boxSizing: 'border-box', width: '100%' }} >
    <Canvas orthographic camera={{ position: [-50, -25, 150], zoom: 75, fov: 15}}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
      <Scene />
      <OrbitControls
      autoRotate={true}
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
    </div>
  );
}


function Scene({ margin = 0.5 }) {
  const { width, height } = useThree((state) => state.viewport);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  
  return (
    <>
      <Center rotation={[-0.55, -0.15, 0]}>
      <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={isMobile ? 0.25 : 0.55}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={isMobile ? 0.85 : 0.9}
          font="/Inter_Bold.json"
        >
          {`   Alain  \n   Wodie `}

          <meshNormalMaterial />
        </Text3D>
      </Center>
    </>
  );
}