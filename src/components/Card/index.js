import { CardContainer, CardHeader, FotoPerfil, Nome, Icone, Distancia, CardBody } from "./styles";

function Card({foto, nome_instituicao, icone, distancia, banner, handlerVer}) {
    return (
        <CardContainer>
            <CardHeader>
                <div className="dados-container">
                    <FotoPerfil  onClick={handlerVer}>
                        <div>
                            <img src={foto} alt="perfil"/>
                        </div>
                    </FotoPerfil>
                    <Nome  onClick={handlerVer}>
                        <p>{nome_instituicao}</p>
                    </Nome>
                    <Icone>
                        <img src={icone} alt="icone"/>
                    </Icone>
                </div>
                <div className="distancia-container">
                    <Distancia>
                        <p>{distancia + " km"}</p>
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
