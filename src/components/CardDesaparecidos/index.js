import {
  Container,
  ImagemDesaparecido,
  Tipo,
  Nome,
  Data,
  Descricao,
  Informacoes,
} from "./styles";
import pet from "../../assets/pet.png";

function CardDesaparecidos({
  nome_animal,
  tipo_animal,
  data_visto,
  descricao,
}) {
  return (
    <Container>
      <ImagemDesaparecido>
          <img src={pet} alt="imagem" />  
      </ImagemDesaparecido>
      <Informacoes>
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
      </Informacoes>
    </Container>
  );
}

export default CardDesaparecidos;
