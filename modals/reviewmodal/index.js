import React, { useState } from 'react';

import { getToken } from '../../utils/auth';

const Reviewmodal = () => {
    const [reviewText, setReviewText] = useState('');

    const submit = (e) => {
        e.preventDefault();
        fetch('https://api.digital-investor.kz/api/add-reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + getToken(),
                Accept: 'application/json',
            },
            body: JSON.stringify({
                review: reviewText,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.status === 200) {
                    close();
                } else {
                    alert(data.message);
                }
            });
    };

    function close() {
        document.getElementById('reviewmodal').style.display = 'none';
    }
    return (
        <div className="reviewmodal" id="reviewmodal">
            <div className="reviewmodal-cont">
                <button onClick={close} className="clousmodal"></button>
                <div className="reviewmodal-cont-title">
                    <div className="reviewmodal-cont-title-box">
                        <h3>Оставьте пожалуйста Ваш отзыв</h3>
                    </div>
                </div>
                <div className="reviewmodal-cont-form">
                    <form className="reviewmodal-cont-form-box">
                        <div className="reviewmodal-cont-form-box-bottom">
                            <div className="reviewmodal-cont-form-box-bottom-left">
                                <label>
                                    Отзыв
                                    <textarea
                                        onChange={(e) => setReviewText(e.target.value)}
                                        type="text"
                                        placeholder="Отзыв"
                                    />
                                </label>
                            </div>
                            <div className="reviewmodal-cont-form-box-bottom-right">
                                <label>
                                    <input onClick={submit} type="submit" value="Отправить" />
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reviewmodal;
