import styled from "styled-components";
import DefaultProfile from '../../assets/default_profile_photo.jpg'
import BotaoEditar from "../BotaoEditar";

export const Perfil = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: max-content;


    > aside {
        position: absolute;
        margin-top: -115px;
        margin-left: 80px;
    }

    > h3 {
        font-size: 22px;
        color: var(--primary);
    }

    > p {
        font-size: 16px;
        color: var(--gray);
    }

    > img {
        width: 110px;
        height: 110px;
        border-radius: 50%;
    }
`;

function MiniPerfilPets() {

    return (
        <Perfil>
            <aside>
                <BotaoEditar/>
            </aside>
            <img src={DefaultProfile} alt={"pet"} />
            <h3>Nome do Pet</h3>
            <p>Raça</p>
        </Perfil>
    );
};

export default MiniPerfilPets;