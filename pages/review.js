import React from 'react';

import Footer from '../components/footer';
import Reviews from '../components/reviews';
import Reviewmodal from '../modals/reviewmodal';
import NavMenu from '../uikit/nav';
import SubNav from '../uikit/nav/sub-menu';

export default function Tokens() {
    return (
        <div className="home">
            <NavMenu />
            <SubNav />
            <Reviewmodal />
            <Reviews />
            <Footer />
        </div>
    );
}
