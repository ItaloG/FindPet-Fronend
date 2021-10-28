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
  ContainerPerfilAnimal,
  ContainerServiços,
  StyledAiOutlinePlusCircle,
  ApoioContainer,
  DescricaoContainer,
  AnimaisContainer,
  ContainerPerfilColaborador,
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
              <div>
                <h1>Instituto Luísa Mell</h1>
                <ContainerServiços>
                  <Servico />
                  <Servico />
                  <Servico />
                  <StyledAiOutlinePlusCircle />
                </ContainerServiços>
              </div>
              <StyledHeart style={{ display: "none" }} />
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
                  <p>Suas avaliações (1.448)</p>
                </div>
              </div>
              <div style={{ display: "none" }}>
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
                <div><span>+</span> Novo Colaborador</div>
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
            <ApoioContainer>
              <h1>Doações</h1>
              <h2>O que você precisa?</h2>
              <div>
                <div>Voluntários</div>
                <div>Materiais</div>
              </div>
            </ApoioContainer>
            <DescricaoContainer>
              <h1>Descrição</h1>
              <textarea
                maxLength={150}
                placeholder="Escreva aqui uma breve descrição sobre sua instituição"
              />
              <button>Salvar</button>
            </DescricaoContainer>
            <CampanhasContainer>
              <div>
                <h1>Campanhas</h1>
                <div><span>+</span>Nova Camapnha</div>
              </div>
              <div>
                <div>
                  <aside>
                    <BotaoEditar />
                  </aside>
                  <img src={DefaultBanner} alt="campanhas" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
                <div>
                  <aside>
                    <BotaoEditar />
                  </aside>
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
                <div><span>+</span> Novo Animal</div>
              </div>
              <div>
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
      <aside>
        <BotaoEditar />
      </aside>
      <img src={DefaultProfile} alt={"pet"} />
      <h3>Nome do Pet</h3>
      <p>Raça</p>
    </ContainerPerfilAnimal>
  );
}

function PerfilColaborador() {
  return (
    <ContainerPerfilColaborador>
      <aside>
        <BotaoEditar />
      </aside>
      <img src={DefaultProfile} alt={"colaborador"} />
      <h3>nome</h3>
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

export default PerfilInstituicao;
