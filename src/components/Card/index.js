import { CardContainer, CardHeader, FotoPerfil, Nome, Icone, Distancia, CardBody } from "./styles";

function Card({foto, nome_instituicao, icone, distancia, banner}) {
    return (
        <CardContainer>
            <CardHeader>
                <div class="dados-container">
                    <FotoPerfil>
                        <div>
                            <img src={foto} alt="perfil"/>
                        </div>
                    </FotoPerfil>
                    <Nome>
                        <p>{nome_instituicao}</p>
                    </Nome>
                    <Icone>
                        <img src={icone} alt="icone"/>
                    </Icone>
                </div>
                <div class="distancia-container">
                    <Distancia>
                        <p>{distancia}</p>
                    </Distancia>
                </div>
            </CardHeader>
            <CardBody>
                <img src={banner} alt="banner"/>
            </CardBody>
        </CardContainer>
    );
}

export default Card;
