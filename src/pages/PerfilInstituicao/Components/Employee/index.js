import { Container } from "./styles";
import DefaultProfilePhoto from "../../../../assets/default_profile_photo.jpg"
import EditButton from "../EditButton";

function Employee({ id, nome, cargo, handler, img }) {
  return (
    <Container>
        <aside>
            <EditButton onClick={() => handler(id)}/>
        </aside>
        <img src={img ? img : DefaultProfilePhoto} alt={"Colaborador " + {nome}}/>
        <h3>{nome}</h3>
        <p>{cargo}</p>
    </Container>
  );
}

export default Employee;
