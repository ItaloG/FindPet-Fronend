import {
  HeaderBody,
  HeaderContainer,
  Logo,
  Pesquisar,
  Menu,
  MenuItem,
  BotaoPerfil,
} from "./styles";
import AppLogo from "../../assets/logo-findpet.svg";
import DefaultProfilePhoto from "../../assets/default_profile_photo.jpg";
import { useHistory } from "react-router";

function Header() {
  let history = useHistory();

  return (
    <HeaderBody>
      <HeaderContainer>
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
      </HeaderContainer>
    </HeaderBody>
  );
}

export default Header;
