import Header from "../../components/Header";
import CardInstituicao from "../../components/CardInstituicao";
import { Body, ContainerCenter, FlexRow } from "../../GlobalStyles";
import { ContainerMapa, ContainerFiltros, Instituicoes } from "./styles";
import IconeFiltro from "../../assets/filtro_icon.svg";
import IconeOrdenacao from "../../assets/ordenacao_icon.svg";
import FotoPadrao from "../../assets/default_profile_photo.jpg";
import IconeOng from "../../assets/ong.png";
import IconePetShop from "../../assets/shop.png";

function PaginaEncontrar() {
    return (
        <Body>
            <Header/>
            <ContainerCenter>
                <FlexRow>
                    <Instituicoes>
                        <ContainerFiltros>
                            <div class="custom-select">
                                <select>
                                    <option value="Instituições próximas de você" selected>Instituições próximas de você</option>
                                    <option value="Escolher localização">Escolher localização</option>
                                </select>
                            </div>
                            <div class="filtro">
                                <img src={IconeFiltro}/>
                                <p>Todas as Instituições</p>
                            </div>
                            <div class="filtro">
                                <img src={IconeOrdenacao}/>
                                <p>Mais próximas primeiro</p>
                            </div>
                        </ContainerFiltros>

                        <CardInstituicao foto={FotoPadrao} nome_instituicao={"ONG A"} icone={IconeOng} rua={"Rua Fulano de Souza"} numero={"1896"} bairro={"Centro"} cidade={"Jandira"} uf={"SP"}/>
                        <CardInstituicao foto={FotoPadrao} nome_instituicao={"Petshop A"} icone={IconePetShop} rua={"Rua Fulano de Souza"} numero={"1896"} bairro={"Centro"} cidade={"Jandira"} uf={"SP"}/>
                        <CardInstituicao foto={FotoPadrao} nome_instituicao={"Petshop B"} icone={IconePetShop} rua={"Rua Fulano de Souza"} numero={"1896"} bairro={"Centro"} cidade={"Jandira"} uf={"SP"}/>
                        <CardInstituicao foto={FotoPadrao} nome_instituicao={"ONG B"} icone={IconeOng} rua={"Rua Fulano de Souza"} numero={"1896"} bairro={"Centro"} cidade={"Jandira"} uf={"SP"}/>
                        <CardInstituicao foto={FotoPadrao} nome_instituicao={"ONG C"} icone={IconeOng} rua={"Rua Fulano de Souza"} numero={"1896"} bairro={"Centro"} cidade={"Jandira"} uf={"SP"}/>
                    </Instituicoes>
                    
                    <ContainerMapa>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0069770610803!2d-46.90513898554384!3d-23.532251466401853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf06acc19183b5%3A0x8744e43adbe4f16c!2sClinica%20Veterin%C3%A1ria%20Nakiri%20Vet!5e0!3m2!1spt-BR!2sbr!4v1632375300906!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy"></iframe>
                    </ContainerMapa>
                </FlexRow>
            </ContainerCenter>
        </Body>
    );
}

export default PaginaEncontrar;