import styled from 'styled-components';

export const HeaderBody = styled.div `
    display: flex;
    justify-content: center;
    width: 100%;
    height: 75px;
    position: absolute;
    top: 0;
    z-index: 99;
    background-color: var(--headerColor);
    box-shadow: -1px 2px 3px #cfcdca;
`;

export const HeaderContainer = styled.div`
    display: flex;
    width: 1200px;
    height: 100%;
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    width: 10%;
    height: 100%;

    > img {
        width: 65px;
        height: 65px;
        margin-top: 5px;
    }
`;

export const Pesquisar = styled.div`
    width: 30%;
    height: 100%;

    > input {
        width: 250px;
        font-size: 16px;
        padding: 10px;
        background-color: #fff3e3;
        border: 0px;
        box-shadow: -1px 1px 2px #c7c4c1;
        border-radius: 5px;
        color: var(--logoColor);
        font-weight: bold;
        margin-top: 18px;
        padding-left: 20px;

        ::placeholder {
            color: var(--logoColor);
            font-style: italic;
        }
    }
`;

export const Menu = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
`;

export const MenuItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    height: 100%;
    font-size: 16px;
    font-weight: bold;
    color: var(--logoColor);

    > img {
        width: 40px;
        height: 40px;
        margin-top: 2px;
        filter: invert(28%) sepia(63%) saturate(3490%) hue-rotate(39deg) brightness(92%) contrast(101%);
    }

    > img.img-padding {
        padding: 3px;
    }

    > p {
        margin-top: 4px;
    }

    > span.menu-item-selected {
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.3s linear;
        width: 100%;
        height: 5px;
        margin-top: 5px;
        border-radius: 10px;
        background-color: var(--primary);
    }

    :hover {
        cursor: pointer;
        color: var(--primary);
    }

    :hover > img {
        filter: invert(53%) sepia(67%) saturate(503%) hue-rotate(358deg) brightness(93%) contrast(94%);
    }

    :hover > span.menu-item-selected {
        visibility: visible;
        opacity: 1;
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
    width: 10%;
    height: 100%;

    > div {
        width: 50px;
        height: 50px;
        background-color: brown;
        border-radius: 50%;
        margin-top: 12px;

        > img {
            width: 100%;
            height: 100%;
            border-radius: 100%;
        } 
    }
`;