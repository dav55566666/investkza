import React from 'react';

import Brendctumbs from '../components/brendcrumbs';
import Footer from '../components/footer';
import PartnerNew from '../components/new-partner';
import Partner from '../components/partner';
import NavMenu from '../uikit/nav';
import SubNav from '../uikit/nav/sub-menu';

export default function Home() {
    return (
        <div className="support">
            <NavMenu />
            <SubNav />
            <Brendctumbs />
            <Partner />
            <PartnerNew />
            <Footer />
        </div>
    );
}
