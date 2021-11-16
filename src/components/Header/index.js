import { Body, BotaoPerfil, Box, Container, IconFavorite, IconHome, IconMap, IconMember, IconPet, IconSearch, Logo, Menu, MenuItem, Profile, SearchBox } from "./styles"
import LogoImg from "../../assets/logo-findpet.svg";
import DefaultProfilePhoto from "../../assets/default_profile_photo.jpg";
import { useHistory } from "react-router";

function Header() {
  let history = useHistory();

  return (
    <Container>
      <Logo>
        <img src={LogoImg} alt="FindPet" />
      </Logo>

      <Menu>
        <MenuItem>
        {/* <IconHome/> */}
          <p>Feed</p>
        </MenuItem>
        <MenuItem>
        {/* <IconPet/> */}
          <p>Pets</p>
        </MenuItem>
        {/* <MenuItem>
          <p>Instituições</p>
        </MenuItem> */}
        <MenuItem>
        {/* <IconFavorite/> */}
          <p>Favoritos</p>
        </MenuItem>
        <MenuItem>
        {/* <IconMap/> */}
          <p>Mapa</p>
        </MenuItem>
        <MenuItem>
        {/* <IconMember/> */}
          <p>Seja Membro</p>
        </MenuItem>
      </Menu>

      <SearchBox>
        <input type="text" placeholder="Encontre pessoas e instituições..."/>
        {/* <button>Buscar</button> */}
        <IconSearch/>
      </SearchBox>

      <Profile>
          <div>
            <img src={DefaultProfilePhoto} alt="perfil"/>
          </div>
        </Profile>
    </Container>
  );
}

export default Header;

{/* <HeaderContainer>
        <Logo>
          <img src={AppLogo} alt="logo"/>
        </Logo>
        <Pesquisar>
          <input placeholder="Pesquisar" />
          <button>Buscar</button>
        </Pesquisar>
        <Menu>
          <MenuItem onClick={() => {
            history.push("/home")
          }}>

            <p>feed</p>
          </MenuItem>
          <MenuItem >
            
            <p>pets</p>
          </MenuItem>
          <MenuItem onClick={() => {
            history.push("/favoritos")
          }}>
            
            <p>favoritos</p>
          </MenuItem>
          <MenuItem onClick={() => {
            history.push("/mapa")
          }}>
            
            <p>encontrar</p>
          </MenuItem>
          <MenuItem>
            
            <p className="menu-item-responsive-hidden">seja membro</p>
            <p className="menu-item-responsive-show">membros</p>
          </MenuItem>
        </Menu>
        <BotaoPerfil>
          <div>
            <img src={DefaultProfilePhoto} alt="perfil"/>
          </div>
        </BotaoPerfil>
      </HeaderContainer> */}
