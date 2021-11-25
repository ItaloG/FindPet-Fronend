// import { Container } from "../../GlobalStyles";
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
  RadioGroup,
  CondicaoEspecial,
  ContainerCondicoesEspeciais,
  Container,
  About,
  ActionButtons,
  Cover,
  EditProfilePhoto,
  IconeCamera,
  IconEdit,
  IconFavoriteOutline,
  IconHome,
  IconLock,
  IconNext,
  IconPrevious,
  PetAbstract,
  PetDatasheet,
  PetGallery,
  PetHistory,
  PetInfo,
  ProfileBody,
  ProfilePhoto,
  PetFavoriteCount,
  IconFavorite,
  SaveChanges,
  Contact,
  IconEmail,
  IconPlace,
  IconTelephone,
  IconPhone,
  Employees,
  EditCoverPhoto,
  Campaigns,
  Description,
  Pets,
  Services,
  IconStar,
} from "./styles";

import DefaultPetPhoto from "../../assets/default-pet-photo.jpg";
import ApoiarIcon from "../../assets/apoiar.svg";
import DefaultBanner from "../../assets/default_banner.png";
import DefaultProfile from "../../assets/default_profile_photo.jpg";
import DefaultPetProfile from "../../assets/default-pet-photo.jpg";
import Footer from "../../components/Footer";
import BotaoEditar from "../../components/BotaoEditar";
import BotaoExcluir from "../../components/BotaoExcluir";
import { useEffect, useRef, useState } from "react";
import { api } from "../../services/api";
import Modal from "../../components/Modal";
import { useParams } from "react-router";
import Input from "../../components/Input";
import { mascaraCep } from "../../utils";
import Employee from "./Components/Employee";
import Campaign from "./Components/Campaign";
import Pet from "./Components/Pet";
import Service from "./Components/Service";
import Donation from "./Components/Donation";

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
    nome: "",
    tipoAnimal: "",
    personalidade: "",
    idade: 0,
    castrado: "0",
    historia: "",
  });
  const [animalImage, setAnimalImage] = useState(null);
  const imageRefAnimal = useRef();

  const [tiposAnimal, setTiposAnimal] = useState([]);
  const [condicoesEspeciais, setCondicoesEspeciais] = useState([]);
  const [condicoesEspeciaisSel, setCondicoesEspeciaisSel] = useState([]);
  const condicoesEspeciaisRef = useRef();

  const [hasCondicaoEspecial, setHasCondicaoEspecial] = useState(false);

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
  const [isServiceSelected, setIsServiceSelected] = useState(false);
  const [isAServiceSelected, setIsAServiceSelected] = useState(false);

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
    };

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
    };

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
    };

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
    };

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
    };

    loadAnimais();
  }, []);

  useEffect(() => {
    const loadTiposAnimal = async () => {
      try {
        const response = await api.get("/tiposAnimal");

        setTiposAnimal(response.data);
      } catch (error) {
        console.error(error);
        alert(error.response.data.error);
      }
    };

    loadTiposAnimal();
  }, []);

  useEffect(() => {
    const loadCondicoesEspeciais = async () => {
      try {
        const response = await api.get("/condicoesEspeciais");

        setCondicoesEspeciais(response.data);
      } catch (error) {
        console.error(error);
        alert(error.response.data.error);
      }
    };

    loadCondicoesEspeciais();
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
    };

    loadColaboradores();
  }, []);

  const handleBanner = (e) => {
    setImage(e.target.files[0]);
  };

  const handlePerfil = (e) => {
    setImagePerfil(e.target.files[0]);
  };

  useEffect(() => {
    const changeBanner = async () => {
      let data = new FormData();

      data.append("image", image);

      const response = await api.put(
        `/instituicoes/${instituicaoId}/banner`,
        data,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );

      setBanner(response.data.image);
    };
    if (image) {
      changeBanner();
    }
  }, [image]);

  useEffect(() => {
    const changePerfil = async () => {
      let data = new FormData();

      data.append("image", imagePerfil);

      try {
        const response = await api.put(
          `/instituicoes/${instituicaoId}/perfil`,
          data,
          {
            headers: {
              "content-type": "multipart/form-data",
            },
          }
        );

        setPerfil(response.data.image);
      } catch (error) {
        console.error(error);
        alert(error.response.data.error);
      }
    };

    if (imagePerfil) {
      changePerfil();
    }
  }, [imagePerfil]);

  const handleCloseServicos = () => {
    setServicosSel([]);
    setIsOpenServicos(false);
  };

  const handleCloseNewColaborador = () => {
    setColaborador({
      nome: "",
      cpf: "",
      cargo: "",
      diaEntrada: "",
    });
    setIsOpenNewColaboradores(false);
    setIsEditandoColaborador(false);
  };

  const handleCloseNewAnimal = () => {
    setAnimal({
      tipoAnimal: "",
      nome: "",
      personalidade: "",
      idade: 0,
      castrado: "0",
      historia: "",
    });
    setIsOpenNewAnimal(false);
  };

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
    });
    setIsOpenNewCampanha(false);
    setIsEditandoCampanha(false);
  };

  const handleServicoSel = (e) => {
    setServicosSel([...servicosSel, e.target.id]);
  };

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
  };

  const handleInputColaborador = (e) => {
    setColaborador({ ...colaborador, [e.target.id]: e.target.value });
  };

  const handleInputAnimal = (e) => {
    setAnimal({ ...animal, [e.target.id]: e.target.value });
  };


  const handleRadioInputAnimal = (e) => {
    setAnimal({ ...animal, castrado: e.target.value });
  };

  const handleImageColaborador = (e) => {
    if (e.target.files[0]) {
      imageRefColaborador.current.src = URL.createObjectURL(e.target.files[0]);
      imageRefColaborador.current.style.display = "flex";
    } else {
      imageRefColaborador.current.src = "";
      imageRefColaborador.current.style.display = "none";
    }

    setColaboradorImage(e.target.files[0]);
  };

  const handleImageAnimal = (e) => {
    if (e.target.files[0]) {
      imageRefAnimal.current.src = URL.createObjectURL(e.target.files[0]);
    } else {
      imageRefAnimal.current.src = "";
    }
    setAnimalImage(e.target.files[0]);
  };

  // create
  const handleSubmitColaborador = async () => {
    try {
      const { nome, cargo, cpf, diaEntrada } = colaborador;

      if (cargo === 0) {
        return alert("escolha um cargo");
      }

      if (!nome || !cpf || !diaEntrada || !colaboradorImage) {
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
          "content-type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };

  const handleSubmitAnimal = async (e) => {
    const { nome, tipoAnimal, personalidade, idade, castrado, historia } =
      animal;

    if (tipoAnimal === 0) {
      return alert("Escolha um tipo de animal");
    }

    if (!nome || !historia || !animalImage) {
      return alert("Faltam alguns dados");
    }

    let data = new FormData();

    data.append("nome", nome);
    data.append("personalidade", personalidade);
    data.append("idade", idade);
    data.append("castrado", castrado);
    data.append("historia", historia);
    data.append("tipoAnimal", tipoAnimal);
    data.append("image", animalImage);

    const condicoesEspeciais = condicoesEspeciaisSel.reduce(
      (s, ce) => (s += ce.id + ","),
      ""
    );

    console.log("AAAAAAA", condicoesEspeciais);

    data.append(
      "condicoesEpeciais",
      condicoesEspeciais.substr(0, condicoesEspeciais.length - 1)
    );

    try {
      await api.post("/animais", data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };

  // edit (put)
  const handleSubmitColaboradorEditado = async (e) => {
    if (deleteColaborador) {
      try {
        return await api.delete(`/funcionarios/${colaborador.id}`);
      } catch (error) {
        console.error(error);
        alert(error.response.data.error);
      }
    }

    try {
      const { id, nome, cargo, cpf, diaEntrada } = colaborador;

      if (cargo === 0) {
        return alert("escolha um cargo");
      }

      if (!id || !nome || !cpf || !diaEntrada) {
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
          "content-type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };

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
  };

  const handleInputCampanha = (e) => {
    setCampanha({ ...campanha, [e.target.id]: e.target.value });
  };

  const handleInputCepCampanha = (e) => {
    let cep = e.target.value;
    cep = mascaraCep(cep);
    setCampanha({ ...campanha, cep: cep });
  };

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

    if (campanha.cep.length === 9 && !isEditandoCampanha) {
      getEndereco(campanha.cep);
    }

    return true;
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
  };

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

      let data = new FormData();

      data.append("titulo", titulo);
      data.append("cep", cep);
      data.append("numero", numero);
      data.append("logradouro", logradouro);
      data.append("complemento", complemento);
      data.append("cidade", cidade);
      data.append("descricao", descricao);
      data.append("data_inicio", data_inicio);
      data.append("data_fim", data_fim);
      data.append("hora_inicio", hora_inicio);
      data.append("hora_fim", hora_fim);
      data.append("image", campanhaImage);

      await api.post("/campanhas", data, {
        headers: {
          "content-type": "miltipart/form-data",
        },
      });
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };

  const handleSubmitCampanhaEditada = async () => {
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

      let data = new FormData();

      data.append("titulo", titulo);
      data.append("cep", cep);
      data.append("numero", numero);
      data.append("logradouro", logradouro);
      data.append("complemento", complemento);
      data.append("cidade", cidade);
      data.append("descricao", descricao);
      data.append("data_inicio", data_inicio);
      data.append("data_fim", data_fim);
      data.append("hora_inicio", hora_inicio);
      data.append("hora_fim", hora_fim);
      data.append("image", campanhaImage);

      await api.put(`/campanhas/${campanha.id}`, data, {
        headers: {
          "content-type": "miltipart/form-data",
        },
      });
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  const handleEditarCampanha = async (id) => {
    setIsOpenNewCampanha(true);
    setIsEditandoCampanha(true);

    try {
      const response = await api.get(`/campanhas/${id}`);

      console.log(response.data);

      setCampanha({
        id: response.data.id,
        titulo: response.data.titulo,
        descricao: response.data.descricao,
        cep: response.data.Cep.cep,
        cidade: response.data.cidade,
        logradouro: response.data.logradouro,
        numero: response.data.numero,
        complemento: response.data.complemento,
        hora_inicio: response.data.hora_inicio,
        hora_fim: response.data.hora_fim,
        data_inicio: response.data.data_inicio,
        data_fim: response.data.data_fim,
      });
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  const handleExcluirCampanha = async (id) => {
    try {
      await api.delete(`/campanhas/${id}`);
      alert("Campanha excluída");
      setDeleteCampanha(true);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  const handleCondicoesEspeciais = (e) => {
    const idSel = e.target.value;

    const condicaoEspecialSel = condicoesEspeciais.find(
      (ce) => ce.id.toString() === idSel
    );

    if (
      condicaoEspecialSel &&
      !condicoesEspeciaisSel.includes(condicaoEspecialSel)
    )
      setCondicoesEspeciaisSel([...condicoesEspeciaisSel, condicaoEspecialSel]);

    e.target[e.target.selectedIndex].disabled = true;
    e.target.value = "";
  };

  const handleUnselCondicaoEspecial = (idUnsel) => {
    setCondicoesEspeciaisSel(
      condicoesEspeciaisSel.filter((ce) => ce.id !== idUnsel)
    );

    const { options } = condicoesEspeciaisRef.current;

    for (let i = 0; i < options.length; i++) {
      if (options[i].value === idUnsel.toString()) options[i].disabled = false;
    }
  };

  const handleHasNotCondicaoEspecial = () => {
    setHasCondicaoEspecial(false);
    setCondicoesEspeciaisSel([]);
  };

  let editable = true;

  const [isOneServiceSelected, setIsOneServiceSelected] = useState(false);

  const handleService = () => {
    if (isServiceSelected) return setIsServiceSelected(false);
    else return setIsServiceSelected(true);
  };

  const handleOneService = (id) => {
    this.setState(true);
    // if (isAServiceSelected)
    //   return setIsAServiceSelected(false)
    // else
    //   return setIsAServiceSelected(true)
  };

  const handleDonation = (id) => {
    this.setState({
      EDIT: (id = 2),
    });
  };

 


  return (
    <>
      <Container>
        <Profile>
          <Cover>
            {editable && (
              <EditCoverPhoto>
                <IconeCamera />
                <label>Mudar foto da capa</label>
                <input
                  type="file"
                  name="banner"
                  id="banner"
                  accept="image/*"
                  onChange={handleBanner}
                />
              </EditCoverPhoto>
            )}
            <img
              src={instituicao.url_foto_banner ? banner : DefaultBanner}
              alt=""
            />
          </Cover>
          <About>
            <div>
              <ProfilePhoto>
                <div>
                  <img
                    src={instituicao.url_foto_perfil ? perfil : DefaultProfile}
                    alt=""
                  />
                </div>
              </ProfilePhoto>
              {editable && (
                <EditProfilePhoto>
                  <IconeCamera />
                  <input
                    type="file"
                    name="profile"
                    id="profile"
                    accept="image/*"
                    onChange={handlePerfil}
                  />
                </EditProfilePhoto>
              )}
              <PetInfo>
                <div>
                  <h1>{instituicao.nome}</h1>
                  {!editable && <IconFavoriteOutline />}
                </div>
                <div>
                  <h4>Castração | Vacinação</h4>
                </div>
              </PetInfo>
              {!editable && (
                <>
                  <ActionButtons>
                    <button>Adotar</button>
                    <button>Ver ONG</button>
                  </ActionButtons>
                </>
              )}
              {editable && (
                <>
                  <PetFavoriteCount>
                    <IconStar />
                    <IconStar />
                    <IconStar />
                    <IconStar />
                    <IconStar />
                    <h4>4.9</h4>
                    <small>(126)</small>
                  </PetFavoriteCount>
                </>
              )}
            </div>
          </About>
          <ProfileBody>
            <div>
              <div>
                {!editable && (
                  <Contact>
                    <h2>Contato</h2>
                    <div>
                      <IconEmail />
                      <p>{instituicao.email}</p>
                    </div>
                    <div>
                      <IconPlace />
                      <p>
                        {instituicaoEndereco.length > 0
                          ? `${instituicaoEndereco[0].logradouro}, nº${instituicaoEndereco[0].numero} - ${instituicaoEndereco[0].Cep.cep}`
                          : ""}
                      </p>
                    </div>
                    {instituicaoTelefones.map((t) => (
                      <div>
                        {t.numero.length == 9 ? (
                          <IconTelephone />
                        ) : (
                          <IconPhone />
                        )}
                        <p>{t.numero}</p>
                      </div>
                    ))}
                  </Contact>
                )}
                {editable && (
                  <Services>
                    <h2>Serviços</h2>
                    <div>
                      <p>Selecione os serviços que você oferece:</p>
                    </div>
                    <div>
                      {/* {console.log(servicos.map((is) => console.log(is.servico)))} */}
                      {/* {console.log(servicos.map((is) => console.log(is.servico)))} */}
                      {servicos.map((is) => (
                        <Service
                          key={is.id}
                          id={is.id}
                          servico={is.servico}
                          selected={false}
                          handler={handleService}
                        />
                      ))}
                      {InstituicaoServicos.map((is) => (
                        <Service
                          key={is.id}
                          id={is.id}
                          servico={is.servico}
                          selected={true}
                          handler={handleService}
                        />
                      ))}
                      {/* {DeletedServices(servicos.map((is) => is.id), InstituicaoServicos.map((is) => is.id)).map((is) => (
                        <Service key={is.id} id={is.id} servico={is.servico} selected={true} handler={handleService}/>
                      ))} */}
                      {/* <Service key={servicos[0].id} id={servicos[0].id} servico={servicos[0].servico} selected={isServiceSelected} handler={handleService}/> */}
                      {/* <Service key={servicos[1].id} id={servicos[1].id} servico={servicos[1].servico} selected={isAServiceSelected} handler={handleOneService}/> */}
                      {/* {console.log(servicos[0].id)}
                      {console.log(servicos.map((is) => is.id))} */}
                      {DeletedServices(
                        servicos.map((is) => is.id),
                        InstituicaoServicos.map((is) => is.id)
                      )}
                      {console.log(InstituicaoServicos.map((is) => is))}
                      {NewServices(servicos.map((is) => is),
                        InstituicaoServicos.map((is) => is))}
                    </div>
                  </Services>
                )}
                {editable && (
                  <Services>
                    <h2>Doações</h2>
                    <div>
                      <p>O que você precisa?</p>
                    </div>
                    <div>
                      <Service />
                      <Service />
                      <Service />
                      <Service />
                      <Service />
                      {/* <div onClick={() => this.handleDonation()}>
                        <Donation type={2} title={"Castração"} />
                      </div> */}
                    </div>
                  </Services>
                )}
                <Employees>
                  <div>
                    <h2>Nossos Colaboradores</h2>
                    <button onClick={() => setIsOpenNewColaboradores(true)}>
                      + <small>Novo</small>
                    </button>
                  </div>

                  {colaboradores.length === 0 ? (
                    <p>Não há colaboradores para mostrar.</p>
                  ) : (
                    <div>
                      {colaboradores.map((c, index) => (
                        <Employee
                          key={index}
                          id={c.id}
                          handler={handleEditarColaborador}
                          nome={c.nome}
                          img={c.url_foto_perfil}
                          cargo={c.Position.cargo}
                        />
                      ))}
                    </div>
                  )}
                </Employees>
              </div>
              <div>
                <Description>
                  {editable && (
                    <>
                      <h2>Descrição</h2>
                      <textarea>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </textarea>
                    </>
                  )}
                  {!editable && (
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  )}
                </Description>
                <Campaigns>
                  <div>
                    <h2>Campanhas</h2>
                    <button onClick={() => setIsOpenNewCampanha(true)}>
                      + <small>Nova</small>
                    </button>
                  </div>

                  {campanhas.length === 0 ? (
                    <p>Não há campanhas para mostrar.</p>
                  ) : (
                    <div>
                      {campanhas.map((c, index) => (
                        <Campaign
                          key={index}
                          id={c.id}
                          handlerEditar={handleEditarCampanha}
                          handlerExcluir={handleExcluirCampanha}
                          titulo={c.titulo}
                          img={c.url_foto}
                          descricao={c.descricao}
                        />
                      ))}
                    </div>
                  )}
                </Campaigns>
                <Pets>
                  <div>
                    <h2>Animais para adoção</h2>
                    <button onClick={() => setIsOpenNewAnimal(true)}>
                      + <small>Novo</small>
                    </button>
                  </div>

                  {animais.length === 0 ? (
                    <p>Não há animais para mostrar.</p>
                  ) : (
                    <div>
                      {animais.map((a, index) => (
                        <Pet
                          key={index}
                          id={a.id}
                          nome={a.nome}
                          raca={a.TypeAnimal.tipo}
                          img={a.url_foto_perfil}
                        />
                      ))}
                    </div>
                  )}
                </Pets>
              </div>
            </div>
          </ProfileBody>
        </Profile>
      </Container>
      {isOpenNewCampanha && (
        <Modal
          // style={{ height: document.body.scrollHeight }}
          title={isEditandoCampanha ? "Editar" : "Nova Campanha"}
          handleClose={handleCloseNewCampanha}
        >
          <CadastroCampanha
            onSubmit={
              isEditandoCampanha
                ? handleSubmitCampanhaEditada
                : handleSubmitCampanhas
            }
          >
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

            <input
              id="banner"
              accept="image/*"
              type="file"
              onChange={handleImageCampanha}
            />
            <img alt="pre-vizualização" ref={imageRefCampanha} />
            <button>Cadastrar</button>
          </CadastroCampanha>
        </Modal>
      )}

      {isOpenservicos && (
        <Modal title="serviços" handleClose={handleCloseServicos}>
          <ContainerTodosServicos>
            {servicos.map((s) => (
              <ServicoOption
                key={s.id}
                handler={handleServicoSel}
                servicosSel={servicosSel}
                id={s.id}
                servico={s}
              />
            ))}
            <button
              className="limpar"
              onClick={() => {
                setServicosSel([]);
              }}
            >
              Limpar
            </button>
            <button type="submit" onClick={handleSubmitServicos}>
              Salvar
            </button>
          </ContainerTodosServicos>
        </Modal>
      )}

      {isOpenNewColaboradores && (
        <Modal
          // style={{ height: "1460px" }}
          title={isEditandoColaborador ? "Editar" : "Novo Colaborador"}
          handleClose={handleCloseNewColaborador}
        >
          <CadsatroColaborador
            onSubmit={
              isEditandoColaborador
                ? handleSubmitColaboradorEditado
                : handleSubmitColaborador
            }
          >
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
            <select
              id="cargo"
              value={colaborador.cargo}
              onChange={handleInputColaborador}
            >
              <option value={0}>Selecione um cargo</option>
              {cargos.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.cargo}
                </option>
              ))}
            </select>
            <Input
              id="diaEntrada"
              type="date"
              label="dia de entrada"
              value={colaborador.diaEntrada}
              handler={handleInputColaborador}
            />
            <input
              label="Foto"
              accept="image/*"
              type="file"
              onChange={handleImageColaborador}
            />
            <img alt="pre-visualização" ref={imageRefColaborador} />
            <button>{isEditandoColaborador ? "Editar" : "Cadastrar"}</button>
            <button
              onClick={() => setDeleteColaborador(true)}
              style={
                isEditandoColaborador
                  ? { display: "block", backgroundColor: "var(--dark)" }
                  : { display: "none" }
              }
            >
              Excluir
            </button>
          </CadsatroColaborador>
        </Modal>
      )}

      {isOpenNewAnimal && (
        <Modal
          // style={{ height: document.body.scrollHeight }}
          title="Novo Animal"
          handleClose={handleCloseNewAnimal}
        >
          <CadastroAnimal onSubmit={handleSubmitAnimal}>
            <div className="container-foto-animais">
              <img
                alt="pre-visualização"
                ref={imageRefAnimal}
                src={DefaultPetProfile}
              />
            </div>
            <label>
              Foto do animal
              <input
                id="foto"
                accept="image/*"
                type="file"
                onChange={handleImageAnimal}
                required
              />
            </label>
            <Input
              id="nome"
              placeholder="Nome do animal"
              value={animal.nome}
              handler={handleInputAnimal}
              required
            />

            <select
              id="tipoAnimal"
              value={animal.tipoAnimal}
              onChange={handleInputAnimal}
              required
            >
              <option value="">Selecione um tipo de animal</option>
              {tiposAnimal.map((tp) => (
                <option key={tp.id} value={tp.id}>
                  {tp.tipo}
                </option>
              ))}
            </select>
            <label>
              Possui condição especial?
              <RadioGroup>
                <div>
                  <input
                    type="radio"
                    name="condicaoEspecial"
                    id="possui"
                    onChange={() => setHasCondicaoEspecial(true)}
                  />
                  <label htmlFor="possui">Sim</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="condicaoEspecial"
                    id="naoPossui"
                    onChange={handleHasNotCondicaoEspecial}
                    defaultChecked
                  />
                  <label htmlFor="naoPossui">Não</label>
                </div>
              </RadioGroup>
            </label>
            {hasCondicaoEspecial && (
              <>
                <label>
                  Condições especiais
                  <select
                    id="condicaoEspecial"
                    onChange={handleCondicoesEspeciais}
                    ref={condicoesEspeciaisRef}
                  >
                    <option value="">Selecione</option>
                    {condicoesEspeciais.map((ce) => (
                      <option key={ce.id} value={ce.id}>
                        {ce.condicao}
                      </option>
                    ))}
                  </select>
                </label>
                <ContainerCondicoesEspeciais>
                  {condicoesEspeciaisSel.map((ce) => (
                    <CondicaoEspecial key={ce.id}>
                      {ce.condicao}
                      <span onClick={() => handleUnselCondicaoEspecial(ce.id)}>
                        &times;
                      </span>
                    </CondicaoEspecial>
                  ))}
                </ContainerCondicoesEspeciais>
              </>
            )}
            <label>
              Castrado?
              <RadioGroup>
                <div>
                  <input
                    type="radio"
                    value="1"
                    name="castrado"
                    id="simCastrado"
                    onChange={handleRadioInputAnimal}
                  />
                  <label htmlFor="simCastrado">Sim</label>
                </div>
                <div>
                  <input
                    type="radio"
                    value="0"
                    name="castrado"
                    id="naoCastrado"
                    onChange={handleRadioInputAnimal}
                    defaultChecked
                  />
                  <label htmlFor="naoCastrado">Não</label>
                </div>
              </RadioGroup>
            </label>

            <Input
              id="idade"
              label="Idade"
              handler={handleInputAnimal}
              value={animal.idade}
              type="number"
              min="1"
              required
            />

            <label>
              Personalidade
              <textarea
                id="personalidade"
                value={animal.personalidade}
                onChange={handleInputAnimal}
                placeholder="Descreva a personalidade desse pet..."
                required
              />
            </label>
            <label>
              História
              <textarea
                id="historia"
                value={animal.historia}
                onChange={handleInputAnimal}
                placeholder="Conte um pouco sobre a história deste Pet..."
                required
              />
            </label>
            <button>Cadastrar</button>
          </CadastroAnimal>
        </Modal>
      )}
    </>

    // <>
    //   <Container>
    //     <main>
    //       <Profile>
    //
    //         <aside>
    //           <ContainerInfo>
    //             <div>
    //
    //               <StyledHeart style={{ display: "none" }} />
    //             </div>
    //             <div>
    //               <div className="avaliacoes">
    //                 <div>
    //                   <StyledStart />
    //                   <StyledStart />
    //                   <StyledStart />
    //                   <StyledStart />
    //                   <StyledStart />
    //                   <span>4.8</span>
    //                 </div>
    //                 <div>
    //                   <p>Suas avaliações (1.448)</p>
    //                 </div>
    //               </div>
    //               <div style={{ display: "none" }}>
    //                 <img src={ApoiarIcon} alt="apoio" />
    //                 <div>
    //                   Apoiar <StyledRiArrowDownSLine />
    //                 </div>
    //               </div>
    //             </div>
    //           </ContainerInfo>
    //           <ContainerServicos>
    //             {InstituicaoServicos.length === 0 ? (
    //               <p>Adicione serviços para as pessoas saberem o que vc faz</p>
    //             ) : (
    //               <div>
    //                 {InstituicaoServicos.map((is) => (
    //                   <Servico id={is.id} servico={is} />
    //                 ))}
    //               </div>
    //             )}

    //             <StyledAiOutlinePlusCircle
    //               onClick={() => {
    //                 setIsOpenServicos(true);
    //               }}
    //             />
    //           </ContainerServicos>
    //         </aside>
    //       </Profile>
    //       <Section>
    //         <aside>
    //
    //
    //         </aside>
    //         <section>
    //           <ApoioContainer>
    //             <h1>Doações</h1>
    //             <h2>O que você precisa?</h2>
    //             <div>
    //               <div>Voluntários</div>
    //               <div>Materiais</div>
    //             </div>
    //           </ApoioContainer>

    //         </section>
    //       </Section>
    //     </main>

    //     <Footer />
    //   </Container>
    // </>
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

function Campanha({
  id,
  titulo,
  descricao,
  handlerEditar,
  handlerExcluir,
  img,
}) {
  return (
    <div>
      <aside onClick={() => handlerEditar(id)}>
        <BotaoEditar />
      </aside>
      <aside onClick={() => handlerExcluir(id)}>
        <BotaoExcluir />
      </aside>
      <img src={img ? img : DefaultBanner} alt="campanhas" />
      <h1>{titulo}</h1>
      <p>{descricao}</p>
    </div>
  );
}

function ServicoOption({ servico, id, servicosSel, handler }) {
  let idFound = false;
  let servicosChecked = servicosSel;

  if (!servicosSel) {
    servicosChecked = [];
  }

  servicosChecked.map((s) => {
    if (parseInt(s) === id) {
      idFound = true;
    }
  });

  return (
    <div
      id={id}
      onClick={handler}
      style={idFound ? { backgroundColor: "#CCA583", color: "#FFF" } : {}}
    >
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

function DeletedServices(idServices, idInstitutionServices) {
  const services = idServices; //[1,2,3,4,5,6,7,8,9]
  const institutionServices = idInstitutionServices; //[1,3,5,6,8]

  let deletedServices = services;

  for (let i = 0; i < institutionServices.length; i++) {
    deletedServices.splice(services.indexOf(institutionServices[i]), 1);
  }

  return services;
}

function NewServices(allServices, institutionServices) {
  let arrAllServices = [0,1,2,3,4,5,6,7,8]
  // console.log("vixe " + arrAllServices)
  let arrInstServices = [];
  let arrOffServices = [];

  console.log(institutionServices.map(is => is.id)[2])

  // console.log(institutionServices.map(is => is.servico)[0])

  for (let i = 0; i <  institutionServices.length; i++) {
    const instServices = new Object();

    instServices.id = institutionServices.map(is => is.id)[i];
    instServices.nome = institutionServices.map(is => is.servico)[i];
    instServices.selected = true;

    arrInstServices.push(instServices)
  }

  console.log(arrInstServices)

  // for (let i = 0; i < allServices.length; i++) {
  //   for (let j = 0; j < institutionServices.length; i++) {
  //     if (allServices.map(is => is.id)[i] === institutionServices.map(is => is.id)[j]) {
  //       arrAllServices.splice(j, 1, arrInstServices[j])
  //     }
  //   }
  // }
  arrAllServices.splice(0, 1, arrInstServices[0])
  console.log(arrAllServices)

  

  // for (let i = 0; i <  offServices.length; i++) {
  //   const notSelecServices = new Object();

  //   notSelecServices.id = offServices[i].id;
  //   notSelecServices.nome = offServices[i].servico;
  //   notSelecServices.selected = false;

  //   arrOffServices.push(notSelecServices)
  // }

  // for (let i = 0; i < allServices.length; i++) {
  //   for (let j = 0; j < offServices.length; i++) {
  //     if (allServices[i].id === offServices[j].id) {
  //       arrAllServices.splice(j - 1, 1, arrOffServices[j])
  //     }
  //   }
  // }
}

export default PerfilInstituicao;
