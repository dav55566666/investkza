import React from 'react';

import Footer from '../components/footer';
import TokensPage from '../components/tokens-page';
import NavMenuUser from '../uikit/navuser';
import SubNavUser from '../uikit/navuser/sub-menu';
import SupportHeader from '/components/support-header';

export default function Tokens() {
    return (
        <div className="home">
            <NavMenuUser />
            <SubNavUser />
            <SupportHeader page="pogashenie" />
            <TokensPage />
            <Footer />
        </div>
    );
}
