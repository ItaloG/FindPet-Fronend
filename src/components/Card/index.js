import { CardContainer, CardHeader, FotoPerfil, Nome, Icone, Distancia, CardBody, Home } from "./styles";
import DefaultProfilePhoto from '../../assets/default_profile_photo.jpg';
import IconPets from "../../assets/pet_icon.svg";
import cat from "../../assets/cat.jpg";

function Card({img, icone, distancia, nome, banner}) {
    return (
        <CardContainer>
            <CardHeader>
                <div class="dados-container">
                    <FotoPerfil>
                        <div>
                            <img src={DefaultProfilePhoto}/>
                        </div>
                    </FotoPerfil>
                    <Nome>
                        <p>Nome do animal</p>
                    </Nome>
                    <Icone>
                        <img src={IconPets}/>
                    </Icone>
                </div>
                <div class="distancia-container">
                    <Distancia>
                        <p>Há 1000km</p>
                    </Distancia>
                </div>
            </CardHeader>
            <CardBody>
                <img src={cat}/>
            </CardBody>
        </CardContainer>
    );
}
  

export default Card;
