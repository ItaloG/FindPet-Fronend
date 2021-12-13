import {
  About,
  ActionButtons,
  Container,
  Cover,
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
  Profile,
  ProfileBody,
  ProfilePhoto,
} from "./styles";
import DefaultBanner from "../../assets/default_banner_pets.png";
import DefaultPetPhoto from "../../assets/default-pet-photo.jpg";
import Banner from "../../assets/banner3.png";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams, useHistory } from "react-router";

function PerfilPet(props) {
  let history = useHistory();
  const { animalId } = useParams();
  const [animal, setAnimal] = useState([]);

  useEffect(() => {
    const loadAnimal = async () => {
      try {
        const response = await api.get(`/animais/${animalId}`);

        setAnimal(response.data);
      } catch (error) {
        console.error(error);
        alert(error.response.data.error);
      }
    };

    loadAnimal();
  }, []);

  return (
    <>
      <Container>
        <Profile>
          <Cover>
            <img src={DefaultBanner} alt="" />
          </Cover>
          <About>
            <div>
              <ProfilePhoto>
                <div>
                  <img src={animal.url_foto_perfil} alt="" />
                </div>
              </ProfilePhoto>
              <PetInfo>
                <div>
                  <h1>{animal.nome}</h1>
                  <IconFavoriteOutline />
                </div>
                <div>
                  <IconHome />
                  <h4>{animal.Institution ? animal.Institution.nome : ""}</h4>
                </div>
              </PetInfo>
              <ActionButtons>
                <button>Adotar</button>
                <button onClick={() => history.push(`/instituicao/${animal.Institution.id}`)}>Ver ONG</button>
              </ActionButtons>
            </div>
          </About>
          <ProfileBody>
            <div>
              <div>
                <PetAbstract>
                  <p>“{animal.personalidade}”</p>
                </PetAbstract>
                <PetDatasheet>
                  <h2>Informações Importantes</h2>
                  <table>
                    <tr>
                      <td>Responsável</td>
                      <td>
                        {animal.Institution ? animal.Institution.nome : ""}
                      </td>
                    </tr>
                    <tr>
                      <td>No abrigo há</td>
                      <td>2 anos</td>
                    </tr>
                    <tr>
                      <td>No FindPet há</td>
                      <td>
                        3 meses (12/02/2019)
                      </td>
                    </tr>
                    <tr>
                      <td>Tipo</td>
                      <td>{animal.TypeAnimal ? animal.TypeAnimal.nome : ""}</td>
                    </tr>
                    <tr>
                      <td>Idade</td>
                      <td>{animal.idade + " anos"}</td>
                    </tr>

                    <tr>
                      <td>Necessidade especial</td>
                      <td>"Nenhuma"</td>
                    </tr>
                  </table>
                </PetDatasheet>
              </div>
              <div>
                <PetGallery>
                  <h2>Fotos</h2>
                  <div>
                    <div>
                      <button>
                        <IconPrevious />
                      </button>
                      <button>
                        <IconNext />
                      </button>
                    </div>
                    <div>
                      <img src={Banner} alt="" />
                    </div>
                  </div>
                </PetGallery>
                <PetHistory>
                  <h2>Histórico</h2>

                  <p>{animal.historia}</p>
                </PetHistory>
              </div>
            </div>
          </ProfileBody>
        </Profile>
      </Container>
    </>
  );
}

export default PerfilPet;
