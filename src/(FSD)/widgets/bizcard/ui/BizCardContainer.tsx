"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { useRef, useCallback } from "react";
import styles from "@/(FSD)/shareds/styles/BizCardStyle.module.scss";
import BizCard from "@/(FSD)/entities/bizcard/ui/BizCard";
import { BizCardType } from "@/(FSD)/shareds/types/BizCard.type";

const BizCardContainer = () => {
    const controlsRef = useRef<any>(null);

    const handleUpdate = useCallback(() => {
        const controls = controlsRef.current;
        const currentAngle = Math.atan2(controls.object.position.x, controls.object.position.z);
        const frontAngle = 0;
        const backAngle = Math.PI;

        const closestFace = (Math.abs(currentAngle - frontAngle) < Math.abs(currentAngle - backAngle)) ? frontAngle : backAngle;
        const distance = Math.sqrt(controls.object.position.x ** 2 + controls.object.position.z ** 2);

        const newX = Math.sin(closestFace) * distance;
        const newZ = Math.cos(closestFace) * distance;

        if (Math.abs(newX - controls.object.position.x) > 0.01 || Math.abs(newZ - controls.object.position.z) > 0.01) {
            controls.object.position.x = newX;
            controls.object.position.z = newZ;
            controls.object.lookAt(0, 0, 0);
        }
    }, []);

    const bizCardData: BizCardType = {
        name: "ChaeYoungJoon",
        affiliation: "Mosque",
        title: "Develop",
        phone: "+82(0)10 5913 6475",
        email: "chaeyj568@gmail.com",
        company: "ideaocean",
        address: "Bongcheon-ro, Gwanak-gu, Seoul",
        website: "ideaocean.ai"
    };

    return (
        <Canvas className={styles.canvas_container}>
            <OrbitControls
                ref={controlsRef}
                maxAzimuthAngle={Infinity}
                minAzimuthAngle={-Infinity}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                onEnd={handleUpdate}
            />
            <ambientLight intensity={20} />
            <spotLight position={[10, 15, 10]} angle={0.3} />
            <pointLight position={[-10, -10, -10]} />

            <BizCard bizCard={bizCardData} />
        </Canvas>
    );
};

export default BizCardContainer;