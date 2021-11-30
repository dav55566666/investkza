import React, { useState } from 'react';

import Footer from '../components/footer';
import News from '../components/news/News';
import NavMenu from '../uikit/nav';
import NavPanel from '../uikit/nav-panel';
import SubNav from '../uikit/nav/sub-menu';

export default function Home() {
    const [steps] = useState([
        {
            link: '/',
            name: 'Главная',
        },
        {
            link: '/news',
            name: 'Новости',
        },
    ]);

    return (
        <div className="support">
            <NavMenu />
            <SubNav />
            <NavPanel steps={steps} />
            <News />
            <Footer />
        </div>
    );
}
