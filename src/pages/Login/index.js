import Input from "../../components/Input";
import { Container, FormContainer, Button,CadastroInstituicoes } from "./styles";
import fundo from "../../assets/dog.png"
import Modal from "../../components/Modal";
import { useState } from "react";

function Login() {

    let [isCadastrando, setIscadastrando] = useState(false);
    let [isInstituicao, setIsInstituicao] = useState(false);

    const handleClose = () => {
        setIscadastrando(false);
    }

    const handleCloseInstituicao = () => {
        setIsInstituicao(false);
    }

    return (
        <Container>
            <main>
                <div className="titulo">
                    <h1> <span>Find</span> Pet</h1>
                </div>
                <div className="texto">
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <img src={fundo} alt="cachoro" />
            </main>
            <div>
                <FormContainer>
                    <Input placeholder="E-mail" type="email" id="email" required />
                    <Input placeholder="Senha" type="password" id="senha" required />
                    <div className="check">
                        <div>
                            <input type="checkbox" placeholder="teste" className="caixa" />
                            <p> lembrar-me </p>
                        </div>
                        <p>esqueceu a senha?</p>
                    </div>
                    <button className="btnEntrar">Entrar</button>
                    <hr />
                    <button className="btnCadastrar" onClick={(e) => {
                        e.preventDefault();
                        setIscadastrando(true)
                    }}>Cadastrar-se</button>
                </FormContainer>
            </div>

            {isCadastrando && (
                <Modal title="Cadastrar-se como..." handleClose={handleClose}>
                    <Button>Usuário</Button>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        setIscadastrando(false)
                        setIsInstituicao(true);
                    }}>Instituição</Button>
                </Modal>
            )}

            {isInstituicao && (
                <Modal title="Sou uma instituição" handleClose={handleCloseInstituicao}>
                    <CadastroInstituicoes>
                        <Input type="text" placeholder='Nome da instituição' id="nomeInstituicao" />
                        <select>
                            <option >Tipo de estabelecimento</option>
                            <option >ONG</option>
                            <option >Petshop</option>
                            <option >Veterinário</option>
                            <option >Canil</option>
                        </select>
                        <Input type="text" placeholder='CNPJ' id="cnpj" />
                        <Input type="email" placeholder='E-mail' id="email" />
                        <Input type="text" placeholder='Senha' id="senha" />
                        <Input type="text" placeholder='Telefone' id="fone" />
                        <Input type="text" placeholder='Celular' id="cel" />
                        <Input type="text" placeholder='Endereço' id="endereco" />
                        <div className="endereco">
                            <Input type="text" placeholder='Número' id="numero" />
                            <Input type="text" placeholder='Complemento' id="complemento" />
                        </div>
                        <button>Cadastrar-se</button>
                    </CadastroInstituicoes>
                </Modal>
            )}

        </Container>
    )
};

export default Login;