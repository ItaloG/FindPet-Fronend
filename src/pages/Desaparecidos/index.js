import { Body, Container, FlexColumn } from "../../GlobalStyles";
import Card from "../../components/Card";
import Slider from "../../assets/banner1.png";
import Profile from "../../assets/default_profile_photo.jpg";
import Banner from "../../assets/cat.jpg";
import Banner2 from "../../assets/banner2.png";
import ImgOng from "../../assets/ong_icon.png";
import ImgShop from "../../assets/petshop_icon.png";
import ImgPata from "../../assets/pata.png";

import CardDesaparecidos from "../../components/CardDesaparecidos";
import { ContainerDesaparecidos } from "./styles";

function Desaparecidos() {
  return (
    <Container>
      <main>
        <ContainerDesaparecidos>
          <CardDesaparecidos
            img={Profile}
            banner={Banner}
            nome_animal="Nome do animal"
            tipo_animal="Tipo do animal"
            data_visto="Data que foi visto"
            descricao="Descrição"
          />
        </ContainerDesaparecidos>
      </main>
    </Container>
  );
}

export default Desaparecidos;
