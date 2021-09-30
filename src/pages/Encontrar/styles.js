import styled from 'styled-components';

export const ContainerMapa = styled.div`
<<<<<<< HEAD
    width: 60%;
    height: 600px;

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
            padding-left: 15px;
            font-size: 16px;
            font-weight: bold;
        }
    }

    .endereco {
        width: 90%;
        height: auto;
        padding-top: 20px;

        > form {
            width: 100%;
            height: auto;
            padding: 10px;

            > input {
                font-size: 16px;
                padding: 5px;
                border: solid 1px #C4C4C4;
                border-radius: 3px;
            }

            > button {
                font-size: 15px;
                font-weight: bold;
                margin-left: 7px;
                padding: 4px;
            }
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

        > p:hover {
            cursor: pointer;
        }
    }
=======
    width: 500px;
    height: 500px;
    background-color: blue;

    > iframe {
        border: 0px;
    }
>>>>>>> 2fd56a927c871c3e66793d10684e7907761d6bc3
`;