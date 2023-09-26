import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
const Model = ({ isMobile }) => {
    const geometry = useGLTF('./models/scene.gltf');

    const myMesh = useRef();
    useFrame(() => {
        if (!myMesh.current) {
            return;
        }
        myMesh.current.rotation.y -= 0.002;
        myMesh.current.rotation.x -= 0.001;
    });
    return (
        <mesh ref={myMesh}>
            <directionalLight
                color="#009572"
                position={(-11, -3, -4)}
                intensity={9}
            />

            <primitive
                object={geometry.scene}
                scale={isMobile ? 0.27 : 0.2}
                color="#009572"
                position={[1, 10, 10]}
                rotation={[10, 1, 0]}
            />
            <directionalLight
                color="#009572"
                position={(11, 3, 4)}
                intensity={9}
            />
        </mesh>
    );
};

const ModelCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 640px)');

        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);
    return (
        <Canvas camera={{ position: [1, 10, 70], fov: 40 }}>
            <Suspense fallback={<CanvasLoader />}>
                <Model isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};
export default ModelCanvas;
