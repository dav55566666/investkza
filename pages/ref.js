import React from 'react';

import Footer from '../components/footer';
import Refpro from '../components/refprogram';
import NavMenuUser from '../uikit/navuser';
import SubNavUser from '../uikit/navuser/sub-menu';
import SupportHeader from '/components/support-header';

export default function Faq() {
    return (
        <div className="faq">
            <NavMenuUser />
            <SubNavUser />
            <SupportHeader page="ref" />
            <Refpro />
            <Footer />
        </div>
    );
}
