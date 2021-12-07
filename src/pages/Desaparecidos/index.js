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
            nome_animal="Nome da instituição"
            titulo="Nome do animal"
            IconPets={ImgPata}
          />
        </ContainerDesaparecidos>
      </main>
    </Container>
  );
}

export default Desaparecidos;
