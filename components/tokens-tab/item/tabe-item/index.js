import React from "react";

const TokensTabitem = React.forwardRef(
  (
    {
      my,
      itemwidth,
      logo,
      tokenp,
      tokens,
      valyutp,
      valyuts,
      price,
      dedline,
      val,
      count,
      buyDate,
      colv,
      colp,
      cold,
      btn,
    },
    ref
  ) => {
    return (
      <tr className="tabitemtr" ref={ref}>
        <td>
          {logo.length && (
            <img
              style={{
                float: "left",
                marginRight: "4px",
              }}
              src={logo}
              width="50px"
            />
          )}
          <span>{tokens}</span>
        </td>
        <td>
          <p>{valyutp}</p>
          <span>{valyuts}</span>
        </td>
        <td>
          <p>{price}</p>
        </td>
        <td>
          <p>{dedline}</p>
        </td>
        {my && (
          <>
            <td className="remove-mw">
              <p>{val}</p>
            </td>
            <td>
              <p>{count}</p>
            </td>
            <td>
              <p>{buyDate ? buyDate : "---"}</p>
            </td>
          </>
        )}
        <td>
          <p>
            <span color="#414B4D!important;">{colv}</span>
            <span color="#14906C!important;">{colp}</span>
            <span color="#1D80AA!important;">{cold}</span>
          </p>
          <div>
            <span width={itemwidth}></span>
          </div>
        </td>
        <td>{btn}</td>
      </tr>
    );
  }
);

TokensTabitem.displayName = "Tokens tab item";

export default TokensTabitem;
