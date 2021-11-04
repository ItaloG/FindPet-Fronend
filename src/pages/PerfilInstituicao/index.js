import { Container } from "../../GlobalStyles";
import {
  Banner,
  Profile,
  Section,
  StyledStart,
  StyledHeart,
  StyledRiArrowDownSLine,
  StyledMdEmail,
  StyledFaPhoneAlt,
  StyledMdPhoneIphone,
  StyledFaMapMarkerAlt,
  Colaboradores,
  CampanhasContainer,
  ContainerPerfilAnimal,
  ContainerServicos,
  StyledAiOutlinePlusCircle,
  ApoioContainer,
  DescricaoContainer,
  AnimaisContainer,
  ContainerPerfilColaborador,
  StyledMdAddAPhoto,
  FotoPerfil,
  ContainerTodosServicos,
  ContainerInfo,
  CadsatroColaborador,
  CadastroCampanha,
} from "./styles";

import ApoiarIcon from "../../assets/apoiar.svg";
import DefaultBanner from "../../assets/default_banner.png";
import DefaultProfile from "../../assets/default_profile_photo.jpg";
import Footer from "../../components/Footer";
import BotaoEditar from "../../components/BotaoEditar";
import { useEffect, useRef, useState } from "react";
import { api } from "../../services/api";
import Modal from "../../components/Modal";
import { useParams } from "react-router";
import Input from "../../components/Input";

function PerfilInstituicao() {

  const { instituicaoId } = useParams();
  const [instituicao, setInstituicao] = useState([]);
  const [InstituicaoServicos, setInstituicaoServicos] = useState([]);
  const [instituicaoEndereco, setInstituicaoEndereco] = useState([]);
  const [instituicaoTelefones, setInstituicaoTelefones] = useState([]);

  const [colaboradores, setColaboradores] = useState([]);
  const [colaborador, setColaborador] = useState({
    nome: "",
    cpf: "",
    cargo: "",
    diaEntrada: "",
  });
  const [colaboradorImage, setColaboradorImage] = useState(null);
  const imageRefColaborador = useRef();

  const [servicos, setServicos] = useState([]);
  const [servicosSel, setServicosSel] = useState([]);
  const [cargos, setCargos] = useState([]);

  const [banner, setBanner] = useState("");
  const [perfil, setPerfil] = useState("");

  const [image, setImage] = useState(null);
  const [imagePerfil, setImagePerfil] = useState(null);

  const [isOpenservicos, setIsOpenServicos] = useState(false);
  const [isOpenNewColaboradores, setIsOpenNewColaboradores] = useState(false);
  const [isEditandoColaborador, setIsEditandoColaborador] = useState(false);
  const [deleteColaborador, setDeleteColaborador] = useState(false);
  const [isOpenNewCampanha, setIsOpenNewCampanha] = useState(false);

  useEffect(() => {
    const loadInstituicao = async () => {
      try {
        const response = await api.get(`/instituicoes/${instituicaoId}`);

        setInstituicao(response.data);
        setInstituicaoServicos(response.data.Services);
        setInstituicaoEndereco(response.data.AddressInstitutions);
        setInstituicaoTelefones(response.data.TelephoneInstitutions);
        setBanner(response.data.url_foto_banner);
        setPerfil(response.data.url_foto_perfil);

      } catch (error) {
        console.error(error);
        alert(error.response.data.error);
      }
    }

    loadInstituicao();
  }, []);

  useEffect(() => {
    const loadServicos = async () => {
      try {
        const response = await api.get("/servicos");

        setServicos(response.data);
      } catch (error) {
        console.error(error);
        alert(error.response.data.error);
      }
    }

    loadServicos();
  }, []);

  useEffect(() => {
    const loadCargos = async () => {
      try {

        const response = await api.get("/cargos");

        setCargos(response.data);
      } catch (error) {
        console.error(error);
        alert(error.response.data.error);
      }
    }

    loadCargos();
  }, []);



  //carrega os dados
  useEffect(() => {
    const loadColaboradores = async () => {
      try {
        const response = await api.get("/funcionarios");

        setColaboradores(response.data);
      } catch (error) {
        console.error(error);
        alert(error.response.data.error);
      }
    }

    loadColaboradores();
  }, [])

  const handleBanner = (e) => {
    setImage(e.target.files[0]);
  }

  const handlePerfil = (e) => {
    setImagePerfil(e.target.files[0]);
  }

  useEffect(() => {
    const changeBanner = async () => {
      let data = new FormData();

      data.append("image", image);

      const response = await api.put(`/instituicoes/${instituicaoId}/banner`, data, {
        headers: {
          "content-type": "multipart/form-data"
        }
      });

      setBanner(response.data.image);
    }
    if (image) {
      changeBanner();
    }
  }, [image]);

  useEffect(() => {
    const changePerfil = async () => {
      let data = new FormData();

      data.append("image", imagePerfil);

      try {
        const response = await api.put(`/instituicoes/${instituicaoId}/perfil`, data, {
          headers: {
            "content-type": "multipart/form-data"
          }
        });

        setPerfil(response.data.image);
      } catch (error) {
        console.error(error);
        alert(error.response.data.error);
      }
    }

    if (imagePerfil) {
      changePerfil();
    }
  }, [imagePerfil]);

  const handleCloseServicos = () => {
    setServicosSel([])
    setIsOpenServicos(false);
  };

  const handleCloseNewColaborador = () => {
    setColaborador({
      nome: "",
      cpf: "",
      cargo: "",
      diaEntrada: "",
    })
    setIsOpenNewColaboradores(false);
    setIsEditandoColaborador(false);
  };

  const handleCloseNewCampanha = () => {
    setIsOpenNewCampanha(false);
  }

  const handleServicoSel = (e) => {
    setServicosSel([...servicosSel, e.target.id])
  }

  const handleSubmitServicos = async () => {
    try {
      const response = await api.post("/servicos", { servicos: servicosSel });

      setInstituicaoServicos([...InstituicaoServicos, response.data]);

    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    } finally {
      setIsOpenServicos(false);
    }
  }

  const handleInputColaborador = (e) => {
    setColaborador({ ...colaborador, [e.target.id]: e.target.value });
  }

  const handleImageColaborador = (e) => {
    if (e.target.files[0]) {
      imageRefColaborador.current.src = URL.createObjectURL(e.target.files[0]);
      imageRefColaborador.current.style.display = "flex";
    } else {
      imageRefColaborador.current.src = "";
      imageRefColaborador.current.style.display = "none";
    }

    setColaboradorImage(e.target.files[0]);
  }


  // create
  const handleSubmitColaborador = async () => {

    try {
      const {
        nome,
        cargo,
        cpf,
        diaEntrada
      } = colaborador;

      if (cargo === 0) {
        return alert("escolha um cargo");
      }

      if (
        !nome ||
        !cpf ||
        !diaEntrada
      ) {
        return alert("faltam alguns dados");
      }

      let data = new FormData();

      data.append("cpf", cpf);
      data.append("nome", nome);
      data.append("cargo", cargo);
      data.append("diaEntrada", diaEntrada);
      data.append("image", colaboradorImage);

      await api.post("/funcionarios", data, {
        headers: {
          "content-type": "multipart/form-data"
        }
      });


    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  }



  // edit (put)
  const handleColaboradorEditado = async (e) => {

    if (deleteColaborador) {
      try {
        return await api.delete(`/funcionarios/${colaborador.id}`);
      } catch (error) {
        console.error(error);
      alert(error.response.data.error);
      }
    }

    try {
      const {
        id,
        nome,
        cargo,
        cpf,
        diaEntrada
      } = colaborador;

      if (cargo === 0) {
        return alert("escolha um cargo");
      }

      if (
        !id ||
        !nome ||
        !cpf ||
        !diaEntrada
      ) {
        return alert("faltam alguns dados");
      }

      let data = new FormData();

      data.append("cpf", cpf);
      data.append("nome", nome);
      data.append("cargo", cargo);
      data.append("diaEntrada", diaEntrada);
      data.append("image", colaboradorImage);

      await api.put(`/funcionarios/${colaborador.id}`, data, {
        headers: {
          "content-type": "multipart/form-data"
        }
      });
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  }



  //edit (get)
  const handleEditarColaborador = async (id) => {
    setIsOpenNewColaboradores(true);
    setIsEditandoColaborador(true);

    try {
      const response = await api.get(`/funcionarios/${id}`);

      setColaborador({
        id: response.data.id,
        nome: response.data.nome,
        cpf: response.data.cpf,
        cargo: response.data.Position.id,
        diaEntrada: response.data.dia_entrada,
      });

    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  }

  return (
    <>
      <Container>
        <main>
          <Profile>
            <Banner>
              <img src={instituicao.url_foto_banner ? banner : DefaultBanner} alt="banner" />
              <label htmlFor="banner"><StyledMdAddAPhoto /> Mudar foto de capa</label>
              <input type="file" name="banner" id="banner" accept="image/*" onChange={handleBanner} />
            </Banner>
            <aside>
              <ContainerInfo>
                <div>
                  <FotoPerfil>
                    <img src={instituicao.url_foto_perfil ? perfil : DefaultProfile} alt="profile" />
                    <label htmlFor="profile"><StyledMdAddAPhoto /></label>
                    <input type="file" name="profile" id="profile" accept="image/*" onChange={handlePerfil} />
                  </FotoPerfil>
                  <div>
                    <h1>{instituicao.nome}</h1>
                  </div>
                  <StyledHeart style={{ display: "none" }} />
                </div>
                <div>
                  <div className="avaliacoes">
                    <div>
                      <StyledStart />
                      <StyledStart />
                      <StyledStart />
                      <StyledStart />
                      <StyledStart />
                      <span>4.8</span>
                    </div>
                    <div>
                      <p>Suas avaliações (1.448)</p>
                    </div>
                  </div>
                  <div style={{ display: "none" }}>
                    <img src={ApoiarIcon} alt="apoio" />
                    <div>
                      Apoiar <StyledRiArrowDownSLine />
                    </div>
                  </div>
                </div>
              </ContainerInfo>
              <ContainerServicos>
                {InstituicaoServicos.length === 0 ?
                  (<p>Adicione serviços para as pessoas saberem o que vc faz</p>)
                  :
                  <div>
                    {InstituicaoServicos.map((is) => (
                      <Servico id={is.id} servico={is} />
                    ))}
                  </div>
                }

                <StyledAiOutlinePlusCircle onClick={() => {
                  setIsOpenServicos(true);
                }} />
              </ContainerServicos>
            </aside>
          </Profile>
          <Section>
            <aside>
              <div className="contatos">
                <h1>Contato</h1>
                <div>
                  <StyledMdEmail />
                  <p>{instituicao.email}</p>
                </div>
                <div>
                  <StyledFaMapMarkerAlt />
                  <p>{instituicaoEndereco.length > 0 ? `${instituicaoEndereco[0].logradouro}, nº${instituicaoEndereco[0].numero} - ${instituicaoEndereco[0].Cep.cep}` : ""}</p>
                </div>
                {instituicaoTelefones.map((t) => (
                  <div>
                    {t.numero.length == 9 ? (<StyledFaPhoneAlt />) : (<StyledMdPhoneIphone />)}
                    <p>{t.numero}</p>
                  </div>
                ))}
              </div>
              <div className="funcionarios">
                <div onClick={() => setIsOpenNewColaboradores(true)}>
                  <h1>Nossos colaboradores</h1>
                  <div><span>+</span> Novo Colaborador</div>
                </div>
                <Colaboradores>
                  {colaboradores.length === 0 ? (<p>Adicione novos colaboradores</p>) :
                    (<div>
                      {
                        colaboradores.map((c) => (
                          <PerfilColaborador id={c.id} handler={handleEditarColaborador} nome={c.nome} img={c.url_foto_perfil} cargo={c.Position.cargo} />
                        ))
                      }
                    </div>)}
                </Colaboradores>
              </div>
            </aside>
            <section>
              <ApoioContainer>
                <h1>Doações</h1>
                <h2>O que você precisa?</h2>
                <div>
                  <div>Voluntários</div>
                  <div>Materiais</div>
                </div>
              </ApoioContainer>
              <DescricaoContainer>
                <h1>Descrição</h1>
                <textarea
                  maxLength={150}
                  placeholder="Escreva aqui uma breve descrição sobre sua instituição"
                />
                <button>Salvar</button>
              </DescricaoContainer>
              <CampanhasContainer>
                <div>
                  <h1>Campanhas</h1>
                  <div onClick={() => {setIsOpenNewCampanha(true);}}><span>+</span>Nova Camapnha</div>
                </div>
                <div>
                  <div>
                    <aside>
                      <BotaoEditar />
                    </aside>
                    <img src={DefaultBanner} alt="campanhas" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                  <div>
                    <aside>
                      <BotaoEditar />
                    </aside>
                    <img src={DefaultBanner} alt="campanhas" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                </div>
              </CampanhasContainer>
              <AnimaisContainer>
                <div>
                  <h1>Animais para adoção</h1>
                  <div><span>+</span> Novo Animal</div>
                </div>
                <div>
                  <PerfilAnimal />
                </div>
              </AnimaisContainer>
            </section>
          </Section>
        </main>
        {isOpenservicos && (
          <Modal title="serviços" handleClose={handleCloseServicos}>
            <ContainerTodosServicos>

              {servicos.map((s) => (
                <ServicoOption
                  key={s.id}
                  handler={handleServicoSel}
                  servicosSel={servicosSel}
                  id={s.id}
                  servico={s} />
              ))}
              <button className="limpar" onClick={() => { setServicosSel([]) }}>Limpar</button>
              <button type="submit" onClick={handleSubmitServicos}>Salvar</button>
            </ContainerTodosServicos>
          </Modal>
        )}

        {isOpenNewCampanha && (
          <Modal title={"Nova Campanha"} handleClose={handleCloseNewCampanha}>
            <CadastroCampanha>
              <Input id="titulo" placeholder="Título da campanha"/>
              <textarea id="descricao" placeholder="Descrição" maxLength={150}/>
              <Input id="" label="Local:" placeholder="CEP" type="text"/>
              <Input id="" placeholder="Logradouro" type="text"/>
              <Input id="" placeholder="Número" type="text"/>
              <Input id="" placeholder="Complemento" type="text"/>
              <div className="flex-row">
                  <Input className="" id="" label="Horário de início:" type="time" />
                  <Input className="" id="" label="Horário de fim:" type="time" />
              </div>
              <div className="flex-row">
                  <Input className="" id="" label="Data de início:" type="date" />
                  <Input className="" id="" label="Data de fim:" type="date" />
              </div>
              
              <Input id="banner" label="Banner" type="file" />
              <button>Enviar</button>
            </CadastroCampanha>
          </Modal>
        )}

        {isOpenNewColaboradores && (
          <Modal style={{ height: "1460px" }} title={isEditandoColaborador ? "Editar" : "Novo Colaborador"} handleClose={handleCloseNewColaborador}>
            <CadsatroColaborador onSubmit={isEditandoColaborador ? handleColaboradorEditado : handleSubmitColaborador}>
              <Input
                id="nome"
                placeholder="Nome do colaborador"
                value={colaborador.nome}
                handler={handleInputColaborador}
              />
              <Input
                id="cpf"
                placeholder="CPF do colaborador"
                value={colaborador.cpf}
                handler={handleInputColaborador}
              />
              <select id="cargo" value={colaborador.cargo} onChange={handleInputColaborador}>
                <option value={0}>Selecione um cargo</option>
                {cargos.map((c) => (
                  <option key={c.id} value={c.id}>{c.cargo}</option>
                ))}
              </select>
              <Input
                id="diaEntrada"
                type="date"
                label="dia de entrada"
                value={colaborador.diaEntrada}
                handler={handleInputColaborador}
              />
              <input accept="image/*" type="file" className="inputColaborador" onChange={handleImageColaborador} />
              <img alt="pre-visualizaão" ref={imageRefColaborador} />
              <button >{isEditandoColaborador ? "Editar" : "Cadastrar"}</button>
              <button onClick={() => setDeleteColaborador(true)} style={isEditandoColaborador ? { display: "block", backgroundColor: "var(--dark)" } : { display: "none" }}>Excluir</button>
            </CadsatroColaborador>
          </Modal>
        )}

        <Footer />
      </Container>
    </>
  );
}

function PerfilAnimal() {
  return (
    <ContainerPerfilAnimal>
      <aside>
        <BotaoEditar />
      </aside>
      <img src={DefaultProfile} alt={"pet"} />
      <h3>Nome do Pet</h3>
      <p>Raça</p>
    </ContainerPerfilAnimal>
  );
}

function PerfilColaborador({ id, nome, cargo, handler, img }) {
  return (
    <ContainerPerfilColaborador>
      <aside onClick={() => handler(id)}>
        <BotaoEditar />
      </aside>
      <img src={img ? img : DefaultProfile} alt={"colaborador"} />
      <h3>{nome}</h3>
      <p>{cargo}</p>
    </ContainerPerfilColaborador>
  );
}

function ServicoOption({ servico, id, servicosSel, handler }) {
  let idFound = false;
  let servicosChecked = servicosSel;

  if (!servicosSel) {
    servicosChecked = []
  }

  servicosChecked.map((s) => {
    if (parseInt(s) === id) {
      idFound = true;
    }
  })

  return (
    <div
      id={id}
      onClick={handler}
      style={idFound ? { backgroundColor: "#CCA583", color: "#FFF" } : {}}>
      {servico.servico}
    </div>
  );
}

function Servico({ servico, handleDeleteServico, id }) {

  return (
    <div id={id}>
      {servico.servico}
      <span onClick={handleDeleteServico}>&times;</span>
    </div>
  );
}

export default PerfilInstituicao;
