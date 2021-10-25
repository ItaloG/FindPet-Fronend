import { Body, Container } from "../../GlobalStyles";
import { ContainerCenter, Banner, Profile, Section, StyledStart, StyledHeart, StyledRiArrowDownSLine } from "./styles";
import OngIcon from "../../assets/ong_icon.png";
import EstrelaIcon from "../../assets/estrela.svg";
import ApoiarIcon from "../../assets/apoiar.svg";
import DefaultBanner from "../../assets/default_banner.png";
import DefaultProfile from "../../assets/default_profile_photo.jpg";
import Footer from "../../components/Footer";

function PerfilInstituicao() {

    return (
        <Container>
            <main>
                <Profile>
                    <Banner>
                        <img src={DefaultBanner} />
                    </Banner>
                    <aside>
                        <div>
                            <img src={DefaultProfile} />
                            <h1>Instituto Luísa Mell</h1>
                            <StyledHeart />
                        </div>
                        <div>
                            <div className="avaliacoes">
                                <StyledStart />
                                <StyledStart />
                                <StyledStart />
                                <StyledStart />
                                <StyledStart />
                                <span>4.8</span>
                                <p>Avalie essa Instituição {'>'}</p>
                            </div>
                            <div >
                                <img src={ApoiarIcon} />
                                <div>
                                    Apoiar <StyledRiArrowDownSLine/>
                                </div>
                            </div>
                        </div>
                    </aside>
                </Profile>
                <Section >
                    <div>
                        <h1>Contato</h1>
                        <div><img/>contato@instituitoluisamell.com</div>
                        <div><img/>Rua Etc e Tal, nº2365 - 06631-000 SP</div>
                        <div><img/>(11) 4707-0000</div>
                        <div><img/>(11) 98265-0000</div>
                    </div>
                    <div></div>
                </Section>
            </main>
            <Footer />
        </Container>
        // <Body>
        //     <ContainerCenter>
        //         <div className="container-perfil-instituicao">
        //             <div className="capa">
        //                 <img src="#"/>
        //             </div>
        //             <div className="container-dados">
        //                 <div className="barra-de-dados">
        //                     <div className="box box-foto">
        //                         <div className="foto-perfil">
        //                             <img src="#"/>
        //                         </div>
        //                     </div>
        //                     <div className="box box-lg box-titulo">
        //                         <h1>Nome da ONG</h1>
        //                         <img src={OngIcon}/>
        //                     </div>
        //                     <div className="box box-avaliacao">
        //                         <p>3.0</p>
        //                         <img src={EstrelaIcon} className="estrela-completa"/>
        //                         <img src={EstrelaIcon} className="estrela-completa"/>
        //                         <img src={EstrelaIcon} className="estrela-completa"/>
        //                         <img src={EstrelaIcon} className="estrela-vazia"/>
        //                         <img src={EstrelaIcon} className="estrela-vazia"/>
        //                     </div>
        //                     <div className="box box-lg box-apoiar">
        //                         <img src={ApoiarIcon}/>
        //                         <p>Apoiar</p>
        //                     </div>
        //                 </div>

        //             </div>
        //         </div>
        //     </ContainerCenter>
        // </Body>
    );
}

export default PerfilInstituicao;