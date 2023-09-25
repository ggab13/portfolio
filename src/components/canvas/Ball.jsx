import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Ball = (props) => {
    const [decal] = useTexture([props.imgUrl]);

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={1} />
            <directionalLight position={[0, 0, 3]} />
            <mesh castShadow receiveShadow scale={3}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color="#f5f1f1"
                    polygonOffset
                    polygonOffsetFactor={-13}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 0]}
                    map={decal}
                ></Decal>
            </mesh>
        </Float>
    );
};

const BallCanvas = ({ icon }) => {
    return (
        <Canvas gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />
                <Ball imgUrl={icon} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default BallCanvas;
