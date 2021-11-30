import { AgChartsReact } from 'ag-charts-react';

import React, { useState, useEffect } from 'react';

const ExperiansHome = () => {
    const [data, setData] = useState([
        {
            year: '2017',
            spending: 0,
        },
        {
            year: '2018',
            spending: 1000000,
        },
        {
            year: '2019',
            spending: 4000000,
        },
        {
            year: '2020',
            spending: 8000000,
        },
    ]);

    useEffect(() => {
        fetch('https://api.digital-investor.kz/api/get-chart-info', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.status === 200) {
                    setData(res?.data);
                }
            });
    }, []);

    const options = {
        autoSize: false,
        tooltip: {
            enabled: false,
        },
        legend: {
            enabled: false,
        },
        padding: {
            top: 40,
            right: 40,
            bottom: 40,
            left: 40,
        },
        axes: [
            {
                type: 'category',
                position: 'bottom',
                label: {
                    fontSize: 12,
                    color: '#a1a6a9',
                },
                tick: {
                    count: 4,
                    color: '#e3e3e4',
                },
            },
            {
                type: 'number',
                position: 'left',
                label: {
                    fontSize: 10,
                    color: '#a1a6a9',
                },
                tick: {
                    count: 10,
                    color: '#e3e3e4',
                },
            },
        ],
        data: [...data],
        series: [
            {
                xKey: 'year',
                yKey: 'spending',
                stroke: '#8ab7ca',
                type: 'line',
                marker: {
                    enabled: false,
                },
            },
        ],
    };

    return (
        <div className="experians-home">
            <div className="container">
                <div className="experians-home_content">
                    <div className="experians-home_content-item">
                        <p>
                            Опыт надежных <br /> инвестиций
                        </p>
                        <p>
                            вместе <br />с DIGITAL INVEST MARKET
                        </p>
                    </div>

                    <div className="experians-home_content-item">
                        <AgChartsReact options={options} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperiansHome;
