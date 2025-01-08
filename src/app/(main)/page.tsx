"use client";

import React from "react";
import AppSection from "@/(FSD)/widgets/app/ui/AppSection";
import MainContainer from "@/(FSD)/widgets/main/MainContainer";

const Page = () => {
    return (
        <AppSection isPadBtm={false} isPadTop={false}>
            <MainContainer />
        </AppSection>
    );
};

export default Page;