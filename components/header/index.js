import React from "react";
import Button from "../../uikit/button";
import { isAuthorizated } from "../../utils/auth";

const HeaderHome = () => {
  function handleToggle() {
    if (isAuthorizated()) {
      window.location.href = `${window.location.origin}/usertokens`;
    } else {
      document.getElementById('regmodal').style.display = "block";
    }
  }
  return (
    <div className="header-home">
      <div className="container">
        <div className="header-home_content">
          <h1>
            <span>ИНВЕСТИЦИОННАЯ</span> <br />

            ОНЛАЙН-ПЛАТФОРМА
          </h1>
          <p>
            Инвестируйте в крупнейшие компании, получайте <br />
            стабильный доход
          </p>

          <Button onClick={handleToggle} color={"green"}>Инвестировать</Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
