import React from 'react';

const TokensTabTitletd = ({tdtext, my}) => {
    return (
      <td className={my && "remove-title-mw"}>
        <p>{tdtext}</p>
      </td>
    )
}

export default TokensTabTitletd;
