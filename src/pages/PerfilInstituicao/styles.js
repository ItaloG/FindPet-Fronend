import styled from "styled-components";
import {FaStar} from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";

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


export const Profile = styled.div`
    grid-column: 1/3;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 100px;

    > aside {
        width: 100%;
        display: flex;
        gap: 5px;
        justify-content: space-between;

        > div {
            display: flex;
            gap: 7px;

            > h1 {
                margin-top: 7px;
                color: var(--dark);
                font-weight: bold;
                font-size: 1.8em;
            }

            > img {
                padding: 2px;
                border:solid  3px var(--dark);
                margin-top: -50px;
                margin-left: 20px;
                width: 120px;
                height: 120px;
                position: relative;
                z-index: 10;
                border-radius: 50%;
            }
        }

        > div:last-child {

            > .avaliacoes {
                margin-top: 7px;
                margin-right: 130px;

                > span {
                    margin-left: 5px;
                    font-size: 1.2em;
                    font-weight: bold;
                    color: var(--dark);
                }

                > p {
                    color: var(--gray);
                    font-size: 1em;
                }
            }

            > div:last-child {
                margin-top: 7px;
                margin-right: 20px;
                display: flex;
                align-items: center;
                gap: 10px;
                
                > img {
                    width: 30px;
                    height: 30px;
                }

                > div {
                    display: flex;
                    justify-content: center;
                    gap: 5px;
                    /* width: 90px; */
                    /* height: 30px; */
                    padding: 8px;
                    text-align: center;
                    color: #fff;
                    background-color: var(--green);
                    border-radius: 5px;
                }
            }
        }
    }
`;

export const Banner = styled.div`
    grid-column: 1/3;
    width: 100%;
    height: 100%;
    /* background-image: url(${props => props.src}); */
    
    img {
        width: 100%;
        height: 100%;
        border-radius: 20px 20px 0px 0px;
    }
`;

export const Section = styled.section`
    width: 80%;
    grid-column: 1/3;
    background-color: blue;
    margin: 0 auto;
    margin-top: 80px;
`;

export const StyledRiArrowDownSLine = styled(RiArrowDownSLine)`
  width: 20px;
  height: 20px;
  transition: 0.5s;
`;

export const StyledStart = styled(FaStar)`
    width: 30px;
    height: 30px;
    color: var(--yellow);
`;

export const StyledHeart = styled(AiFillHeart)`
    width: 30px;
    height: 30px;
    color: var(--pink);
    margin-top: 7px;
    
`;