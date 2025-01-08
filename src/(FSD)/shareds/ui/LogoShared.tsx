import React from "react";
import Link from "next/link";

const LogoShared = () => {
    return (
        <h1 data-slot={"text_logo"} className={"text-logo"}>
            <Link href={"/"}>
                <span>SwiftBiz</span>
            </Link>
        </h1>
    );
};

export default LogoShared;