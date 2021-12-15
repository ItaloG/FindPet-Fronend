import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { AiFillHeart, AiOutlinePlusCircle } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdEmail, MdPhoneIphone, MdEdit, MdAddAPhoto } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import {
  MdOutlineFavoriteBorder,
  MdOutlineFavorite,
  MdHome,
  MdNavigateNext,
  MdNavigateBefore,
  MdPhotoCamera,
  MdModeEditOutline,
} from "react-icons/md";
import { FaLock } from "react-icons/fa";

export const Container = styled.div`
    width: 1200px;
    height: auto;
    margin: 0 auto;
    background-color: white;
    padding-top: 8rem;
`;

export const Profile = styled.main`
    width: 100%;
    height: auto;
`;

export const Cover = styled.div`
    width: 100%;
    height: 250px;
    border-radius: 40px 40px 0px 0px;
    background-color: pink;
    overflow: hidden;

    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 40px 40px 0px 0px;
    }
`;

export const EditCoverPhoto = styled.div`
  width: auto;
  height: auto;
  padding: 5px 15px;
  border: 0;
  border-radius: 7px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 0.9rem;
  margin-left: 5px;
  color: white;
  background-color: var(--dark);
  position: absolute;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-left: 983px;
  margin-top: 205px;

  > label {
    padding-left: 3px;
  }

  > input {
    width: 100;
    height: 100%;
    position: absolute;
    margin-top: 13px;
    opacity: 0;
  }
`;

export const About = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;

    > div {
        height: 100%;
        width: 90%;
        display: flex;
        justify-content: space-between;
    }
`;

export const ProfilePhoto = styled.div`
    width: 150px;
    height: 150px;
    background-color: white;
    border: solid 3px var(--dark);
    border-radius: 50%;
    position: absolute;
    margin-top: -70px;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
        width: 142px;
        height: 142px;
        background-color: white;
        border: solid 5px var(--secondary);
        border-radius: 100%;
        overflow: hidden;

        > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 100%;

        }
    }
`;

export const EditProfilePhoto = styled.button`
    width: 40px;
    height: 40px;
    background-color: var(--dark);
    border-radius: 50%;
    border: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -5px;
    margin-top: 20px;
    overflow: hidden;

    > input {
      width: 100%;
      height: 100%;
      position: absolute;
      margin-top: 17px;
      opacity: 0;
    }
`;

export const IconeCamera = styled(MdPhotoCamera)`
    width: 30px;
    height: 25px;
    color: white;
`;

export const PetInfo = styled.div`
    width: auto;
    height: 100%;
    margin-left: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;

    > div {
        width: auto;
        height: auto;
        background-color: white;
        display: flex;
        align-items: center;

        > h1 {
            color: #92765E;
            font-family: 'Montserrat';
            margin-right: 6px;
        }

        > h4 {
            color: #bababa;
            font-family: 'Montserrat';
            margin-top: 3px;
            margin-left: 3px;
            font-weight: 600;
            font-size: 0.9rem;
        }
    }
`;

export const IconFavoriteOutline = styled(MdOutlineFavoriteBorder)`
    width: 30px;
    height: 30px;
    color: var(--pink);
`;

export const IconHome = styled(MdHome)`
    width: 25px;
    height: 25px;
    color: #bababa;
`;

export const ActionButtons = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;

    > button {
        width: auto;
        height: auto;
        padding: 10px 20px;
        border: 0;
        border-radius: 7px;
        font-family: 'Montserrat';
        font-weight: bold;
        margin-left: 5px;
        color: white;
    }

    > button:first-child {
        background-color: var(--green);
    }

    > button:last-child {
        background-color: var(--primary);
    }
`;

export const PetFavoriteCount = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    padding-top: 10px;

    > h4 {
        margin-top: 7px;
        margin-left: 5px;
        color: #bababa;
        font-weight: 800;
        font-size: 1.1rem;
    }

    > small {
        margin-top: 9px;
        margin-left: 5px;
        color: #bababa;
        font-weight: 500;
    }
`;

export const IconStar = styled(FaStar)`
    width: 30px;
    height: 30px;
    color: var(--yellow);
`;

export const SaveChanges = styled.div`
    width: 90%;
    height: auto;
    margin: 0 auto;
    display: flex;
    justify-content: end;

    > button {
        width: auto;
        height: auto;
        padding: 10px 20px;
        border: 0;
        border-radius: 7px;
        font-family: 'Montserrat';
        font-weight: bold;
        margin-left: 5px;
        color: white;
        background-color: var(--dark);
    }
`;

export const ProfileBody = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    padding-top: 50px;

    > div {
        height: 100%;
        width: 90%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 100px;

        > div:first-child {
            grid-column-start: 1;
            padding-right: 100px;
        }

        > div:last-child {
            grid-column-start: 2;
        }
    }
`;

export const Contact = styled.div`
    width: 100%;
    height: auto;
    background-color: white;
    font-weight: 500;
    margin-bottom: 50px;

    > h2 {
        font-style: normal;
        color: #92765E;
        margin-bottom: 10px;
    }

    > div {
      width: 100%;
      height: auto;
      font-size: 0.9rem;
      color: #bababa;
      padding-bottom: 10px;
      display: flex;
      align-items: center;

      > p {
        margin-left: 5px;
      }
    }

    > textarea {
        width: 100%;
        height: 200px;
        resize: none;
        border: solid 1px #c9c9c9;
        padding: 10px;
        font-family: 'Montserrat';
        line-height: 1.7;
        color: var(--gray);
        font-weight: 500;
        border-radius: 1px;
        font-size: 0.9rem;
    }
`;

export const Services = styled.div`
    width: 100%;
    height: auto;
    background-color: white;
    font-weight: 500;
    margin-bottom: 50px;

    > h2 {
        font-style: normal;
        color: #92765E;
        margin-bottom: 10px;
    }

    > :nth-child(2) {
      width: 100%;
      height: auto;
      font-size: 0.9rem;
      color: #bababa;
      padding-bottom: 10px;
      display: flex;
      align-items: center;
    }

    > :last-child {
      width: 100%;
      height: auto;
      /* background-color: lightblue; */
      display: flex;
      flex-wrap: wrap;
    }
`;

export const IconEmail = styled(MdEmail)`
  width: 25px;
  height: 25px;
  color: #bababa;
`;

export const IconPlace = styled(FaMapMarkerAlt)`
  width: 25px;
  height: 25px;
  color: #bababa;
  padding: 1px;
`;
export const IconTelephone = styled(FaPhoneAlt)`
  width: 25px;
  height: 25px;
  color: #bababa;
  padding: 3px;
`;
export const IconPhone = styled(MdPhoneIphone)`
  width: 25px;
  height: 25px;
  color: #bababa;
  padding: 1px;
`;

export const Employees = styled.div`
    width: 100%;
    height: auto;
    background-color: white;

    > div:first-child {
      display: flex;

      > h2 {
        color: #92765E;
        margin-bottom: 20px;
      }

      > button {
        width: fit-content;
        height: fit-content;
        padding: 5px 15px;
        margin-left: 10px;
        border: 0;
        border-radius: 7px;
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 1rem;
        color: white;
        background-color: var(--dark);
        text-transform: uppercase;

        :hover {
          cursor: pointer;
        }
      }
    }

    > p {
      font-family: 'Montserrat';
      font-size: 0.9rem;
      color: #bababa;
      font-weight: 500;
    }

    > div:last-child {
      width: 100%;
      height: auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 15px;
    }
`;

export const IconLock = styled(FaLock)`
    width: 16px;
    height: 16px;
    color: #bababa; 
`;

export const IconEdit = styled(MdModeEditOutline)`
    width: 28px;
    height: 28px;
    color: var(--primary); 
`;

export const Campaigns = styled.div`
    width: 100%;
    // min-height: 300px;
    height: auto;
    margin-bottom: 50px;

    > div:first-child {
      display: flex;

      > h2 {
        color: #92765E;
        margin-bottom: 20px;
      }

      > button {
        width: fit-content;
        height: fit-content;
        padding: 5px 15px;
        margin-left: 10px;
        border: 0;
        border-radius: 7px;
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 1rem;
        color: white;
        background-color: var(--dark);
        text-transform: uppercase;

        :hover {
          cursor: pointer;
        }
      }
    }

    > p {
      font-family: 'Montserrat';
      font-size: 0.9rem;
      color: #bababa;
      font-weight: 500;
    }

    > div:last-child {
        width: 100%;
        min-height: 260px;
        height: auto;
        background-color: white;
    }
`;

export const IconPrevious = styled(MdNavigateBefore)`
    width: 50px;
    height: 50px;
    color: white;
`;

export const IconNext = styled(MdNavigateNext)`
    width: 50px;
    height: 50px;
    color: white;
`;

export const Description = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 50px;

    > h2 {
        color: #92765E;
        margin-bottom: 10px;
    }

    > p {
      color: var(--dark);
      font-style: italic;
      font-weight: 500;
    }

    > textarea {
        width: 100%;
        height: 150px;
        resize: none;
        border: solid 1px #c9c9c9;
        padding: 10px;
        font-family: 'Montserrat';
        line-height: 1.7;
        color: var(--gray);
        font-weight: 500;
        border-radius: 1px;
        font-size: 0.9rem;
    }
    
    > button {
        width: fit-content;
        height: fit-content;
        padding: 5px 15px;
        margin-top: 5px;
        border: 0;
        border-radius: 7px;
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 1rem;
        color: white;
        background-color: var(--dark);
        text-transform: uppercase;

        :hover {
          cursor: pointer;
        }
      }
`;

export const Pets = styled.div`
    width: 100%;
    height: auto;
    background-color: white;

    > div:first-child {
      display: flex;

      > h2 {
        color: #92765E;
        margin-bottom: 20px;
      }

      > button {
        width: fit-content;
        height: fit-content;
        padding: 5px 15px;
        margin-left: 10px;
        border: 0;
        border-radius: 7px;
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 1rem;
        color: white;
        background-color: var(--dark);
        text-transform: uppercase;

        :hover {
          cursor: pointer;
        }
      }
    }

    > p {
      font-family: 'Montserrat';
      font-size: 0.9rem;
      color: #bababa;
      font-weight: 500;
    }

    > div:last-child {
      width: 100%;
      height: auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 15px;
    }
`;


















// export const Profile = styled.div`
//   width: 80%;
//   display: flex;
//   flex-direction: column;
//   margin: 0 auto;
//   margin-top: 90px;

//   > aside {
//     width: 100%;
//     gap: 5px;    
//   }
// `;

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

export const Main = styled.main`
  width: 100%;
  height: auto;
  padding: 6rem;
`;

export const Header = styled.header`
  width: 60%;
  height: auto;
  margin: 0 auto;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 40px 40px 0px 0px;
  }

  > aside {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: space-between;

    > div {
      display: flex;
      gap: 75px;
    }
  }
`;

export const ProfilePhoto = styled.div`
  width: 150px;
  height: 150px;
  background-color: white;
  border: solid 3px var(--dark);
  border-radius: 50%;
  position: absolute;
  margin-top: -70px;
  display: flex;
  justify-content: left;
  align-items: left;
  gap: 15px;

  > div {
    width: 142px;
    height: 142px;
    background-color: white;
    border: solid 5px var(--secondary);
    border-radius: 100%;
    overflow: hidden;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100%;
    }
  }
`;

export const NameInstitution = styled.div`
      margin-left: 20px;


`;

export const Avaliacoes = styled.div`
  justify-content: left;

`;

export const Apoio = styled.div`
  display: flex;
  justify-items: right;

  > img {
    width: 20%;
    height: 20%;
  }
`;

export const EditProfilePhoto = styled.button`
  width: 40px;
  height: 40px;
  background-color: var(--dark);
  border-radius: 50%;
  border: 0;
  position: absolute;
  display: flex;
  justify-content: left;
  margin-top: 20px;
  overflow: hidden;

  > input {
    width: 100%;
    height: 100%;
    position: absolute;
    margin-top: 17px;
    opacity: 0;
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
  

  @media (max-width: 1080px) {
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

  > div {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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

export const RadioGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  font-size: 16px;
  > div {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 16px;
    > input {
      width: 20px;
      height: 20px;
    }
  }
`;