import { Container } from "./styles";
import DefaultPetPhoto from "../../../../assets/default-pet-photo.jpg"
import EditButton from "../EditButton";

function Pet({ id, nome, raca, handler, img }) {
  return (
    <Container>
        <aside>
            <EditButton onClick={() => handler(id)}/>
        </aside>
        <img src={img ? img : DefaultPetPhoto} alt={"Pet: " + {nome}}/>
        <h3>{nome}</h3>
        <p>{raca}</p>
    </Container>
  );
}

export default Pet;