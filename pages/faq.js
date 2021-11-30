import React, { useState } from 'react';

import FaqPage from '../components/faqPage';
import Footer from '../components/footer';
import NavMenu from '../uikit/nav';
import NavPanel from '../uikit/nav-panel';
import SubNav from '../uikit/nav/sub-menu';

export default function Faq() {
    const [steps] = useState([
        {
            link: '/',
            name: 'Главная',
        },
        {
            link: '/faq',
            name: 'FAQ',
        },
    ]);

    return (
        <div className="faq">
            <NavMenu />
            <SubNav />
            <NavPanel steps={steps} />
            <FaqPage />
            <Footer />
        </div>
    );
}
