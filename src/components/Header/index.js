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
import { useRef, useState } from "react";
import { getTypeUser, getUserId, signOut } from "../../services/security";

function Header() {
  let history = useHistory();

  const [search, setSearch] = useState([]);

  const user = useRef(JSON.parse(localStorage.getItem("@user")));

  const handleInputSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSair = () => {
    signOut();

    return history.push("/");
  };

  const handlePerfil = () => {
    const tipoUsuario = getTypeUser();
    const id = getUserId();

    if (tipoUsuario === "comum" && id) {
      return history.push("/perfil/usuario/" + id);
    } else if (tipoUsuario === "instituicao") {
      return history.push("/perfil/instituicao/" + id);
    } else {
      return history.push("/home");
    }
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
        <div onClick={handlePerfil}>
          <img
            src={
              user.current.url_foto_perfil
                ? user.current.url_foto_perfil
                : DefaultProfilePhoto
            }
            alt="perfil"
          />
        </div>
        <IconExit onClick={handleSair} />
      </Profile>
    </Container>
  );
}

export default Header;
