"use client";

import React from "react";
import AppSection from "@/(FSD)/widgets/app/ui/AppSection";
import BizCardContainer from "@/(FSD)/widgets/\bbizcard/ui/BizCardContainer";

const Page = () => {
    return (
        <AppSection isPadBtm={false} isPadTop={false}>
            <BizCardContainer />
        </AppSection>
    );
};

export default Page;