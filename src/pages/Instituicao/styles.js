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