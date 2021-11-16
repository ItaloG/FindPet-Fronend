import {
  About,
  ActionButtons,
  Container,
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
  Profile,
  ProfileBody,
  ProfilePhoto,
  PetFavoriteCount,
  IconFavorite,
  SaveChanges,
} from "./styles";
import DefaultBanner from "../../assets/default_banner_pets.png";
import DefaultPetPhoto from "../../assets/default-pet-photo.jpg";
import Banner from "../../assets/banner3.png"

function PerfilPet(props) {
  let editable = false;

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
                  <img src={DefaultPetPhoto} alt="" />
                </div>
              </ProfilePhoto>
              {editable && (
                <EditProfilePhoto>
                  <IconeCamera />
                </EditProfilePhoto>
              )}
              <PetInfo>
                <div>
                  <h1>Bobby</h1>
                  {!editable && <IconFavoriteOutline />}
                  {editable && <IconEdit/>}
                </div>
                <div>
                  <IconHome />
                  <h4>Instituto Luísa Mell</h4>
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
                    <IconFavorite />
                    <h4>Favoritada 226 vezes</h4>
                  </PetFavoriteCount>
                </>
              )}
            </div>
          </About>
          {editable && (
            <SaveChanges>
              <button>Salvar Alterações</button>
            </SaveChanges>
          )}
          <ProfileBody>
            <div>
              <div>
                <PetAbstract>
                  {editable && (
                    <>
                      <h2>Apresentação do Pet</h2>
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
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.”
                    </p>
                  )}
                </PetAbstract>
                <PetDatasheet>
                  <h2>Informações Importantes</h2>
                  <table>
                    <tr>
                      <td>Responsável</td>
                      <td>
                        Instituto Luísa Mell
                        {editable && (
                          <button>
                            <IconLock />
                          </button>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>No abrigo há</td>
                      <td>
                        {!editable && "2 anos"}
                        {editable && <input type="text" value="2 anos" />}
                      </td>
                    </tr>
                    <tr>
                      <td>No FindPet há</td>
                      <td>
                        3 meses (12/02/2019)
                        {editable && (
                          <button>
                            <IconLock />
                          </button>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Idade</td>
                      <td>
                        {!editable && "4 anos"}
                        {editable && <input type="text" value="4 anos" />}
                      </td>
                    </tr>
                    <tr>
                      <td>Sexo</td>
                      <td>
                        {!editable && "Fêmea"}
                        {editable && (
                          <select>
                            <option>Selecione uma opção</option>
                            <option selected>Fêmea</option>
                            <option>Macho</option>
                          </select>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Raça</td>
                      <td>
                        {!editable && "Persa"}
                        {editable && <input type="text" value="Persa" />}
                      </td>
                    </tr>
                    <tr>
                      <td>Porte</td>
                      <td>
                        {!editable && "Pequeno"}
                        {editable && (
                          <select>
                            <option>Selecione uma opção</option>
                            <option selected>Pequeno</option>
                            <option>Médio</option>
                            <option>Grande</option>
                          </select>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Pêlo</td>
                      <td>
                        {!editable && "Curto"}
                        {editable && (
                          <select>
                            <option>Selecione uma opção</option>
                            <option>Curto</option>
                            <option>Médio</option>
                            <option selected>Longo</option>
                          </select>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Cor</td>
                      <td>
                        {!editable && "Preto"}
                        {editable && (
                          <select>
                            <option>Selecione uma opção</option>
                            <option selected>Preto</option>
                            <option>Branco</option>
                            <option>Amarelo</option>
                            <option>Cinza</option>
                            <option>Bicolor</option>
                            <option>Tricolor</option>
                            <option>Marrom</option>
                          </select>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Energia</td>
                      <td>
                        {!editable && "Moderada"}
                        {editable && (
                          <select>
                            <option>Selecione uma opção</option>
                            <option>Baixa</option>
                            <option selected>Moderada</option>
                            <option>Alta</option>
                          </select>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Boa com</td>
                      <td>
                        {!editable && "Crianças"}
                        {editable && (
                          <select>
                            <option>Selecione uma opção</option>
                            <option selected>Crianças</option>
                            <option>Outros pets</option>
                            <option>Crianças e outros pets</option>
                          </select>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Necessidade especial</td>
                      <td>
                        {!editable && "Nenhuma"}
                        {editable && (
                          <select>
                            <option>Selecione uma opção</option>
                            <option selected>Nenhuma</option>
                            <option>Deficiência visual</option>
                            <option>Deficiência auditiva</option>
                            <option>Deficiência física</option>
                            <option>Síndrome de Down</option>
                            <option>Outro</option>
                          </select>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Gastos mensais</td>
                      <td>
                        {!editable && "R$197.86"}
                        {editable && <input type="text" value="R$197.86" />}
                      </td>
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
                  {editable && (
                    <textarea>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </textarea>
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
