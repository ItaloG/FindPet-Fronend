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

    .custom-select {
        > select {
            width: 90%;
            height: 45px;
            border: solid 1px #C4C4C4;
            border-radius: 15px;
            padding-left: 15px;
            font-size: 16px;
            font-weight: bold;
        }
    }

    > div.filtro {
        display: flex;
        align-items: center;
        width: 90%;
        height: 45px;
        padding-left: 3px;
        margin-top: 10px;

        > img {
            width: 30px;
            height: 30px;
            filter: invert(28%) sepia(63%) saturate(3490%) hue-rotate(39deg) brightness(92%) contrast(101%);
        }

        > p {
            font-size: 16px;
            font-weight: bold;
            margin-left: 10px;
        }
    }
`;