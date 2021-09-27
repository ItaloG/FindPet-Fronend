import Header from "../../components/Header";
import { Body, Container } from "../../GlobalStyles";
import { ContainerMapa } from "./styles";

function PaginaEncontrar() {
    return (
        <Body>
            <Header/>
            <Container>
                <ContainerMapa>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0069770610803!2d-46.90513898554384!3d-23.532251466401853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf06acc19183b5%3A0x8744e43adbe4f16c!2sClinica%20Veterin%C3%A1ria%20Nakiri%20Vet!5e0!3m2!1spt-BR!2sbr!4v1632375300906!5m2!1spt-BR!2sbr" width="500" height="500" allowfullscreen="" loading="lazy"></iframe>
                </ContainerMapa>
            </Container>
        </Body>
    );
}

export default PaginaEncontrar;