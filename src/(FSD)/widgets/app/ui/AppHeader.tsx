import React from "react";
import AppContainer from "./AppContainer";
import AppInner from "./AppInner";
import styles from "@/(FSD)/shareds/styles/AppStyle.module.scss";
import LogoShared from "@/(FSD)/shareds/ui/LogoShared";
import { Button } from "@nextui-org/button";

interface AppHeaderProps {

}

const AppHeader = ({} : AppHeaderProps) => {
    return (
        <header className={`border-default-100 border-b-small ${styles.header}`}>
            <AppContainer>
                <AppInner>
                    <div className={styles.header_inner}>
                        <LogoShared />
                        <div className={styles.log_btns}>
                            <Button size={"lg"} variant={"light"}>로그인</Button>
                            <Button color={"primary"} size={"lg"}>빠른 가입하기</Button>
                        </div>
                    </div>
                </AppInner>
            </AppContainer>
        </header>
    );
};

export default AppHeader;