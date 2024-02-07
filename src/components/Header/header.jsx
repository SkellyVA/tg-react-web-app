import React from 'react';
import Button from "../Button/button";

const Header = () => {
    const tg = window.Telegram.WebApp
    const onClose = () => {
        tg.close()
    }
    console.log(tg.initDataUnsafe)

    return (
        <div className={'header'}>
            <Button onClick={onClose()}>Закрыть</Button>
            <span className={'username'}>{tg.initDataUnsafe.user.username}</span>
        </div>
    );
};

export default Header;
