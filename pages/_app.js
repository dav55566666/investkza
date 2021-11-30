import 'antd/dist/antd.css';
import Head from 'next/head';

import React, { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from '../i18n';
import '../styles/_app.scss';
import '../styles/globals.css';
import { isAuthorizated } from '../utils/auth';

function MyApp({ Component, pageProps }) {
    const [locationError, setLocationError] = useState(false);
    const [isAuth, setIsAuth] = useState(true);

    useEffect(() => setIsAuth(!!isAuthorizated()), []);

    useEffect(() => {
        const queryString = window.location.pathname;
        const isUserTokens = queryString.search('usertokens'),
            isWallet = queryString.search('wallet'),
            isAnket = queryString.search('anket'),
            isRef = queryString.search('ref'),
            isTokens = queryString.search('tokens'),
            isRinok = queryString.search('rinok'),
            isMenu = queryString.search('usermenu');

        if ((isUserTokens + isWallet + isAnket + isRef + isTokens + isRinok + isMenu !== -7 && !isAuth) === true) {
            setLocationError(true);
        }
    }, [isAuth]);

    useEffect(() => {
        if (locationError === true) {
            window.location.pathname = '/';
        }
    }, [locationError]);

    return (
        <>
            <Head>
                <meta name="description" content="InvestKz" key="description" />
                <meta property="og:title" content="InvestKz" key="og:title" />
                <meta property="og:description" content="InvestKz" key="og:description" />
                <title>Digital invest market</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/fonts/fonts.css" />
                <link rel="stylesheet" href="/fonts/fonts.css" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Commissioner:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                />
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
            </Head>

            <I18nextProvider i18n={i18n}>
                <Component {...pageProps} />
            </I18nextProvider>
        </>
    );
}

export default MyApp;
