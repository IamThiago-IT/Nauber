import * as React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import LanguageButton from "../LanguageButton";

import Home from "../../assets/image/logo-nauber-1@2x.png";
import Vetor83 from "../../assets/image/vector-83.svg";
import Seach from "../../assets/image/frame-24.svg";
import Login from "../../assets/image/logim.svg";
import flagBrasil from "../../assets/image/flagbrasil-11@2x.png";
import flagEspanha from "../../assets/image/flagespanha-1@2x.png";
import flagEUA from "../../assets/image/flageua-1@2x.png";
import flagArabia from "../../assets/image/flagarabia-11@2x.png";
import Base from "../../assets/image/base-de-conhecimento-1@2x.png";
import LogoRevenda from "../../assets/image/logo-revenda-pro-1@2x.png";

import "./Styles.css";

function Header() {
  const { t, i18n } = useTranslation();

  const handleClick = () => {
    i18n.changeLanguage("pt");
  };
  const handleClickEn = () => {
    i18n.changeLanguage("en");
  };
  const handleClickEs = () => {
    i18n.changeLanguage("es");
  };

  const handleClickAr = () => {
    i18n.changeLanguage("ar");
  };

  return (
    <div className="header-div11">
      <div className="bg-header34" />
      <div className="bg-header35" />
      <div className="bg-header36" />
      <div className="logo-div11">
        <img className="nauber-logo-1-icon11" alt="Home" src={Home} />
        <NavLink to="/">
          <img className="logo-nauber-111" alt="Home" src={Home} />
        </NavLink>
      </div>
      <div className="menu-div11">
        <img className="vector-icon64" alt="" src={Vetor83} />
        <div className="home-div12">
          <NavLink to="/" className="home-b11">
            {t("HOME")}
            <Icon className="home-icon11" icon="clarity:home-solid" />
          </NavLink>
        </div>
        <div className="empresa-div11">
          <NavLink to="/Sobre" className="empresa-b11">
            <Icon className="empresa-icon11" icon="bxs:business" />
            {t("EMPRESA")}
          </NavLink>
        </div>
        <div className="produtos-div37">
          <NavLink to="/Categoria" className="produtos-b11">
            <Icon className="box-icon11" icon="fa-solid:box-open" />
            {t("PRODUTOS")}
          </NavLink>
        </div>
        <div className="assistencia-div11">
          <NavLink to="/Assistencia" className="assistncias-b12">
            <Icon className="home-icon11" icon="mdi:tools" />
            {t("ASSISTÊNCIAS")}
          </NavLink>
        </div>
        <div className="catlogos-div13">
          <NavLink to="/Catalogos" className="catlogos-virtuais-b12">
            <Icon className="home-icon11" icon="ri:book-fill" />
            {t("CATÁLOGOS VIRTUAIS")}
          </NavLink>
        </div>
        <div className="contato-div12">
          <NavLink to="/Contato" className="contato-b12">
            <Icon className="home-icon11" icon="tabler:message-circle" />
            {t("CONTATO")}
          </NavLink>
        </div>
        <div className="login-div11">
          <NavLink to="http://www.lojanauber.com.br/app/" className="login-b11">
            <Icon className="box-icon11" icon="fa-solid:user" />
            {t("login")}
          </NavLink>
        </div>
      </div>

      <div className="flags-div11">
        <LanguageButton
          className="flag-brasil-1-icon11"
          image={flagBrasil}
          alt="Brazil Flag"
          onClick={handleClick}
        />
        <LanguageButton
          className="flag-espanha-1-icon11"
          image={flagEspanha}
          alt="Espanha Flag"
          onClick={handleClickEs}
        />
        <LanguageButton
          className="flag-eua-1-icon11"
          image={flagEUA}
          alt="EUA Flag"
          onClick={handleClickEn}
        />
        <LanguageButton
          className="flag-arabia-1-icon11"
          image={flagArabia}
          alt="Arabia Flag"
          onClick={handleClickAr}
        />
      </div>
      <div className="line-div30" />
      <img
        className="base-de-conhecimento-111"
        alt="Base De Conhecimento"
        src={Base}
      />
      <img className="logo-revenda-pro-111" alt="Revenda" src={LogoRevenda} />
      <div className="TextInfo">
        <div className="conhea-o-sistema-de-revnda-n11">
          <p className="rua-mal-castelo11">
            <span className="conhea-o-sistema23">
              <span>{t("CONHEÇA O SISTEMA")}</span>
            </span>
          </p>
          <p className="rua-mal-castelo11">
            <span className="conhea-o-sistema23">
              <span>{t("DE REVENDA")}</span>
            </span>
          </p>
          <p className="nauber-pro13">
            <span>
              <b>NAUBER PRO</b>
            </span>
          </p>
        </div>
      </div>
      <input
        type="text"
        className="seach-div11 seach"
        placeholder={t("busque aqui seu produto")}
      />
      <img className="frame-icon10" alt="Busca" src={Seach} />
    </div>
  );
}
export default Header;
