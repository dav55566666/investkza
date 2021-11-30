import { Menu } from 'antd';
import Dropdown from 'antd/lib/dropdown';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Regmodal from '../../components/regmodal';
import i18n from '../../i18n';
import Loginmodal from '../../modals/loginmodal';
import { isAuthorizated, logout } from '../../utils/auth';
import Button from '../button';

const languages = [
    {
        lng: 'ru',
        icon: '/img/russion.png',
        name: 'Ru',
    },
    {
        lng: 'en',
        icon: '/img/eng.png',
        name: 'Eng',
    },
];

const NavMenu = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [active, setActive] = useState('ru');

    useEffect(() => {
        setIsAuth(isAuthorizated());
        let interval;
        if (!isAuth) {
            interval = setInterval(() => {
                setIsAuth(isAuthorizated());
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isAuth]);

    useEffect(() => {
        const queryString = window.location.search;

        const isRefExists = queryString.search('ref');

        if (isRefExists === 1) {
            handleToggle();
        }
    }, []);

    useEffect(() => setActive(localStorage.getItem('i18nextLng') || 'ru'), []);

    const { t } = useTranslation();

    function handleToggle() {
        document.getElementById('regmodal').style.display = 'block';
    }

    function handleToggleLogin() {
        document.getElementById('login').style.display = 'block';
    }

    const changeLang = (lng) => {
        setActive(lng);
        i18n.changeLanguage(lng);
        window.location.reload();
    };

    const menu = (
        <Menu>
            {languages
                .filter((i) => i.lng !== active)
                .map((lang, index) => (
                    <Menu.Item key={index} onClick={() => changeLang(lang.lng)}>
                        <div className="nav-choose_lang">
                            <img src={lang.icon} alt="" />
                            <span>{lang.name}</span>
                        </div>
                    </Menu.Item>
                ))}
        </Menu>
    );

    const activeLang = languages.filter((i) => i.lng === active)[0];

    return (
        <>
            <Loginmodal />
            <Regmodal />
            <div className="nav-menu">
                <div className="container">
                    <div className="nav-menu_content">
                        <a href="/" style={{ height: '100%' }}>
                            <div className="nav-menu_logo">
                                <img src="/img/logo.png" alt="Logo" draggable="false" />
                            </div>
                        </a>

                        <div className="nav-menu_auth">
                            <div className="nav-menu_auth-lang">
                                <Dropdown overlay={menu} placement="bottomCenter">
                                    <div style={{ cursor: 'pointer' }}>
                                        <img src={activeLang.icon} alt="" />
                                        <span>{activeLang.name}</span>
                                        <img src="/img/arrow-select.png" alt="" />
                                    </div>
                                </Dropdown>
                            </div>

                            <div className="nav-menu_actions">
                                {isAuth ? (
                                    <>
                                        <Button
                                            color={'blue'}
                                            onClick={() => {
                                                window.location.href = `${window.location.origin}/usertokens`;
                                            }}
                                        >
                                            {t('cabinet')}
                                        </Button>
                                        <Button
                                            color={'red'}
                                            onClick={() => {
                                                logout();
                                                setIsAuth(isAuthorizated());
                                            }}
                                        >
                                            {t('log_out')}
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Button color={'green'} onClick={handleToggleLogin}>
                                            {t('sign_in')}
                                        </Button>
                                        <Button onClick={handleToggle} color={'submit'}>
                                            {t('sign_up')}
                                        </Button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavMenu;
