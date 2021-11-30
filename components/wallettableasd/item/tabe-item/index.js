import React, { useState, useEffect } from "react";
import Doc from "../../../wallet/Doc";
import { PDFDownloadLink } from "@react-pdf/renderer";

function Wallettableitem2({ row, currencies }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => setIsLoaded(true), []);

  return (
    <tr className="tabitemtr walletitemtr walletitemtr4">
      <td>
        <p>{row?.operation_type_text}</p>
      </td>
      <td>
        <p>{row?.amount}</p>
      </td>
      <td>
        <p>{currencies[row?.currency]}</p>
      </td>
      <td>
        <p>{row?.operation_date}</p>
      </td>
      <td className="lasttdwallet">
        <p />
        {isLoaded && (
          <PDFDownloadLink
            document={<Doc data={row} currencies={currencies} />}
            fileName={
              row?.operation_type_text +
              " " +
              row?.operation_date?.split(" ")[0] +
              ".pdf"
            }
          >
            Выгрузить чек
          </PDFDownloadLink>
        )}
      </td>
    </tr>
  );
}

export default Wallettableitem2;
