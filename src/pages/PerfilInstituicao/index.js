import { Body } from "../../GlobalStyles";
import { ContainerCenter } from "./styles";
import OngIcon from "../../assets/ong.png";
import EstrelaIcon from "../../assets/estrela.svg";
import ApoiarIcon from "../../assets/apoiar.svg";

function PerfilInstituicao() {
    return (
        <Body>
            <ContainerCenter>
                <div className="container-perfil-instituicao">
                    <div className="capa">
                        <img src="#"/>
                    </div>
                    <div className="container-dados">
                        <div className="barra-de-dados">
                            <div className="box box-foto">
                                <div className="foto-perfil">
                                    <img src="#"/>
                                </div>
                            </div>
                            <div className="box box-lg box-titulo">
                                <h1>Nome da ONG</h1>
                                <img src={OngIcon}/>
                            </div>
                            <div className="box box-avaliacao">
                                <p>3.0</p>
                                <img src={EstrelaIcon} className="estrela-completa"/>
                                <img src={EstrelaIcon} className="estrela-completa"/>
                                <img src={EstrelaIcon} className="estrela-completa"/>
                                <img src={EstrelaIcon} className="estrela-vazia"/>
                                <img src={EstrelaIcon} className="estrela-vazia"/>
                            </div>
                            <div className="box box-lg box-apoiar">
                                <img src={ApoiarIcon}/>
                                <p>Apoiar</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </ContainerCenter>
        </Body>
    );
}

export default PerfilInstituicao;