import { Link } from 'react-router-dom'

import Header from "../../components/Header";
import "./Styles.css";
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';

import Vetor from '../../assets/image/vector-1171.svg'
import Vetor1 from '../../assets/image/vector-1161.svg'
import What from '../../assets/image/logo-whast.svg'
import Image from '../../assets/image/image-4@2x.png'
import Redes from '../../assets/image/icones-redes.svg'
import Whatsapp from '../../assets/image/whatsapp.svg'
import Mail from '../../assets/image/mail.svg'
import Pin3 from '../../assets/image/pin3.svg'
import Phone12 from '../../assets/image/phone12.svg'
import Icround from '../../assets/image/icroundaccesstimefilled.svg'
import Retangulo from '../../assets/image/rectangle-152.svg'

import Phone from '../../assets/image/phone32.svg'

import Nauber from '../../assets/image/logo-nauber@2x.png'

function Contato(){
  const { t } = useTranslation();
  return (
    <div className="contato-div2">
      <Header />
      <div className="headline-div1">
        <img className="vector-icon20" alt="" src={Vetor} />
        <img className="vector-icon21" alt="" src={Vetor1} />
        <b className="contato-b3">
          {t('CONTATO')}
        </b>
        </div>
        <div className="telefone-div">
          <div className="telefone-de-contato">
            <div className="rectangle-div55" />
            <b className="horrio-de-atendimento">{t('telefone de contato')}</b>
          </div>
          <div className="rectangle-div56" />
          <b className="b">(47) 3374-5969</b>
          <b className="b1">(47) 99621-0018</b>
          <img className="logo-whast-icon" alt="" src={What} />
        </div>
        <div className="horrio-div">
          <div className="horrio-div1">
            <div className="rectangle-div57" />
            <b className="horrio-de-atendimento">{t('horário de atendimento')}</b>
          </div>
          <b className="segunda-a-sexta-feira">{t('Segunda a Sexta-Feira')}</b>
          <b className="h30-s-17h30">{t('7h30 às 17h30')}</b>
        </div>
        <div className="localizao-div1">
          <div className="horrio-div1">
            <div className="rectangle-div57" />
            <b className="horrio-de-atendimento">{t('localização')}</b>
          </div>
          <b className="rua-marechal-castelo-branco-n">{`Rua Marechal Castelo Branco, n°2477 `}</b>
          <b className="centro-schroeder-sc">Centro - Schroeder - SC</b>
        </div>
        <div className="rectangle-div59" />
        
        <div className="contatos-rpidos-div">
          <a href="https://wa.me/5547996210018?text=Ol%C3%A1%2C+vim+do+site.+Pode+me+tirar+algumas+d%C3%BAvidas%3F">
            <div className="div18">
            (47) 99621-0018
            </div>
          </a>
          <div className="div19">(47) 3374-5969</div>
          <div className="contatonaubercombr-div">atendimento@nauber.com.br</div>
          <div className="segunda-a-sexta-730-1748">
            Segunda a Sexta: 7:30 - 17:48
          </div>
          <a href="https://goo.gl/maps/dLszQVUTBJqNiSEm8">
            <div className="rua-mal-castelo-branco-24773">
              Rua Mal. Castelo Branco, 2477 Centro Schroeder - SC.
            </div>
          </a>
          <div className="icones-redes">
          
          <a href="https://www.facebook.com/naubermaquinas"><Icon icon="ic:baseline-facebook" className="ItemSocial" color="#0fa958" /></a>
          <a href="https://www.instagram.com/naubermaquinas/"><Icon icon="mdi:instagram" className="ItemSocial" color="#0fa958" /></a>
          <a href="https://www.youtube.com/@naubermaquinas2080"><Icon icon="mdi:youtube" className="ItemSocial" color="#0fa958" /></a>
          <a href=""><Icon icon="mdi:pinterest" className="ItemSocial" color="#0fa958" /></a>
          <a href="https://www.tiktok.com/@naubermaquinas"><Icon icon="ic:baseline-tiktok" className="ItemSocial" color="#0fa958" /></a>
          
          </div>
          <img className="whatsapp-icon" alt="" src={Whatsapp} />
          <img className="mail-icon" alt="" src={Mail} />
          <img className="pin-icon3" alt="" src={Pin3} />
          <img className="phone-icon12" alt="" src={Phone12} />
          <b className="whatsapp-b">WHATSAPP</b>
          <b className="telefone-b">{t('TELEFONE')}</b>
          <b className="e-mail-b">E-MAIL</b>
          <b className="horrio-de-atendimento1">{t('horário de atendimento')}</b>
          <b className="localizao-b1">{t('localização')}</b>
          <b className="redes-sociais-b">{t('REDES SOCIAIS')}</b>
          <img
            className="icround-access-time-filled-icon"
            alt=""
            src={Icround}
          />
        </div>
        <b className="ficou-com-alguma-dvida-entre">
        {t('ficou com alguma dúvida? entre em contato.')}
        </b>
        <div className="form-div">
          <div className="form-div1">
            <div className="rectangle-div60" />
            <div className="rectangle-div61" />
            <div className="rectangle-div62" />
            <div className="rectangle-div63" />
            <div className="rectangle-div64" />
            <div className="rectangle-div65" />
            <div className="rectangle-div66" />
            <div className="rectangle-div67" />
            <div className="atendimento-atendimentonaube-div">
              Atendimento -atendimento@nauber.com.br
            </div>
            <div className="nome-completo-div">NOME COMPLETO</div>
            <div className="cidade-div1">CIDADE</div>
            <div className="estado-div">ESTADO</div>
            <div className="telefone-div1">TELEFONE</div>
            <div className="e-mail-div">E-MAIL</div>
            <div className="mensagem-div">MENSAGEM</div>
          </div>
        </div>
        <div className="form-div2">
          <div className="rectangle-div68" />
          <div className="rectangle-div69" />
      <div className="rectangle-div75" />

          <input type="text" className="digite-seu-nome" placeholder={t('Digite seu nome')}/>
          <input type="text" className="estado-div1" placeholder={t('Estado')}/>
          <input type="text" className="cidade-div2" placeholder={t('Cidade')}/>
          <div className="atendimento-atendimentonaub">
            <select>
              <option value="grapefruit">Atendimento - atendimento@nauber.com.br</option>
              <option value="lime">Atendimento - atendimento@nauber.com.br</option> 
            </select>
          </div>
          <b className="escolha-o-setor-para-o-envio-d">
          {t('Escolha o Setor para o envio do contato')}
          </b>
          <input type="text" className="seu-melhor-e-mail" placeholder={t('Seu melhor e-mail')}/>
          <input type="text" className="telefone-para-contato" placeholder={t('Telefone para contato')}/>
          <input type="text" className="escreva-sua-mensagem-aqui" placeholder={t('Escreva sua mensagem aqui...')}/>
          <a href="#" class="enviar-b">{t('enviar')}</a>
        </div>
        
        <div className="footer-div4">
          <div className="footer-div5">
            <div className="bg-div3" />
            
            <div className="siga-nas-redes-sociais2">Siga nas redes sociais</div>
            <div className="nauber-2022-todos-os-direito2">
              Nauber © 2022 Todos os direitos reservados.
            </div>
            <div className="politicas-de-privacidade-ter2">
              Politicas de Privacidade | Termos de Uso
            </div>
            <div className="nauber-maquinas-e-equipamentos2">
              20.633.257/0001-98 | NAUBER MAQUINAS E EQUIPAMENTOS
            </div>
            <div className="redes-sociais-icon2">
            <a href="https://www.facebook.com/naubermaquinas"><Icon icon="ic:baseline-facebook" className="ItemSocial" color="#fff" /></a>
            <a href="https://www.instagram.com/naubermaquinas/"><Icon icon="mdi:instagram" className="ItemSocial" color="#fff" /></a>
            <a href="https://www.youtube.com/@naubermaquinas2080"><Icon icon="mdi:youtube" className="ItemSocial" color="#fff" /></a>
            <a href="https://www.tiktok.com/@naubermaquinas"><Icon icon="ic:baseline-tiktok" className="ItemSocial" color="#fff" /></a>
            </div>

            <div className="dvidas-div2">
              <div className="converse-com-um-especialista2">
                Converse com um especialista
              </div>
              <div className="envie-um-e-mail2">Envie um e-mail</div>
              <Link to='/' className="voltar-ao-incio2">Voltar ao início</Link>
              <div className="ficou-com-dvidas2">Ficou com dúvidas?</div>
            </div>
            <div className="produtos-div7">
              <Link to='/' className="construo-civil-div2">Construção civil</Link>
              <Link to='/' className="linha-industrial-div2">Linha industrial</Link>
              <div className="ficou-com-dvidas2">{t("PRODUTOS")}</div>
            </div>
            <div className="nossa-sede-div4">
              <div className="rua-mal-castelo-branco-24772">
                <p className="rua-mal-castelo2">
                  Rua Mal. Castelo Branco, 2477 Centro
                </p>
                <p className="schroeder-sc2">Schroeder - SC.</p>
              </div>
              <div className="div15">+55 (47) 3374-5969</div>
              <div className="div16">+55 (11) 96364-6599</div>
              <div className="div17">+55 (47) 98821-2725</div>
              <div className="nossa-sede-div5">Nossa sede</div>
            </div>
            
            <div className="line-div5" />
            <img
              className="logo-nauber-icon2"
              alt=""
              src={Nauber}
            />
            <div className="rectangle-div52" />
          </div>
        </div>
    </div>
    
  );
};

export default Contato;
