import React from 'react';

import Footer from '../components/footer';
import NavMenuUser from '../uikit/navuser';
import SubNavUser from '../uikit/navuser/sub-menu';
import SupportHeader from '/components/support-header';
import TokensTab from '/components/tokens-tab';

export default function Home() {
    // usertokens
    return (
        <div className="support">
            <NavMenuUser />
            <SubNavUser />
            <SupportHeader page="tokens" />
            <TokensTab />
            <Footer />
        </div>
    );
}
