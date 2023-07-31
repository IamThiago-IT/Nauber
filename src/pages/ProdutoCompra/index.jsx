import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Styles.css";

import Vetor from "../../assets/image/vector-1182.svg";
import Vetor1 from "../../assets/image/vector-1175.svg";
import Vetor2 from "../../assets/image/vector-1165.svg";
import Line from "../../assets/image/vector-1165.svg";
import Image12 from "../../assets/image/01-23@2x.png";
import Seta1 from "../../assets/image/seta19.svg";
import Play from "../../assets/image/play.svg";
import Seach from "../../assets/image/seach2.svg";
import EUA from "../../assets/image/flageua-31@2x.png";
import Espanha from "../../assets/image/flagespanha-31@2x.png";
import BR from "../../assets/image/flagbrasil-21@2x.png";
import Ellipse from "../../assets/image/ellipse-56.svg";
import Documents from "../../assets/image/fluentdocumentbulletlist24filled.svg";
import Manual from "../../assets/image/manual-1@2x.png";

function formatarValorReal(valor) {
  if (typeof valor === 'number') {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
  return 'Valor inválido'; // Ou qualquer mensagem de erro adequada
}

function downloadPDF(base64Data, filename) {
  const linkSource = `data:application/pdf;base64,${base64Data}`;
  const downloadLink = document.createElement('a');
  downloadLink.href = linkSource;
  downloadLink.download = filename;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

function ProdutoCompra() {
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
    <div className="produto-compra">
      <Header />
      <Footer />
                      {produtos && (
              <>
      <img className="vector-icon40" alt="" src={Vetor} />
      <div className="descrio-div1">
        <div className="turbina-de-aspirao-multiuso1">
          <p className="no-localizimos-um">
            {produtos.description}
            <br />
            <b>
              {t("IMPORTANTE: Não utilizar o equipamento em contato com água")}
            </b>
          </p>
        </div>
        <b className="descrio-b1">{t("descrição")}</b>
      </div>
      
      <div className="indicaes-de-uso3">
        <div className="construo-civil-e-industrial1">
        {produtos.indication_of_use}
        </div>
        <b className="indicaes-de-uso4">{t("indicações de uso")}</b>
      </div>
      <div className="indicaes-de-uso5">
        <div className="potncia-do-motor-750w-veloc1">
          <p className="no-localizimos-um">
          {produtos.technical_data}
          </p>
          <p className="compre-agora-mesmo">
            MEDIDAS DA EMBALAGEM: 24CM X 34CM X 20CM
          </p>
        </div>
        <b className="dados-tcnicos-b1">{t("dados técnicos")}</b>
      </div>
      <div className="group-div12">
        <div className="texto-div2">
          <b className="mquinas-para-pintura4">{t("máquinas para pintura")}</b>
          <b className="lixadeiras-b2">lixadeiras</b>
          <b className="aspiradores-b2">aspiradores</b>
          <b className="misturadores-b2">misturadores</b>
          <b className="fresadora-de-parede6">fresadora de parede</b>
          <b className="lixas-e-abrasivos2">lixas e abrasivos</b>
          <b className="peas-b2">peças</b>
          <b className="acessrios-b2">acessórios</b>
        </div>
        <img className="seta-icon31" alt="" src={Seta1} />
      </div>
      <div className="linha-1-div3">
        <div className="produto-div2">
          <div className="rectangle-div154" />
          <div className="rectangle-div155" />
          <b className="d-30x-b10">d-3.0x</b>
        </div>
      </div>
      <div className="encontre-um-revendedor2">
        <div className="rectangle-div156" />
        <b className="mquinas-para-pintura-d-30x2">
          {produtos.name}
        </b>
      </div>
      <div className="mquinas-div2">
        <img className="vector-icon41" alt="" src={Vetor1} />
        <img className="vector-icon42" alt="" src={Vetor2} />
        <b className="mquinas-para-pintura5">{t("máquinas para pintura")}</b>
      </div>
      <div className="group-div13">
        <div className="rectangle-div157" />
        <div className="rectangle-div158" />
        <div className="rectangle-div159" />
        <div className="rectangle-div160" />
        <div className="rectangle-div161" >
        <img className="icon11" src={`data:image/png;base64, ${produtos.photo}` } alt={produtos.name} />
        </div>
      </div>
      <div className="video-div2">
        <div className="rectangle-div162" />
        <img className="play-icon2" alt="" src={Play} />
        <b className="apresentao-tcnica-turbina2">
          <p className="no-localizimos-um-on">
            {t("Apresentação Técnica -")} {produtos.name}
          </p>
        </b>
      </div>
      <div className="downloads-div2">
        <b className="downloads-b2">{t("Downloads")}</b>
        <div className="manual-div2">
        <button onClick={() => downloadPDF(produtos.instruction_manual, 
          `${produtos.name}_instruction_manual.pdf`)}
          >
          <img className="ellipse-icon8" alt="" src={Ellipse} />
          <b className="manual-de-instrues2">{t("Manual de instruções")}</b>
          <img className="flag-brasil-2-icon7" alt="" src={BR} />
          </button>
          
          <img className="manual-1-icon2" alt="" src={Manual} />
          
          <img className="flag-espanha-2-icon3" alt="" src={Espanha} />
          <img className="flag-eua-2-icon3" alt="" src={EUA} />
        </div>
        <div className="fecha-tcnica-div4">
          <img className="ellipse-icon8" alt="" src={Ellipse} />
          <b className="fecha-tcnica-b2">{t("fecha técnica")}</b>
          <img className="flag-brasil-2-icon7" alt="" src={BR} />
          <img
            className="fluentdocument-bullet-list-24-icon4"
            alt=""
            src={Documents}
          />
          <img className="flag-espanha-2-icon3" alt="" src={Espanha} />
          <img className="flag-eua-2-icon3" alt="" src={EUA} />
        </div>
        <div className="fecha-tcnica-div5">
          <img className="ellipse-icon8" alt="" src={Ellipse} />
          <b className="vista-explodida-b2">{t("vista explodida")}</b>
          <img className="flag-brasil-2-icon7" alt="" src={BR} />
          <img
            className="fluentdocument-bullet-list-24-icon4"
            alt=""
            src={Documents}
          />
          <img className="flag-espanha-3-icon5" alt="" src={Espanha} />
          <img className="flag-eua-3-icon5" alt="" src={EUA} />
        </div>
      </div>
      <div className="card-endereo-div3">
        <div className="rectangle-div163" />
        <div className="vista-div">{t("á vista")}</div>
        <b className="no-localizimos-um-revendedor">
          <p className="no-localizimos-um">
            {t("não localizimos um revendedor,")}
          </p>
          <p className="compre-agora-mesmo">{t("Compre agora mesmo!")}</p>
        </b>
        <b className="r99999-b">
        {formatarValorReal(produtos.price)}
        </b>
        <div className="calcular-frete-div">
          <div className="rectangle-div164" />
          <input
            type="text"
            className="calcular-frete-div1"
            placeholder={t("Calcular frete")}
          />
          <img className="seach-icon2" alt="" src={Seach} />
        </div>
        <div className="rectangle-div165" />
        <div className="rectangle-div166" />
        <Link to="/ProdutoDetalhes" className="comprar-b">
          {t("comprar")}
        </Link>
      </div>
      <div className="group-div14">
        <div className="linha-4-div1">
          <div className="produto-1-div3">
            <div className="rectangle-div167" />
            <b className="d-30x-b11">{`D-3.0X `}</b>
            <div className="breve-descrio-sobre-o-produt8">
              {t("Breve descrição sobre o produto")}
            </div>
            <div className="boto-div14">
              <div className="rectangle-div168" />
              <div className="saiba-mais-div12">{t("SAIBA MAIS")}</div>
              <img className="seta-icon32" alt="" src={Seta1} />
            </div>
            <div className="rectangle-div169" />
            <img className="icon12" alt="" src={Image12} />
          </div>
          <div className="produto-2-div3">
            <div className="rectangle-div167" />
            <b className="d-30x-b11">{`D-3.0X `}</b>
            <div className="breve-descrio-sobre-o-produt8">
              {t("Breve descrição sobre o produto")}
            </div>
            <div className="boto-div14">
              <div className="rectangle-div168" />
              <div className="saiba-mais-div12">{t("SAIBA MAIS")}</div>
              <img className="seta-icon32" alt="" src={Seta1} />
            </div>
            <div className="rectangle-div169" />
            <img className="icon12" alt="" src={Image12} />
          </div>
          <div className="produto-3-div3">
            <div className="rectangle-div167" />
            <b className="d-30x-b11">{`D-3.0X `}</b>
            <div className="breve-descrio-sobre-o-produt8">
              {t("Breve descrição sobre o produto")}
            </div>
            <div className="boto-div14">
              <div className="rectangle-div168" />
              <div className="saiba-mais-div12">{t("SAIBA MAIS")}</div>
              <img className="seta-icon32" alt="" src={Seta1} />
            </div>
            <div className="rectangle-div169" />
            <img className="icon12" alt="" src={Image12} />
          </div>
          <div className="produto-4-div3">
            <div className="rectangle-div167" />
            <b className="d-30x-b11">{`D-3.0X `}</b>
            <div className="breve-descrio-sobre-o-produt8">
              {t("Breve descrição sobre o produto")}
            </div>
            <div className="boto-div14">
              <div className="rectangle-div168" />
              <div className="saiba-mais-div12">{t("SAIBA MAIS")}</div>
              <img className="seta-icon32" alt="" src={Seta1} />
            </div>
            <div className="rectangle-div169" />
            <img className="icon12" alt="" src={Image12} />
          </div>
        </div>
        <div className="tpico-lanamento-div3">
          <b className="produtos-relacionados-b2">
            {t("produtos relacionados")}
          </b>
          <div className="rectangle-div179" />
          <img className="line-icon3" alt="" src={Line} />
          <div className="line-div17" />
        </div>
      </div>
            </>       
            )}
    </div>
  );
}

export default ProdutoCompra;
