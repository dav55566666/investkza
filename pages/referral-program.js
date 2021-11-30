import React from 'react';

import Brendctumbs from '../components/brendcrumbs';
import BrendctumbsItem from '../components/brendcrumbs/item';
import Footer from '../components/footer';
import ReferralProgram from '../components/referral-program';
import NavMenu from '../uikit/nav';
import SubNav from '../uikit/nav/sub-menu';

export default function Faq() {
    return (
        <div className="faq">
            <NavMenu />
            <SubNav />
            <Brendctumbs>
                <BrendctumbsItem link={<a>Главная</a>} />
                <BrendctumbsItem text={<p>Реферальная программа</p>} />
            </Brendctumbs>
            <ReferralProgram />
            <Footer />
        </div>
    );
}
