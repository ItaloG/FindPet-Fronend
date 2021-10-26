import { Container } from "../../GlobalStyles";
import {
  Banner,
  Profile,
  Section,
  StyledStart,
  StyledHeart,
  StyledRiArrowDownSLine,
  StyledMdEmail,
  StyledFaPhoneAlt,
  StyledMdPhoneIphone,
  StyledFaMapMarkerAlt,
  Colaboradores,
  TextArea,
  Campanhas,
  CampanhasContainer,
} from "./styles";

import ApoiarIcon from "../../assets/apoiar.svg";
import DefaultBanner from "../../assets/default_banner.png";
import DefaultProfile from "../../assets/default_profile_photo.jpg";
import Footer from "../../components/Footer";

function PerfilInstituicao() {
  return (
    <Container>
      <main>
        <Profile>
          <Banner>
            <img src={DefaultBanner} alt="banner" />
          </Banner>
          <aside>
            <div>
              <img src={DefaultProfile} alt="profile" />
              <h1>Instituto Luísa Mell</h1>
              <StyledHeart />
            </div>
            <div>
              <div className="avaliacoes">
                <div>
                  <StyledStart />
                  <StyledStart />
                  <StyledStart />
                  <StyledStart />
                  <StyledStart />
                  <span>4.8</span>
                </div>
                <div>
                  <p>Sua avaliação</p>
                </div>
              </div>
              <div>
                <img src={ApoiarIcon} alt="apoio" />
                <div>
                  Apoiar <StyledRiArrowDownSLine />
                </div>
              </div>
            </div>
          </aside>
        </Profile>
        <Section>
          <aside>
            <div className="contatos">
              <h1>Contato</h1>
              <div>
                <StyledMdEmail />
                <p>contato@instituitoluisamell.com</p>
              </div>
              <div>
                <StyledFaMapMarkerAlt />
                <p>Rua Etc e Tal, nº2365 - 06631-000 SP</p>
              </div>
              <div>
                <StyledFaPhoneAlt />
                <p>4707-0000</p>
              </div>
              <div>
                <StyledMdPhoneIphone />
                <p>(11) 98265-0000</p>
              </div>
            </div>
            <div className="funcionarios">
              <h1>Nossos colaboradores</h1>
              <Colaboradores>
                <div>
                  <div>
                    <img src={DefaultProfile} alt={"colaborador"} />
                    <h3>nome</h3>
                    <p>Fundador</p>
                  </div>
                  <div>
                    <img src={DefaultProfile} alt={"colaborador"} />
                    <h3>nome</h3>
                    <p>Diretor</p>
                  </div>
                  <div>
                    <img src={DefaultProfile} alt={"colaborador"} />
                    <h3>nome</h3>
                    <p>Marketing</p>
                  </div>
                </div>
                <div>
                  <div>
                    <img src={DefaultProfile} alt={"colaborador"} />
                    <h3>nome</h3>
                    <p>Fundador</p>
                  </div>
                  <div>
                    <img src={DefaultProfile} alt={"colaborador"} />
                    <h3>nome</h3>
                    <p>Diretor</p>
                  </div>
                  <div>
                    <img src={DefaultProfile} alt={"colaborador"} />
                    <h3>nome</h3>
                    <p>Marketing</p>
                  </div>
                </div>
              </Colaboradores>
            </div>
          </aside>
          <section>
            <TextArea>
              <textarea maxLength={150} />
            </TextArea>

            <CampanhasContainer>
              <h1>Campanhas</h1>
              <div>
                <div>
                  <img src={DefaultBanner} alt="campanhas" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div>
                  <img src={DefaultBanner} alt="campanhas" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
              </div>
            </CampanhasContainer>

            <div>
              <h1>Animais para adoção</h1>
              <div></div>
            </div>
          </section>
        </Section>
      </main>
      <Footer />
    </Container>
    // <Body>
    //     <ContainerCenter>
    //         <div className="container-perfil-instituicao">
    //             <div className="capa">
    //                 <img src="#"/>
    //             </div>
    //             <div className="container-dados">
    //                 <div className="barra-de-dados">
    //                     <div className="box box-foto">
    //                         <div className="foto-perfil">
    //                             <img src="#"/>
    //                         </div>
    //                     </div>
    //                     <div className="box box-lg box-titulo">
    //                         <h1>Nome da ONG</h1>
    //                         <img src={OngIcon}/>
    //                     </div>
    //                     <div className="box box-avaliacao">
    //                         <p>3.0</p>
    //                         <img src={EstrelaIcon} className="estrela-completa"/>
    //                         <img src={EstrelaIcon} className="estrela-completa"/>
    //                         <img src={EstrelaIcon} className="estrela-completa"/>
    //                         <img src={EstrelaIcon} className="estrela-vazia"/>
    //                         <img src={EstrelaIcon} className="estrela-vazia"/>
    //                     </div>
    //                     <div className="box box-lg box-apoiar">
    //                         <img src={ApoiarIcon}/>
    //                         <p>Apoiar</p>
    //                     </div>
    //                 </div>

    //             </div>
    //         </div>
    //     </ContainerCenter>
    // </Body>
  );
}

export default PerfilInstituicao;
