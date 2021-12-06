import { Container } from "./styles";

function SearchResult({fotoPerfil, nome, tipoInst}) {
 return(
     <Container>
         <div>
             <img src={fotoPerfil} alt="" />
         </div>
         <p>{nome}</p>
         <span>{tipoInst}</span>
     </Container>
 );
}

export default SearchResult;