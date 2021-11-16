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
}) {
  return (
    <Container>
      <div>
        <aside>
          <EditButton onClick={() => handlerEditar(id)} />
        </aside>
        <aside>
          <DeleteButton onClick={() => handlerExcluir(id)} />
        </aside>
        <img src={img ? img : CampaignExample} alt="" />
      </div>
      <div>
        <h3>{titulo}</h3>
        <p>27/12 às 13:00</p>
      </div>
      <div>
        <p>{descricao}</p>
      </div>
    </Container>
  );
}

export default Campaign;
