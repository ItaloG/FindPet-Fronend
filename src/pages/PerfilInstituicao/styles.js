import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { AiFillHeart, AiOutlinePlusCircle } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdEmail, MdPhoneIphone, MdEdit, MdAddAPhoto } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export const Profile = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 90px;

  > aside {
    width: 100%;
    gap: 5px;    
  }
`;

export const ContainerInfo = styled.div`

      display: flex;
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
          margin-left: 10px;
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
  
`;

export const FotoPerfil = styled.div`
  z-index: 8;
  margin-top: -70px;
  margin-left: 20px;
  display: flex;
  justify-content: flex-end;
  
  > label {
    position: absolute;
    margin-top: 90px;
    padding: 11px;
    background-color: #fff;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: #000 0px 0px 3px 0px;
  }

  input {
    display: none;
  }

  > img {
    width: 140px;
    height: 140px;
    padding: 2px;
    border: solid 3px var(--dark);
    border-radius: 50%;
  }
`;

export const ContainerServicos = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: var(--light);
  margin-top: 10px;
  gap: 5px;

  > div { 
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    
    > div {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    border: solid var(--light) 2px;
    border-radius: 20px;
    
    padding: 5px;
    font-size: .7em;
    text-align: center;
    user-select: none;
    
    > span {
      cursor: pointer;
      font-size: 20px;
    }
  }
  }
`;

export const ContainerTodosServicos = styled.div`
  width: 100%;
  max-width: 350px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-top: 10px;
  
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    padding: 5px;
    border: solid var(--light) 2px;
    border-radius: 20px;
    font-size: 13px;
    cursor: pointer;
    
    :hover {
      background-color: var(--light);
      color: #FFF;
    }

    > span {
      font-size: 30px;
    }
  }

  .limpar {
    color: #FFF;
    padding: 10px;
    border: none;
    border-radius: 5px;
    align-self: center;
    color: #FFF;
    cursor: pointer;
    background-color: var(--dark);

    :hover {
      border:solid var(--dark) 1px;
      background-color: #fff; 
      color: var(--dark);
      padding: 9px;
    }
  }

  > button:last-child {
    color: #FFF;
    padding: 10px;
    border: none;
    border-radius: 5px;
    align-self: center;
    background-color: var(--secondary);
    cursor: pointer;
    :hover {
      border:solid var(--secondary) 1px;
      background-color: #fff; 
      color: var(--secondary);
      padding: 9px;
    }
  }
`;


export const Banner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  img {
    width: 100%;
    height: 180px;
    border-radius: 20px 20px 0px 0px;
  }

  input {
    display: none;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background-color: #fff;
    padding: 5px;
    border-radius: 3px;
    position: absolute;
    margin-bottom: 3px;
    margin-right: 3px;
    font-size: .8em;
    cursor: pointer;
    box-shadow: #000 0px 0px 3px 0px;
  }
`;

export const Section = styled.section`
  width: 80%;
  grid-column: 1/3;
  margin: 0 auto;
  margin-top: 50px;
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
        font-size: 1.5rem;
      }
      > div {
        display: flex;
        align-items: center;
        text-align: start;
        gap: 5px;
        p {
          font-family: 'Montserrat';
          font-size: 0.9rem;
          color: var(--gray);
          margin-left: 10px;
        }
      }
    }

    > .funcionarios {
      margin-top: 40px;

      > div:first-child {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        cursor: pointer;

        > h1 {
          color: var(--dark);
          font-weight: bold;
          font-size: 1.5rem;
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
      font-size: 1.5rem;
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
    flex-wrap: wrap;
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

  > p {
    font-family: 'Montserrat';
    font-style: italic;
    color: var(--dark);
    font-size: 16px;
    font-weight: medium;
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
      font-size: 1.5rem;
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
  margin-top: 25px;
> div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
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
  width: 22px;
  min-width: 22px;
  height: 22px;
  color: var(--light);
`;

export const StyledFaPhoneAlt = styled(FaPhoneAlt)`
  width: 18px;
  height: 18px;
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
  cursor: pointer;
`;

export const StyledMdAddAPhoto = styled(MdAddAPhoto)`
  width: 20px;
  height: 20px;
`;

export const ContainerPerfilAnimal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  margin-top: 15px;

  > aside {
    position: absolute;
    margin-top: -115px;
    margin-left: 80px;
  }

  > h3 {
    font-size: 1.2rem;
    color: var(--primary);
  }

  > p {
    font-size: 0.9rem;
    color: var(--gray);
  }

  > img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;

export const ContainerPerfilColaborador = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  text-align: center;
  flex-wrap: wrap;
  max-width: 100px;
  margin-bottom: 15px;

  > h3 {
    color: var(--primary);
    font-size: 1rem;
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

export const CadsatroColaborador = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
  input, select {
      padding: 10px;
      width: 100%;
      border-radius: 5px;
      border:solid #C4C4C4  1px;
      font-size: .9em;
    }

    label {
      font-size: .8em;
    }

    > img {
    align-self: center;
    max-width: 40%;
    display: none;
  }

  button {
    width: 75%;
    height: 15%;
    margin-top: 15px;
    background-color: #FFB853;
    padding: 10px;
	  border: none;
	  border-radius: 10px;

    color: #fff;
    font-weight: bold;
    font-size: 1.2em;
    cursor: pointer;
  }
`;