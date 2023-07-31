import { Link } from 'react-router-dom'
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header";
import "./Styles.css";

import Nauber from "../../assets/image/logo-nauber@2x.png";
import Retan from "../../assets/image/rectangle-141@2x.png";
import Brasil from "../../assets/image/flagbrasil-219@2x.png";
import LogoRevenda from "../../assets/image/logo-revenda-pro-3@2x.png";
import Vetor from "../../assets/image/vector-1179.svg";
import Vetor1 from "../../assets/image/vector-1169.svg";
import Bg from "../../assets/image/bg@2x.png";
import NauberPro from "../../assets/image/nauber-pro-1@2x.png";

function Sobre() {
  const { t } = useTranslation();
  return (
    <>
      <div className="sobre-a-nauber2">
        <img className="rectangle-icon1" alt="" src={Retan} />
        <Header />
        <div className="mquinas-div6">
          <img className="vector-icon62" alt="" src={Vetor} />
          <img className="vector-icon63" alt="" src={Vetor1} />
          <b className="mquinas-para-pintura12">máquinas para pintura</b>
        </div>
        <div className="frame-div6">
          <div className="footer-div21">
            <img className="bg-icon3" alt="" src={Bg} />

            <img className="nauber-pro-11" alt="" src={NauberPro} />
            <div className="rectangle-div268">
              <iframe
                src="https://www.youtube.com/embed/1_0jbbZlKlg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen=""
                width="560"
                height="315"
                frameborder="0"
              ></iframe>
            </div>
            <img className="logo-revenda-pro-21" alt="" src={LogoRevenda} />
            <b className="conhea-o-sistema-de-revenda1">
              <p className="rua-mal-castelo10">{t("CONHEÇA O")}</p>
              <p className="rua-mal-castelo10">{t("SISTEMA DE")}</p>
              <p className="schroeder-sc10">{t("REVENDA")}</p>
            </b>
            <b className="nauber-pro12">NAUBER PRO</b>
          </div>
        </div>
        <div className="video-div6">
          <div class="rectangle-div270">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/1_0jbbZlKlg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="group-div25">
          <img className="flag-brasil-2-icon19" alt="" src={Brasil} />
          <b className="nauber-mquinas">{t("nauber máquinas")}</b>
          <div className="a-nauber-mquinas-uma-empres">
            {t(
              "A Nauber Máquinas é uma empresa Brasileira, sediada na cidade de Schroeder, Santa Catarina, a 8 km da cidade de  Jaraguá do Sul, e 25 km da Cidade de Joinville. Nosso objetivo é desenvolver e buscar novas tecnologias que proporcionem melhorias significativas de qualidade e desempenho de processos da construção civil. Com a globalização, e a disputa constante em um mercado cada vez mais acirrado, não há melhor forma de se tornar mais competitivo do que aprimorar processos para reduzir custos. Nossa linha de equipamentos Airless, Lixadeiras, Aspiradores e Acessórios, são desenvolvidas para profissionais que buscam otimização de mão de obra , e desempenhar produtividade sem abrir mão da qualidade. Os equipamentos e acessórios Nauber são produzidos sob total supervisão de qualidade, sendo que 100% dos equipamentos são testados antes do envio para nossos clientes, garantindo, dessa forma, a qualidade final, e a satisfação de compra através de equipamentos de ponta."
            )}
          </div>
        </div>
        <div className="footer-div20">
          <div className="footer-div21">
            <div className="bg-div11" />

            <div className="siga-nas-redes-sociais10">
              Siga nas redes sociais
            </div>
            <div className="nauber-2022-todos-os-direito10">
              Nauber © 2022 Todos os direitos reservados.
            </div>
            <div className="politicas-de-privacidade-ter10">
              Politicas de Privacidade | Termos de Uso
            </div>
            <div className="nauber-maquinas-e-equipamentos10">
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
                <Icon
                  icon="mdi:instagram"
                  className="ItemSocial"
                  color="#fff"
                />
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
            <div className="dvidas-div10">
              <div className="converse-com-um-especialista10">
                Converse com um especialista
              </div>
              <div className="envie-um-e-mail10">Envie um e-mail</div>
              <Link to='/' className="voltar-ao-incio10">Voltar ao início</Link>
              <div className="ficou-com-dvidas10">Ficou com dúvidas?</div>
            </div>
            <div className="produtos-div31">
              <Link to='/' className="construo-civil-div10">Construção civil</Link>
              <Link to='/' className="linha-industrial-div11">Linha industrial</Link>
              <div className="ficou-com-dvidas10">{t("PRODUTOS")}</div>
            </div>
            <div className="nossa-sede-div20">
              <div className="rua-mal-castelo-branco-247711">
                <p className="rua-mal-castelo10-footer">
                  Rua Mal. Castelo Branco, 2477 Centro
                </p>
                <p className="schroeder-sc10-footer">Schroeder - SC.</p>
              </div>
              <div className="div53">+55 (47) 3374-5969</div>
              <div className="div54">+55 (11) 96364-6599</div>
              <div className="div55">+55 (47) 98821-2725</div>
              <div className="nossa-sede-div21">Nossa sede</div>
            </div>

            <div className="line-div27" />
            <img className="logo-nauber-icon10" alt="" src={Nauber} />
            <div className="rectangle-div266" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sobre;
