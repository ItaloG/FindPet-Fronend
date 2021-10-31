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
} from "./styles";

import ApoiarIcon from "../../assets/apoiar.svg";
import DefaultBanner from "../../assets/default_banner.png";
import DefaultProfile from "../../assets/default_profile_photo.jpg";
import Footer from "../../components/Footer";
import BotaoEditar from "../../components/BotaoEditar";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Modal from "../../components/Modal";
import { useParams } from "react-router";

function PerfilInstituicao() {

  const { instituicaoId } = useParams();
  const [instituicao, setInstituicao] = useState([]);
  const [servicos, setServicos] = useState([]);

  const [servicosSel, setServicosSel] = useState([]);


  const [InstituicaoServicos, setInstituicaoServicos] = useState([]);

  const [banner, setBanner] = useState("");
  const [perfil, setPerfil] = useState("");

  const [image, setImage] = useState(null);
  const [imagePerfil, setImagePerfil] = useState(null);

  const [isOpenservicos, setIsOpenServicos] = useState(false);

  useEffect(() => {
    const loadInstituicao = async () => {
      try {
        const response = await api.get(`/instituicoes/${instituicaoId}`);

        console.log(response.data);
        setInstituicao(response.data);
        setInstituicaoServicos(response.data.Services)
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

  const handleClose = () => {
    setServicosSel([])
    setIsOpenServicos(false);
  };

  const handleServicoSel = (e) => {
    setServicosSel([...servicosSel, e.target.id])
  }

  const handleSubmitServicos = async () => {
    console.log("toaqui");
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

  console.log(InstituicaoServicos);
  console.log(servicosSel);

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
              <div>
                <FotoPerfil>
                  <img src={instituicao.url_foto_perfil ? perfil : DefaultProfile} alt="profile" />
                  <label htmlFor="profile"><StyledMdAddAPhoto /></label>
                  <input type="file" name="profile" id="profile" accept="image/*" onChange={handlePerfil} />
                </FotoPerfil>
                <div>
                  <h1>Instituto Luísa Mell</h1>
                  <ContainerServicos>
                    {InstituicaoServicos.length === 0 ?
                      (<p>Adicione serviços para as pessoas saberem o que vc faz</p>)
                      :
                      <div>
                        {InstituicaoServicos.map((is) => (
                          <Servico id={is.id} servico={is.servico} />
                        ))}
                      </div>
                    }

                    <StyledAiOutlinePlusCircle onClick={() => {
                      setIsOpenServicos(true);
                    }} />
                  </ContainerServicos>
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
            </aside>
          </Profile>
          <Section>
            <aside>
              <div className="contatos">
                <h1>Contato</h1>
                <div>
                  <StyledMdEmail />
                  <p>contato@instituitoluisamell.com</p>
                </div>
                <div>
                  <StyledFaMapMarkerAlt />
                  <p>Rua Etc e Tal, nº2365 - 06631-000 SP</p>
                </div>
                <div>
                  <StyledFaPhoneAlt />
                  <p>4707-0000</p>
                </div>
                <div>
                  <StyledMdPhoneIphone />
                  <p>(11) 98265-0000</p>
                </div>
              </div>
              <div className="funcionarios">
                <div>
                  <h1>Nossos colaboradores</h1>
                  <div><span>+</span> Novo Colaborador</div>
                </div>
                <Colaboradores>
                  <PerfilColaborador />
                  <PerfilColaborador />
                  <PerfilColaborador />
                  <PerfilColaborador />
                  <PerfilColaborador />
                  <PerfilColaborador />
                  <PerfilColaborador />
                  <PerfilColaborador />
                  <PerfilColaborador />
                  <PerfilColaborador />

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
                  <div><span>+</span>Nova Camapnha</div>
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
          {isOpenservicos && (
            <Modal title="serviços" handleClose={handleClose}>
              <ContainerTodosServicos>

                {servicos.map((s) => (
                  <Servico
                    handler={handleServicoSel}
                    servicosSel={servicosSel}
                    id={s.id}
                    servico={s.servico} />
                ))}
                <button onClick={handleSubmitServicos}>Salvar</button>
              </ContainerTodosServicos>
            </Modal>
          )}
        </main>
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

function PerfilColaborador() {
  return (
    <ContainerPerfilColaborador>
      <aside>
        <BotaoEditar />
      </aside>
      <img src={DefaultProfile} alt={"colaborador"} />
      <h3>nome</h3>
      <p>Marketing</p>
    </ContainerPerfilColaborador>
  );
}

function Servico({ servico, handleDeleteServico, handler, id, servicosSel }) {

  let idFound = false

  // servicosSel.map((s) => {
  //   if (parseInt(s) === id) {
  //     idFound = true;
  //   }
  // })


  return (
    <div
      id={id}
      onClick={handler}
      style={idFound ? { backgroundColor: "#CCA583", color: "#FFF" } : {}}>
      {servico}
      {handleDeleteServico ?
        (<span>&times;</span>) :
        ""}
    </div>
  );
}

export default PerfilInstituicao;
