import React from 'react';
import Anket from "../forms"
import AnketItem from "../forms/item"
import AnketInput from "../forms/item/inputs"
import AnketInputItem from "../forms/item/inputs/item"
import AnketCheckbox from "../forms/item/checkbox"
import AnketCheckboxItem from "../forms/item/checkbox/item"

const Registr = () => {
  return (
    <div className="registr" >
      <Anket buttonvalue={"Зарегистрироваться"} title={"Регистрация юридического лица"} titlep={"* поля, необходимые для создания электронного кошелька"}>
        <AnketItem title={"Данные юридического лица"} titlep={""}>
          <AnketInput>
            <AnketInputItem titleInp="Полное наименование *" inpPlaceholder="ООО «Степанов и партнеры»" />
            <AnketInputItem titleInp="Краткое наименование *" inpPlaceholder="ООО «Степанов и партнеры»" />
            <AnketInputItem titleInp="УНП" inpPlaceholder="752457" />
            <AnketInputItem titleInp="Регистрационный орган *" inpPlaceholder="Муниципальный совет" />
            <AnketInputItem titleInp="Регистрационный номер *" inpPlaceholder="78632148777" />
            <AnketInputItem titleInp="Дата регистрации *" inpPlaceholder="27.07.1970" />
          </AnketInput>
        </AnketItem>
        <AnketItem title={"Адрес места нахождения"} titlep={""}>
          <AnketInput>
            <AnketInputItem titleInp="Страна *" inpPlaceholder="Российская Федерация" />
            <AnketInputItem titleInp="Населенный пункт *" inpPlaceholder="Москва" />
            <AnketInputItem titleInp="Область *" inpPlaceholder="Московская" />
            <AnketInputItem titleInp="Район *" inpPlaceholder="Ленинский" />
            <AnketInputItem titleInp="Тип населенного пункта *" inpPlaceholder="Город" />
            <AnketInputItem titleInp="Улица *" inpPlaceholder="Весенняя" />
            <AnketInputItem titleInp="Дом *" inpPlaceholder="75" />
            <AnketInputItem titleInp="Корпус" inpPlaceholder="1" />
            <AnketInputItem titleInp="Офис *" inpPlaceholder="170" />
          </AnketInput>
          <AnketCheckbox title={""}>
            <AnketCheckboxItem inptext={"Почтовый адрес совпадает с адресом места нахождения"} />
          </AnketCheckbox>
        </AnketItem>
        <AnketItem title={"Данные уполномоченного лица"} titlep={""}>
          <AnketInput>
            <AnketInputItem titleInp="BLR *" inpPlaceholder="BLR" />
            <AnketInputItem titleInp="Должность *" inpPlaceholder="Генеральный директор" />
            <AnketInputItem titleInp="Адрес сайта в Интернете" inpPlaceholder="http://www.stepan.ru/" />
          </AnketInput>
        </AnketItem>
        <AnketItem title={"Реквизиты документа, удостоверяющего личность"} titlep={""}>
          <AnketInput>
            <AnketInputItem titleInp="Документ *" inpPlaceholder="Паспорт" />
            <AnketInputItem titleInp="Дата выдачи *" inpPlaceholder="25.05.2010" />
            <AnketInputItem titleInp="Срок действия *" inpPlaceholder="25.05.2027" />
          </AnketInput>
        </AnketItem>
        <AnketItem title={"Адрес места жительства"} titlep={""}>
          <AnketInput>
            <AnketInputItem titleInp="Страна *" inpPlaceholder="Россия" />
            <AnketInputItem titleInp="Населенный пункт *" inpPlaceholder="Москва" />
            <AnketInputItem titleInp="Область *" inpPlaceholder="Московская" />
            <AnketInputItem titleInp="Тип населенного пункта *" inpPlaceholder="Город" />
            <AnketInputItem titleInp="Корпус" inpPlaceholder="7" />
            <AnketInputItem titleInp="Квартира *" inpPlaceholder="57" />
          </AnketInput>
        </AnketItem>
      </Anket>
    </div>

  );
}

export default Registr;
