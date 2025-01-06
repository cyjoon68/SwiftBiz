"use client";

import React from "react";

const StoreProvider = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <>
            {children}
        </>
    );
};

export default StoreProvider;