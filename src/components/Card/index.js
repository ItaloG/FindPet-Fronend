import {
  CardContainer,
  CardHeader,
  FotoPerfil,
  Nome,
  Icone,
  Distancia,
  CardBody,
  Home,
} from "./styles";
import DefaultProfilePhoto from "../../assets/default_profile_photo.jpg";
import IconPets from "../../assets/pet_icon.svg";
import cat from "../../assets/cat.jpg";
import Slider from "../../components/Slider";

function Card({ img, icon, instituicao , distancia, titulo, banner, slider, IconPets }) {
  return (
    <CardContainer>
      <CardHeader>
        <div class="dados-container">
          <FotoPerfil>
            <div>
              <img src={img} />
            </div>
          </FotoPerfil>
          <Nome>
            <p>{titulo}</p>
            <h5>{instituicao}</h5>
          </Nome>
          <Icone>
            <img src={IconPets} />
          </Icone>
        </div>
        <div class="distancia-container">
          <Distancia>
            <p>Há 1000km</p>
          </Distancia>
        </div>
      </CardHeader>
      <CardBody>
      <img src={banner} />
      </CardBody>
    </CardContainer>
  );
}

export default Card;
