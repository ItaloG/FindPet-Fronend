import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";
import { MdReportProblem } from "react-icons/md";

/*
marrom escuro: #654D41
marrom claro: #997E68
amarelo: #C98822
amarelo 2: #EEBB5B
cinza (textos): #949090
cinza claro: #B9B9B9
*/

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: pink;
    position: fixed;
    z-index: 999;
`;

export const Banner = styled.div`
    width: 70vw;
    height: 100%;
    background-color: #654D41;
    > :first-child {
        width: 100%;
        height: 8%;
        padding-left: 1%;
        padding-top: 1%;
    }
    > :last-child {
        display: flex;
        align-items: center;
        width: 100%;
        height: 92%;
        > img {
            width: 100%;
            height: auto;
        }
    }
`;

export const Descricao = styled.div`
    width: 30vw;
    height: 100%;
    background-color: #fff;
`;

export const Perfil = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    padding-top: 5%;
    padding-left: 5%;
    > :first-child {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: solid 3px #EEBB5B;
        > img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: solid 3px #C98822;
        }
    }
    > :last-child {
        padding-left: 3%;
        padding-top: 1%;
        > h3 {
            color: #C98822;
        }
        > small {
            color: #B9B9B9;
        }
    }
`;

export const Postagem = styled.div`
    width: 100%;
    height: 75%;
    padding: 0 5%;
    > h3 {
        color: #C98822;
    }
    > p {
        color: #949090;
        padding-top: 4%;
        > span {
            color: #C98822;
            font-weight: bold;
        }
    }
`;

export const Footer = styled.div`
    width: 100%;
    height: 10%;
    border-top: solid 1px #B9B9B9;
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 0 5%;
`;

export const IconeFechar = styled(RiCloseLine)`
    width: 45px;
    height: 45px;
    color: #fff;
    > :hover {
        cursor: pointer;
    }
`;

export const IconeDenuncia = styled(MdReportProblem)`
    width: 25px;
    height: 25px;
    color: #C98822;
`;