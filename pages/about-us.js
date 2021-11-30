import React, { useState } from 'react';

import CooperationPage from '../components/cooperationPage';
import Footer from '../components/footer';
import NavMenu from '../uikit/nav';
import NavPanel from '../uikit/nav-panel';
import SubNav from '../uikit/nav/sub-menu';

export default function AboutUs() {
    const [steps] = useState([
        {
            link: '/',
            name: 'Главная',
        },
        {
            link: '/about-us',
            name: 'О компании',
        },
    ]);

    return (
        <div className="home">
            <NavMenu />
            <SubNav />
            <NavPanel steps={steps} />
            <CooperationPage />
            <Footer />
        </div>
    );
}
