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
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { macaraCell, mascaraCep } from "../../utils";
import { api } from "../../services/api";

function Login() {
  let history = useHistory();

  const [instituicao, setInstituicao] = useState({
    nome: "",
    tipoEstabelecimento: 0,
    cnpj: "",
    email: "",
    senha: "",
    telefone: "",
    celular: "",
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
  });

  console.log(instituicao);

  let [isCadastrando, setIscadastrando] = useState(false);
  let [isInstituicao, setIsInstituicao] = useState(false);
  let [isUsuario, setIsUsuario] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCep = (e) => {
    let cep = e.target.value;
    cep = mascaraCep(cep)
    setInstituicao({ ...instituicao, cep: cep })
  }

  const handleCell = (e) => {
    let cell = e.target.value;
    cell = macaraCell(cell)
    setInstituicao({ ...instituicao, celular: cell })
  }

  useEffect(() => {
    const getEndereco = async (cep) => {
      const dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const endereco = await dados.json();
      setInstituicao({ ...instituicao, logradouro: endereco.logradouro })
    }

    if (instituicao.cep.length === 9) {
      getEndereco(instituicao.cep);
    }

  }, [instituicao.cep])

  const handleInput = (e) => {
    setInstituicao({ ...instituicao, [e.target.id]: e.target.value })
  }

  const handleClose = () => {
    setIscadastrando(false);

  };

  const handleCloseInstituicao = () => {
    setInstituicao({
      nome: "",
      tipoEstabelecimento: 0,
      cnpj: "",
      email: "",
      senha: "",
      telefone: "",
      celular: "",
      cep: "",
      logradouro: "",
      numero: "",
      complemento: "",
    })
    setIsInstituicao(false);
  };

  const handleCloseUsuario = () => {
    setIsUsuario(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const {
        nome,
        tipoEstabelecimento,
        cnpj,
        email,
        senha,
        telefone,
        celular,
        cep,
        logradouro,
        numero,
      } = instituicao

      if (tipoEstabelecimento === 0) {
        return alert("escolha um tipo de estabelecimento primeiro")
      }
      if (!nome || !cnpj || !email || !senha || !cep || !logradouro || !numero) {
        return alert("faltam alguns dados");
      }
      if (!telefone && !celular) {
        return alert("Você precisa informar um telefone ou celular")
      }

      console.log(instituicao);

      const response = await api.post("/cadastro/instituicao", instituicao)

      history.push("/home");

    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  }

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
      <section>
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
      </section>

      {isCadastrando && (
        <Modal title="Cadastrar-se como..." handleClose={handleClose}>
          <Button
            onClick={() => {
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
          <CadastroInstituicoes onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Nome da instituição"
              id="nome"
              value={instituicao.nome}
              handler={handleInput}
            />
            <select id="tipoEstabelecimento" onChange={handleInput}>
              <option value={0}>Tipo de estabelecimento</option>
              <option value={1}>ONG</option>
              <option value={2}>Canil</option>
              <option value={3}>Veterinário</option>
              <option value={4}>Petshop</option>
            </select>
            <Input type="text"
              placeholder="CNPJ"
              id="cnpj"
              value={instituicao.cnpj}
              handler={handleInput} />
            <Input
              type="email"
              placeholder="E-mail"
              id="email"
              value={instituicao.email}
              handler={handleInput} />
            <Input
              type="text"
              placeholder="Senha"
              id="senha"
              value={instituicao.senha}
              handler={handleInput} />
            <Input
              type="text"
              placeholder="Telefone"
              id="telefone"
              value={instituicao.telefone}
              handler={handleInput} />
            <Input
              type="text"
              placeholder="Celular"
              id="celular"
              pattern="\(?\d{2}\) ?9?\d{4}-?\d{4}"
              maxLength="15"
              value={instituicao.celular}
              handler={handleCell} />
            <Input
              type="text"
              placeholder="Cep"
              id="cep"
              pattern="(\d{5})-(\d{3})*"
              value={instituicao.cep}
              handler={handleCep} />
            <Input
              type="text"
              placeholder="Rua / Avenida"
              id="logradouro"
              value={instituicao.logradouro}
              handler={handleInput} />
            <div className="endereco">
              <Input
                type="text"
                placeholder="Número"
                id="numero"
                value={instituicao.numero}
                handler={handleInput} />
              <Input
                type="text"
                placeholder="Complemento"
                id="complemento"
                value={instituicao.complemento}
                handler={handleInput} />
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
