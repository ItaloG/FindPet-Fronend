import Input from "../../components/Input";
import { Container, FormContainer,Button } from "./styles";
import fundo from "../../assets/dog.png"
import Modal from "../../components/Modal";
import { useState } from "react";

function Login() {

    let [isCadastrando, setIscadastrando] = useState(false);

    const handleClose = () => {
        setIscadastrando(false);
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
                <img src={fundo} alt="cachoro"/>
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
                <Modal className="modalEscolha" title="Cadastrar-se como..." handleClose={handleClose}>
                    <Button>Usuário</Button>
                    <Button>Instituição</Button>
                </Modal>
            )}
        </Container>
    )
};

export default Login;