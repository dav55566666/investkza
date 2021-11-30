import React from 'react';

import Brendctumbs from '../components/brendcrumbs';
import CooperationPage from '../components/cooperationPage';
import Footer from '../components/footer';
import NavMenu from '../uikit/nav';
import SubNav from '../uikit/nav/sub-menu';

export default function Cooperation() {
    return (
        <div className="cooperation">
            <NavMenu />
            <SubNav />
            <Brendctumbs />
            <CooperationPage />
            <Footer />
        </div>
    );
}
