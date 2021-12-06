
import { Container } from "../../GlobalStyles";
import {
  Banner,
  Profile,
  Section,
  StyledMdEmail,
  StyledFaPhoneAlt,
  StyledMdPhoneIphone,
  StyledFaMapMarkerAlt,
} from "./styles";

import DefaultBanner from "../../assets/default_banner.png";
import DefaultProfile from "../../assets/default_profile_photo.jpg";
import Card from "../../components/Card";
import ImgPata from "../../assets/pata.png"

function PerfilUsuario() {
  return (
    <Container>
        <Profile>
          <Banner>
            <img src={DefaultBanner} alt="banner" />
          </Banner>
          <aside>
              <img src={DefaultProfile} alt="profile" />
              <div>
                <h1>Nome usuário</h1>
              </div>  
              <button className="botaoAddAnimalDesaparecido">
                <p> + Animal Desaparecido</p>
              </button>   
          </aside>
        </Profile>
        <Section>
          <aside>
            <div className="contatos">
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
            <div className="favoritos">
          <p>Favoritos</p>
          <Card img={Profile} banner={Banner} instituicao="Nome da instituição" titulo="Nome do animal" IconPets={ImgPata}/>

        </div>
          </aside>
          
        </Section>
        
    </Container>
    
  );
}

export default PerfilUsuario;
