import { Actions, CardBox, CardHeader, Description, IconMore, IconSave, IconShare, Line, MoreOptionsButton, Photo, ProfilePhoto, Title } from "./styles";
import DefaultProfilePhoto from "../../../../assets/default_profile_photo.jpg";
import DefaultBanner from "../../../../assets/banner3.png"

function CampaignCard() {
  return (
    <CardBox>
      <CardHeader>
          <ProfilePhoto>
              <img src={DefaultProfilePhoto} alt="" />
          </ProfilePhoto>
          <Title>
            <h2>Med Center Pet</h2>
            <small>12:23</small>
          </Title>
          <MoreOptionsButton>
            <button><IconMore/></button>
          </MoreOptionsButton>
      </CardHeader>
      <Description>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </Description>
      <Photo>
          <img src={DefaultBanner} alt="" />
      </Photo>
      <Line/>
      <Actions length={2}>
          <div>
              <IconSave/>
              <button>Salvar</button>
          </div>
          <div>
              <IconShare/>
              <button>Compartilhar</button>
          </div>
      </Actions>
    </CardBox>
  );
}

export default CampaignCard;
