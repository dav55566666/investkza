import React from 'react';

import Footer from '../components/footer';
import SubHeader from '../components/support';
import NavMenu from '../uikit/nav';
import SubNav from '../uikit/nav/sub-menu';

export default function AboutUs() {
    return (
        <div className="home">
            <NavMenu />
            <SubNav />
            <SubHeader />
            <Footer />
        </div>
    );
}
