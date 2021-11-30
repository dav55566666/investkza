import { v4 as uuid } from 'uuid';

import React, { useState, useEffect } from 'react';

import Brendctumbs from '../components/brendcrumbs';
import Footer from '../components/footer';
import Sale from '../components/sale';
import SaleItem from '../components/sale/item';
import NavMenu from '../uikit/nav';
import SubNav from '../uikit/nav/sub-menu';

export default function Cooperation() {
    const [sale, setSale] = useState(null);

    useEffect(() => {
        fetch('https://api.digital-investor.kz/api/get-promotions', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error('Bad response from server');
                }
                return response.json();
            })
            .then((json) => {
                setSale(json.data);
                console.log(json.data);
            })
            .catch((error) => {
                console.error('Error: ', error);
            });
    }, []);

    return (
        <div className="cooperation">
            <NavMenu />
            <SubNav />
            <Brendctumbs />
            <Sale title={'Акции и конкурсы'}>
                {sale &&
                    sale.length > 0 &&
                    sale.map((item) => {
                        const { title, image, description, created_date } = item;
                        return <SaleItem key={uuid()} imgsrc={image} saletext={description} salelink={'Получить'} />;
                    })}
            </Sale>
            <Footer />
        </div>
    );
}
