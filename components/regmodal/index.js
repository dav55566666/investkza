import React, { useState, useEffect } from "react";
import { parsePhoneNumber } from "react-phone-number-input";
import { saveTokenToLocalStorage } from "../../utils/auth";
import CitizenDropdown from "./citizenDropdown";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bangladesh",
  "Barbados",
  "Bahamas",
  "Bahrain",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "British Indian Ocean Territory",
  "British Virgin Islands",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burma",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands",
  "Colombia",
  "Comoros",
  "Congo-Brazzaville",
  "Congo-Kinshasa",
  "Cook Islands",
  "Costa Rica",
  "Croatia",
  "Cura?ao",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "El Salvador",
  "Egypt",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Federated States of Micronesia",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Lands",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard and McDonald Islands",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn Islands",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "R?union",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Barth?lemy",
  "Saint Helena",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin",
  "Saint Pierre and Miquelon",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "S?o Tom? and Pr?ncipe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Sweden",
  "Swaziland",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Vietnam",
  "Venezuela",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
const Regmodal = () => {
  const [statusField, setStatus] = useState(0);
  const [login, setLogin] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isConfirmed, setConfirmed] = useState(false);
  const [countri, setCountri] = useState([]);
  const [ref, setRef] = useState('');
  const [validationInputs, setValidationInputs] = useState({
    login: "",
    userPhone: "",
    email: "",
    password: "",
    passwordConfirm: "",
    citizenship: "",
    status: "",
    badCodeSms: "",
  });
  const [codeSms, setCodeSms] = useState("");
  const [checkSms, setCheckSmsCode] = useState(false);

  useEffect(() => {
    const queryString = window.location.search;
    
    const isRefExists = queryString.search('ref');

    if (isRefExists) {
      setRef(queryString.split('=')[1]);
    } else {
      setRef('');
    }
  }, [])

  function onChangeLogin(e) {
    const { value } = e.currentTarget;

    setLogin(value);
  }

  function onChangeCitizenship(e) {
    const { value } = e.currentTarget;

    setCitizenship(value);
  }

  function onChangePassword(e) {
    const { value } = e.currentTarget;

    setPassword(value);
  }

  function onChangePasswordConfirm(e) {
    const { value } = e.currentTarget;

    setPasswordConfirm(value);
  }

  function onChangeEmail(e) {
    const { value } = e.currentTarget;

    setEmail(value);
  }

  function onChangePhone(e) {
    const { value } = e.currentTarget;

    setUserPhone(value);
  }

  function onChangeStatus(value) {
    setStatus(value);
  }

  function convertCountryTel(value) {
    const parseddata = parsePhoneNumber(value);

    if (parseddata) {
      return {
        code: parseddata.countryCallingCode,
        number: parseddata.nationalNumber,
      };
    }
  }

  function onChangeSmsCode(e) {
    const { value } = e.currentTarget;

    setCodeSms(value);
  }

  async function checkSmsSubmit(e) {
    if (!isConfirmed) {
      return;
    }
    e.preventDefault();
    const params = {
      is_right: 1,
      sms_code: codeSms,
      login: login,
      password: password,
    };
    const response = await fetch("https://api.digital-investor.kz/api/check-sms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "key": "Accept",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: JSON.stringify(params),
    });
    const res = await response.json();

    if (res.status === 200 && res.message === "Sms code is right") {
      saveTokenToLocalStorage(res.data.access_token, login);
      window.location.href = `${window.location.origin}/usertokens`;
    }

    if (status === 500) {
      setValidationInputs({
        login: data.login && data.login.length > 0 ? data.login[0] : "",
        userPhone:
          data.user_phone && data.user_phone.length > 0
            ? data.user_phone[0]
            : "",
        email: data.email && data.email.length > 0 ? data.email[0] : "",
        password:
          data.password && data.password.length > 0 ? data.password[0] : "",
        passwordConfirm:
          data.password_confirm && data.password_confirm.length > 0
            ? data.password_confirm[0]
            : "",
        citizenship:
          data.citizenship && data.citizenship.length > 0
            ? data.citizenship[0]
            : "",
        status: data.status && data.status.length > 0 ? data.status : "",
        badCodeSms: message && message.length > 0 ? message : "",
      });
    }
  }

  async function getCode(e) {
    e.preventDefault();

    const validData = {
      login: "",
      userPhone: "",
      email: "",
      password: "",
      passwordConfirm: "",
    };

    setValidationInputs(validData);

    const user = {
      login,
      citizenship,
      status: statusField,
      country_code: convertCountryTel(userPhone).code,
      user_phone: convertCountryTel(userPhone).number,
      email,
      password,
      password_confirm: passwordConfirm,
      ref: ref,
    };

    let response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/register-user`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(user),
      }
    );
    let { data, message, status } = await response.json();

    if (status === 200) {
      setCheckSmsCode(true);
    } else {
      setValidationInputs({
        login: data.login && data.login.length > 0 ? data.login[0] : "",
        userPhone:
          data.user_phone && data.user_phone.length > 0
            ? data.user_phone[0]
            : "",
        email: data.email && data.email.length > 0 ? data.email[0] : "",
        password:
          data.password && data.password.length > 0 ? data.password[0] : "",
        passwordConfirm:
          data.password_confirm && data.password_confirm.length > 0
            ? data.password_confirm[0]
            : "",
        citizenship:
          data.citizenship && data.citizenship.length > 0
            ? data.citizenship[0]
            : "",
        status: data.status && data.status.length > 0 ? data.status : "",
        badCodeSms: message && message.length > 0 ? message : "",
      });
    }
  }

  function regmodalnone() {
    setStatus(0);
    setLogin("");
    setCitizenship("");
    setUserPhone("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
    setConfirmed(false);
    setValidationInputs({
      login: "",
      userPhone: "",
      email: "",
      password: "",
      passwordConfirm: "",
      citizenship: "",
      status: "",
      badCodeSms: "",
    });
    setCodeSms("");
    setCheckSmsCode(false);
    document.getElementById("regmodal").style.display = "none";
  }

  useEffect(() => {
    let timeout = setTimeout(() => {
      setCountri(
        countries.filter((item) => {
          return (
            citizenship &&
            item.toUpperCase().includes(citizenship.toUpperCase())
          );
        })
      );
    }, 400);

    return () => clearTimeout(timeout);
  }, [citizenship]);

  return (
    <div className="regmodal" id="regmodal">
      <div className="regmodal-cont">
        <button onClick={regmodalnone} className="clousmodal"></button>
        <div className="regmodal-cont-top">
          <h3>Регистрация</h3>
          <div className="regmodal-cont-top-flex">
            <label onClick={() => onChangeStatus(0)}>
              <input type="checkbox" />
              <span className={statusField === 0 ? "active-firstStep" : ""} />
              <p>Физическое лицо</p>
            </label>
            <label onClick={() => onChangeStatus(1)}>
              <input type="checkbox" />
              <span className={statusField === 1 ? "active-firstStep" : ""} />
              <p>Юридическое лицо</p>
            </label>
          </div>
        </div>
        <form className="regmodal-cont-form">
          <div className="regmodal-cont-form-flex">
            <CitizenDropdown
              setCitizenship={setCitizenship}
              countries={countries}
              countri={countri}
              citizenship={citizenship}
              validationInputs={validationInputs}
              onChangeCitizenship={onChangeCitizenship}
            />
            <label className="textinp">
              {" "}
              Логин
              <input
                type="text"
                value={login}
                onChange={onChangeLogin}
                placeholder="stepan-2021"
              />
              {validationInputs.login && (
                <span style={{ color: "red" }}>{validationInputs.login}</span>
              )}
            </label>
            <label className="textinp">
              {" "}
              Пароль
              <input
                type="password"
                value={password}
                onChange={onChangePassword}
                placeholder="Пароль"
              />
              {validationInputs.password && (
                <span style={{ color: "red" }}>
                  {validationInputs.password}
                </span>
              )}
            </label>
            <label className="textinp">
              {" "}
              Подтверждение пароля
              <input
                type="password"
                value={passwordConfirm}
                onChange={onChangePasswordConfirm}
                placeholder="Подтверждение пароля"
              />
              {validationInputs.passwordConfirm && (
                <span style={{ color: "red" }}>
                  {validationInputs.passwordConfirm}
                </span>
              )}
            </label>
            <label className="textinp">
              {" "}
              E-mail
              <input
                type="text"
                value={email}
                onChange={onChangeEmail}
                placeholder="info@stepan.ru"
              />
              {validationInputs.email && (
                <span style={{ color: "red" }}>{validationInputs.email}</span>
              )}
            </label>
            <label className="textinp">
              {" "}
              Телефон
              <input
                type="text"
                value={userPhone}
                onChange={onChangePhone}
                placeholder="+7 ( _____ ) ___ __ __"
              />
              {validationInputs.userPhone && (
                <span style={{ color: "red" }}>
                  {validationInputs.userPhone}
                </span>
              )}
            </label>
            <div className="kodinpblock">
              <label className="kodinp">
                {" "}
                Введите код из SMS
                <input
                  type="text"
                  value={codeSms}
                  onChange={onChangeSmsCode}
                  placeholder="__ __ __ __"
                />
                {validationInputs.badCodeSms && (
                  <span style={{ color: "red" }}>
                    {validationInputs.badCodeSms}
                  </span>
                )}
              </label>
              {!checkSms && (
                <label className="kodbtn">
                  <input
                    type="submit"
                    value="Отправить смс"
                    onClick={getCode}
                  />
                </label>
              )}
            </div>
            <label
              className="chekinp"
              onClick={() => setConfirmed(!isConfirmed)}
            >
              <input type="checkbox" value={isConfirmed} />
              <span></span>
              <p>
                Регистрируясь, я соглашаюсь с условиями <a> договора </a> и{" "}
                <a> политики конфиденциальности </a>{" "}
              </p>
            </label>
            <label className="sendinp">
              <input
                type="submit"
                value="Зарегистрироваться"
                onClick={checkSmsSubmit}
              />
            </label>
            <div className="login-link">
              <p>Уже есть аккаунт? </p>
              <a
                onClick={() => {
                  regmodalnone();
                  document.getElementById("login").style.display = "block";
                }}
              >
                Войти
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Regmodal;
