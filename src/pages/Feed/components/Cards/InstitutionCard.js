import {
  Actions,
  Box,
  CardBox,
  CardHeader,
  Description,
  IconFavoriteBorder,
  IconLink,
  IconMore,
  IconShare,
  MoreOptionsButton,
  PetBox,
  ProfilePhoto,
  Title,
} from "./styles";
import DefaultProfilePhoto from "../../../../assets/default_profile_photo.jpg";

function InstitutionCard({ nome, foto, descricao, animais }) {
  return (
    <CardBox>
      <CardHeader>
        <ProfilePhoto>
          <img src={foto ? foto : DefaultProfilePhoto} alt="" />
        </ProfilePhoto>
        <Title>
          <h2>{nome}</h2>
          <small>12:23</small>
        </Title>
        <MoreOptionsButton>
          <button>
            <IconMore />
          </button>
        </MoreOptionsButton>
      </CardHeader>
      <Description>
        <p>
          {descricao
            ? descricao
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
        </p>
      </Description>
      <Box>
        <h2>Pets disponíveis para adoção</h2>
        {animais ? (
          animais.map((animal) => (
            <PetBox>
              <img src={animal.url_foto_perfil} alt="" />
              <div>
                <h3>{animal.nome}</h3>
                <small>SRD</small>
              </div>
            </PetBox>
          ))
        ) : (
          <PetBox>
            <img
              src="https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <div>
              <h3>"Paçoca"</h3>
              <small>SRD</small>
            </div>
          </PetBox>
        )}
      </Box>
      <Actions>
        <div>
          <IconFavoriteBorder />
          <button>Favoritar</button>
        </div>
        <div>
          <IconLink />
          <button>Ver Perfil</button>
        </div>
        <div>
          <IconShare />
          <button>Compartilhar</button>
        </div>
      </Actions>
    </CardBox>
  );
}

export default InstitutionCard;
