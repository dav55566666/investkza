import React from 'react';

import Brendctumbs from '../components/brendcrumbs';
import Footer from '../components/footer';
import Terms from '../components/terms-of-cooperation';
import NavMenu from '../uikit/nav';
import SubNav from '../uikit/nav/sub-menu';

export default function TermsOfCooperation() {
    return (
        <div className="terms-of-cooperation">
            <NavMenu />
            <SubNav />
            <Brendctumbs />
            <Terms />
            <Footer />
        </div>
    );
}
