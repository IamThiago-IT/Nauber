import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from "../../components/Header";
import { useTranslation } from "react-i18next";
import "./Styles.css";

import NauberLogo from "../../assets/image/nauberlogo-1@2x.png";
import Logo from "../../assets/image/logo-nauber-1@2x.png";
import icon33 from "../../assets/image/01-16@2x.png";
import icon38 from "../../assets/image/1-1@2x.png";
import vetor from "../../assets/image/vector-11710.svg";
import vetor1 from "../../assets/image/vector-11610.svg";
import Linha from "../../assets/image/linha.svg";

function Produtos() {
  const { t } = useTranslation();
  
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    fetch('http://www.lojanauber.com.br/app/produtos')
    .then(response => response.json())
    .then(data => {
      setProdutos(data)
    })
  }, [])
  
  return (
    <div className="produtos-div34">
      <div className="footer-div22">
        <div className="footer-div23">
          <div className="bg-div12" />
          <div className="siga-nas-redes-sociais11">Siga nas redes sociais</div>
          <div className="nauber-2022-todos-os-direito11">
            Nauber © 2022 Todos os direitos reservados.
          </div>
          <div className="politicas-de-privacidade-ter11">
            Politicas de Privacidade | Termos de Uso
          </div>
          <div className="nauber-maquinas-e-equipamentos11">
            20.633.257/0001-98 | NAUBER MAQUINAS E EQUIPAMENTOS
          </div>
          <img
            className="redes-sociais-icon11"
            alt=""
            src="src\assets\image\redes-sociais-icon7.svg"
          />
          <div className="dvidas-div11">
            <div className="converse-com-um-especialista11">
              Converse com um especialista
            </div>
            <div className="envie-um-e-mail11">Envie um e-mail</div>
            <Link to='/' className="voltar-ao-incio11">Voltar ao início</Link>
            <div className="ficou-com-dvidas11">Ficou com dúvidas?</div>
          </div>
          <div className="produtos-div35">
            <Link to='/' className="construo-civil-div11">Construção civil</Link>
            <Link to='/' className="linha-industrial-div12">Linha industrial</Link>
            <div className="ficou-com-dvidas11">{t("PRODUTOS")}</div>
          </div>
          <div className="nossa-sede-div22">
            <div className="rua-mal-castelo-branco-247712">
              <p className="rua-mal-castelo11">
                Rua Mal. Castelo Branco, 2477 Centro
              </p>
              <p className="schroeder-sc11">Schroeder - SC.</p>
            </div>
            <div className="div56">+55 (47) 3374-5969</div>
            <div className="div57">+55 (11) 96364-6599</div>
            <div className="div58">+55 (47) 98821-2725</div>
            <div className="nossa-sede-div23">Nossa sede</div>
          </div>
          <div className="line-div29" />
          <img
            className="logo-nauber-icon11"
            alt=""
            src="src\assets\image\logo-nauber@2x.png"
          />
          <div className="rectangle-div271" />
        </div>
      </div>
      <div className="header-div11">
        <div className="bg-header34" />
        <div className="bg-header35" />
        <div className="bg-header36" />
        <div className="logo-div11">
        
          <img className="nauber-logo-1-icon11" alt="" src={NauberLogo} />
          <img className="logo-nauber-111" alt="" src={Logo} />
        </div>
        <Header />

        <div className="linha-1-div7">

          <div className="produto-div6">
          <ul>
            {produtos.map(produto => (
              <li key={produto.id}>
            <div className="rectangle-div273" />
            <div className="rectangle-div274" />
            <img className="icon31" src={`data:image/png;base64, ${produto.photo}` } alt={produto.name} />
            <b className="d-30x-b30">{produto.name}</b>
            </li>
            ))}
          </ul>
          </div>
</div>

        <div className="mquinas-div7">
          <img className="vector-icon66" alt="" src={vetor} />
          <img className="vector-icon67" alt="" src={vetor1} />
          <b className="mquinas-para-pintura13">{t("máquinas para pintura")}</b>
        </div>
        <div className="menu-div12">
          <img className="linha-icon" alt="" src={Linha} />
          <div className="tipo-de-produto">
            <b className="categorias-b">{t("tipo de produto")}</b>
            <div className="airless-diafragma-7523">
              <span>{t("airless diafragma ")}</span>
              <span className="span">(7523)</span>
            </div>
            <div className="airless-pisto-7523">
              <span>{t("airless pistão")}</span>
              <span className="span">(7523)</span>
            </div>
            <input type="checkbox" className="rectangle-div285" />
            <input type="checkbox" className="rectangle-div286" />
          </div>
          <div className="categorias-div">
            <b className="categorias-b">{t("Categorias")}</b>
            <div className="mquinas-para-pintura14">
              {t("máquinas para pintura")}
            </div>
            <div className="lixadeiras-div">{t("Lixadeiras")}</div>
            <div className="aspiradores-div">{t("Aspiradores")}</div>
            <div className="misturadores-div">{t("Misturadores")}</div>
            <div className="fresadora-de-parede10">
              {t("Fresadora de parede")}
            </div>
            <div className="lixas-e-abrasivos6">{t("Lixas e abrasivos")}</div>
            <div className="peas-div">{t("Peças")}</div>
            <div className="acessrios-div">{t("acessórios")}</div>
            <input type="checkbox" className="rectangle-div287" />
            <input type="checkbox" className="rectangle-div288" />
            <input type="checkbox" className="rectangle-div289" />
            <input type="checkbox" className="rectangle-div290" />
            <input type="checkbox" className="rectangle-div291" />
            <input type="checkbox" className="rectangle-div292" />
            <input type="checkbox" className="rectangle-div293" />
            <input type="checkbox" className="rectangle-div294" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produtos;
