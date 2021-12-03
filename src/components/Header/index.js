import {
  Container,
  IconSearch,
  Logo,
  Menu,
  MenuItem,
  Profile,
  Search,
  IconExit,
} from "./styles";
import LogoImg from "../../assets/logo-findpet.svg";
import DefaultProfilePhoto from "../../assets/default_profile_photo.jpg";
import { useHistory } from "react-router";
import { useState } from "react";
import { signOut } from "../../services/security";

function Header() {
  let history = useHistory();

  const [search, setSearch] = useState([]);

  const handleInputSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSair = () => {
    signOut();

    return history.push("/")
  };

  return (
    <Container>
      <Logo onClick={() => history.push("/home")}>
        <img src={LogoImg} alt="FindPet" />
      </Logo>

      <Menu>
        <MenuItem
          onClick={() => {
            history.push("/home");
          }}
        >
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
        <MenuItem
          onClick={() => {
            history.push("/favoritos");
          }}
        >
          {/* <IconFavorite/> */}
          <p>Favoritos</p>
        </MenuItem>
        <MenuItem
          onClick={() => {
            history.push("/mapa");
          }}
        >
          {/* <IconMap/> */}
          <p>Mapa</p>
        </MenuItem>
        <MenuItem>
          {/* <IconMember/> */}
          <p>Seja Membro</p>
        </MenuItem>
      </Menu>

      <Search>
        <input
          type="text"
          onChange={handleInputSearch}
          placeholder="Encontre pessoas e instituições..."
        />
        {/* <button>Buscar</button> */}
        <IconSearch />
        {/* <SearchBox letters={search}/> */}
      </Search>

      <Profile>
        <div>
          <img src={DefaultProfilePhoto} alt="perfil" />
        </div>
        <IconExit onClick={handleSair} />
      </Profile>
    </Container>
  );
}

export default Header;

{
  /* <HeaderContainer>
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
      </HeaderContainer> */
}
