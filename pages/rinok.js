import React from 'react';

import Footer from '../components/footer';
import Rinok from '../components/rinok';
import NavMenuUser from '../uikit/navuser';
import SubNavUser from '../uikit/navuser/sub-menu';
import SupportHeader from '/components/support-header';

export default function Tokens() {
    return (
        <div className="rinok">
            <NavMenuUser />
            <SubNavUser />
            <SupportHeader page="rinok" />
            <Rinok />
            <Footer />
        </div>
    );
}
