import { Container } from "./styles";
import DefaultPetPhoto from "../../../../assets/default-pet-photo.jpg"
import EditButton from "../EditButton";
import DeleteButton from "../DeleteButton";
import { useHistory } from "react-router";

function Pet({ id, nome, raca, handlerEditar, handlerExcluir, img }) {
  let history = useHistory();
  
  return (
    <Container>
        <aside onClick={() => handlerEditar(id)}>
            <EditButton />
        </aside>
        <aside onClick={() => handlerExcluir(id)}>
            <DeleteButton />
        </aside>
        <img src={img ? img : DefaultPetPhoto} alt={"Pet: " + {nome}} onClick={() => history.push(`/animal/${id}`)}/>
        <h3>{nome}</h3>
        <p>{raca}</p>
    </Container>
  );
}

export default Pet;