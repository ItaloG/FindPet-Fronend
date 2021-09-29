import { CardContainer, CardHeader, FotoPerfil, Nome, Icone, Distancia, CardBody } from "./styles";
import DefaultProfilePhoto from '../../assets/default_profile_photo.jpg';
import IconPets from "../../assets/pet_icon.svg";
import Banner1 from "../../assets/banner1.png";

function Card() {
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
                        <p>Instituto Luísa Mell</p>
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
                <img src={Banner1}/>
            </CardBody>
        </CardContainer>
    );
}

export default Card;

