import {  Container  } from "../../GlobalStyles";
import Profile from "../../assets/default_profile_photo.jpg";
import Banner from "../../assets/cat.jpg";


import CardDesaparecidos from "../../components/CardDesaparecidos";
import { ContainerDesaparecidos } from "./styles";

function Desaparecidos() {
  return (
    <Container>
      <main>
        <ContainerDesaparecidos>
          <CardDesaparecidos
            img={Profile}
            banner={Banner}
            nome_animal="Paçoca"
            tipo_animal="Cachorro"
            data_visto="Visto pela última vez: 22/10"
            descricao="Pelo Marros com manchas brancas, usa colera vermelha, orelhas baixas. Caso encontrar, levar para XXXXX"
          />



           <CardDesaparecidos
            img={Profile}
            banner={Banner}
            nome_animal="Nome do animal"
            tipo_animal="Tipo do animal"
            data_visto="Visto pela última vez:"
            descricao="Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua. Ut enim ad minim
                      enim ad minim veniam, quis nostrud exercitation ull 
                      amco laboris nisi u enim ad minim veniam, quis
                         nostrud exercitation ullamco laboris nisi ut
                       enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                       enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."
          />
        </ContainerDesaparecidos>
      </main>
    </Container>
  );
}

export default Desaparecidos;
