import Input from "../../components/Input";
import {
  Container,
  FormContainer,
  Button,
  CadastroInstituicoes,
  CadastroUsuario,
} from "./styles";
import fundo from "../../assets/dog.png";
import Modal from "../../components/Modal";
import { useState } from "react";
import { useHistory } from "react-router";

function Login() {
  let history = useHistory();

  let [isCadastrando, setIscadastrando] = useState(false);
  let [isInstituicao, setIsInstituicao] = useState(false);
  let [isUsuario, setIsUsuario] = useState(false);

  const handleClose = () => {
    setIscadastrando(false);
  };

  const handleCloseInstituicao = () => {
    setIsInstituicao(false);
  };

  const handleCloseUsuario = () => {
    setIsUsuario(false);
  };

  return (
    <Container>
      <main>
        <div className="titulo">
          <h1>
            {" "}
            <span>Find</span> Pet
          </h1>
        </div>
        <div className="texto">
          <p>
            {" "}
            Te ajudamos a encontrar e ajudar ONG's, petshops, veterinarios, canis
            e animais desaparecidos{" "}
          </p>
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
          <button
            className="btnEntrar"
            onClick={(e) => {
                e.preventDefault();
                history.push("/home");
            }}
          >
            Entrar
          </button>
          <hr />

          <button
            className="btnCadastrar"
            onClick={(e) => {
              e.preventDefault();
              setIscadastrando(true);
            }}
          >
            Cadastrar-se
          </button>
        </FormContainer>
      </div>

      {isCadastrando && (
        <Modal title="Cadastrar-se como..." handleClose={handleClose}>
          <Button
            onClick={() => {
              console.log("354654654");
              setIsUsuario(true);
            }}
          >
            Usuário
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setIscadastrando(false);
              setIsInstituicao(true);
            }}
          >
            Instituição
          </Button>
        </Modal>
      )}

      {isInstituicao && (
        <Modal title="Sou uma instituição" handleClose={handleCloseInstituicao}>
          <CadastroInstituicoes>
            <Input
              type="text"
              placeholder="Nome da instituição"
              id="nomeInstituicao"
            />
            <select>
              <option>Tipo de estabelecimento</option>
              <option>ONG</option>
              <option>Petshop</option>
              <option>Veterinário</option>
              <option>Canil</option>
            </select>
            <Input type="text" placeholder="CNPJ" id="cnpj" />
            <Input type="email" placeholder="E-mail" id="email" />
            <Input type="text" placeholder="Senha" id="senha" />
            <Input type="text" placeholder="Telefone" id="fone" />
            <Input type="text" placeholder="Celular" id="cel" />
            <Input type="text" placeholder="Endereço" id="endereco" />
            <div className="endereco">
              <Input type="text" placeholder="Número" id="numero" />
              <Input type="text" placeholder="Complemento" id="complemento" />
            </div>
            <button>Cadastrar-se</button>
          </CadastroInstituicoes>
        </Modal>
      )}

      {isUsuario && (
        <Modal title="Usuário" handleClose={handleCloseUsuario}>
          <CadastroUsuario>
            <Input placeholder="Nome" id="nomeUsuario" />
            <Input placeholder="E-mail" id="email" />
            <Input placeholder="Senha" id="senha" />
            <Input placeholder="Telefone" id="fone" />
            <Input placeholder="Celular" id="cel" />
            <Input placeholder="Rua/Avenida" id="endereco" />
            <div className="endereco">
              <Input placeholder="Número" id="numero" />
              <Input placeholder="Complemento" id="complemento" />
            </div>
            <button className="bttn">Cadastrar-se</button>
          </CadastroUsuario>
        </Modal>
      )}
    </Container>
  );
}

export default Login;
