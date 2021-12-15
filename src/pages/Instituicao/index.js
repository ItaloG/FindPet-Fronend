import {
  Profile,
  Container,
  About,
  Cover,
  IconFavoriteOutline,
  PetInfo,
  ProfileBody,
  ProfilePhoto,
  PetFavoriteCount,
  Contact,
  IconEmail,
  IconPlace,
  IconTelephone,
  IconPhone,
  Employees,
  Campaigns,
  Description,
  Pets,
  Services,
  IconStar,
} from "./styles";

import DefaultBanner from "../../assets/default_banner.png";
import DefaultProfile from "../../assets/default_profile_photo.jpg";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router";
import Employee from "./Components/Employee";
import Campaign from "./Components/Campaign";
import Pet from "./Components/Pet";
import Donation from "./Components/Donation";
import InstitutionServices from "./Components/InstitutionServices";

function PerfilInstituicao() {
  const { instituicaoId } = useParams();
  const [instituicao, setInstituicao] = useState([]);
  const [InstituicaoServicos, setInstituicaoServicos] = useState([]);
  const [instituicaoEndereco, setInstituicaoEndereco] = useState([]);
  const [instituicaoTelefones, setInstituicaoTelefones] = useState([]);
  const [colaboradores, setColaboradores] = useState([]);
  const [campanhas, setCampanhas] = useState([]);
  const [animais, setAnimais] = useState([]);
  const [servicos, setServicos] = useState([]);
  const [banner, setBanner] = useState("");
  const [perfil, setPerfil] = useState("");

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
        console.log(animais)
      } catch (error) {
        console.error(error);
        alert(error.response.data.error);
      }
    };

    loadAnimais();
  }, []);

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

  return (
    <>
      <Container>
        <Profile>
          <Cover>
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

              <PetInfo>
                <div>
                  <h1 style={instituicao.nome ? instituicao.nome.length >= 35 ? {fontSize:"1.7rem"} : {} : {}}>{instituicao.nome}</h1>
                  <IconFavoriteOutline />
                </div>
                <div></div>
              </PetInfo>

              <PetFavoriteCount>
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
                <h4>4.9</h4>
                <small>(126)</small>
              </PetFavoriteCount>
            </div>
          </About>
          <ProfileBody>
            <div>
              <div>
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
                      {t.numero.length == 9 ? <IconTelephone /> : <IconPhone />}
                      <p>{t.numero}</p>
                    </div>
                  ))}
                </Contact>

                <Services>
                  <h2>Serviços</h2>
                  <div>
                    {InstituicaoServicos.length == 0 ? (
                      <p>Não há serviços para mostrar.</p>
                    ) : (
                      <p>Nós oferecemos:</p>
                    )}
                  </div>
                  <div>
                    {InstituicaoServicos.map((s) => (
                      <InstitutionServices
                        key={s.id}
                        serviceId={s.id}
                        title={s.servico}
                        editable={true}
                      />
                    ))}
                  </div>
                </Services>

                <Employees>
                  <div>
                    <h2>Nossos Colaboradores</h2>
                  </div>

                  {colaboradores.length === 0 ? (
                    <p>Não há colaboradores para mostrar.</p>
                  ) : (
                    <div>
                      {colaboradores.map((c, index) => (
                        <Employee
                          key={index}
                          id={c.id}
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
                {instituicao.descricao ? (
                  instituicao.descricao.length == 0 ? (
                    <span></span>
                  ) : (
                    <Description>
                      <p>{instituicao.descricao}</p>
                    </Description>
                  )
                ) : (
                  <span></span>
                )}

                <Campaigns>
                  <div>
                    <h2>Campanhas</h2>
                  </div>

                  {campanhas.length === 0 ? (
                    <p>Não há campanhas para mostrar.</p>
                  ) : (
                    <div>
                      {campanhas.map((c, index) => (
                        <Campaign
                          key={index}
                          id={c.id}
                          titulo={c.titulo}
                          img={c.url_foto}
                          descricao={c.descricao}
                          horaInicio={c.hora_inicio}
                          dataInicio={c.data_inicio}
                        />
                      ))}
                    </div>
                  )}
                </Campaigns>
                <Pets>
                  <div>
                    <h2>Animais para adoção</h2>
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
    </>
  );
}

export default PerfilInstituicao;
