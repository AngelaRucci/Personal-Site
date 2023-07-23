import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Color } from "three";

import vertexShader from './VertexShader';
import fragmentShader from './FragmentShader';



const Fragment = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_colors: {
        value: [ 
          new Color("#D92E2E"),
          new Color('#2EBAD9'),
          new Color('#D9C82E'),
          new Color('#D98A2E'),
        ]
      }
    }), []
  );

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime() * 0.005;
  });

  return (
    <mesh ref={mesh} scale={1.5}>
      <planeGeometry args={[5.5, 5.5, 300, 300]} />
      <shaderMaterial 
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

const Background = () => {
  return (
    <Canvas camera={{ position: [0.0, 0.0, 0.4] }}>
      <Fragment />
    </Canvas>
  );
};


export default Background