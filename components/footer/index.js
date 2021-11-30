import Link from 'next/link';

import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    return (
        <div className="footer">
            <div className="container">
                <div className="footer_content">
                    <div className="footer_content-items">
                        <div className="footer_contacts">
                            <img src="/img/iconFooter.png" alt="" />
                            <div className="footer_contacts-items">
                                <p>{t('footer2')}</p>
                                <h3>+7 777 022 66 74; +7 705 148 29 15</h3>
                                <a href="info@kzinvestmarket.com">info@digital-investor.kz</a>
                            </div>
                        </div>
                        <div className="footer_menu">
                            <div className="footer_menu-items">
                                <ul>
                                    <li>
                                        <Link href="/about-us">{t('about_company')}</Link>
                                    </li>
                                    <li>
                                        <Link href="/news">{t('news')}</Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">{t('faq')}</Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <Link href="/">{t('info')}</Link>
                                    </li>
                                    <li>
                                        <Link href="/partner">{t('partners')}</Link>
                                    </li>
                                    <li>
                                        <Link href="/referral-program">{t('ref_program')}</Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <Link href="/about-us">{t('documentations')}</Link>
                                    </li>
                                    <li>
                                        <Link href="/tarif">{t('tarifs')}</Link>
                                    </li>
                                    <li>
                                        <Link href="/otziv">{t('reviews')}</Link>
                                    </li>
                                    <li>
                                        <Link href="/tarif">{t('link_text')}</Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-of-cooperation">{t('terms_cop')}</Link>
                                    </li>
                                </ul>
                            </div>
                            <p>{t('footer_info')}</p>
                        </div>
                    </div>
                    <p className="footer-secure">{t('footer')}</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
