import { useEffect, useState } from "react";
import Slider from "../../components/Slider";
// import FotoPadrao from "../../assets/default_profile_photo.jpg";
// import BannerDefault from "../../assets/default_banner.png"
import { api } from "../../services/api";

import { Container } from "../../GlobalStyles";
import CampaignCard from "./components/Cards/CampaignCard";
import InstitutionCard from "./components/Cards/InstitutionCard";
import LostPetCard from "./components/Cards/LostPetCard";
import {
  FeedBox,
  FeedContainer,
  IconAdd,
  IconSave,
  IconShare,
  LeftMenu,
  LeftMenuItem,
  List,
  MyCampaign,
  MyPet,
  RightMenu,
} from "./styles";

function Feed() {
  const [instituicoes, setInstituicoes] = useState([]);
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    const loadInstituicoes = async () => {
      try {
        const response = await api.get("/instituicoes");
        setInstituicoes(response.data.institutions);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    loadInstituicoes();
  }, []);

  useEffect(() => {
    const loadAnimais = async () => {
      try {
        const response = await api.get("/animais");
        setAnimais(response.data);
        console.log(response.data)
        console.log(response.data.map(data => data.Institution.id))
      } catch (error) {
        console.log(error.response.data);
      }
    };

    loadAnimais();
  }, []);

  const filterAnimalsByInstitution = (animalInstitutionId, institutionId) => {
      if (animalInstitutionId === institutionId) {
        return institutionId
      }
  }

  const handleInstitutionAnimals = (animalList, institutionId) => {
    //   let animals = [];
    //   let institutions = [];
      
    //   animals = animalList.map(animal => animal.id);
    //   institutions = animalList.map(animal => animal.Institution.id);
      
    //   console.log('animais: ' + animals)
    //   console.log('instituições: ' + institutions)

     console.log(animalList.filter(filterAnimalsByInstitution(animalList[0].Institution.id, 1)))
      
  }

  return (
    <>
      <Container>
        <FeedContainer>
          <LeftMenu>
            <List border="true">
              <LeftMenuItem>
                <p>Animais desaparecidos</p>
                <label>
                  <IconAdd />
                  380
                </label>
              </LeftMenuItem>
              <LeftMenuItem>
                <p>Animais para adoção</p>
                <label>
                  <IconAdd />
                  380
                </label>
              </LeftMenuItem>
              <LeftMenuItem>
                <p>Campanhas</p>
                <label>
                  <IconAdd />
                  380
                </label>
              </LeftMenuItem>
              <LeftMenuItem>
                <p>Instituições</p>
                <label>
                  <IconAdd />
                  380
                </label>
              </LeftMenuItem>
            </List>
          </LeftMenu>
          <FeedBox>
            <Slider />
            {instituicoes.map(instituicao => (
                <InstitutionCard key={instituicao.id} nome={instituicao.nome} foto={instituicao.url_foto_perfil} descricao={instituicao.descricao} animais={instituicao.id === 1 ? animais : false}/>
            ))}
            {/* <CampaignCard /> */}
            {/* <LostPetCard /> */}
          </FeedBox>
          <RightMenu>
            <List border="true">
              <h3>Meus pets</h3>
              <MyPet>
                <img
                  src="https://images.pexels.com/photos/2820134/pexels-photo-2820134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                />
                <p>Paçoca</p>
                <label>127 favoritos</label>
              </MyPet>
              <MyPet>
                <img
                  src="https://images.pexels.com/photos/2820134/pexels-photo-2820134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                />
                <p>Fofurinha</p>
                <label>18 favoritos</label>
              </MyPet>
              <MyPet>
                <img
                  src="https://images.pexels.com/photos/2820134/pexels-photo-2820134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                />
                <p>Abel</p>
                <label>12 favoritos</label>
              </MyPet>
            </List>
            <List>
              <h3>Minhas campanhas</h3>
              <MyCampaign>
                <p>Evento de castração gatos e cach</p>
                <div>
                  <label>
                    <IconShare />
                    380
                  </label>
                  <label>
                    <IconSave /> 12
                  </label>
                </div>
              </MyCampaign>
              <MyCampaign>
                <p>Evento de castração gatos e cach</p>
                <div>
                  <label>
                    <IconShare />
                    30
                  </label>
                  <label>
                    <IconSave /> 12
                  </label>
                </div>
              </MyCampaign>
            </List>
          </RightMenu>
        </FeedContainer>
      </Container>
    </>
  );
}

export default Feed;
