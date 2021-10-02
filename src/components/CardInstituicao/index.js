import { CardContainer, CardHeader, FotoPerfil, Nome, Icone, CardBody } from "./styles";

function CardInstituicao({foto, nome_instituicao, icone, rua, numero, bairro, cidade, uf}) {
    return (
        <CardContainer>
            <CardHeader>
                <FotoPerfil>
                    <div>
                        <img src={foto} alt="perfil"/>
                    </div>
                </FotoPerfil>
                <Nome>
                    <p>{nome_instituicao}</p>
                </Nome>
                <Icone>
                    <img src={icone} alt="instituicao"/>
                </Icone>
            </CardHeader>
            <CardBody>
                <p>{rua}, {numero}</p>
                <p>{bairro}, {cidade} - {uf}</p>
            </CardBody>
        </CardContainer>
    );
} 

export default CardInstituicao;