import styled from 'styled-components';

export const HeaderBody = styled.div `
    font-family: 'Montserrat';
    display: flex;
    justify-content: center;
    width: 100%;
    height: 70px;
    background-color: white;
    /* box-shadow: -1px 2px 3px #c6c6c6; */
    margin-bottom: 80px;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 100%;
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    width: auto;
    height: 100%;

    > img {
        width: 180px;
        height: auto;
    }
`;

export const Pesquisar = styled.div`
    display: flex;
    align-items: center;
    width: auto;
    height: 100%;

    > input {
        width: 250px;
        font-size: 14px;
        padding: 6px;
        background-color: white;
        border: solid 1.5px #C6C6C6;
        border-radius: 5px;
        color: gray;
        font-weight: medium;
        padding-left: 15px;
        font-family: 'Montserrat';

        ::placeholder {
            color: #C6C6C6;
            font-weight: medium;
        }
    }

    > button {
        padding: 6px;
        padding-right: 12px;
        padding-left: 12px;
        font-size: 14px;
        background-color: #C98822;
        color: white;
        border: solid 1.5px #C98822;
        border-radius: 5px;
        margin-left: 5px;
        font-family: 'Montserrat';
        font-weight: bold;
    }
`;

export const Menu = styled.div`
    font-weight: bold;
    display: flex;
    width: auto;
    height: 100%;
`;

export const MenuItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 100%;
    font-size: 16px;
    font-weight: bold;
    margin-left: 20px;
    margin-right: 20px;
    color: #92765E;
    font-family: 'Montserrat';

    :hover {
        cursor: pointer;
        color: var(--primary);
    }

    /* Media Queries */
    p.menu-item-responsive-show {
        display: none;
    }

    @media(max-width: 1000px) {
        p.menu-item-responsive-hidden {
            display: none;
        }

        p.menu-item-responsive-show {
            display: flex;
        }
    }
`;

export const BotaoPerfil = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 100%;

    > div {
        width: 40px;
        height: 40px;
        background-color: brown;
        border-radius: 50%;

        > img {
            width: 100%;
            height: 100%;
            border-radius: 100%;
        } 
    }
`;