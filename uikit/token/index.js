import React from 'react';
import { useTranslation } from 'react-i18next';

const Token = ({ path, name, production, saled, torepayment, btn, btn2 }) => {
    const { t } = useTranslation();

    const imageStyles = {
        width: '100%',
        height: '320px',
        backgroundImage: `url(${path})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '100% auto',
        backgroundColor: path.length ? 'transparent' : '#e5e5e5',
    };

    return (
        <div className="token">
            <div className="token-img" style={imageStyles}></div>
            <div className="token-info">
                <p className="token-info-name">{name}</p>
                <p className="token-info-name token-info-production">{production}</p>
                <div className="token-info-count">
                    <p>{t('buy_tokens')}</p>
                    <p>{saled}</p>
                </div>
                <div className="token-info-count">
                    <p>{t('to_early_rep')}</p>
                    <p>{torepayment}</p>
                </div>
                <div className="token-info-btn">
                    {btn}
                    {btn2}
                </div>
            </div>
        </div>
    );
};

export default Token;
