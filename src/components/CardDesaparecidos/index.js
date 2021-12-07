import { Container, ImagemDesaparecido, Tipo, Nome, Data, Descricao} from "./styles";
import pet from "../../assets/pet.png";

function CardDesaparecidos({nome_animal, tipo_animal, data_visto, descricao}) {
    return (
        <Container>
            <div className="imagem">
                    <ImagemDesaparecido>
                        <div>
                            <img src={pet} alt="imagem"/>
                        </div>
                    </ImagemDesaparecido>
            <div className="informacoes">        
                    <Nome>
                        <p>{nome_animal}</p>
                    </Nome>
                    <Tipo>
                        <p>{tipo_animal}</p>
                    </Tipo>
                    <Data>
                        <p>{data_visto}</p>
                    </Data>
                    <Descricao>
                        <p>{descricao}</p>
                    </Descricao>
             </div>
            </div>
        </Container>
    );
} 

export default CardDesaparecidos;