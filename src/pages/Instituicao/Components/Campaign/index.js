import { Container } from "./styles";
import CampaignExample from "../../../../assets/banner3.png";
import EditButton from "../EditButton";
import DeleteButton from "../DeleteButton";

function Campaign({
  id,
  titulo,
  descricao,
  handlerEditar,
  handlerExcluir,
  img,
  horaInicio,
  dataInicio
}) {
  return (
    <Container>
      <div>
        <aside onClick={() => handlerEditar(id)}>
          <EditButton />
        </aside>
        <aside onClick={() => handlerExcluir(id)}>
          <DeleteButton />
        </aside>
        <img src={img ? img : CampaignExample} alt="" />
      </div>
      <div>
        <h3>{titulo}</h3>
        <p>{dataInicio.substr(8, 2) + "/" + dataInicio.substr(5, 2)} às {horaInicio.substr(0, 5)}</p>
      </div>
      <div>
        <p>{descricao}</p>
      </div>
    </Container>
  );
}

export default Campaign;
