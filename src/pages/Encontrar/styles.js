import styled from 'styled-components';

export const ContainerMapa = styled.div`
    width: 60%;
    height: 600px;
    background-color: blue;

    > iframe {
        width: 100%;
        height: 100%;
        border: 0px;
    }
`;

export const Instituicoes = styled.div`
    width: 40%;
    height: auto;
`;

export const ContainerFiltros = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 30px;

    > select {
        width: 90%;
        height: 45px;
        border: solid 1px #C4C4C4;
        border-radius: 15px;
        padding-left: 15px;
        font-size: 16px;
        font-weight: bold;
    }

    > div.filtro {
        display: flex;
        align-items: center;
        width: 90%;
        height: 45px;
        padding-left: 3px;
        margin-top: 10px;

        > img {
            width: 35px;
            height: 35px;
        }

        > p {
            font-size: 16px;
            font-weight: bold;
            margin-left: 15px;
        }
    }
`;