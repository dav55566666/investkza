import React from 'react';

import Footer from '../components/footer';
import NavMenuUser from '../uikit/navuser';
import SubNavUser from '../uikit/navuser/sub-menu';
import SupportHeader from '/components/support-header';
import SupportPage from '/components/support-page';

export default function Home() {
    return (
        <div className="support">
            <NavMenuUser />
            <SubNavUser />
            <SupportHeader page="help" />
            <SupportPage />
            <Footer />
        </div>
    );
}
