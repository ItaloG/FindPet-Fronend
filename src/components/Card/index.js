import { CardContainer, CardHeader, FotoPerfil, Nome, Icone, Distancia, CardBody } from "./styles";

function Card({foto, nome_instituicao, icone, distancia, banner}) {
    return (
        <CardContainer>
            <CardHeader>
                <div class="dados-container">
                    <FotoPerfil>
                        <div>
                            <img src={foto}/>
                        </div>
                    </FotoPerfil>
                    <Nome>
                        <p>{nome_instituicao}</p>
                    </Nome>
                    <Icone>
                        <img src={icone}/>
                    </Icone>
                </div>
                <div class="distancia-container">
                    <Distancia>
                        <p>{distancia}</p>
                    </Distancia>
                </div>
            </CardHeader>
            <CardBody>
                <img src={banner}/>
            </CardBody>
        </CardContainer>
    );
}

export default Card;
