import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { AiFillHeart, AiOutlinePlusCircle } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdEmail, MdPhoneIphone, MdEdit } from "react-icons/md";
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
  width: 80%;
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

      h1 {
        margin-top: 7px;
        color: var(--dark);
        font-weight: bold;
        font-size: 1.8em;
        font-family: "Montserrat";
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

      @media(max-width: 1080px) {
        h1 {
          font-size: 1.4em;
        }
      }
    }

    > div:last-child {
      width: 30%;
      display: flex;
      gap: 20px;
      justify-content: flex-end;
      flex-wrap: wrap;

      > .avaliacoes {
        margin-top: 7px;

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

        @media(max-width: 1080px) {
          p {
            font-size: .8em;
          }
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

export const ContainerServiços = styled.div`
  width: 100%;
  max-width: 350px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  color: var(--light);
  margin-top: 10px;
  div {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 4px;
    border: solid var(--light) 2px;
    border-radius: 20px;
    font-size: 13px;

    > span {
      font-size: 30px;
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
  width: 80%;
  grid-column: 1/3;
  margin: 0 auto;
  margin-top: 80px;
  display: grid;
  grid-template-columns: 30% 70%;
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
          font-size: 0.7em;
          color: var(--gray);
        }
      }
    }

    > .funcionarios {
      > div:first-child {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;

        > h1 {
          color: var(--dark);
          font-weight: bold;
          font-size: 20px;
        }

        > div {
          color: var(--light);
          padding: 5px;
          border-radius: 4px;
          border: solid 1px var(--primary);
          cursor: pointer;

          > span {
            font-size: 20px;
          }

        }

      }
    }
  }

  > section {
    grid-row: 1/3;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 200px;
    h1 {
      color: var(--dark);
      font-weight: bold;
      font-size: 20px;
    }
  }

  @media (max-width: 1080px) {
    width: 95%;
    grid-template-columns: 40% 60%;

    section {
      padding-left: 30px;
    }
  }
`;

export const AnimaisContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > div:first-child {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;

    > h1 {
      color: var(--dark);
      font-weight: bold;
      font-size: 20px;
    }

    > div {
      color: var(--light);
      padding: 5px;
      border-radius: 4px;
      border: solid 1px var(--primary);
       cursor: pointer;

      > span {
        font-size: 20px;
      }
    }
  }
`;

export const ApoioContainer = styled.div`
  h2 {
    margin-top: 5px;
    font-size: 1em;
    color: var(--dark);
    font-weight: 500;
  }

  > div {
    margin-top: 10px;
    display: flex;
    gap: 5px;
    color: var(--light);

    > div {
      padding: 5px;
      border-radius: 5px;
      border: solid 2px var(--light);
    }
  }
`;

export const DescricaoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  > textArea {
    height: 100px;
    padding: 10px;
    color: var(--gray);
    font-size: 16px;
    border: solid 1px var(--gray);
    transition: 0.2s;
    resize: none;
  }

  > button {
    background-color: var(--primary);
    border: none;
    padding: 7px;
    border-radius: 8px;
    color: #fff;
    font-size: 1em;

    cursor: pointer;

    align-self: end;
  }
`;

export const CampanhasContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  > div:first-child {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;

    > h1 {
      color: var(--dark);
      font-weight: bold;
      font-size: 20px;
    }

    > div {
      color: var(--light);
      padding: 5px;
      border-radius: 4px;
      border: solid 1px var(--primary);
      cursor: pointer;

      > span {
        font-size: 20px;
      }
      }
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 15px;
    
    > div {
      display: flex;
      flex-direction: column;
      aside {
        align-self: flex-end;
        position: absolute;
         margin-top: 10px;
        margin-right: 10px;
      }
    } 
  }

  p {
    width: 330px;
    font-size: 13px;
  }

  img {
    width: 100%;
    height: 200px;
  }
`;

export const Colaboradores = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 15px;
  gap: 10px;
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

  @media(max-width: 1080px) {
    width: 20px;
    height: 20px;
  }
`;

export const StyledHeart = styled(AiFillHeart)`
  width: 30px;
  height: 30px;
  color: var(--pink);
  margin-top: 7px;
`;

export const StyledMdEmail = styled(MdEmail)`
  width: 25px;
  height: 25px;
  color: var(--light);
`;

export const StyledFaPhoneAlt = styled(FaPhoneAlt)`
  width: 20px;
  height: 20px;
  color: var(--light);
`;

export const StyledMdEdit = styled(MdEdit)`
  width: 25px;
  height: 25px;
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

export const StyledAiOutlinePlusCircle = styled(AiOutlinePlusCircle)`
  width: 30px;
  height: 30px;
  color: var(--light);
`;

export const ContainerPerfilAnimal = styled.div`
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

export const ContainerPerfilColaborador = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  text-align: center;

  > h3 {
    color: var(--primary);
  }

  > p {
    font-size: 0.8em;
    color: var(--gray);
  }

  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }

  > aside {
    position: absolute;
    margin-left: 4%;
   :hover {
      cursor: pointer;
    }
  }

`;