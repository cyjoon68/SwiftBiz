"use client";

import BizCard from "@/(FSD)/entities/bizcard/ui/BizCard";
import { BizCardType } from "@/(FSD)/shareds/types/BizCard.type";
import React from "react";

const BizCardContainer = () => {
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
        <>
            <BizCard bizCard={bizCardData} />
        </>
    );
};

export default BizCardContainer;