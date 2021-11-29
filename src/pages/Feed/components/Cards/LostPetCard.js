import { Actions, CardBox, CardHeader, Description, IconMore, IconShare, IconWhatsApp, Line, LostPetLabel, MoreOptionsButton, Photo, ProfilePhoto, Title } from "./styles";
import DefaultProfilePhoto from "../../../../assets/default_profile_photo.jpg";
import DefaultBanner from "../../../../assets/banner3.png"

function LostPetCard() {
  return (
    <CardBox>
      <CardHeader>
          <ProfilePhoto>
              <img src={DefaultProfilePhoto} alt="" />
          </ProfilePhoto>
          <Title>
            <h2>Camila Ferreira</h2>
            <small>12:23</small>
          </Title>
          <MoreOptionsButton>
            <button><IconMore/></button>
          </MoreOptionsButton>
      </CardHeader>
      <Description>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </Description>
      <LostPetLabel>
          <h2>DESAPARECIDO</h2>
      </LostPetLabel>
      <Photo>
          <img src="https://images.pexels.com/photos/2820134/pexels-photo-2820134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
      </Photo>
      <Line/>
      <Actions length={2}>
          <div>
              <IconWhatsApp/>
              <button>Contato</button>
          </div>
          <div>
              <IconShare/>
              <button>Compartilhar</button>
          </div>
      </Actions>
    </CardBox>
  );
}

export default LostPetCard;
