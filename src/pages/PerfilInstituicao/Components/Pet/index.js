import { Container } from "./styles";
import DefaultPetPhoto from "../../../../assets/default-pet-photo.jpg"
import EditButton from "../EditButton";
import DeleteButton from "../DeleteButton";

function Pet({ id, nome, raca, handlerEditar, handlerExcluir, img }) {
  return (
    <Container>
        <aside onClick={() => handlerEditar(id)}>
            <EditButton />
        </aside>
        <aside onClick={() => handlerExcluir(id)}>
            <DeleteButton />
        </aside>
        <img src={img ? img : DefaultPetPhoto} alt={"Pet: " + {nome}}/>
        <h3>{nome}</h3>
        <p>{raca}</p>
    </Container>
  );
}

export default Pet;