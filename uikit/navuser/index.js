import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Tokenmodalpol from '../../components/tokenmodalpol';
import Tokenmodal from '../../modals/tokenmodal';
import { isAuthorizated, logout, getUserName } from '../../utils/auth';

const NavMenuUser = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [userName, setUserName] = useState('');

    const { t } = useTranslation();

    useEffect(() => {
        setIsAuth(isAuthorizated());
        let interval;
        if (!isAuth) {
            interval = setInterval(() => {
                setIsAuth(isAuthorizated());
            }, 1000);
        } else {
            setUserName(getUserName());
        }

        return () => clearInterval(interval);
    }, [isAuth]);

    function handleToggleToken() {
        document.getElementById('tokenmodal').style.display = 'block';
    }

    function handleToggleTokenpol() {
        document.getElementById('tokenmodalpol').style.display = 'block';
    }

    return (
        <div className="nav-menu">
            <Tokenmodal />
            <Tokenmodalpol />
            <div className="container">
                <div className="nav-menu_content nav-menu_contentuser">
                    <div className="nav-menu_logo">
                        <img src="/img/logo.png" alt="Logo" draggable="false" />
                    </div>

                    <div className="nav-menu_auth">
                        <div className="nav-menu_auth-lang">
                            <div>
                                <img src="/img/Mask Group (2).png" alt="" />
                                <span>{userName} </span>
                            </div>
                        </div>

                        <div className="nav-menu_actions nav-menu_actionsuser">
                            <button onClick={handleToggleTokenpol}>{t('fill').toUpperCase()}</button>
                            <button onClick={handleToggleToken}>{t('withdraw').toUpperCase()}</button>
                            <button
                                onClick={() => {
                                    window.location.href = window.location.origin;
                                    logout();
                                }}
                            >
                                {t('log_out').toUpperCase()}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavMenuUser;
