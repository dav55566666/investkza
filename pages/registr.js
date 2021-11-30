import React from 'react';

import Footer from '../components/footer';
import Registr from '../components/registr';
import NavMenu from '../uikit/nav';
import SubNav from '../uikit/nav/sub-menu';

export default function Home() {
    return (
        <div className="support">
            <NavMenu />
            <SubNav />
            <Registr />
            <Footer />
        </div>
    );
}
