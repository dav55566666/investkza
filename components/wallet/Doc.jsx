import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

export default function Doc({ data, currencies }) {
  Font.register({
    family: "Roboto",
    src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
  });

  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#fff",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    title: {
      fontFamily: "Roboto",
      fontSize: "20px",
      padding: "10px 0 20px",
    },
    text: {
      fontFamily: "Roboto",
      fontSize: "16px",
    },
  });

  return (
    <Document title={data?.operation_type_text}>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Информация о совершенной операции</Text>
          <Text style={styles.text}>Имя - {data?.user_name}</Text>
          <Text style={styles.text}>Фамилия - {data?.user_surname}</Text>
          <Text style={styles.text}>Отчество - {data?.user_fio}</Text>
          <Text style={styles.text}>BIC банка - {data?.card_bic}</Text>
          <Text style={styles.text}>Номер карты - {data?.card_number}</Text>
          <Text style={styles.text}>
            Вид операции - {data?.operation_type_text}
          </Text>
          <Text style={styles.text}>Дата / Время - {data?.operation_date}</Text>
          {!!data?.currency && (
            <Text style={styles.text}>
              Наименование - {currencies[data?.currency]}
            </Text>
          )}
          <Text style={styles.text}>Количество - {data?.amount}</Text>
          <Text style={styles.text}>
            Ваш баланс до данной операции: - {data?.users_old_credit}
          </Text>
          <Text style={styles.text}>
            Ваш баланс после данной операции: - {data?.users_new_credit}
          </Text>
        </View>
      </Page>
    </Document>
  );
}
