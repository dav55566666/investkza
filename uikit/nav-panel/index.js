import Link from 'next/link';
import PropTypes from 'prop-types';

import React from 'react';
import { useTranslation } from 'react-i18next';

const NavPanel = ({ steps }) => {
    const { t } = useTranslation();

    return (
        <div className="nav-panel">
            <div className="container">
                {steps.length &&
                    steps.map((path, index) => {
                        return index !== steps.length ? (
                            <Link href={path.link}>
                                <a href="/">
                                    {path.name} <img src="/icon/left-arr.svg" alt="" draggable="false" />
                                </a>
                            </Link>
                        ) : (
                            <Link href="/">
                                <a href="/" className="last-link">
                                    {t('home')}
                                </a>
                            </Link>
                        );
                    })}
            </div>
        </div>
    );
};

NavPanel.propTypes = {
    steps: PropTypes.array,
};

NavPanel.defaultProps = {
    steps: [],
};

export default NavPanel;
