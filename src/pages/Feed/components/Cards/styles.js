import styled from "styled-components";
import { MdShare, MdBookmarkBorder, MdMoreHoriz, MdOutlineFavoriteBorder } from "react-icons/md";
import { HiOutlineExternalLink } from "react-icons/hi";
import { ImWhatsapp } from "react-icons/im";

export const CardBox = styled.div`
    width: 500px;
    min-height: 250px;
    height: auto;
    background-color: white;
    margin: 0 auto;
    border-radius: 7px;
    box-shadow: 0px 1px 2px #c4c4c4;
    margin-bottom: 20px;
    overflow-x: hidden;
`;

export const CardHeader = styled.div`
    width: 100%;
    height: max-content;
    border-radius: 7px 7px 0px 0px;
    display: flex;
    padding: 15px 20px 0px 20px;
`;

export const ProfilePhoto = styled.div`
    width: 12%;
    height: 100%;
    display: flex;
    align-items: center;

    > img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        object-fit: cover;
    }
`;

export const Title = styled.div`
    width: 76%;
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3px 0;
    font-family: 'Montserrat';

    > h2 {
        font-size: 1.1rem;
        color: var(--dark);
    }

    > small {
        font-weight: 500;
        color: #bababa;
    }
`;

export const MoreOptionsButton = styled.div`
    width: 12%;
    height: 45px;
    display: flex;
    justify-content: end;

    > button {
        width: auto;
        height: fit-content;
        border: 0;
        background-color: transparent;
    }
`;

export const Description = styled.div`
    width: 100%;
    height: auto;
    padding: 15px 20px;

    > p {
        font-size: 0.9rem;
        font-family: 'Montserrat';
    }
`;

export const Photo = styled.div`
    width: 100%;
    height: auto;

    > img {
        width: 100%;
        height:100%;
    }
`;

export const LostPetLabel = styled.div`
    width: 100%;
    height: auto;
    background-color: var(--pink);
    padding: 5px 0;

    > h2 {
        color: white;
        text-align: center;
        font-family: 'Montserrat';
    }
`;

export const Box = styled.div`
    width: 500px;
    height: auto;
    white-space: nowrap;
    padding-bottom: 15px;
    padding-right: 20px;
    margin-bottom: 5px;
    overflow-y: hidden;
    overflow-x: scroll;

    > h2 {
        font-size: 1.1rem;
        margin-left: 20px;
        margin-bottom: 10px;
        color: var(--primary);
    }

    ::-webkit-scrollbar-track {
        background-color: #ededed;
    }
    ::-webkit-scrollbar {
        height: 5px;
        background: gray;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background:  #bababa;
    }
`;

export const PetBox = styled.div`
    width: 190px;
    height: 280px;
    background-color: white;
    margin-left: 20px;
    display: inline-block;
    vertical-align: top;
    white-space: normal; 
    border-radius: 7px;
    box-shadow: 0px 1px 2px #c4c4c4;

    > img {
        width: 100%;
        height: 80%;
        object-fit: cover;
        border-radius: 7px 7px 0px 0px;
    }

    > div {
        width: 190px;
        height: 10%;
        background-color: white;
        padding: 0 10px;
        margin-top: 3px;

        > h3 {
            font-size: 1.1rem;
            color: var(--dark);
        }

        > small {
            font-weight: 600;
            color: #bababa;
        }
    }
`;

export const Line = styled.div`
    height: 5px;
    width: 100%;
    background-color: #ededed;
    margin-top: 3px;
`;

export const Actions = styled.div`
    width: 100%;
    height: auto;
    border-radius: 0px 0px 7px 7px;
    display: flex;

    > div {
        width: ${props => props.length === 2 ? "50%" : "33.333%"};
        padding: 7px 0px 10px 0px;
        display: flex;
        align-items: center;
        justify-content: center;

        > button {
            border: 0;
            background-color: transparent;
            font-size: 0.9rem;
            margin-left: 5px;
            color: gray;
            font-weight: 600;
            font-family: 'Montserrat';
        }
    }
`;

export const IconShare = styled(MdShare)`
    width: 1.1rem;
    height: 1.1rem;
    color: gray;
`;

export const IconSave = styled(MdBookmarkBorder)`
    width: 1.3rem;
    height: 1.5rem;
    color: gray;
`;

export const IconMore = styled(MdMoreHoriz)`
    width: 1.8rem;
    height: 1.8rem;
    color: gray;
`;

export const IconFavoriteBorder = styled(MdOutlineFavoriteBorder)`
    width: 1.3rem;
    height: 1.5rem;
    color: gray;
`;

export const IconLink = styled(HiOutlineExternalLink)`
    width: 1.3rem;
    height: 1.5rem;
    color: gray;
`;

export const IconWhatsApp = styled(ImWhatsapp)`
    width: 1.3rem;
    height: 1.3rem;
    color: gray;
`;



