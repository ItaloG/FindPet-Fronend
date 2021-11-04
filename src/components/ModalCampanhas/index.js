import React from 'react';
import { Banner, Container, Descricao, Footer, IconeDenuncia, IconeFechar, Perfil, Postagem } from './styles';
import FotoCampanha from '../../assets/banner3.png';
import FotoPerfil from '../../assets/default_profile_photo.jpg';


function ModalCampanhas ({handleClose}) {
    return (
        <Container>
            <Banner>
                <div onClick={handleClose}>
                    <IconeFechar/>
                </div>
                <div>
                    <img src={FotoCampanha}/>
                </div>
            </Banner>
            <Descricao>
                <Perfil>
                    <div>
                        <img src={FotoPerfil}/>
                    </div>
                    <div>
                        <h3>Instituto Luísa Mell</h3>
                        <small>qua às 19:32</small>
                    </div>
                </Perfil>
                <Postagem>
                    <h3>Título da Campanha</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <p><span>Data:</span></p>
                    <p><span>Horário:</span></p>
                    <p><span>Local:</span></p>
                </Postagem>
                <Footer>
                    <IconeDenuncia/>
                </Footer>
            </Descricao>
        </Container>
    );
}

export default ModalCampanhas;