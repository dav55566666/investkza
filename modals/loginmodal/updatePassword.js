import React, { useState } from 'react';

function UpdatePassword({ onSubmit }) {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [smsCode, setSmsCode] = useState();

    const onPasswordChange = (e) => {
        const { value } = e.currentTarget;
        setPassword(value);
    };

    const onNewPasswordChange = (e) => {
        const { value } = e.currentTarget;
        setNewPassword(value);
    };

    return (
        <div>
            <p>{password !== newPassword ? 'Пароли не совпадают' : null}</p>
            <label htmlFor="new_password" className="textinp">
                <div>
                    <p>Новый пароль</p>
                </div>
                <input value={password} name="new_password" type="password" onChange={onPasswordChange} />
            </label>
            <label htmlFor="new_password_confirm" className="textinp">
                <div>
                    <p>Подтверждать</p>
                </div>
                <input value={newPassword} name="new_password_confirm" type="password" onChange={onNewPasswordChange} />
            </label>
            <label htmlFor="sms_code" className="textinp">
                <div>
                    <p>СМС код</p>
                </div>
                <input value={smsCode} name="sms_code" type="number" />
            </label>
            <label className="sendinp">
                <input
                    type="submit"
                    value="Измени пароль"
                    onClick={(e) => {
                        e.preventDefault();
                        if (newPassword === password) {
                            onSubmit(newPassword, smsCode);
                        }
                    }}
                />
            </label>
        </div>
    );
}

export default UpdatePassword;
