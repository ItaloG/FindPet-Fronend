/*

(/) Create campanha 
(/) Read campanha 
(•) Update campanha 
(/) Delete campanha

(•) Create animal 
(/) Read animal 
(•) Update animal 
(•) Delete animal

*/


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
  Campanhas,
  Aniamis,
  CadastroAnimal,
} from "./styles";

import ApoiarIcon from "../../assets/apoiar.svg";
import DefaultBanner from "../../assets/default_banner.png";
import DefaultProfile from "../../assets/default_profile_photo.jpg";
import DefaultPetProfile from "../../assets/default-pet-photo.jpg"
import Footer from "../../components/Footer";
import BotaoEditar from "../../components/BotaoEditar";
import BotaoExcluir from "../../components/BotaoExcluir";
import { useEffect, useRef, useState } from "react";
import { api } from "../../services/api";
import Modal from "../../components/Modal";
import { useParams } from "react-router";
import Input from "../../components/Input";
import { mascaraCep } from "../../utils";

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

  const [animalImage, setAnimalImage] = useState(null);
  const imageRefAnimal = useRef();

  const [campanhas, setCampanhas] = useState([]);
  const [campanha, setCampanha] = useState({
    titulo: "",
    descricao: "",
    cep: "",
    cidade: "",
    logradouro: "",
    numero: "",
    complemento: "",
    hora_inicio: "",
    hora_fim: "",
    data_inicio: "",
    data_fim: "",
  });
  const [campanhaImage, setCampanhaImage] = useState(null);
  const imageRefCampanha = useRef();

  const [animais, setAnimais] = useState([]);
  const [animal, setAnimal] = useState({

  });

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
  const [deleteCampanha, setDeleteCampanha] = useState(false);
  const [isOpenNewCampanha, setIsOpenNewCampanha] = useState(false);
  const [isEditandoCampanha, setIsEditandoCampanha] = useState(false);
  const [isOpenNewAnimal, setIsOpenNewAnimal] = useState(false);

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

  useEffect(() => {
    const loadCampanhas = async () => {
      try {
        const response = await api.get("/campanhas");

        setCampanhas(response.data);
      } catch (error) {
        console.error(error);
        alert(error.response.data.error);
      }
    }

    loadCampanhas();
  }, []);

  useEffect(() => {
    const loadAnimais = async () => {
      try {
        const response = await api.get("/animais");

        setAnimais(response.data);
      } catch (error) {
        console.error(error);
        alert(error.response.data.error);
      }
    }

    loadAnimais();
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
  }, []);

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

  const handleCloseNewAnimal = () => {
    setAnimal({
      tipoAnimal: "",
      nome: "",
      personalidade: "",
      idade: "",
      castrado: "",
      historia: "",
    })
    setIsOpenNewAnimal(false);
  }

  const handleCloseNewCampanha = () => {
    setCampanha({
      titulo: "",
      descricao: "",
      cep: "",
      cidade: "",
      logradouro: "",
      numero: "",
      complemento: "",
      hora_inicio: "",
      hora_fim: "",
      data_inicio: "",
      data_fim: "",
    })
    setIsOpenNewCampanha(false);
    setIsEditandoCampanha(false);
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

  const handleImageAnimal = (e) => {
    if (e.target.files[0]) {
      imageRefAnimal.current.src = URL.createObjectURL(e.target.files[0]);
    } else {
      imageRefAnimal.current.src = "";
    }
    setAnimalImage(e.target.files[0]);
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
        !diaEntrada ||
        !colaboradorImage
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

      console.log(response.data)

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

  const handleInputCampanha = (e) => {
    setCampanha({ ...campanha, [e.target.id]: e.target.value });
  }

  const handleInputCepCampanha = (e) => {
    let cep = e.target.value;
    cep = mascaraCep(cep);
    setCampanha({ ...campanha, cep: cep });
  }

  useEffect(() => {
    const getEndereco = async (cep) => {
      const dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const endereco = await dados.json();
      setCampanha({
        titulo: campanha.titulo,
        descricao: campanha.descricao,
        cep: campanha.cep,
        cidade: endereco.localidade,
        logradouro: endereco.logradouro,
        numero: campanha.numero,
        complemento: campanha.complemento,
        hora_inicio: campanha.hora_inicio,
        hora_fim: campanha.hora_fim,
        data_inicio: campanha.data_inicio,
        data_fim: campanha.data_fim,
      });
    };

    if (campanha.cep.length === 9) {
      getEndereco(campanha.cep);
    }
  }, [campanha.cep]);

  const handleImageCampanha = (e) => {
    if (e.target.files[0]) {
      imageRefCampanha.current.src = URL.createObjectURL(e.target.files[0]);
      imageRefCampanha.current.style.display = "flex";
    } else {
      imageRefCampanha.current.src = "";
      imageRefCampanha.current.style.display = "none";
    }

    setCampanhaImage(e.target.files[0]);
  }

  const handleSubmitCampanhas = async () => {
    try {

      const {
        cep,
        cidade,
        complemento,
        data_fim,
        data_inicio,
        descricao,
        hora_fim,
        hora_inicio,
        logradouro,
        numero,
        titulo,
      } = campanha;

      if (
        !cep ||
        !cidade ||
        !data_fim ||
        !data_inicio ||
        !descricao ||
        !hora_fim ||
        !hora_inicio ||
        !logradouro ||
        !numero ||
        !titulo ||
        !campanhaImage
      ) {
        return alert("faltam alguns dados");
      }

      let data = new FormData();

      data.append("titulo", titulo);
      data.append("cep", cep);
      data.append("numero", numero);
      data.append("logradouro", logradouro);
      data.append("complemento", complemento);
      data.append("cidade", cidade)
      data.append("descricao", descricao);
      data.append("data_inicio", data_inicio);
      data.append("data_fim", data_fim);
      data.append("hora_inicio", hora_inicio);
      data.append("hora_fim", hora_fim);
      data.append("image", campanhaImage);

      await api.post("/campanhas", data, {
        headers: {
          "content-type": "miltipart/form-data"
        }
      });

    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  }

  const handleCampanhaEditada = async (e) => {

    if (deleteCampanha) {
      try {
        return await api.delete(`/campanhas/${campanha.id}`);
      } catch (error) {
        console.error(error);
        alert(error.response.data.error)
      }
    }

    try {

      const {
        cep,
        cidade,
        complemento,
        data_fim,
        data_inicio,
        descricao,
        hora_fim,
        hora_inicio,
        logradouro,
        numero,
        titulo,
      } = campanha;

      if (
        !cep ||
        !cidade ||
        !data_fim ||
        !data_inicio ||
        !descricao ||
        !hora_fim ||
        !hora_inicio ||
        !logradouro ||
        !numero ||
        !titulo ||
        !campanhaImage
      ) {
        return alert("faltam alguns dados");
      }

      let data = new FormData();

      data.append("titulo", titulo);
      data.append("cep", cep);
      data.append("numero", numero);
      data.append("logradouro", logradouro);
      data.append("complemento", complemento);
      data.append("cidade", cidade)
      data.append("descricao", descricao);
      data.append("data_inicio", data_inicio);
      data.append("data_fim", data_fim);
      data.append("hora_inicio", hora_inicio);
      data.append("hora_fim", hora_fim);
      data.append("image", campanhaImage);

      await api.put(`/campanhas/${campanha.id}`, data, {
        headers: {
          "content-type": "miltipart/form-data"
        }
      });

    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  }

  const handleEditarCampanha = async (id) => {
    setIsOpenNewCampanha(true);
    setIsEditandoCampanha(true);

    try {
      const response = await api.get(`/campanhas/${id}`);
      console.log(response.data)

      setCampanha({
        id: response.data[0].id,
        titulo: response.data[0].titulo,
        descricao: response.data[0].descricao,
        cep: response.data[0].cep_id,
        cidade: response.data[0].cidade,
        logradouro: response.data[0].logradouro,
        numero: response.data[0].numero,
        complemento: response.data[0].complemento,
        hora_inicio: response.data[0].hora_inicio,
        hora_fim: response.data[0].hora_fim,
        data_inicio: response.data[0].data_inicio,
        data_fim: response.data[0].data_fim
      })

    } catch (error) {
        console.error(error);
        alert(error.response.data.error);
    }

  }

  const handleExcluirCampanha = async (id) => {
    try {
        await api.delete(`/campanhas/${id}`);
        alert("Campanha excluída");
        setDeleteCampanha(true);
    }
    
    catch (error) {
      console.error(error);
      alert(error);
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
                        colaboradores.map((c, index) => (
                          <PerfilColaborador key={index} id={c.id} handler={handleEditarColaborador} nome={c.nome} img={c.url_foto_perfil} cargo={c.Position.cargo} />
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
                  <div onClick={() => { setIsOpenNewCampanha(true) }}>
                    <span>+</span>Nova Camapnha
                  </div>
                </div>

                <Campanhas>
                  {campanhas.length === 0 ? (<p>Adicione uma nova capmanhs</p>) :
                    (
                      <div>
                        {
                          campanhas.map((c, index) => (
                            <Campanha key={index} id={c.id} handlerEditar={handleEditarCampanha} handlerExcluir={handleExcluirCampanha} titulo={c.titulo} img={c.url_foto} descricao={c.descricao}  />
                          ))
                        }
                      </div>
                    )}
                </Campanhas>
              </CampanhasContainer>
              <AnimaisContainer>
                <div>
                  <h1>Animais para adoção</h1>
                  <div onClick={() => {setIsOpenNewAnimal(true)}}><span>+</span> Novo Animal</div>
                </div>
                <Aniamis>
                  {Aniamis.length === 0 ? (<p>Adicione novos animais</p>) :
                    (<div>
                      {
                        animais.map((a, index) => (
                          <PerfilAnimal key={index}  id={a.id} nome={a.nome} raca={a.TypeAnimal.tipo} img={a.url_foto_perfil}/>
                        ))
                      }
                    </div>)}
                </Aniamis>
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
          <Modal style={{ height: "1460px" }} title={"Nova Campanha"} handleClose={handleCloseNewCampanha}>
            <CadastroCampanha onSubmit={isEditandoCampanha ? handleCampanhaEditada : handleSubmitCampanhas}>
              <Input
                id="titulo"
                placeholder="Título da campanha"
                value={campanha.titulo}
                handler={handleInputCampanha}
                required
              />
              <textarea
                id="descricao"
                placeholder="Descrição"
                value={campanha.descricao}
                onChange={handleInputCampanha}
                maxLength={150}
                required
              />
              <Input
                type="text"
                label="Local:"
                id="cep"
                placeholder="CEP"
                pattern="(\d{5})-(\d{3})*"
                value={campanha.cep}
                handler={handleInputCepCampanha}
                required
              />
              <Input
                id="cidade"
                placeholder="Cidade"
                value={campanha.cidade}
                handler={handleInputCampanha}
                required
              />
              <Input
                id="logradouro"
                placeholder="Ruas/Avenida"
                value={campanha.logradouro}
                handler={handleInputCampanha}
                required
              />
              <Input
                id="numero"
                placeholder="Número"
                value={campanha.numero}
                handler={handleInputCampanha}
                required
              />
              <Input
                id="complemento"
                placeholder="Complemento"
                value={campanha.complemento}
                handler={handleInputCampanha}
              />
              <div className="flex-row">
                <Input
                  label="Horário de início:"
                  id="hora_inicio"
                  value={campanha.hora_inicio}
                  handler={handleInputCampanha}
                  type="time"
                  required
                />
                <Input
                  label="Horário de fim:"
                  id="hora_fim"
                  value={campanha.hora_fim}
                  handler={handleInputCampanha}
                  type="time"
                  required
                />
              </div>
              <div className="flex-row">
                <Input
                  label="Data de início:"
                  id="data_inicio"
                  value={campanha.data_inicio}
                  handler={handleInputCampanha}
                  type="date"
                  required
                />
                <Input
                  label="Data de fim:"
                  id="data_fim"
                  value={campanha.data_fim}
                  handler={handleInputCampanha}
                  type="date"
                  required
                />
              </div>

              <input id="banner" accept="image/*" type="file" onChange={handleImageCampanha} />
              <img alt="pre-vizualização" ref={imageRefCampanha} />
              <button>Cadastrar</button>
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
              <input label="Foto" accept="image/*" type="file" onChange={handleImageColaborador} />
              <img alt="pre-visualização" ref={imageRefColaborador} />
              <button >{isEditandoColaborador ? "Editar" : "Cadastrar"}</button>
              <button onClick={() => setDeleteColaborador(true)} style={isEditandoColaborador ? { display: "block", backgroundColor: "var(--dark)" } : { display: "none" }}>Excluir</button>
            </CadsatroColaborador>
          </Modal>
        )}

        {isOpenNewAnimal && (
          <Modal title={"Novo Animal"} handleClose={handleCloseNewAnimal}>
            <CadastroAnimal>
              <div className="container-foto-animais">
                <img alt="pre-visualização" ref={imageRefAnimal} src={DefaultPetProfile}/>
              </div>
              <input accept="image/*" type="file" onChange={handleImageAnimal} />
              <label>
                Nome
                <Input id="" placeholder="" value="" handler=""/>
              </label>
              <label>
                Tipo
                <select>
                  <option>Cachorro</option>
                  <option>Gato</option>
                </select>
              </label>
              <label>
                Personalidade
                <select>
                  <option>Calmo</option>
                  <option>Agitado</option>
                </select>
              </label>
              <label>
                Idade
                <input type="number" placeholder="1" min="1" max="30"/>
              </label>
              
              <label>
                Castrado?
                <select>
                  <option>Sim</option>
                  <option>Não</option>
                </select>
              </label>
              <textarea placeholder="Conte um pouco sobre a história deste Pet..." resize="none"/>
              <button>Cadastrar</button>
            </CadastroAnimal>
          </Modal>
        )}

        <Footer />
      </Container>
    </>
  );
}

function PerfilAnimal({ id, nome, raca, handler, img }) {
  return (
    <ContainerPerfilAnimal>
      <aside onClick={() => handler(id)}>
        <BotaoEditar />
      </aside>
      <div>
        <img src={img ? img : DefaultProfile} alt={"pet"} />
      </div>
      <h3>{nome}</h3>
      <p>{raca}</p>
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

function Campanha({ id, titulo, descricao, handlerEditar, handlerExcluir, img }) {
  return (
    <div>
      <aside onClick={() => handlerEditar(id)}>
        <BotaoEditar />
      </aside>
      <aside onClick={() => handlerExcluir(id)}>
        <BotaoExcluir/>
      </aside>
      <img src={img ? img : DefaultBanner} alt="campanhas" />
      <h1>{titulo}</h1>
      <p>
        {descricao}
      </p>
    </div>
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
