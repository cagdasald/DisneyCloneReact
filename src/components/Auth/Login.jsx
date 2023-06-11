import React from "react";
import CtaLogo from "../../assets/images/cta-logo-one.svg";
import CtaLogoSec from "../../assets/images/cta-logo-two.png";
import "./Login.scss";

const Login = () => {
  return (
    <section className="page" id="login-page">
      <div className="content">
        <div className="cta">
          <img className="cta-logo" src={CtaLogo} alt="ctn logo" />
          <a className="signup-btn" href="./">
            GET ALL THERE
          </a>
          <p className="description">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </p>
          <img className="cta-logo" src={CtaLogoSec} alt="cto logo" />
        </div>
      </div>
    </section>
  );
};

export default Login;
