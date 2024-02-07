import React from 'react';
import Button from "../Button/button";
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {
    const {tg, onClose, user} = useTelegram()
    console.log(tg.initDataUnsafe)

    return (
        <div className={'header'}>
            <Button onClick={onClose()}>Закрыть</Button>
            <span className={'username'}>{user?.username}</span>
        </div>
    );
};

export default Header;
