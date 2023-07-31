import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";
import "./Styles.css";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Vetor from "../../assets/image/vector-1185.svg";
import Vetor3 from "../../assets/image/vector13.svg";
import Seta from "../../assets/image/seta37.svg";
import Image from "../../assets/image/01-23@2x.png";
import Line from "../../assets/image/line-3.svg";
import Seach from "../../assets/image/seach2.svg";
import Global from "../../assets/image/global1-13@2x.png";
import ellipse from "../../assets/image/ellipse-63.svg";
import ellipse1 from "../../assets/image/ellipse-53.svg";
import Play from "../../assets/image/play.svg";
import Vetor1 from "../../assets/image/vector-1178.svg";
import Vetor2 from "../../assets/image/vector-1168.svg";
import Manual from "../../assets/image/manual-1@2x.png";
import Documents from "../../assets/image/fluentdocumentbulletlist24filled2.svg";
import EUA from "../../assets/image/flageua-33@2x.png";
import BR from "../../assets/image/flagbrasil-21@2x.png";
import ES from "../../assets/image/flagespanha-21@2x.png";
import { Link } from "react-router-dom";


function ProdutoDetalhes() {
  const { t } = useTranslation();
  const { id  } = useParams();

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
      fetch(`http://www.lojanauber.com.br/app/produtos/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Produto não encontrado');
          }
          return response.json();
        })
        .then((data) => {
          setProdutos(data);
          setLoading(false);
        })

    }, [id]);
  return (
    <div className="produto-detalhes1">
      <Header />
      <Footer />
                
                {produtos && (
              <>
      <img className="vector-icon56" alt="" src={Vetor} />
      <div className="descrio-div4">
        <div className="turbina-de-aspirao-multiuso4">
          <p className="rua-mal-castelo9">
            {produtos.description}
            <br />
            <b>
              {t("IMPORTANTE: Não utilizar o equipamento em contato com água")}
            </b>
          </p>
        </div>
        <b className="descrio-b4">{t("descrição")}</b>
      </div>
      <div className="caractersticas-div4">
        <b className="caractersticas-b4">{t("características")}</b>
        <div className="acompanha-saco-coletor-capac4">
          <p className="rua-mal-castelo9">
            {t(
              "Acompanha: saco coletor (capacidade para até 70 litros de material), bocal de borracha, adaptador de mangueira de sucção, par de carvão e manual."
            )}
          </p>
        </div>
      </div>
      <div className="indicaes-de-uso12">
        <div className="construo-civil-e-industrial4">
          {produtos.indication_of_use}
        </div>
        <b className="indicaes-de-uso13">{t("indicações de uso")}</b>
      </div>
      <div className="indicaes-de-uso14">
        <div className="potncia-do-motor-750w-veloc4">
          <p className="rua-mal-castelo9">
            {produtos.technical_data}
          </p>  
        </div>
        <b className="dados-tcnicos-b4">{`dados técnicos `}</b>
      </div>
      <div className="group-div23">
        <div className="texto-div5">
          <b className="mquinas-para-pintura10">{t("máquinas para pintura")}</b>
          <b className="lixadeiras-b5">lixadeiras</b>
          <b className="aspiradores-b5">aspiradores</b>
          <b className="misturadores-b5">misturadores</b>
          <b className="fresadora-de-parede9">fresadora de parede</b>
          <b className="lixas-e-abrasivos5">lixas e abrasivos</b>
          <b className="peas-b5">peças</b>
          <b className="acessrios-b5">acessórios</b>
        </div>
        <img className="seta-icon46" alt="" src={Seta} />
      </div>
      <div className="linha-1-div6">
        <div className="produto-div5">
          <div className="rectangle-div239" />
          <div className="rectangle-div240" />
          <img className="icon26" src={`data:image/png;base64, ${produtos.photo}` } alt={produtos.name} />
          <b className="d-30x-b25">d-3.0x</b>
        </div>
      </div>
      <div className="encontre-um-revendedor5">
        <div className="rectangle-div241" />
        <b className="mquinas-para-pintura-d-30x5">
            {produtos.name}
        </b>
      </div>
      <div className="mquinas-div5">
        <img className="vector-icon57" alt="" src={Vetor1} />
        <img className="vector-icon58" alt="" src={Vetor2} />
        <b className="mquinas-para-pintura11">{t("máquinas para pintura")}</b>
      </div>
      <div className="group-div24">
        <img className="rectangle-div242" src={`data:image/png;base64, ${produtos.photo_2}` } alt={produtos.name} />
        <img className="rectangle-div243" src={`data:image/png;base64, ${produtos.photo_3}` } alt={produtos.name} />
        <img className="rectangle-div244" src={`data:image/png;base64, ${produtos.photo_4}` } alt={produtos.name} />
        <img className="rectangle-div245" src={`data:image/png;base64, ${produtos.photo_5}` } alt={produtos.name} />
        <div className="rectangle-div246" />
      </div>
      <div className="video-div5">
        <iframe 
              className="rectangle-div247"
                              width="560"
                height="315"
                src={produtos.video_link}
              >
                          title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; 
                       autoplay; 
                       clipboard-write; 
                       encrypted-media; 
                       gyroscope; 
                       picture-in-picture; 
                       web-share"
                allowFullScreen
        </iframe>
        <img className="play-icon5" alt="" src={Play} />
        <b className="apresentao-tcnica-turbina5">
          <p className="rua-mal-castelo9-on">
            Apresentação Técnica - {produtos.name}
          </p>
        </b>
      </div>
      <div className="downloads-div5">
        <b className="downloads-b5">{t("Downloads")}</b>
        <div className="manual-div5">
          <img className="ellipse-icon18" alt="" src={ellipse1} />
          <b className="manual-de-instrues5">{t("Manual de instruções")}</b>
          <img className="manual-1-icon5" alt="" src={Manual} />
          <img className="flag-brasil-2-icon16" alt="" src={BR} />
          <img className="flag-espanha-2-icon6" alt="" src={ES} />
          <img className="flag-eua-2-icon6" alt="" src={EUA} />
        </div>
        <div className="fecha-tcnica-div10">
          <img className="ellipse-icon18" alt="" src={ellipse1} />
          <b className="fecha-tcnica-b5">{t("fecha técnica")}</b>
          <img className="flag-brasil-2-icon16" alt="" src={BR} />
          <img
            className="fluentdocument-bullet-list-24-icon10"
            alt=""
            src={Documents}
          />
          <img className="flag-espanha-2-icon6" alt="" src={ES} />
          <img className="flag-eua-2-icon6" alt="" src={EUA} />
        </div>
        <div className="fecha-tcnica-div11">
          <img className="ellipse-icon18" alt="" src={ellipse1} />
          <b className="vista-explodida-b5">{t("vista explodida")}</b>
          <img className="flag-brasil-2-icon16" alt="" src={BR} />
          <img
            className="fluentdocument-bullet-list-24-icon10"
            alt=""
            src={Documents}
          />
          <img className="flag-espanha-3-icon11" alt="" src={ES} />
          <img className="flag-eua-3-icon11" alt="" src={EUA} />
        </div>
      </div>
      <div className="card-endereo-div6">
        <div className="rectangle-div248" />
        <div className="concordo-em-compartilhar-a-min3">
          {t("concordo em compartilhar a minha localização geográfica atual.")}
        </div>
        <b className="localize-o-revendedor-mais-pr2">
          {t("Localize o revendedor mais próximo de você")}
        </b>
        <div className="ou-div6">{t("ou")}</div>
        <div className="virificar-endereo-div3">
          <div className="rectangle-div249" />
          
          <input
            type="text"
            className="informe-seu-cep3"
            placeholder={t("Informe seu CEP")}
          />
        </div>
        <div className="rectangle-div251" />
        <img className="ellipse-icon21" alt="" src={ellipse} />
        <img className="global-1-1-icon3" alt="" src={Global} />
        <Link to={`/produtoCompra/${produtos.id}`} className="usar-minha-localizao3">
          {t("Usar minha localização")}
        </Link>
        <div className="verificado-div4">
          <div className="rectangle-div252" />
          <input type="checkbox" className="vector-icon59" />
        </div>
        <img className="seach-icon6" alt="" src={Seach} />
        
      </div>
      <div className="linha-4-div3">
        <div className="produto-1-div6">
          <div className="rectangle-div253" />
          <b className="d-30x-b26">{`D-3.0X `}</b>
          <div className="breve-descrio-sobre-o-produt20">
            {t("Breve descrição sobre o produto")}
          </div>
          <div className="boto-div26">
            <div className="rectangle-div254" />
            <div className="saiba-mais-div24">{t("SAIBA MAIS")}</div>
            <img className="seta-icon47" alt="" src={Seta} />
          </div>
          <div className="rectangle-div255" />
          <img className="icon27" alt="" src={Image} />
        </div>
        <div className="produto-2-div6">
          <div className="rectangle-div253" />
          <b className="d-30x-b26">{`D-3.0X `}</b>
          <div className="breve-descrio-sobre-o-produt20">
            {t("Breve descrição sobre o produto")}
          </div>
          <div className="boto-div26">
            <div className="rectangle-div254" />
            <div className="saiba-mais-div24">{t("SAIBA MAIS")}</div>
            <img className="seta-icon47" alt="" src={Seta} />
          </div>
          <div className="rectangle-div255" />
          <img className="icon27" alt="" src={Image} />
        </div>
        <div className="produto-3-div6">
          <div className="rectangle-div253" />
          <b className="d-30x-b26">{`D-3.0X `}</b>
          <div className="breve-descrio-sobre-o-produt20">
            {t("Breve descrição sobre o produto")}
          </div>
          <div className="boto-div26">
            <div className="rectangle-div254" />
            <div className="saiba-mais-div24">{t("SAIBA MAIS")}</div>
            <img className="seta-icon47" alt="" src={Seta} />
          </div>
          <div className="rectangle-div255" />
          <img className="icon27" alt="" src={Image} />
        </div>
        <div className="produto-4-div6">
          <div className="rectangle-div253" />
          <b className="d-30x-b26">{`D-3.0X `}</b>
          <div className="breve-descrio-sobre-o-produt20">
            {t("Breve descrição sobre o produto")}
          </div>
          <div className="boto-div26">
            <div className="rectangle-div254" />
            <div className="saiba-mais-div24">{t("SAIBA MAIS")}</div>
            <img className="seta-icon47" alt="" src={Seta} />
          </div>
          <div className="rectangle-div255" />
          <img className="icon27" alt="" src={Image} />
        </div>
      </div>
      <div className="tpico-lanamento-div6">
        <b className="produtos-relacionados-b5">{t("produtos relacionados")}</b>
        <div className="rectangle-div265" />
        <img className="line-icon6" alt="" src={Line} />
        <div className="line-div26" />
      </div>
      </>       
            )}
          
    </div>
  );
}

export default ProdutoDetalhes;
