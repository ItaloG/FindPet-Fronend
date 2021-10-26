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
  StyledMdEdit,
  ContainerPerfilAnimal,
} from "./styles";

import ApoiarIcon from "../../assets/apoiar.svg";
import DefaultBanner from "../../assets/default_banner.png";
import DefaultProfile from "../../assets/default_profile_photo.jpg";
import Footer from "../../components/Footer";
import BotaoEditar from "../../components/BotaoEditar";

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
                    <aside>
                      <BotaoEditar />
                    </aside>
                    <img src={DefaultProfile} alt={"colaborador"} />
                    <h3>Nome</h3>
                    <p>Fundador</p>
                  </div>
                  <div>
                    <aside>
                      <BotaoEditar />
                    </aside>
                    <img src={DefaultProfile} alt={"colaborador"} />
                    <h3>Nome</h3>
                    <p>Diretor</p>
                  </div>
                  <div>
                    <aside>
                      <BotaoEditar />
                    </aside>
                    <img src={DefaultProfile} alt={"colaborador"} />
                    <h3>nome</h3>
                    <p>Marketing</p>
                  </div>
                </div>
                <div>
                  <div>
                    <aside>
                      <BotaoEditar />
                    </aside>
                    <img src={DefaultProfile} alt={"colaborador"} />
                    <h3>nome</h3>
                    <p>Fundador</p>
                  </div>
                  <div>
                    <aside>
                      <BotaoEditar />
                    </aside>
                    <img src={DefaultProfile} alt={"colaborador"} />
                    <h3>nome</h3>
                    <p>Diretor</p>
                  </div>
                  <div>
                    <aside>
                      <BotaoEditar />
                    </aside>
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

            <div>
              <h1>Animais para adoção</h1>
              <div>
       
                <PerfilAnimal />
              </div>
            </div>
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
      <aside>
        <BotaoEditar />
      </aside>
      <img src={DefaultProfile} alt={"pet"} />
      <h3>Nome do Pet</h3>
      <p>Raça</p>
    </ContainerPerfilAnimal>
  );
}

export default PerfilInstituicao;
