import { HeaderBody, HeaderContainer, Logo, Pesquisar, Menu, MenuItem, BotaoPerfil } from "./styles";
import IconInicio from "../../assets/inicio_icon.svg";
import IconPets from "../../assets/pet_icon.svg";
import IconFavoritos from "../../assets/heart.svg";
import IconMapa from "../../assets/mapa2.svg";
import IconMembro from "../../assets/membro_icon.svg";
import IconLogo from "../../assets/logo.png";
import DefaultProfilePhoto from "../../assets/default_profile_photo.jpg";

function Header() {
    return (
        <HeaderBody>
            <HeaderContainer>
                <Logo>
                    <img src={IconLogo}/>
                </Logo>
                <Pesquisar>
                    <input placeholder="Pesquisar"/>
                </Pesquisar>
                <Menu>
                    <MenuItem>
                        <img class="img-padding" src={IconInicio}/>
                        <p>Início</p>
                        <span class="menu-item-selected"></span>
                    </MenuItem>
                    <MenuItem>
                        <img class="img-padding" src={IconPets}/>
                        <p>Pets</p>
                        <span class="menu-item-selected"></span>
                    </MenuItem>
                    <MenuItem>
                        <img src={IconFavoritos}/>
                        <p>Favoritos</p>
                        <span class="menu-item-selected"></span>
                    </MenuItem>
                    <MenuItem>
                        <img class="img-padding" src={IconMapa}/>
                        <p>Encontrar</p>
                        <span class="menu-item-selected"></span>
                    </MenuItem>
                    <MenuItem>
                        <img src={IconMembro}/>
                        <p class="menu-item-responsive-hidden">Seja Membro</p>
                        <p class="menu-item-responsive-show">Membros</p>
                        <span class="menu-item-selected"></span>
                    </MenuItem>
                </Menu>
                <BotaoPerfil>
                    <div>
                        <img src={DefaultProfilePhoto}/>
                    </div>
                </BotaoPerfil>
            </HeaderContainer>
        </HeaderBody>
    );
}

export default Header;