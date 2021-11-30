import React from 'react';

import Footer from '../components/footer';
import TokensPage from '../components/tokens-page';
import NavMenu from '../uikit/nav';
import SubNav from '../uikit/nav/sub-menu';
import SupportHeader from '/components/support-header';

export default function AboutUs() {
    return (
        <div className="home">
            <NavMenu />
            <SubNav />
            <SupportHeader />
            <TokensPage />
            <Footer />
        </div>
    );
}
