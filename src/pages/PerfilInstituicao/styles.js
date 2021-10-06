import styled from "styled-components";

export const ContainerCenter = styled.div`
    padding-top: 40px;
    margin-top: 75px;
    width: 1100px;
    height: auto;
    background-color: peru;

    > .container-perfil-instituicao {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: auto;
        background-color: white;
        border-radius: 20px;
        border: solid 1px #c9c9c9;

        > .capa {
            width: 100%;
            height: 250px;
            background-color: #d9d9d9;
            border-radius: 20px 20px 0px 0px;

            > img {
                width: 100%;
                height: 100%;
                border-radius: 20px 20px 0px 0px;
            }
        }

        > .container-dados {
            width: 85%;
            height: 800px;
            background-color: #c5c5c5;

            > .barra-de-dados {
                display: flex;
                justify-content: center;
                width: 100%auto;
                height: 80px;
                background-color: gray;

                > .box {
                    display: flex;
                    width: 25%;
                    background-color: pink;
                    align-items: center;
                }

                > .box-lg {
                    background-color: purple;
                }

                > .box-foto {
                    width: 160px;

                    > .foto-perfil {
                        position: absolute;
                        margin-top: -80px;
                        width: 160px;
                        height: 160px;
                        border-radius: 50%;
                        background-color: lightgreen;
                        border: solid 1px #c9c9c9;

                        > img {
                            width: 100%;
                            height: 100%;
                            border-radius: 100%;
                        }
                    }
                }

                > .box-titulo {
                    > h1 {
                        font-weight: medium;
                        font-size: 25px;
                    }

                    > img {
                        width: 45px;
                        height: 45px;
                    }
                }

                > .box-avaliacao {
                    > img {
                        width: 25px;
                        height: 25px;
                    }

                    > img.estrela-completa {
                        filter: invert(64%) sepia(97%) saturate(338%) hue-rotate(354deg) brightness(102%) contrast(101%);
                    }

                    > img.estrela-vazia {
                        
                    }
                }
            }
        }
    }
`;