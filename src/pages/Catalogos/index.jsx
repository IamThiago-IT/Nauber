import { useState, useEffect } from 'react'

import Header from "../../components/Header";
import { useTranslation } from 'react-i18next';
import "./Styles.css";

import CatalogoBR from '../../assets/download/br/Catalogo.pdf'
import INDUSTRIAL from '../../assets/download/br/INDUSTRIAL.pdf'
import TECNICA from '../../assets/download/br/TECNICA.pdf'
import VAREJO from '../../assets/download/br/VAREJO.pdf'

import CatalogoEN from '../../assets/download/en/Catalogo.pdf'

import Vetor1 from '../../assets/image/vector-1162.svg'
import Vetor from '../../assets/image/vector-1172.svg'
import Brasil from '../../assets/image/flagbrasil-2@2x.png'
import Espanha from '../../assets/image/flagespanha-2@2x.png'
import EUA from '../../assets/image/flageua-2@2x.png'

import LinhaVarejo from '../../assets/image/catalogos/LinhaVarejo.jpeg'
import LinhaCompleta from '../../assets/image/catalogos/LinhaCompleta.jpeg'
import LinhaTecnica from '../../assets/image/catalogos/LinhaTecnica.jpeg'
import LinhaIndustrial from '../../assets/image/catalogos/LinhaIndustrial.jpeg'


import Nauber from '../../assets/image/logo-nauber@2x.png'
import { Icon } from "@iconify/react";

function Catalogos(){
  const { t } = useTranslation();
  const [catalogos, setCatalogos] = useState([])

  useEffect(() => {
    fetch('http://www.lojanauber.com.br/app/catalogos')
    .then(response => response.json())
    .then(data => {
      setCatalogos(data)
    })
  }, [])

  return (
    <div className="catlogos-div3">
      <Header />
      <div className="footer-div6">
        <div className="footer-div7">
          <div className="bg-div4" />
          
          <div className="siga-nas-redes-sociais3">Siga nas redes sociais</div>
          <div className="nauber-2022-todos-os-direito3">
            Nauber © 2022 Todos os direitos reservados.
          </div>
          <div className="politicas-de-privacidade-ter3">
            Politicas de Privacidade | Termos de Uso
          </div>
          <div className="nauber-maquinas-e-equipamentos3">
            20.633.257/0001-98 | NAUBER MAQUINAS E EQUIPAMENTOS
          </div>
          <div className="redes-sociais-icon2">
          <a href="https://www.facebook.com/naubermaquinas"><Icon icon="ic:baseline-facebook" className="ItemSocial" color="#fff" /></a>
          <a href="https://www.instagram.com/naubermaquinas/"><Icon icon="mdi:instagram" className="ItemSocial" color="#fff" /></a>
          <a href="https://www.youtube.com/@naubermaquinas2080"><Icon icon="mdi:youtube" className="ItemSocial" color="#fff" /></a>
          <a href="https://www.tiktok.com/@naubermaquinas"><Icon icon="ic:baseline-tiktok" className="ItemSocial" color="#fff" /></a>
          </div>
          <div className="dvidas-div3">
            <div className="converse-com-um-especialista3">
              Converse com um especialista
            </div>
            <div className="envie-um-e-mail3">Envie um e-mail</div>
            <div className="voltar-ao-incio3">Voltar ao início</div>
            <div className="ficou-com-dvidas3">Ficou com dúvidas?</div>
          </div>
          <div className="produtos-div10">
            <div className="construo-civil-div3">Construção civil</div>
            <div className="linha-industrial-div3">Linha industrial</div>
            <div className="ficou-com-dvidas3">Produtos</div>
          </div>
          <div className="nossa-sede-div6">
            <div className="rua-mal-castelo-branco-24774">
              <p className="rua-mal-castelo3">
                Rua Mal. Castelo Branco, 2477 Centro
              </p>
              <p className="schroeder-sc3">Schroeder - SC.</p>
            </div>
            <div className="div20">+55 (47) 3374-5969</div>
            <div className="div21">+55 (11) 96364-6599</div>
            <div className="div22">+55 (47) 98821-2725</div>
            <div className="nossa-sede-div7">Nossa sede</div>
          </div>
          
          <div className="line-div7" />
          <img
            className="logo-nauber-icon3"
            alt=""
            src={Nauber}
          />
          <div className="rectangle-div76" />
        </div>
      </div>
      <div className="headline-div2">
        <img className="vector-icon25" alt="" src={Vetor} />
        <img className="vector-icon26" alt="" src={Vetor1} />
        <b className="catlogos-virtuais-b4">{t('CATÁLOGOS VIRTUAIS')}</b>
      </div>
      <div className="catlogos-div5">
        <div className="linha-varejo-div">
        <a href={VAREJO}>
          <img className="rectangle-div78" alt="" src={LinhaVarejo} /></a>
          <div className="rectangle-div79" />
          <b className="linha-varejo-b">
          {t('linha varejo')}
          </b>
        </div>
        <div className="linha-varejo-div1">
        <a href={CatalogoBR}>
          <img className="rectangle-div78" alt="" src={LinhaCompleta} /></a>
          <div className="rectangle-div81" />
          <b className="linha-completa-b">
          {t('linha completa')}
          </b>
          <div className="bandeiras-div">
          <a href={CatalogoBR}>
            <img
              className="flag-brasil-2-icon"
              alt=""
              src={Brasil}
            />
            </a>
            <img
              className="flag-espanha-2-icon desativado"
              alt=""
              src={Espanha}
            />
            <a href={CatalogoEN}>
              <img className="flag-eua-2-icon" alt="" src={EUA} />
            </a>
          </div>
        </div>
        <div className="linha-tcnica-div">
        <a href={TECNICA}>
        <img className="rectangle-div78" alt="" src={LinhaTecnica} /></a>
          <div className="rectangle-div83" />
          <b className="linha-tcnica-b">
          {t('linha técnica')}
          </b>
        </div>
        <div className="linha-industrial-div4">
        <a href={INDUSTRIAL}>
        <img className="rectangle-div78" alt="" src={LinhaIndustrial} /></a>
          <div className="rectangle-div85" />
          <b className="linha-industrial-b">
          {t('linha industrial')}
          </b>
        </div>
      </div>
    </div>
  );
};

export default Catalogos;