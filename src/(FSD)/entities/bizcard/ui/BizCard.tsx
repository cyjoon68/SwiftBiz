"use client";

import React from "react";
import { BizCardType } from "@/(FSD)/shareds/types/BizCard.type";
import { Text } from "@react-three/drei";

interface BizCardProps {
    bizCard: BizCardType;
}

const BizCard = ({ bizCard }: BizCardProps) => {
    return (
        <mesh position={[0, 0, 0]}>
            <boxGeometry args={[4, 3, 0.01]} />
            <meshStandardMaterial color={"#ffffff"} />
            <Text 
                position={[0, 0, 0.06]}
                fontSize={0.3} 
                color={"#000000"} 
                anchorX={"center" }
                anchorY={"middle"}
            >
                hi
            </Text>
            <Text 
                position={[0, 0, -0.06]}
                fontSize={0.3} 
                color={"#000000"} 
                anchorX={"center" }
                anchorY={"middle"}
                rotation={[0, Math.PI, 0]}
            >
                hi2
            </Text>
        </mesh>
    );
};

export default BizCard;