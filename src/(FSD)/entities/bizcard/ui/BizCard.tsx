"use client";

import React from "react";
import { BizCardType } from "@/(FSD)/shareds/types/BizCard.type";

const BizCard = () => {
    return (
        <mesh position={[0, 0, 0]}>
            <boxGeometry args={[4, 2.5, 0.01]} />
            <meshStandardMaterial color={"#ffffff"} />
            {/* <Text 
                position={[0, 0, -0.06]}
                fontSize={0.3} 
                color={"#000000"} 
                anchorX={"center" }
                anchorY={"middle"}
                rotation={[0, Math.PI, 0]}
            >
                hi2
            </Text> */}
        </mesh>
    );
};

export default BizCard;