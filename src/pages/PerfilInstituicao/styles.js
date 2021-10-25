import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdEmail, MdPhoneIphone } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

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
            filter: invert(64%) sepia(97%) saturate(338%) hue-rotate(354deg)
              brightness(102%) contrast(101%);
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
  width: 90%;
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
      width: 70%;
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
        border: solid 3px var(--dark);
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
      width: 30%;
      display: flex;
      flex-wrap: wrap;
      > .avaliacoes {
        margin-top: 7px;
        margin-right: 130px;

        div {
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
        }

        span {
          margin-left: 5px;
          font-size: 1.2em;
          font-weight: bold;
          color: var(--dark);
        }

        p {
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
  /* background-image: url(${(props) => props.src}); */

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px 20px 0px 0px;
  }
`;

export const Section = styled.section`
  width: 90%;
  grid-column: 1/3;
  margin: 0 auto;
  margin-top: 80px;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 50% 50%;

  > aside {
    grid-row: 1/3;
    display: flex;
    flex-direction: column;
    gap: 20px;

    > .contatos {
        display: flex;
        flex-direction: column;
        gap: 10px;
        > h1 {
            color: var(--dark);
            font-weight: bold;
            font-size: 20px;
        }
      > div {
        display: flex;
        align-items: center;
        text-align: start;
        gap: 5px;
        p {
            text-transform: uppercase;
            font-size: .7em;
            color: var(--gray);
        }
      }
    }

    > .funcionarios {
        height: 100%;
        > h1 {
            color: var(--dark);
            font-weight: bold;
            font-size: 20px;
        }
    }
  }

  > section {
    grid-row: 1/3;

  }

  @media(max-width: 1080px){
        grid-template-columns: 30% 70%;
    }
`;

export const Colaboradores = styled.div`
    height: 100%;
    margin-top: 30px;

    > div {
        display: flex;
        justify-content: space-between;
        text-align: center;
        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;

            > h3 {
                color: var(--primary);
            }

            > p {
                font-size: .8em;
                color: var(--gray);
            }
            
            > img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }
        }
    }

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

export const StyledMdEmail = styled(MdEmail)`
  width: 20px;
  height: 20px;
  color: var(--light);
`;

export const StyledFaPhoneAlt = styled(FaPhoneAlt)`
  width: 20px;
  height: 20px;
  color: var(--light);
`;

export const StyledMdPhoneIphone = styled(MdPhoneIphone)`
  width: 20px;
  height: 20px;
  color: var(--light);
`;

export const StyledFaMapMarkerAlt = styled(FaMapMarkerAlt)`
  width: 20px;
  height: 20px;
  color: var(--light);
`;
