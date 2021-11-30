import CircularProgress from '@material-ui/core/CircularProgress';

import React, { useState, useEffect } from 'react';
import { parsePhoneNumber } from 'react-phone-number-input';

import Footer from '../components/footer';
import Anket from '../components/forms';
import AnketItem from '../components/forms/item';
import AnketCheckbox from '../components/forms/item/checkbox';
import AnketCheckboxItem from '../components/forms/item/checkbox/item';
import AnketInput from '../components/forms/item/inputs';
import AnketInputItem from '../components/forms/item/inputs/item';
import AnketInputFile from '../components/forms/item/inputsfile';
import AnketInputFileitem from '../components/forms/item/inputsfile/item';
import NavMenuUser from '../uikit/navuser';
import SubNavUser from '../uikit/navuser/sub-menu';
import { getToken } from '../utils/auth';
import SupportHeader from '/components/support-header';

export default function AboutUs() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState({});
    const [images, setImages] = useState([]);
    const [formData, setFormData] = useState({});
    const [isCurrentLocationVisible, setIsCurrentLocationVisible] = useState(true);
    const [isOtherUserVisible, setIsOtherUserVisible] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://api.digital-investor.kz/api/get-user-anket', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + getToken(),
                Accept: 'application/json',
            },
        })
            .then((res) => res.json())
            .then((res) => {
                const d = res?.data;

                setData(d);
                setFormData({
                    ...d,
                    ['has_location']: d?.has_location ? d?.has_location : true,
                    ['has_benefit']: d?.has_benefit ? d?.has_benefit : false,
                });
                setIsCurrentLocationVisible(!d?.has_location);
                setIsOtherUserVisible(!!d?.has_benefit);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const setIsSomeLocation = (e) => {
        setIsCurrentLocationVisible(e);
        setFormData({ ...formData, ['has_location']: e });
    };

    const setHasBenefit = (e) => {
        setIsOtherUserVisible(e);
        setFormData({ ...formData, ['has_benefit']: e });
    };

    const uploadPhoto = (e) => {
        const path = e.target.files[0];

        function getBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = (error) => reject(error);
            });
        }

        getBase64(path).then((data) => {
            setImages([...images, data.toString()]);
            setFormData({ ...formData, ['images']: [...images, data.toString()] });
        });
    };

    const handleNumberChange = (e) => {
        const parsedData = parsePhoneNumber(e.target.value);

        if (parsedData) {
            setFormData({
                ...formData,
                ['country_code']: parsedData.countryCallingCode,
                ['phone_number']: parsedData.nationalNumber,
            });
        }
    };

    const handleBenefitNumberChange = (e) => {
        const parsedData = parsePhoneNumber(e.target.value);

        if (parsedData) {
            setFormData({
                ...formData,
                ['benefit_country_code']: parsedData.countryCallingCode,
                ['benefit_phone_number']: parsedData.nationalNumber,
            });
        }
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (data?.has_anket) {
            return null;
        } else {
            setIsLoading(true);
            setTimeout(() => {
                fetch('https://api.digital-investor.kz/api/create-user-anket', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + getToken(),
                        Accept: 'application/json',
                    },
                    body: JSON.stringify(formData),
                })
                    .then((res) => res.json())
                    .then((res) => {
                        if (res.status === 500) {
                            setError('Заполните пожалуйста анкету');
                        } else {
                            window.location.reload();
                        }
                    })
                    .catch((err) => {
                        console.error(err);
                    });
                setIsLoading(false);
            }, 1000);
        }
    };

    return (
        <div className="home">
            <NavMenuUser />
            <SubNavUser />
            <SupportHeader page={'anketa'} />
            <Anket
                onSubmitHandler={onSubmitHandler}
                buttonvalue={'Сохранить изменения'}
                title={'Электронная карта клиента'}
                titlep={'* поля, необходимые для создания электронного кошелька'}
                isDisabled={data?.has_anket}
                isLoading={isLoading}
            >
                {isLoading ? (
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: '50vh',
                        }}
                    >
                        <CircularProgress disableShrink color="inherit" />
                    </div>
                ) : (
                    <>
                        <AnketItem title={'Личные данные'} titlep={'Не являюсь резидентом Казахстана.'}>
                            <AnketInput>
                                <AnketInputItem
                                    value={data?.surname}
                                    name="surname"
                                    titleInp="Фамилия *"
                                    inpPlaceholder="Иванов"
                                    required
                                    onChange={(e) => setFormData({ ...formData, ['surname']: e.target.value })}
                                />
                                <AnketInputItem
                                    value={data?.name}
                                    name="name"
                                    titleInp="Имя *"
                                    inpPlaceholder="Степан"
                                    required
                                    onChange={(e) => setFormData({ ...formData, ['name']: e.target.value })}
                                />
                                <AnketInputItem
                                    value={data?.fio}
                                    name="fio"
                                    titleInp="Отчество"
                                    inpPlaceholder="Петрович"
                                    onChange={(e) => setFormData({ ...formData, ['fio']: e.target.value })}
                                />
                                <AnketInputItem
                                    value={data?.latin_surname}
                                    name="latin_surname"
                                    titleInp="Фамилия на латинице *"
                                    inpPlaceholder="Ivanov"
                                    required
                                    onChange={(e) => setFormData({ ...formData, ['latin_surname']: e.target.value })}
                                />
                                <AnketInputItem
                                    value={data?.latin_name}
                                    name="latin_name"
                                    titleInp="Имя на латинице *"
                                    inpPlaceholder="Stepan"
                                    required
                                    onChange={(e) => setFormData({ ...formData, ['latin_name']: e.target.value })}
                                />
                                <AnketInputItem
                                    value={data?.citizenship}
                                    name="citizenship"
                                    titleInp="Гражданство"
                                    inpPlaceholder="Rus"
                                    onChange={(e) => setFormData({ ...formData, ['citizenship']: e.target.value })}
                                />
                                <AnketInputItem
                                    value={data?.birth_date}
                                    type="date"
                                    name="birth_date"
                                    titleInp="Дата рождения *"
                                    required
                                    inpPlaceholder="27.07.1970"
                                    onChange={(e) => setFormData({ ...formData, ['birth_date']: e.target.value })}
                                />
                                <AnketInputItem
                                    value={data?.birth_place}
                                    name="birth_place"
                                    titleInp="Место рождения *"
                                    requiredinpPlaceholder="Москва"
                                    onChange={(e) => setFormData({ ...formData, ['birth_place']: e.target.value })}
                                />
                            </AnketInput>
                        </AnketItem>
                        <AnketItem
                            title={'Реквизиты документа, удостоверяющего личность, и контактные данные'}
                            titlep={''}
                        >
                            <AnketInput>
                                <AnketInputItem
                                    value={data?.document_type}
                                    name="document_type"
                                    titleInp="Вид документа *"
                                    inpPlaceholder="Паспорт"
                                    required
                                    onChange={(e) => setFormData({ ...formData, ['document_type']: e.target.value })}
                                />
                                <AnketInputItem
                                    value={data?.locality}
                                    name="locality"
                                    titleInp="№ документа"
                                    inpPlaceholder="Москва"
                                    onChange={(e) => setFormData({ ...formData, ['locality']: e.target.value })}
                                />
                                <AnketInputItem
                                    value={data?.region}
                                    name="region"
                                    titleInp=" Место выдачи документа"
                                    inpPlaceholder="Московская"
                                    onChange={(e) => setFormData({ ...formData, ['region']: e.target.value })}
                                />
                                <AnketInputItem
                                    value={data?.issued_by}
                                    name="issued_by"
                                    titleInp="Кем выдан *"
                                    inpPlaceholder="Первомайское о.м."
                                    required
                                    onChange={(e) => setFormData({ ...formData, ['issued_by']: e.target.value })}
                                />
                                <AnketInputItem
                                    value={data?.valid_to}
                                    type="date"
                                    name="valid_to"
                                    titleInp="Срок действия документа *"
                                    inpPlaceholder="20.01.2025"
                                    required
                                    onChange={(e) => setFormData({ ...formData, ['valid_to']: e.target.value })}
                                />
                                <AnketInputItem
                                    value={data?.identity_number}
                                    name="identity_number"
                                    titleInp="Идентификационный номер, ID *"
                                    inpPlaceholder="525-585-557"
                                    required
                                    onChange={(e) => setFormData({ ...formData, ['identity_number']: e.target.value })}
                                />
                                <AnketInputItem
                                    value={
                                        data?.country_code && data?.phone_number
                                            ? '+' + data?.country_code + data?.phone_number
                                            : ''
                                    }
                                    name="phone_number"
                                    titleInp="Мобильный телефон *"
                                    inpPlaceholder="+7 (999) 585-58-57"
                                    required
                                    onChange={handleNumberChange}
                                />
                                <AnketInputItem
                                    value={data?.email}
                                    type="email"
                                    name="email"
                                    titleInp="E-mail *"
                                    inpPlaceholder="stepan@ivanov.ru"
                                    required
                                    onChange={(e) => setFormData({ ...formData, ['email']: e.target.value })}
                                />
                                <AnketInputItem
                                    value={data?.funds_source}
                                    name="funds_source"
                                    titleInp="Источник средств *"
                                    inpPlaceholder="Собственные средства"
                                    required
                                    onChange={(e) => setFormData({ ...formData, ['funds_source']: e.target.value })}
                                />
                            </AnketInput>
                        </AnketItem>
                        <AnketItem title={'Адрес места жительства'} titlep={''}>
                            <AnketInput>
                                <AnketInputItem
                                    value={data?.residence_country}
                                    name="residence_country"
                                    titleInp="Страна *"
                                    inpPlaceholder="Паспорт"
                                    required
                                    onChange={(e) =>
                                        setFormData({ ...formData, ['residence_country']: e.target.value })
                                    }
                                />
                                <AnketInputItem
                                    value={data?.residence_locality}
                                    name="residence_locality"
                                    titleInp="Населенный пункт *"
                                    inpPlaceholder="Москва"
                                    required
                                    onChange={(e) =>
                                        setFormData({ ...formData, ['residence_locality']: e.target.value })
                                    }
                                />
                                <AnketInputItem
                                    value={data?.residence_region}
                                    name="residence_region"
                                    titleInp="Область *"
                                    inpPlaceholder="Московская"
                                    required
                                    onChange={(e) => setFormData({ ...formData, ['residence_region']: e.target.value })}
                                />
                                <AnketInputItem
                                    value={data?.residence_district}
                                    name="residence_district"
                                    titleInp="Район *"
                                    inpPlaceholder="Ленинский"
                                    required
                                    onChange={(e) =>
                                        setFormData({ ...formData, ['residence_district']: e.target.value })
                                    }
                                />
                                <AnketInputItem
                                    value={data?.residence_settlment_type}
                                    name="residence_settlment_type"
                                    titleInp="Тип населенного пункта *"
                                    required
                                    inpPlaceholder="Город"
                                    onChange={(e) =>
                                        setFormData({ ...formData, ['residence_settlment_type']: e.target.value })
                                    }
                                />
                                <AnketInputItem
                                    value={data?.residence_street}
                                    name="residence_street"
                                    titleInp="Улица *"
                                    inpPlaceholder="Весенняя"
                                    required
                                    onChange={(e) => setFormData({ ...formData, ['residence_street']: e.target.value })}
                                />
                                <AnketInputItem
                                    value={data?.residence_corpus}
                                    type="number"
                                    name="residence_corpus"
                                    titleInp="Дом *"
                                    inpPlaceholder="75"
                                    required
                                    onChange={(e) => setFormData({ ...formData, ['residence_corpus']: e.target.value })}
                                />
                                <AnketInputItem
                                    value={data?.residence_apartment}
                                    type="number"
                                    name="residence_apartment"
                                    titleInp="Корпус"
                                    inpPlaceholder="1"
                                    onChange={(e) =>
                                        setFormData({ ...formData, ['residence_apartment']: e.target.value })
                                    }
                                />
                                <AnketInputItem
                                    value={data?.residence_home}
                                    type="number"
                                    name="residence_home"
                                    titleInp="Квартира *"
                                    inpPlaceholder="170"
                                    required
                                    onChange={(e) => setFormData({ ...formData, ['residence_home']: e.target.value })}
                                />
                            </AnketInput>
                        </AnketItem>
                        {isCurrentLocationVisible && !data?.has_location && (
                            <AnketItem title={'Адрес места пребывания'} titlep={''}>
                                <AnketInput>
                                    <AnketInputItem
                                        value={data?.location_data?.location_country}
                                        name="location_country"
                                        titleInp="Страна *"
                                        inpPlaceholder="Паспорт"
                                        onChange={(e) =>
                                            setFormData({ ...formData, ['location_country']: e.target.value })
                                        }
                                    />
                                    <AnketInputItem
                                        value={data?.location_data?.location_locality}
                                        name="location_locality"
                                        titleInp="Населенный пункт *"
                                        inpPlaceholder="Москва"
                                        onChange={(e) =>
                                            setFormData({ ...formData, ['location_locality']: e.target.value })
                                        }
                                    />
                                    <AnketInputItem
                                        value={data?.location_data?.location_region}
                                        name="location_region"
                                        titleInp="Область *"
                                        inpPlaceholder="Московская"
                                        onChange={(e) =>
                                            setFormData({ ...formData, ['location_region']: e.target.value })
                                        }
                                    />
                                    <AnketInputItem
                                        value={data?.location_data?.location_district}
                                        name="location_district"
                                        titleInp="Район *"
                                        inpPlaceholder="Ленинский"
                                        onChange={(e) =>
                                            setFormData({ ...formData, ['location_district']: e.target.value })
                                        }
                                    />
                                    <AnketInputItem
                                        value={data?.location_data?.location_settlment_type}
                                        name="location_settlment_type"
                                        titleInp="Тип населенного пункта *"
                                        inpPlaceholder="Город"
                                        onChange={(e) =>
                                            setFormData({ ...formData, ['location_settlment_type']: e.target.value })
                                        }
                                    />
                                    <AnketInputItem
                                        value={data?.location_data?.location_street}
                                        name="location_street"
                                        titleInp="Улица *"
                                        inpPlaceholder="Весенняя"
                                        onChange={(e) =>
                                            setFormData({ ...formData, ['location_street']: e.target.value })
                                        }
                                    />
                                    <AnketInputItem
                                        value={data?.location_data?.location_corpus}
                                        type="number"
                                        name="location_corpus"
                                        inpPlaceholder="75"
                                        titleInp="Дом *"
                                        onChange={(e) =>
                                            setFormData({ ...formData, ['location_corpus']: e.target.value })
                                        }
                                    />
                                    <AnketInputItem
                                        value={parseInt(data?.location_data?.location_apartment)}
                                        type="number"
                                        name="location_apartment"
                                        titleInp="Корпус"
                                        inpPlaceholder="1"
                                        onChange={(e) =>
                                            setFormData({ ...formData, ['location_apartment']: e.target.value })
                                        }
                                    />
                                    <AnketInputItem
                                        value={data?.location_data?.location_home}
                                        type="number"
                                        name="location_home"
                                        titleInp="Квартира *"
                                        inpPlaceholder="170"
                                        onChange={(e) =>
                                            setFormData({ ...formData, ['location_home']: e.target.value })
                                        }
                                    />
                                </AnketInput>
                            </AnketItem>
                        )}
                        {isOtherUserVisible && (
                            <AnketItem title={'Сведения о выгодоприобретателях в отношении лица'} titlep={''}>
                                <AnketInput>
                                    <AnketInputItem
                                        value={data?.benefit_data?.surname}
                                        name="benefit_surname"
                                        titleInp="Фамилия *"
                                        inpPlaceholder="Иванов"
                                        required
                                        onChange={(e) =>
                                            setFormData({ ...formData, ['benefit_surname']: e.target.value })
                                        }
                                    />
                                    <AnketInputItem
                                        value={data?.benefit_data?.name}
                                        name="benefit_name"
                                        titleInp="Имя *"
                                        inpPlaceholder="Степан"
                                        required
                                        onChange={(e) => setFormData({ ...formData, ['benefit_name']: e.target.value })}
                                    />
                                    <AnketInputItem
                                        value={data?.benefit_data?.fio}
                                        name="benefit_fio"
                                        titleInp="Отчество"
                                        inpPlaceholder="Петрович"
                                        onChange={(e) => setFormData({ ...formData, ['benefit_fio']: e.target.value })}
                                    />
                                    <AnketInputItem
                                        value={data?.benefit_data?.latin_surname}
                                        name="benefit_latin_surname"
                                        titleInp="Фамилия на латинице *"
                                        inpPlaceholder="Ivanov"
                                        required
                                        onChange={(e) =>
                                            setFormData({ ...formData, ['benefit_latin_surname']: e.target.value })
                                        }
                                    />
                                    <AnketInputItem
                                        value={data?.benefit_data?.latin_name}
                                        name="benefit_latin_name"
                                        titleInp="Имя на латинице *"
                                        inpPlaceholder="Stepan"
                                        required
                                        onChange={(e) =>
                                            setFormData({ ...formData, ['benefit_latin_name']: e.target.value })
                                        }
                                    />
                                    <AnketInputItem
                                        value={data?.benefit_data?.citizenship}
                                        name="benefit_citizenship"
                                        titleInp="Гражданство"
                                        inpPlaceholder="Rus"
                                        onChange={(e) =>
                                            setFormData({ ...formData, ['benefit_citizenship']: e.target.value })
                                        }
                                    />
                                    <AnketInputItem
                                        value={data?.benefit_data?.birth_date?.split(' ')[0]}
                                        type="date"
                                        name="benefit_birth_date"
                                        titleInp="Дата рождения *"
                                        required
                                        inpPlaceholder="27.07.1970"
                                        onChange={(e) =>
                                            setFormData({ ...formData, ['benefit_birth_date']: e.target.value })
                                        }
                                    />
                                    <AnketInputItem
                                        value={data?.benefit_data?.birth_place}
                                        name="benefit_birth_place"
                                        titleInp="Место рождения *"
                                        requiredinpPlaceholder="Москва"
                                        onChange={(e) =>
                                            setFormData({ ...formData, ['benefit_birth_place']: e.target.value })
                                        }
                                    />
                                    <AnketInputItem
                                        value={data?.benefit_data?.document_type}
                                        name="benefit_document_type"
                                        titleInp="Вид документа *"
                                        inpPlaceholder="Паспорт"
                                        required
                                        onChange={(e) =>
                                            setFormData({ ...formData, ['benefit_document_type']: e.target.value })
                                        }
                                    />
                                    <AnketInputItem
                                        value={data?.benefit_data?.locality}
                                        name="benefit_locality"
                                        titleInp="№ документа"
                                        inpPlaceholder="Москва"
                                        onChange={(e) =>
                                            setFormData({ ...formData, ['benefit_locality']: e.target.value })
                                        }
                                    />
                                    <AnketInputItem
                                        value={data?.benefit_data?.region}
                                        name="benefit_region"
                                        titleInp=" Место выдачи документа"
                                        inpPlaceholder="Московская"
                                        onChange={(e) =>
                                            setFormData({ ...formData, ['benefit_region']: e.target.value })
                                        }
                                    />
                                    <AnketInputItem
                                        value={data?.benefit_data?.issued_by}
                                        name="benefit_issued_by"
                                        titleInp="Кем выдан *"
                                        inpPlaceholder="Первомайское о.м."
                                        required
                                        onChange={(e) =>
                                            setFormData({ ...formData, ['benefit_issued_by']: e.target.value })
                                        }
                                    />
                                    <AnketInputItem
                                        value={data?.benefit_data?.valid_to?.split(' ')[0]}
                                        type="date"
                                        name="benefit_valid_to"
                                        titleInp="Срок действия документа *"
                                        inpPlaceholder="20.01.2025"
                                        required
                                        onChange={(e) =>
                                            setFormData({ ...formData, ['benefit_valid_to']: e.target.value })
                                        }
                                    />
                                    <AnketInputItem
                                        value={data?.benefit_data?.identity_number}
                                        name="benefit_identity_number"
                                        titleInp="Идентификационный номер, ID *"
                                        inpPlaceholder="525-585-557"
                                        required
                                        onChange={(e) =>
                                            setFormData({ ...formData, ['benefit_identity_number']: e.target.value })
                                        }
                                    />
                                    <AnketInputItem
                                        value={
                                            data?.benefit_data?.country_code && data?.benefit_data?.phone_number
                                                ? '+' +
                                                  data?.benefit_data?.country_code +
                                                  data?.benefit_data?.phone_number
                                                : ''
                                        }
                                        name="benefit_phone_number"
                                        titleInp="Мобильный телефон *"
                                        inpPlaceholder="+7 (999) 585-58-57"
                                        required
                                        onChange={handleBenefitNumberChange}
                                    />
                                    <AnketInputItem
                                        value={data?.benefit_data?.email}
                                        type="email"
                                        name="benefit_email"
                                        titleInp="E-mail *"
                                        inpPlaceholder="stepan@ivanov.ru"
                                        required
                                        onChange={(e) =>
                                            setFormData({ ...formData, ['benefit_email']: e.target.value })
                                        }
                                    />
                                    <AnketInputItem
                                        value={data?.benefit_data?.funds_source}
                                        name="benefit_funds_source"
                                        titleInp="Источник средств *"
                                        inpPlaceholder="Собственные средства"
                                        required
                                        onChange={(e) =>
                                            setFormData({ ...formData, ['benefit_funds_source']: e.target.value })
                                        }
                                    />
                                </AnketInput>
                            </AnketItem>
                        )}
                        <AnketItem>
                            <AnketCheckbox>
                                <AnketCheckboxItem
                                    inptext={'Место пребывания совпадает с местом жительства'}
                                    chacked={!isCurrentLocationVisible}
                                    isDisabled={data?.has_anket ? true : false}
                                    callback={(e) => setIsSomeLocation(!e.target.checked)}
                                />
                                <AnketCheckboxItem
                                    inptext={'Сведения о выгодоприобретателях в отношении лица, заполнившего анкету'}
                                    chacked={isOtherUserVisible}
                                    isDisabled={data?.has_anket ? true : false}
                                    callback={(e) => setHasBenefit(e.target.checked)}
                                />
                            </AnketCheckbox>
                        </AnketItem>
                        <AnketItem title={'Фото документов'} titlep={''}>
                            <AnketInputFile>
                                {/* {data?.doc_image.length && <AnketInputFileitem name="doc_image" imgPath={data?.doc_image || "/img/Group21.png"} />} */}
                                {data?.images &&
                                    data.images.map((image, index) => (
                                        <AnketInputFileitem key={index} imgPath={image} />
                                    ))}
                                {images &&
                                    images.map((image, index) => <AnketInputFileitem key={index} imgPath={image} />)}
                                <AnketInputFileitem
                                    isDisabled={data?.has_anket ? true : false}
                                    name="images[]"
                                    onChange={uploadPhoto}
                                    isMultiple={true}
                                />
                            </AnketInputFile>
                        </AnketItem>
                    </>
                )}
                {error && (
                    <p
                        style={{
                            fontSize: 17,
                            fontWeight: 500,
                            lineHeight: '23px',
                            color: 'red',
                            marginBottom: '10px',
                        }}
                    >
                        {error}
                    </p>
                )}
            </Anket>
            <Footer />
        </div>
    );
}
