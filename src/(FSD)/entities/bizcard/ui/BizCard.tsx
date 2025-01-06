"use client";

import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { BizCardType } from "@/(FSD)/shareds/types/BizCard.type";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

const BizCard = ({ bizCard }: { bizCard: BizCardType }) => {
    const mountRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<THREE.Mesh>(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        mount.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry(3.5, 2, 0.01);
        const material = new THREE.MeshStandardMaterial({ color: "white" });
        const card = new THREE.Mesh(geometry, material);
        scene.add(card);
        cardRef.current = card;

        const light = new THREE.DirectionalLight(0xffffff, 2);
        light.position.set(0, 5, 5);
        scene.add(light);

        const loader = new FontLoader();
        loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font: any) {

            const texts = [
                { text: bizCard.name, position: [-1.6, .8, 0] },
                { text: `${bizCard.affiliation} / ${bizCard.title}`, position: [-1.6, .62, 0] },
                { text: bizCard.phone, position: [-1.6, -.1, 0] },
                { text: bizCard.email, position: [-1.6, -.25, 0] },
                
                { text: bizCard.company, position: [0, .8, 0] },
                { text: bizCard.address, position: [0, .62, 0] },
                { text: bizCard.website, position: [0, .45, 0] }
            ];

            texts.forEach(({ text, position }) => {
                const textGeometry = new TextGeometry(text, {
                    font: font,
                    size: 0.08,
                    height: 0.01,
                });
                const textMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
                const textMesh = new THREE.Mesh(textGeometry, textMaterial);
                textMesh.position.set(...position);
                card.add(textMesh);
            });
        });

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            mount.removeChild(renderer.domElement);
        };
    }, [bizCard]);

    return (
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
            <div ref={mountRef} style={{ width: "100%", height: "100%" }} />
        </div>
    );
};

export default BizCard;