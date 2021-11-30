import React, { useState } from 'react';

import { saveTokenToLocalStorage } from '../../utils/auth';
import UpdatePassword from './updatePassword';

const Loginmodal = () => {
    const [face, setFace] = useState(0);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');
    const [forgetPassword, setForgetPasswrd] = useState({
        isOpen: false,
        checkSMS: false,
    });
    const [waitingForSMS, setWaitingForSMS] = useState(false);
    const [message, setMessage] = useState('');

    function onChangeCode(e) {
        const { value } = e.currentTarget;

        setCode(value);
    }

    function onChangeLogin(e) {
        const { value } = e.currentTarget;

        setUserName(value);
    }

    function onChangePassword(e) {
        const { value } = e.currentTarget;

        setPassword(value);
    }

    async function getSmsCode(e) {
        e.preventDefault();
        if (waitingForSMS) {
            return;
        }
        const params = {
            login: userName,
            password,
            is_company: face,
        };

        // Renat55
        const response = await fetch('https://api.digital-investor.kz/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: JSON.stringify(params),
        });
        const res = await response.json();
        if (res.message) {
            setMessage(res.message);
        }
        if (true || res.status === 200) {
            setWaitingForSMS(true);
            setTimeout(() => {
                setWaitingForSMS(false);
            }, 15000);
            return true;
        }
    }

    async function login(e) {
        e.preventDefault();
        const params = {
            is_right: 1,
            sms_code: code,
            login: userName,
            password: password,
        };
        const response = await fetch('https://api.digital-investor.kz/api/check-sms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: JSON.stringify(params),
        });
        const res = await response.json();
        console.log(res);
        if (res.status === 200 && res.message === 'Sms code is right') {
            saveTokenToLocalStorage(res.data.access_token, userName);
            window.location.href = `${window.location.origin}/usertokens`;
        }
    }

    function loginnone() {
        document.getElementById('login').style.display = 'none';
    }

    function forgetPasswordHandler(e) {
        e.preventDefault();
        setForgetPasswrd({
            isOpen: true,
            checkSMS: true,
        });
        fetch('https://api.digital-investor.kz/api/forget-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                login: userName,
            }),
        });
    }
    function checkSMSforgetLogin(newPassword, smsCode) {
        fetch('https://api.digital-investor.kz/api/change-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                new_password: newPassword,
                new_password_confirm: newPassword,
                sms_code: smsCode,
            }),
            // eslint-disable-next-line no-restricted-globals
        }).then(() => location.reload());
    }

    if (forgetPassword.isOpen) {
        return (
            <div className="login" id="login">
                <div className="login-cont">
                    <div className="login-cont-bottom">
                        <form>
                            {!forgetPassword.checkSMS ? (
                                <>
                                    <label htmlFor="login" className="textinp">
                                        <div>
                                            <p>Логин</p>
                                        </div>
                                        <input name="login" type="text" onChange={onChangeLogin} />
                                    </label>
                                    <label htmlFor="submit" className="sendinp">
                                        <input
                                            name="submit"
                                            type="submit"
                                            value="получить смс"
                                            onClick={forgetPasswordHandler}
                                        />
                                    </label>
                                </>
                            ) : (
                                <>
                                    <UpdatePassword onSubmit={checkSMSforgetLogin} />
                                </>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="login" id="login">
            <div className="login-cont">
                <button onClick={loginnone} className="clousmodal" />
                <div className="login-cont-top">
                    <h3>Авторизация</h3>
                    {message.length > 0 ? <h4>{message}</h4> : null}
                    <div className="login-cont-top-flex">
                        <label onClick={() => setFace(0)}>
                            <input type="checkbox" />
                            <span className={face === 0 ? 'active-firstStep' : ''} />
                            <p>Физическое лицо</p>
                        </label>
                        <label onClick={() => setFace(1)}>
                            <input type="checkbox" />
                            <span className={face === 1 ? 'active-firstStep' : ''} />
                            <p>Юридическое лицо</p>
                        </label>
                    </div>
                </div>
                <div className="login-cont-bottom">
                    <form>
                        <label className="textinp">
                            <div>
                                <p>Логин</p>
                            </div>
                            <input type="text" value={userName} onChange={onChangeLogin} />
                        </label>
                        <label className="textinp">
                            <div>
                                <p>Пароль</p>
                                <a
                                    onClick={() =>
                                        setForgetPasswrd({
                                            ...forgetPassword,
                                            isOpen: true,
                                        })
                                    }
                                >
                                    Забыли пароль?
                                </a>
                            </div>
                            <input type="password" value={password} onChange={onChangePassword} />
                        </label>
                        <div className="kodinpblock">
                            <label className="kodinp">
                                {' '}
                                Введите код из SMS
                                <input type="text" placeholder="__ __ __ __" value={code} onChange={onChangeCode} />
                            </label>
                            <label className="kodbtn">
                                <input
                                    style={{
                                        backgroundColor: waitingForSMS ? 'grey' : undefined,
                                    }}
                                    type="submit"
                                    onClick={getSmsCode}
                                    value="Получить SMS"
                                />
                            </label>
                        </div>
                        <label className="sendinp">
                            <input type="submit" onClick={login} />
                        </label>
                        <div className="login-link">
                            <p>Нет аккаунта? </p>
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                    loginnone();
                                    document.getElementById('regmodal').style.display = 'block';
                                }}
                            >
                                Зарегистрируйтесь
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Loginmodal;
