import React from "react";
import RootProvider from "@/(FSD)/apps/providers/RootProvider";
import "@/(FSD)/shareds/styles/globalStyle.scss";
import styles from "@/(FSD)/shareds/styles/ComponentStyle.module.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "swiftbiz",
}

const RootLayout = async ({ children, }: { children: React.ReactNode }) => {
    return (
        <html lang="ko" suppressHydrationWarning={true}>
            <body>
                <RootProvider>
                    <div id={"root"} className={`${styles.root}`} suppressHydrationWarning={true}>
                        {children}
                    </div>
                </RootProvider>
            </body>
        </html>
    );
};

export default RootLayout;