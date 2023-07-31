import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";
import "./Styles.css";

import Seta from "../../assets/image/seta.svg";
import Seta1 from "../../assets/image/vector5.svg";
import Line from "../../assets/image/line-3.svg";
import Documents from "../../assets/image/fluentdocumentbulletlist24filled2.svg";
import Manual from "../../assets/image/manual-1@2x.png";
import Image from "../../assets/image/01-23@2x.png";
import Image2 from "../../assets/image/01-26@2x.png";
import Vector11 from "../../assets/image/vector11.svg";
import Phone from "../../assets/image/phone22.svg";
import Vetor from "../../assets/image/vector-1164.svg";
import Vetor1 from "../../assets/image/vector-1181.svg";

import BR from "../../assets/image/flagbrasil-21@2x.png";
import Espanha from "../../assets/image/flagespanha-3@2x.png";
import Vetor2 from "../../assets/image/vector-1174.svg";
import Play from "../../assets/image/play.svg";
import ellipse from "../../assets/image/ellipse-53.svg";
import Logo from "../../assets/image/logo-revenda-pro-43@2x.png";
import EUA from "../../assets/image/flageua-21@2x.png";
import global from "../../assets/image/global1-11@2x.png";

function ProdutoLogistas() {
  const { t } = useTranslation();
  return (
    <div className="produto-logistas1">
      <Footer />
      <Header />
      <img className="vector-icon34" alt="" src={Vetor1} />
      <div className="group-div9">
        <div className="texto-div1">
          <b className="mquinas-para-pintura2">{t("máquinas para pintura")}</b>
          <b className="lixadeiras-b1">lixadeiras</b>
          <b className="aspiradores-b1">aspiradores</b>
          <b className="misturadores-b1">misturadores</b>
          <b className="fresadora-de-parede5">fresadora de parede</b>
          <b className="lixas-e-abrasivos1">lixas e abrasivos</b>
          <b className="peas-b1">peças</b>
          <b className="acessrios-b1">acessórios</b>
        </div>
        <img className="seta-icon20" alt="" src={Seta} />
      </div>
      <div className="linha-1-div2">
        <div className="produto-div1">
          <div className="rectangle-div119" />
          <div className="rectangle-div120" />
          <img className="icon6" alt="" src={Image} />
          <b className="d-30x-b5">d-3.0x</b>
        </div>
      </div>
      <div className="encontre-um-revendedor1">
        <div className="rectangle-div121" />
        <b className="mquinas-para-pintura-d-30x1">
          {t("máquinas para pintura d-3.0x")}
        </b>
      </div>
      <div className="mquinas-div1">
        <img className="vector-icon35" alt="" src={Vetor2} />
        <img className="vector-icon36" alt="" src={Vetor} />
        <b className="mquinas-para-pintura3">{t("máquinas para pintura")}</b>
      </div>
      <div className="group-div10">
        <div className="rectangle-div122" />
        <div className="rectangle-div123" />
        <div className="rectangle-div124" />
        <div className="rectangle-div125" />
        <div className="rectangle-div126" />
      </div>
      <div className="video-div1">
        <div className="rectangle-div127" />
        <img className="play-icon1" alt="" src={Play} />
        <b className="apresentao-tcnica-turbina1">
          <p className="rua-mal-castelo5">
            {t("Apresentação Técnica - Turbina")}
          </p>
          <p className="schroeder-sc5">
            {t("Sopro e Aspiração Nauber TBN-750")}
          </p>
        </b>
      </div>
      <div className="downloads-div1">
        <b className="downloads-b1">{t("Downloads")}</b>
        <div className="manual-div1">
          <img className="ellipse-icon4" alt="" src={ellipse} />
          <b className="manual-de-instrues1">{t("Manual de instruções")}</b>
          <img className="manual-1-icon1" alt="" src={Manual} />
          <img className="flag-brasil-2-icon4" alt="" src={BR} />
          <img className="flag-espanha-2-icon2" alt="" src={Espanha} />
          <img className="flag-eua-2-icon2" alt="" src={EUA} />
        </div>
        <div className="fecha-tcnica-div2">
          <img className="ellipse-icon4" alt="" src={ellipse} />
          <b className="fecha-tcnica-b1">{t("fecha técnica")}</b>
          <img className="flag-brasil-2-icon4" alt="" src={BR} />
          <img
            className="fluentdocument-bullet-list-24-icon2"
            alt=""
            src={Documents}
          />
          <img className="flag-espanha-2-icon2" alt="" src={Espanha} />
          <img className="flag-eua-2-icon2" alt="" src={EUA} />
        </div>
        <div className="fecha-tcnica-div3">
          <img className="ellipse-icon4" alt="" src={ellipse} />
          <b className="vista-explodida-b1">{t("vista explodida")}</b>
          <img className="flag-brasil-2-icon4" alt="" src={BR} />
          <img
            className="fluentdocument-bullet-list-24-icon2"
            alt=""
            src={Documents}
          />
          <img className="flag-espanha-3-icon3" alt="" src={Espanha} />
          <img className="flag-eua-3-icon3" alt="" src={EUA} />
        </div>
      </div>
      <div className="lojas-div">
        <div className="card-endereo-div2">
          <div className="rectangle-div128" />
          <div className="group-div11">
            <div className="concordo-em-compartilhar-a-min1">
              concordo em compartilhar a minha localização geográfica atual.
            </div>
            <b className="localize-o-revendedor-mais-pr">
              Localize o revendedor mais próximo de você
            </b>
            <div className="ou-div2">ou</div>
            <div className="ou-div3">ou</div>
            <div className="virificar-endereo-div1">
              <div className="rectangle-div129" />
              <div className="rectangle-div130" />
              <div className="informe-seu-cep1">Informe seu CEP</div>

              <div className="informe-a-sua-cidade1">Informe a sua Cidade</div>
            </div>
            <div className="rectangle-div131" />
            <img className="ellipse-icon7" alt="" src={ellipse} />
            <img className="global-1-1-icon1" alt="" src={global} />
            <div className="usar-minha-localizao1">Usar minha localização</div>
            <div className="verificado-div2">
              <div className="rectangle-div132" />
              <img className="vector-icon37" alt="" src={Vector11} />
            </div>
          </div>
          <div className="loja-div6">
            <div className="rectangle-div133" />
            <div className="compras-na-loja-retirada-na6">
              Compras na loja - Retirada na loja - Entrega
            </div>
            <div className="div35">(41) 90000-0000</div>
            <b className="nome-da-loja-aqui6">Nome da loja aqui</b>
            <div className="localizao-rua-bla-bla-bla-15">
              Localização: Rua bla bla bla - n°000
            </div>
            <div className="aberto-fecha-s-18006">Aberto - Fecha às 18:00</div>
            <img className="logo-revenda-pro-42" alt="" src={Logo} />
            <img className="phone-icon22" alt="" src={Phone} />
            <img className="seta-icon21" alt="" src={Seta} />
          </div>
          <div className="loja-div7">
            <div className="rectangle-div133" />
            <div className="compras-na-loja-retirada-na6">
              Compras na loja - Retirada na loja - Entrega
            </div>
            <div className="div35">(41) 90000-0000</div>
            <b className="nome-da-loja-aqui6">Nome da loja aqui</b>
            <div className="localizao-rua-bla-bla-bla-15">
              Localização: Rua bla bla bla - n°000
            </div>
            <div className="aberto-fecha-s-18006">Aberto - Fecha às 18:00</div>
            <img className="logo-revenda-pro-42" alt="" src={Logo} />
            <img className="phone-icon22" alt="" src={Phone} />
            <img className="seta-icon21" alt="" src={Seta} />
          </div>
          <div className="loja-div8">
            <div className="rectangle-div133" />
            <div className="compras-na-loja-retirada-na6">
              Compras na loja - Retirada na loja - Entrega
            </div>
            <div className="div35">(41) 90000-0000</div>
            <b className="nome-da-loja-aqui6">Nome da loja aqui</b>
            <div className="localizao-rua-bla-bla-bla-15">
              Localização: Rua bla bla bla - n°000
            </div>
            <div className="aberto-fecha-s-18006">Aberto - Fecha às 18:00</div>
            <img className="phone-icon24" alt="" src={Phone} />
            <img className="seta-icon23" alt="" src={Seta} />
          </div>
          <div className="loja-div9">
            <div className="rectangle-div133" />
            <div className="compras-na-loja-retirada-na6">
              Compras na loja - Retirada na loja - Entrega
            </div>
            <div className="div35">(41) 90000-0000</div>
            <b className="nome-da-loja-aqui6">Nome da loja aqui</b>
            <div className="localizao-rua-bla-bla-bla-15">
              Localização: Rua bla bla bla - n°000
            </div>
            <div className="aberto-fecha-s-18006">Aberto - Fecha às 18:00</div>
            <img className="phone-icon24" alt="" src={Phone} />
            <img className="seta-icon23" alt="" src={Seta} />
          </div>
          <div className="loja-div10">
            <div className="rectangle-div133" />
            <div className="compras-na-loja-retirada-na6">
              Compras na loja - Retirada na loja - Entrega
            </div>
            <div className="div35">(41) 90000-0000</div>
            <b className="nome-da-loja-aqui6">Nome da loja aqui</b>
            <div className="localizao-rua-bla-bla-bla-15">
              Localização: Rua bla bla bla - n°000
            </div>
            <div className="aberto-fecha-s-18006">Aberto - Fecha às 18:00</div>
            <img className="phone-icon24" alt="" src={Phone} />
            <img className="seta-icon23" alt="" src={Seta} />
          </div>
          <div className="loja-div11">
            <div className="rectangle-div133" />
            <div className="compras-na-loja-retirada-na6">
              Compras na loja - Retirada na loja - Entrega
            </div>
            <div className="div35">(41) 90000-0000</div>
            <b className="nome-da-loja-aqui6">Nome da loja aqui</b>
            <div className="localizao-rua-bla-bla-bla-15">
              Localização: Rua bla bla bla - n°000
            </div>
            <div className="aberto-fecha-s-18006">Aberto - Fecha às 18:00</div>
            <img className="phone-icon24" alt="" src={Phone} />
            <img className="seta-icon23" alt="" src={Seta} />
          </div>
        </div>
      </div>
      <div className="linha-5-div">
        <div className="produto-1-div2">
          <div className="rectangle-div139" />
          <b className="d-30x-b6">{`D-3.0X `}</b>
          <div className="breve-descrio-sobre-o-produt4">
            {t("Breve descrição sobre o produto")}
          </div>
          <div className="boto-div10">
            <div className="rectangle-div140" />
            <div className="saiba-mais-div8">{t("SAIBA MAIS")}</div>
            <img className="seta-icon27" alt="" src={Seta1} />
          </div>
          <div className="rectangle-div141" />
          <img className="icon7" alt="" src={Image} />
        </div>
        <div className="produto-2-div2">
          <div className="rectangle-div139" />
          <b className="d-30x-b6">{`D-3.0X `}</b>
          <div className="breve-descrio-sobre-o-produt4">
            {t("Breve descrição sobre o produto")}
          </div>
          <div className="boto-div10">
            <div className="rectangle-div140" />
            <div className="saiba-mais-div8">{t("SAIBA MAIS")}</div>
            <img className="seta-icon27" alt="" src={Seta1} />
          </div>
          <div className="rectangle-div141" />
          <img className="icon7" alt="" src={Image} />
        </div>
        <div className="produto-3-div2">
          <div className="rectangle-div139" />
          <b className="d-30x-b6">{`D-3.0X `}</b>
          <div className="breve-descrio-sobre-o-produt4">
            {t("Breve descrição sobre o produto")}
          </div>
          <div className="boto-div10">
            <div className="rectangle-div140" />
            <div className="saiba-mais-div8">{t("SAIBA MAIS")}</div>
            <img className="seta-icon27" alt="" src={Seta1} />
          </div>
          <div className="rectangle-div141" />
          <img className="icon7" alt="" src={Image2} />
        </div>
        <div className="produto-4-div2">
          <div className="rectangle-div139" />
          <b className="d-30x-b6">{`D-3.0X `}</b>
          <div className="breve-descrio-sobre-o-produt4">
            {t("Breve descrição sobre o produto")}
          </div>
          <div className="boto-div10">
            <div className="rectangle-div140" />
            <div className="saiba-mais-div8">{t("SAIBA MAIS")}</div>
            <img className="seta-icon27" alt="" src={Seta1} />
          </div>
          <div className="rectangle-div141" />
          <img className="icon7" alt="" src={Image} />
        </div>
      </div>
      <div className="tpico-lanamento-div2">
        <b className="produtos-relacionados-b1">{t("produtos relacionados")}</b>
        <div className="rectangle-div151" />
        <img className="line-icon2" alt="" src={Line} />
        <div className="line-div14" />
      </div>
    </div>
  );
}

export default ProdutoLogistas;
