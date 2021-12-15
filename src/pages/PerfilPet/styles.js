import styled from "styled-components";
import { MdOutlineFavoriteBorder, MdOutlineFavorite, MdHome, MdNavigateNext, MdNavigateBefore, MdPhotoCamera, MdModeEditOutline } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';

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
        cursor: pointer;
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
        font-weight: 600;
    }
`;

export const IconFavorite = styled(MdOutlineFavorite)`
    width: 30px;
    height: 30px;
    color: var(--pink);
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

export const PetAbstract = styled.div`
    width: 100%;
    height: auto;
    background-color: white;
    color: var(--dark);
    font-style: italic;
    font-weight: 500;
    margin-bottom: 50px;

    > h2 {
        font-style: normal;
        color: #92765E;
        margin-bottom: 10px;
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

export const PetDatasheet = styled.div`
    width: 100%;
    height: auto;
    background-color: white;

    > h2 {
        color: #92765E;
        margin-bottom: 20px;
    }

    > table {
        width: 100%;
        border-collapse: collapse;

        > tr td {
            border-bottom: solid 1px #c9c9c9;
            padding: 7px 0;
            margin: 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        > tr td:first-child {
            font-weight: bold;
            color: var(--primary);
            width: 45%;
        }

        > tr td:last-child {
            border-left: solid 1px #c9c9c9;
            padding-left: 10px;
            font-weight: 500;
            color: #bababa;
            width: 55%;

            > button {
                border: 0;
                background-color: transparent;
                margin-left: 5px;
            }

            > input, select {
                width: 95%;
                padding: 3px 10px;
                font-family: 'Montserrat';
                color: var(--gray);
                font-weight: 500;
                font-size: 1rem;
                border: solid 1px #c9c9c9;
                border-radius: 1px;
            }

            select {
                padding-left: 5px;
            }
        }
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

export const PetGallery = styled.div`
    width: 100%;
    height: 300px;
    margin-bottom: 50px;

    > h2 {
        color: #92765E;
        margin-bottom: 10px;
    }

    > div {
        width: 100%;
        height: 260px;
        background-color: #bababa;

        > div:first-child {
            width: 540px;
            height: auto;
            display: flex;
            justify-content: space-between;
            z-index: 999;
            position: absolute;
            margin-top: 100px;

            > button {
                background-color: transparent;
                border: 0;
            }
        }

        > div:last-child {
            width: 100%;
            height: 260px;
            display: flex;
            background-color: pink;

            > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
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

export const PetHistory = styled.div`
    width: 100%;
    height: auto;

    > h2 {
        color: #92765E;
        margin-bottom: 10px;
    }

    > p {
        font-weight: 500;
        color: #bababa;
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

