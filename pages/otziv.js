import React, { useState, useEffect } from 'react';

import Brendctumbs from '../components/brendcrumbs';
import Footer from '../components/footer';
import Otziv from '../components/otziv';
import OtzivItem from '../components/otziv/item';
import NavMenu from '../uikit/nav';
import SubNav from '../uikit/nav/sub-menu';
import { getToken } from '../utils/auth';

export default function Cooperation() {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        fetch('https://api.digital-investor.kz/api/get-reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + getToken(),
                Accept: 'application/json',
            },
            body: JSON.stringify({
                page: currentPage,
                per_page: 12,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.status === 200) {
                    setItems(res.data.reviews_data);
                    setTotalCount(res.data.total_count);
                }
            })
            .catch((err) => console.log(err));
    }, [totalCount, currentPage]);

    const handleChange = (e) => {
        setCurrentPage(e);
    };

    return (
        <div className="cooperation">
            <NavMenu />
            <SubNav />
            <Brendctumbs />
            <Otziv total={totalCount} handleChange={handleChange} page={currentPage} perPage={12}>
                {!!items.length &&
                    items.map((item, index) => (
                        <OtzivItem
                            key={index}
                            otzivdata={item.date}
                            username={item.user_name}
                            otzivtext={item.review}
                        />
                    ))}
            </Otziv>
            <Footer />
        </div>
    );
}
