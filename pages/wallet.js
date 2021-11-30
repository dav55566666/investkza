import React, { useState, useEffect } from 'react';

import Footer from '../components/footer';
import NavMenuUser from '../uikit/navuser';
import SubNavUser from '../uikit/navuser/sub-menu';
import { getToken } from '../utils/auth';
import SupportHeader from '/components/support-header';
import Topup from '/components/topup';
import Topupv from '/components/topup2';
import Wallet from '/components/wallet';

export default function Home() {
    const [topupCurrency, setTopupCurrency] = useState();
    const [topupvCurrency, setTopupvCurrency] = useState();
    const [walletData, SetWalletData] = useState();
    const [wallet, setWallet] = useState({
        all: null,
        free: null,
        blocked: null,
    });

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
            .then(({ data }) => {
                SetWalletData(data);
            });
    }, []);

    useEffect(() => {
        if (walletData) {
            const currency = topupCurrency ? topupCurrency : topupvCurrency ? topupvCurrency : null;
            const suffix = !!currency && currency.toLowerCase().replace('eur', 'euro') + '_sc';
            const walletTotal = {
                all: `${walletData['all_' + suffix]} ${currency}.sc`,
                free: `${walletData[suffix]} ${currency}.sc`,
                blocked: `${walletData['blocked_' + suffix]} ${currency}.sc`,
            };

            if (!!topupCurrency && !!suffix) {
                setWallet(walletTotal);
            }
            if (!!topupvCurrency && !!suffix) {
                setWallet(walletTotal);
            }
        }
    }, [topupCurrency, topupvCurrency, walletData]);

    const onTopopClick = (currency) => {
        setTopupCurrency(currency);
        setTopupvCurrency(null);
    };

    const onTopopvClick = (currency) => {
        setTopupvCurrency(currency);
        setTopupCurrency(null);
    };

    return (
        <div className="walletpage">
            <Topup
                allwalletTotal={wallet.all}
                freebalanceTotal={wallet.free}
                blockedTotal={wallet.blocked}
                itogprice={'1 200 USD.sc'}
                currency={topupCurrency}
            />
            <Topupv
                allwalletTotal={wallet.all}
                freebalanceTotal={wallet.free}
                blockedTotal={wallet.blocked}
                itogprice={'1 200 USD.sc'}
                currency={topupvCurrency}
            />
            <NavMenuUser />
            <SubNavUser />
            <SupportHeader page="wallet" />
            <Wallet onTopopClick={onTopopClick} onTopopvClick={onTopopvClick} />
            <Footer />
        </div>
    );
}
