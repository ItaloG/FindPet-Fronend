
import styled, { createGlobalStyle } from "styled-components";
import { FaStar } from "react-icons/fa";
import { MdEmail, MdPhoneIphone, MdEdit, MdAddAPhoto } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import {
  MdOutlineFavoriteBorder,
  MdHome,
  MdNavigateNext,
  MdNavigateBefore,
  MdPhotoCamera,
  MdModeEditOutline,
} from "react-icons/md";
import { FaLock } from "react-icons/fa";

export const Profile = styled.main`
  width: 70%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 130px;

  > aside {
    img {
      width: 130px;
      height: 130px;
      border-radius: 100px;
      margin-top: -50px;
      margin-left: 40px;
    }

    > div {
      margin-left: 200px;
      margin-top: -65px;
    }

    > button {
      border-radius: 50px;
      border: none;
      background-color: #C98822;
      width: 180px;
      margin-top: 50px;
      height: 30px;
      margin-left: 1120px;
      color: white;
    }
  }
`;

export const IconeCamera = styled(MdPhotoCamera)`
  width: 30px;
  height: 25px;
  color: white;
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

export const IconStar = styled(FaStar)`
  width: 30px;
  height: 30px;
  color: var(--yellow);
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
    font-size: 0.8em;
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
    margin-top: -520px;
    margin-left: 150px;
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
          font-family: "Montserrat";
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

    > .favoritos {
      >div {
        width: 1200px;
        margin-left: auto;
        margin-right: auto;
      }

      > p {
        color: #654D41;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: bold;
        font-size: 1.7em;
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

export const StyledMdAddAPhoto = styled(MdAddAPhoto)`
  width: 20px;
  height: 20px;
`;





