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
import { macaraCell, mascaraCep, mascaraTell } from "../../utils";
import { api } from "../../services/api";
import SpinnerLoading from "../../components/SpinnerLoading/indes";

function Login() {
  let history = useHistory();

  const [login, setLogin] = useState({
    email: "",
    senha: "",
  });

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

  const [usuario, setUsuario] = useState({
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    telefone: "",
    celular: "",
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
  });

  let [isCadastrando, setIscadastrando] = useState(false);
  let [isInstituicao, setIsInstituicao] = useState(false);
  let [isUsuario, setIsUsuario] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCepInstituicao = (e) => {
    let cep = e.target.value;
    cep = mascaraCep(cep);
    setInstituicao({ ...instituicao, cep: cep });
  };

  const handleCellInstuicao = (e) => {
    let cell = e.target.value;
    cell = macaraCell(cell);
    setInstituicao({ ...instituicao, celular: cell });
  };

  const handleTellInstuicao = (e) => {
    let tell = e.target.value;
    tell = mascaraTell(tell);
    setInstituicao({ ...instituicao, telefone: tell });
  };

  const handleCepUsuario = (e) => {
    let cep = e.target.value;
    cep = mascaraCep(cep);
    setUsuario({ ...usuario, cep: cep });
  };

  const handleCellUsuario = (e) => {
    let cell = e.target.value;
    cell = macaraCell(cell);
    setUsuario({ ...usuario, celular: cell });
  };

  const handleTellUsuario = (e) => {
    let tell = e.target.value;
    tell = mascaraTell(tell);
    setUsuario({ ...usuario, telefone: tell });
  };

  useEffect(() => {
    const getEndereco = async (cep) => {
      const dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const endereco = await dados.json();
      setInstituicao({ ...instituicao, logradouro: endereco.logradouro });
    };

    if (instituicao.cep.length === 9) {
      getEndereco(instituicao.cep);
    }
  }, [instituicao.cep]);

  useEffect(() => {
    const getEndereco = async (cep) => {
      const dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const endereco = await dados.json();
      setUsuario({ ...usuario, logradouro: endereco.logradouro });
    };

    if (usuario.cep.length === 9) {
      getEndereco(usuario.cep);
    }
  }, [usuario.cep]);

  const handleInputInstituicao = (e) => {
    setInstituicao({ ...instituicao, [e.target.id]: e.target.value });
  };

  const handleInputUsuario = (e) => {
    setUsuario({ ...usuario, [e.target.id]: e.target.value });
  };

  const handleInputLogin = (e) => {
    setLogin({ ...login, [e.target.id]: e.target.value });
  };

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
    });
    setIsInstituicao(false);
  };

  const handleCloseUsuario = () => {
    setUsuario({
      nome: "",
      cpf: "",
      email: "",
      senha: "",
      telefone: "",
      celular: "",
      cep: "",
      logradouro: "",
      numero: "",
      complemento: "",
    });
    setIsUsuario(false);
  };

  const handleSubmitInstituicao = async (e) => {
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
      } = instituicao;

      if (tipoEstabelecimento === 0) {
        return alert("escolha um tipo de estabelecimento primeiro");
      }
      if (
        !nome ||
        !cnpj ||
        !email ||
        !senha ||
        !cep ||
        !logradouro ||
        !numero
      ) {
        return alert("faltam alguns dados");
      }
      if (!telefone && !celular) {
        return alert("Você precisa informar um telefone ou celular");
      }

      const response = await api.post("/cadastro/instituicao", instituicao);
      console.log(response.data);

      return history.push("/home");
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitUsuario = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const {
        nome,
        cpf,
        email,
        senha,
        telefone,
        celular,
        cep,
        logradouro,
        numero,
      } = usuario;

      if (!nome || !cpf || !email || !senha || !cep || !logradouro || !numero) {
        return alert("faltam alguns dados");
      }
      if (!telefone && !celular) {
        return alert("Você precisa informar um telefone ou celular");
      }

      const response = await api.post("/cadastro/usuario", usuario);
      console.log(response.data);

      return history.push("/home");
    } catch (error) {
      console.error(error);
      alert(error.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, senha } = login;

    console.log(login);

    if (!email || !senha) {
      console.log("caiu aqui");
      return alert("Você precisa informar um email e senha.");
    }

    setIsLoading(true);

    try {
      const response = await api.post("/login/usuario", login);

      localStorage.setItem("@user", JSON.stringify(response.data));

      setIsLoading(false);

      return history.push("/home");
    } catch (error) {
      console.log("caiu aqui");
      console.error(error);
      setIsLoading(false);
      alert("Usuário e/ou senha incorretos");
    }
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
            Te ajudamos a encontrar e ajudar ONG's, petshops, veterinarios,
            canis e animais desaparecidos{" "}
          </p>
        </div>
        <img src={fundo} alt="cachoro" />
      </main>
      <section>
        <FormContainer onSubmit={handleLogin}>
          <Input
            placeholder="E-mail"
            handler={handleInputLogin}
            type="email"
            id="email"
            required
          />
          <Input
            placeholder="Senha"
            handler={handleInputLogin}
            type="password"
            id="senha"
            required
          />
          <div className="check">
            <div>
              <input type="checkbox" placeholder="teste" className="caixa" />
              <p> lembrar-me </p>
            </div>
            <p>esqueceu a senha?</p>
          </div>
          {isLoading ? (
            <SpinnerLoading />
          ) : (
            <button className="btnEntrar">Entrar</button>
          )}

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
              setIscadastrando(false);
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
          <CadastroInstituicoes onSubmit={handleSubmitInstituicao}>
            <Input
              type="text"
              placeholder="Nome da instituição"
              id="nome"
              value={instituicao.nome}
              handler={handleInputInstituicao}
            />
            <select id="tipoEstabelecimento" onChange={handleInputInstituicao}>
              <option value={0}>Tipo de estabelecimento</option>
              <option value={1}>ONG</option>
              <option value={2}>Canil</option>
              <option value={3}>Veterinário</option>
              <option value={4}>Petshop</option>
            </select>
            <Input
              type="text"
              placeholder="CNPJ"
              id="cnpj"
              value={instituicao.cnpj}
              handler={handleInputInstituicao}
            />
            <Input
              type="email"
              placeholder="E-mail"
              id="email"
              value={instituicao.email}
              handler={handleInputInstituicao}
            />
            <Input
              type="text"
              placeholder="Senha"
              id="senha"
              value={instituicao.senha}
              handler={handleInputInstituicao}
            />
            <Input
              type="text"
              placeholder="Telefone"
              pattern="(\d{4})-(\d{4})"
              maxLength="9"
              id="telefone"
              value={instituicao.telefone}
              handler={handleTellInstuicao}
            />
            <Input
              type="text"
              placeholder="Celular"
              id="celular"
              pattern="\(?\d{2}\) ?9?\d{4}-?\d{4}"
              maxLength="15"
              value={instituicao.celular}
              handler={handleCellInstuicao}
            />
            <Input
              type="text"
              placeholder="CEP"
              id="cep"
              pattern="(\d{5})-(\d{3})*"
              value={instituicao.cep}
              handler={handleCepInstituicao}
            />
            <Input
              type="text"
              placeholder="Rua / Avenida"
              id="logradouro"
              value={instituicao.logradouro}
              handler={handleInputInstituicao}
            />
            <div className="endereco">
              <Input
                type="text"
                placeholder="Número"
                id="numero"
                value={instituicao.numero}
                handler={handleInputInstituicao}
              />
              <Input
                type="text"
                placeholder="Complemento"
                id="complemento"
                value={instituicao.complemento}
                handler={handleInputInstituicao}
              />
            </div>
            {isLoading ? <SpinnerLoading /> : <button>Cadastrar-se</button>}
          </CadastroInstituicoes>
        </Modal>
      )}

      {isUsuario && (
        <Modal title="Usuário" handleClose={handleCloseUsuario}>
          <CadastroUsuario onSubmit={handleSubmitUsuario}>
            <Input
              type="text"
              placeholder="Nome"
              id="nome"
              value={usuario.nome}
              handler={handleInputUsuario}
            />
            <Input
              type="text"
              placeholder="CPF"
              id="cpf"
              value={usuario.cpf}
              handler={handleInputUsuario}
            />
            <Input
              type="email"
              placeholder="E-mail"
              id="email"
              value={usuario.email}
              handler={handleInputUsuario}
            />
            <Input
              type="text"
              placeholder="Senha"
              id="senha"
              value={usuario.senha}
              handler={handleInputUsuario}
            />
            <Input
              type="text"
              placeholder="Telefone"
              id="telefone"
              value={usuario.telefone}
              handler={handleTellUsuario}
            />
            <Input
              type="text"
              placeholder="Celular"
              id="celular"
              pattern="\(?\d{2}\) ?9?\d{4}-?\d{4}"
              maxLength="15"
              value={usuario.celular}
              handler={handleCellUsuario}
            />
            <Input
              type="text"
              placeholder="CEP"
              id="cep"
              pattern="(\d{5})-(\d{3})*"
              value={usuario.cep}
              handler={handleCepUsuario}
            />
            <Input
              type="text"
              placeholder="Rua/Avenida"
              id="logradouro"
              value={usuario.logradouro}
              handler={handleInputUsuario}
            />
            <div className="endereco">
              <Input
                type="text"
                placeholder="Número"
                id="numero"
                value={usuario.numero}
                handler={handleInputUsuario}
              />
              <Input
                type="text"
                placeholder="Complemento"
                id="complemento"
                value={usuario.complemento}
                handler={handleInputUsuario}
              />
            </div>
            {isLoading ? <SpinnerLoading /> : <button>Cadastrar-se</button>}
          </CadastroUsuario>
        </Modal>
      )}
    </Container>
  );
}

export default Login;
