import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from "@iconify/react";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";
import "./Styles.css";

import Vetor from "../../assets/image/vector-117.svg";
import Vetor1 from "../../assets/image/vector-116.svg";
import Search from "../../assets/image/seach.svg";
import Ellipse from "../../assets/image/ellipse-6.svg";
import Global from "../../assets/image/global1-1@2x.png";
import Phone2 from "../../assets/image/phone2.svg";
import Seta from "../../assets/image/seta.svg";

import Phone from "../../assets/image/phone32.svg";
import Social from "../../assets/image/redes-sociais-icon7.svg";
import Pin from "../../assets/image/pin11.svg";
import Nauber from "../../assets/image/logo-nauber@2x.png";



function Assistencia() {
  const { t } = useTranslation();

  const [partners, setPartners] = useState([])

useEffect(() => {
  fetch('http://www.lojanauber.com.br/app/parceiros')
  .then(response => response.json())
  .then(data => {
    setPartners(data)
  })
}, [])

  return (
    <div className="assistncia-div">
      <Header />
      <div className="footer-div2">
        <div className="footer-div3">
          <div className="bg-div2" />

          <div className="siga-nas-redes-sociais1">Siga nas redes sociais</div>
          <div className="nauber-2022-todos-os-direito1">
            Nauber © 2022 Todos os direitos reservados.
          </div>
          <div className="politicas-de-privacidade-ter1">
            Politicas de Privacidade | Termos de Uso
          </div>
          <div className="nauber-maquinas-e-equipamentos1">
            20.633.257/0001-98 | NAUBER MAQUINAS E EQUIPAMENTOS
          </div>
          <div className="redes-sociais-icon2">
            <a href="https://www.facebook.com/naubermaquinas">
              <Icon
                icon="ic:baseline-facebook"
                className="ItemSocial"
                color="#fff"
              />
            </a>
            <a href="https://www.instagram.com/naubermaquinas/">
              <Icon icon="mdi:instagram" className="ItemSocial" color="#fff" />
            </a>
            <a href="https://www.youtube.com/@naubermaquinas2080">
              <Icon icon="mdi:youtube" className="ItemSocial" color="#fff" />
            </a>
            <a href="https://www.tiktok.com/@naubermaquinas">
              <Icon
                icon="ic:baseline-tiktok"
                className="ItemSocial"
                color="#fff"
              />
            </a>
          </div>
          <div className="dvidas-div1">
            <div className="converse-com-um-especialista1">
              Converse com um especialista
            </div>
            <div className="envie-um-e-mail1">Envie um e-mail</div>
            <Link to='/' className="voltar-ao-incio1">Voltar ao início</Link>
            <div className="ficou-com-dvidas1">Ficou com dúvidas?</div>
          </div>
          <div className="produtos-div4">
            <Link to='/' className="construo-civil-div1">Construção civil</Link>
            <Link to='/' className="linha-industrial-div1">Linha industrial</Link>
            <div className="ficou-com-dvidas1">{t("PRODUTOS")}</div>
          </div>
          <div className="nossa-sede-div2">
            <div className="rua-mal-castelo-branco-24771">
              <p className="rua-mal-castelo1">
                Rua Mal. Castelo Branco, 2477 Centro
              </p>
              <p className="schroeder-sc1">Schroeder - SC.</p>
            </div>
            <div className="div3">+55 (47) 3374-5969</div>
            <div className="div4">+55 (11) 96364-6599</div>
            <div className="div5">+55 (47) 98821-2725</div>
            <div className="nossa-sede-div3">Nossa sede</div>
          </div>

          <div className="line-div3" />
          <img className="logo-nauber-icon1" alt="" src={Nauber} />
          <div className="rectangle-div27" />
        </div>
      </div>
      <div className="headline-div">
        <img className="vector-icon15" alt="" src={Vetor} />
        <img className="vector-icon16" alt="" src={Vetor1} />
        <b className="assistncias-b2">{t("ASSISTÊNCIAS")}</b>
      </div>
      <div className="card-endereo-div">
        <div className="rectangle-div29" />
        <b className="localize-a-assistncia-mais-pr">
          {t("Localize a assistência mais próximo de você")}
        </b>
        <div className="ou-div">ou</div>
        <div className="ou-div1">ou</div>
        <div className="virificar-endereo-div">
          <div className="cep-div">
            <div className="rectangle-div30" />
            <img className="seach-icon" alt="" src={Search} />
            <input
              type="text"
              className="informe-seu-cep"
              placeholder={t("Informe seu CEP")}
            />
          </div>
          <div className="cidade-div">
            <div className="rectangle-div30" />
            <img className="seach-icon" alt="" src={Search} />
            <input
              type="text"
              className="informe-seu-cep"
              placeholder={t("Informe a sua Cidade")}
            />
          </div>
        </div>
        <div className="localizao-div">
          <div className="concordo-em-compartilhar-a-min">
            {t(
              "concordo em compartilhar a minha localização geográfica atual."
            )}
          </div>
          <div className="rectangle-div32" />
          <img className="ellipse-icon" alt="" src={Ellipse} />
          <img className="global-1-1-icon" alt="" src={Global} />
          <input
            type="text"
            className="usar-minha-localizao"
            placeholder={t("Usar minha localização")}
          />
          <div className="verificado-div">
            <div className="rectangle-div33" />
            <input type="checkbox" className="vector-icon17" />
          </div>
        </div>
      </div>
      <b className="assistncias-mais-prximas">
        {t("assistências mais próximas")}{" "}
      </b>


      <ul>
        {partners.map(partner => (
          <li key={partner.id}>
            <div className="linha-1-div">
              <div className="assistncia-div1">
                <div className="rectangle-div34" />
                <div className="rectangle-div35" />
                <div className="cidade-que-atende-nome-da-cid">
                  <span className="cidade-que-atende">Cidade que atende:</span>
                  <span>{partner.name}</span>
                </div>
                <div className="div6">{partner.phone}</div>
                <b className="nome-da-assistncia">Nome da assistência</b>
                <div className="localizao-rua-bla-bla-bla-">
                  Localização: {partner.address}
                </div>
                <div className="email-assistencialojacombr-div">
                  Email: assistencia@loja.com.br
                </div>
                <img className="phone-icon2" alt="" src={Phone2} />
                <img className="seta-icon" alt="" src={Seta} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
  

export default Assistencia;
