import { Body, Container } from "../../GlobalStyles";
import Card from "../../components/Card";
import Slider from "../../assets/banner1.png";
import Profile from "../../assets/default_profile_photo.jpg";
import Banner from "../../assets/cat.jpg";
import Banner2 from "../../assets/banner2.png";

import ImgOng from "../../assets/ong_icon.png";
import ImgShop from "../../assets/petshop_icon.png";
import ImgPata from "../../assets/pata.png";

import { ContainerFavoritos } from "./styles";

function Favoritos() {
  return (
    <Container>
      <main>
        <ContainerFavoritos>
          <Card
            img={Profile}
            banner={Banner}
            instituicao="Nome da instituição"
            titulo="Nome do animal"
            IconPets={ImgPata}
          />
          <Card
            img={Profile}
            banner={Slider}
            titulo="Nome do Petshop"
            IconPets={ImgShop}
          />
          <Card
            img={Profile}
            banner={Banner2}
            titulo="Nome da ONG"
            IconPets={ImgOng}
          />
        </ContainerFavoritos>
      </main>
    </Container>
  );
}

export default Favoritos;
