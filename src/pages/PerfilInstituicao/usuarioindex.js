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
  CampanhasContainer,
  ContainerPerfilAnimal,
  DescricaoContainer,
  AnimaisContainer,
  ContainerPerfilColaborador,
} from "./styles";

import ApoiarIcon from "../../assets/apoiar.svg";
import DefaultBanner from "../../assets/default_banner.png";
import DefaultProfile from "../../assets/default_profile_photo.jpg";
import Footer from "../../components/Footer";

function PerfilInstituicaoUsuario() {
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
              <div>
                <h1>Instituto Luísa Mell</h1>
              </div>
              <StyledHeart/>
            </div>
            <div style={{display: "flex", justifyContent: "space-between", width: "500px"}}>
              <div className="avaliacoes" >
                <div>
                  <StyledStart />
                  <StyledStart />
                  <StyledStart />
                  <StyledStart />
                  <StyledStart />
                  <span>4.8</span>
                </div>
                <div>
                  <p>Suas avaliações (1.448)</p>
                </div>
              </div>
              <div >
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
              <div>
                <h1>Nossos colaboradores</h1>
              </div>
              <Colaboradores>
                <PerfilColaborador />
                <PerfilColaborador />
                <PerfilColaborador />
                <PerfilColaborador />
                <PerfilColaborador />
                <PerfilColaborador />
                <PerfilColaborador />
                <PerfilColaborador />
                <PerfilColaborador />
                <PerfilColaborador />
               
              </Colaboradores>
            </div>
          </aside>
          <section>
            <DescricaoContainer>
              <p>"Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet." </p>
            </DescricaoContainer>
            <CampanhasContainer>
              <div>
                <h1>Campanhas</h1>
              </div>
              <div>
                <div>
                  <img src={DefaultBanner} alt="campanhas" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
                <div>
                  <img src={DefaultBanner} alt="campanhas" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </div>
            </CampanhasContainer>
            <AnimaisContainer>
              <div>
                <h1>Animais para adoção</h1>
              </div>
              <div>
                <PerfilAnimal />
                <PerfilAnimal />
                <PerfilAnimal />
                <PerfilAnimal />
                <PerfilAnimal />
                <PerfilAnimal />
                <PerfilAnimal />
                <PerfilAnimal />
                <PerfilAnimal />
                <PerfilAnimal />
              </div>
            </AnimaisContainer>
          </section>
        </Section>
      </main>
      <Footer />
    </Container>
  );
}

function PerfilAnimal() {
  return (
    <ContainerPerfilAnimal>
      <img src={DefaultProfile} alt={"pet"} />
      <h3>Paçoca</h3>
      <p>SRD</p>
    </ContainerPerfilAnimal>
  );
}

function PerfilColaborador() {
  return (
    <ContainerPerfilColaborador>
      <img src={DefaultProfile} alt={"colaborador"} />
      <h3>Carlos Silva</h3>
      <p>Marketing</p>
    </ContainerPerfilColaborador>
  );
}

function Servico() {
  return (
    <div>
      serviço 1 <span>&times;</span>
    </div>
  );
}

export default PerfilInstituicaoUsuario;
