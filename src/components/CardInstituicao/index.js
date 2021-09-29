import { CardContainer, CardHeader, FotoPerfil, Nome, Icone, Distancia, CardBody } from "./styles";
import DefaultProfilePhoto from '../../assets/default_profile_photo.jpg';
import IconPets from "../../assets/pet_icon.svg";

function CardInstituicao() {
    return (
        <CardContainer>
            <CardHeader>
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
            </CardHeader>
            <CardBody>
                <p>Rua Fulano Beltrano da Silva, 30</p>
                <p>Bairro Etc, Cidade - UF</p>
            </CardBody>
        </CardContainer>
    );
} 

export default CardInstituicao;