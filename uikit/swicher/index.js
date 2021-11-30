import React from 'react';
import { useTranslation } from 'react-i18next';

function Switcher() {
    const { t } = useTranslation();

    return (
        <div className="switcher-container">
            <div className="switcher active-switch">
                <div className="switcher-thumb" />
            </div>
            <p>{t('info_1')}</p>
        </div>
    );
}

export default Switcher;
