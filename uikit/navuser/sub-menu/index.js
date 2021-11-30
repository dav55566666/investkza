import { Menu } from 'antd';
import Dropdown from 'antd/lib/dropdown';
import { useRouter } from 'next/router';

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { getToken, logout } from '../../../utils/auth';
import Button from '../../button';

function handleLogout() {
    window.location.href = window.location.origin;
    logout();
}

const SubNavUser = () => {
    const router = useRouter();
    const [data, setData] = useState();

    const { t } = useTranslation();

    useEffect(() => {
        fetch('https://api.digital-investor.kz/api/get-user-wallet', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: 'Bearer ' + getToken(),
            },
        })
            .then((d) => d.json())
            .then(({ data }) => setData(data));
    }, []);

    const menu3 = (
        <Menu>
            <Menu.Item>
                <a href="/sale">{t('sales')}</a>
            </Menu.Item>
            <Menu.Item>
                <a href="/referral-program">{t('ref_program')}</a>
            </Menu.Item>
            <Menu.Item>
                <a href="/terms-of-cooperation">{t('terms_cop')}</a>
            </Menu.Item>
            <Menu.Item>
                <a href="/otziv">{t('reviews')}</a>
            </Menu.Item>
        </Menu>
    );

    const menu2 = (
        <Menu>
            <Menu.Item>
                <div className="nav-choose_lang">
                    <a href="/">{t('home')}</a>
                </div>
            </Menu.Item>
            <Menu.Item>
                <div className="nav-choose_lang">
                    <a href="/about-us">{t('about_company')}</a>
                </div>
            </Menu.Item>
            <Menu.Item>
                <div className="nav-choose_lang">
                    <a href="/news">{t('news')}</a>
                </div>
            </Menu.Item>
            <Menu.Item>
                <div className="nav-choose_lang">
                    <a href="/faq">{t('faq')}</a>
                </div>
            </Menu.Item>
            <Menu.Item>
                <div className="nav-choose_lang">
                    <a href="/terms-of-cooperation">{t('terms_cop')}</a>
                </div>
            </Menu.Item>
            <Menu.Item>
                <div className="nav-choose_lang">
                    <a href="/tarif">{t('tarifs')}</a>
                </div>
            </Menu.Item>
            <Menu.Item>
                <div className="nav-choose_lang">
                    <a href="/otziv">{t('reviews')}</a>
                </div>
            </Menu.Item>
            <Menu.Item onClick={handleLogout}>
                <Button onClick={handleLogout} color={'submit'}>
                    {t('log_out')}
                </Button>
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="sub-nav">
            <div className="container">
                <div className="sub-nav_content">
                    <div className="sub-nav_content-menu">
                        <ul>
                            <li className={router.pathname === '/' ? 'active-sub' : ''}>
                                <a href="/">{t('home')}</a>
                            </li>

                            <li className={router.pathname === '/about-us' ? 'active-sub' : ''}>
                                <Dropdown overlay={menu3}>
                                    <a href="/about-us">{t('about_company')}</a>
                                </Dropdown>
                            </li>

                            <li className={router.pathname === '/news' ? 'active-sub' : ''}>
                                <a href="/news">{t('news')}</a>
                            </li>

                            <li className={router.pathname === '/faq' ? 'active-sub' : ''}>
                                <a href="/faq">{t('faq')}</a>
                            </li>
                        </ul>
                        <div className="subright">
                            <div className="subright-flex">
                                <p>
                                    {data?.usd_sc ? data?.usd_sc : '0.00'}
                                    <span>USD.sc</span>
                                </p>
                                <p>
                                    {data?.kzt_sc ? data?.kzt_sc : '0.00'}
                                    <span>KZT.sc</span>
                                </p>
                                <p>
                                    {data?.euro_sc ? data?.euro_sc : '0.00'}
                                    <span>EUR.sc</span>
                                </p>
                                <p>
                                    {data?.rub_sc ? data?.rub_sc : '0.00'}
                                    <span>RUB.sc</span>
                                </p>
                            </div>
                            <div className="sub-nav_content-menu-links">
                                <a href="/">
                                    <svg
                                        width="12"
                                        height="24"
                                        viewBox="0 0 12 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.5481 0.0049936L8.66986 0C5.43624 0 3.34653 2.31828 3.34653 5.90643V8.62969H0.452578C0.202506 8.62969 0 8.84891 0 9.11932V13.065C0 13.3354 0.202736 13.5544 0.452578 13.5544H3.34653V23.5106C3.34653 23.781 3.54904 24 3.79911 24H7.5749C7.82497 24 8.02748 23.7808 8.02748 23.5106V13.5544H11.4112C11.6613 13.5544 11.8638 13.3354 11.8638 13.065L11.8651 9.11932C11.8651 8.98948 11.8174 8.86514 11.7326 8.77326C11.6479 8.68138 11.5324 8.62969 11.4123 8.62969H8.02748V6.32115C8.02748 5.21157 8.27201 4.64829 9.60873 4.64829L11.5477 4.64755C11.7975 4.64755 12 4.42833 12 4.15817V0.494367C12 0.224462 11.7977 0.00549296 11.5481 0.0049936Z"
                                            fill="#B2B2B2"
                                        />
                                    </svg>
                                </a>
                                <a href="/">
                                    <svg
                                        width="22"
                                        height="18"
                                        viewBox="0 0 22 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M19.7613 4.46747C20.6223 3.81687 21.3973 3.03614 22 2.1253C21.225 2.47229 20.3209 2.73253 19.4168 2.81928C20.364 2.25542 21.0528 1.38795 21.3973 0.303614C20.5362 0.824096 19.546 1.21446 18.5558 1.43133C17.6947 0.520482 16.5323 0 15.2407 0C12.7436 0 10.7202 2.03855 10.7202 4.55422C10.7202 4.9012 10.7632 5.24819 10.8493 5.59518C7.10372 5.37831 3.7456 3.55663 1.50685 0.824096C1.11937 1.4747 0.90411 2.25542 0.90411 3.12289C0.90411 4.68434 1.67906 6.07229 2.92759 6.89639C2.19569 6.85301 1.4638 6.67952 0.861057 6.33253V6.3759C0.861057 8.58795 2.41096 10.4096 4.4775 10.8434C4.13307 10.9301 3.70254 11.0169 3.31507 11.0169C3.0137 11.0169 2.75538 10.9735 2.45401 10.9301C3.0137 12.7518 4.69276 14.053 6.67319 14.0964C5.12329 15.3108 3.18591 16.0482 1.07632 16.0482C0.688845 16.0482 0.344423 16.0048 0 15.9614C1.98043 17.2627 4.34834 18 6.93151 18C15.2407 18 19.7613 11.1036 19.7613 5.0747C19.7613 4.85783 19.7613 4.68434 19.7613 4.46747Z"
                                            fill="#B2B2B2"
                                        />
                                    </svg>
                                </a>
                                <a href="/">
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4.58333 0C2.06281 0 0 2.06281 0 4.58333V17.4167C0 19.9372 2.06281 22 4.58333 22H17.4167C19.9372 22 22 19.9372 22 17.4167V4.58333C22 2.06281 19.9372 0 17.4167 0H4.58333ZM15.5833 3.66667H17.4167C17.9239 3.66667 18.3333 4.07611 18.3333 4.58333C18.3333 5.09056 17.9239 5.5 17.4167 5.5H15.5833C15.0761 5.5 14.6667 5.09056 14.6667 4.58333C14.6667 4.07611 15.0761 3.66667 15.5833 3.66667ZM11 7.33333C13.0359 7.33333 14.6667 8.9641 14.6667 11C14.6667 13.0359 13.0359 14.6667 11 14.6667C8.9641 14.6667 7.33333 13.0359 7.33333 11C7.33333 8.9641 8.9641 7.33333 11 7.33333ZM1.83333 8.55556H6.08247C5.71304 9.29359 5.5 10.1219 5.5 11C5.5 14.0267 7.97329 16.5 11 16.5C14.0267 16.5 16.5 14.0267 16.5 11C16.5 10.1219 16.287 9.29359 15.9175 8.55556H20.1667V17.4167C20.1667 18.9466 18.9466 20.1667 17.4167 20.1667H4.58333C3.05342 20.1667 1.83333 18.9466 1.83333 17.4167V8.55556Z"
                                            fill="#B2B2B2"
                                        />
                                    </svg>
                                </a>
                                <a href="/">
                                    <svg
                                        width="25"
                                        height="15"
                                        viewBox="0 0 25 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M24.4674 1.03125C24.6067 0.46875 24.4674 0 23.6317 0H20.8924C20.196 0 19.871 0.375 19.6853 0.796875C19.6853 0.796875 18.2925 4.21875 16.3425 6.46875C15.6925 7.07812 15.414 7.3125 15.0426 7.3125C14.9033 7.3125 14.6247 7.07812 14.6247 6.51562V1.03125C14.6247 0.328125 14.439 0 13.8354 0H9.5641C9.09982 0 8.86768 0.328125 8.86768 0.65625C8.86768 1.3125 9.84266 1.45312 9.93552 3.32812V7.40625C9.93552 8.29688 9.79624 8.48438 9.42482 8.48438C8.49626 8.48438 6.26773 5.01562 4.92133 1.07812C4.64277 0.328125 4.3642 0 3.66779 0H0.928553C0.185711 0 0 0.375 0 0.796875C0 1.54688 0.928553 5.15625 4.31777 9.98438C6.59273 13.2656 9.79624 15 12.6748 15C14.3926 15 14.6247 14.625 14.6247 13.9688C14.6247 10.8281 14.4854 10.5 15.3211 10.5C15.739 10.5 16.4354 10.7344 18.0604 12.3281C19.9175 14.2031 20.2425 15 21.2639 15H24.0031C24.7924 15 25.1638 14.625 24.9317 13.8281C24.4209 12.2344 20.9389 8.85938 20.7532 8.625C20.3353 8.10938 20.4746 7.875 20.7532 7.40625C20.7532 7.40625 24.096 2.625 24.4674 1.03125Z"
                                            fill="#B2B2B2"
                                        />
                                    </svg>
                                </a>
                                <a href="/">
                                    <img src="/img/tele.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mobilesub-nav">
                        <a href="/" className="mobilesub-nav-left">
                            <img src="/img/iconFooter.png" alt="" />
                        </a>
                        <div className="mobilesub-nav-right">
                            <a href="/" className="mobilesub-nav-right-tele">
                                <img src="/img/tele.png" alt="" />
                            </a>
                            <div>
                                <Dropdown overlay={menu2} trigger="click">
                                    <div>
                                        <img src="/img/iconMenu.svg" alt="" />
                                    </div>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubNavUser;
