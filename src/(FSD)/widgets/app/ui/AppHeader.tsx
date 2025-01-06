import React from "react";
import AppContainer from "./AppContainer";
import AppInner from "./AppInner";
import styles from "@/(FSD)/shareds/styles/AppStyle.module.scss";
import CartProductBtn from "@/(FSD)/entities/cart/ui/CartProductBtn";
import IconBtnShared from "@/(FSD)/shareds/ui/IconBtnShared";

interface AppHeaderProps {
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
    centerContent?: React.ReactNode;
    defaultCartButton?: boolean;
    defaultSearchButton?: boolean;
}

const AppHeader = ({ leftContent, centerContent, rightContent, defaultSearchButton = false, defaultCartButton = false } : AppHeaderProps) => {
    return (
        <header className={`border-default-100 border-b-small ${styles.header}`}>
            <AppContainer>
                <AppInner>
                    <div className={styles.header_inner}>
                        <div className={styles.left_content}>{leftContent}</div>
                        <div className={styles.center_content}>{centerContent}</div>
                        <div className={styles.right_content}>{rightContent}{defaultSearchButton && <IconBtnShared href={"/search"} iconProps={{ iconType: "search" }} />}{defaultCartButton && <CartProductBtn />}</div>
                    </div>
                </AppInner>
            </AppContainer>
        </header>
    );
};

export default AppHeader;0