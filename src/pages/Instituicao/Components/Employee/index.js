import { Container } from "./styles";
import DefaultProfilePhoto from "../../../../assets/default_profile_photo.jpg"

function Employee({ nome, cargo, img }) {
  return (
    <Container>
        <img src={img ? img : DefaultProfilePhoto} alt={"Colaborador " + {nome}}/>
        <h3>{nome}</h3>
        <p>{cargo}</p>
    </Container>
  );
}

export default Employee;
