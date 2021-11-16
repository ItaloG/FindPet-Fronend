import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';
import { ImHome } from 'react-icons/im';
import { MdPets, MdOutlineFavorite, MdStars } from 'react-icons/md';
import { FaMap } from 'react-icons/fa'

export const Container = styled.header`
    font-family: 'Montserrat';
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 3.7rem;
    background-color: white;
    box-shadow: -1px 1px 3px #dbdbdb;
    display: flex;
    position: fixed;
    z-index: 99999;
`;

export const Logo = styled.div`
    width: 10.5rem;
    height: 100%;
    /* background-color: aqua; */
    display: flex;
    align-items: center;
    margin-left: 1.5rem;

    > img {
        width: 100%;
        height: auto;
    }
`;

export const SearchBox = styled.div`
    width: 20rem;
    height: 100%;
    /* background-color: aquamarine; */
    margin-left: 2rem;
    display: flex;
    align-items: center;

    > input {
        width: 100%;
        height: 2.2rem;
        border: 0;
        background-color: #f0f0f0;
        border-radius: 12px;
        padding-left: 1rem;
        font-size: 0.8rem;
        color: #c9c9c9;
        font-family: 'Montserrat';
        font-weight: 500;

        ::placeholder {
            color: #c9c9c9;
        }
    }
`;

export const IconSearch = styled(HiSearch)`
    width: 1.5rem;
    height: 1.5rem;
    color: #c9c9c9;
    position: absolute;
    margin-left: 18rem;
`;

export const IconHome = styled(ImHome)`
    width: 1.5rem;
    height: 1.5rem;
    color: var(--primary)
`;

export const IconPet = styled(MdPets)`
    width: 1.5rem;
    height: 1.5rem;
    color: var(--primary)
`;

export const IconFavorite = styled(MdOutlineFavorite)`
    width: 1.5rem;
    height: 1.5rem;
    color: var(--primary)
`;

export const IconMap = styled(FaMap)`
    width: 1.5rem;
    height: 1.5rem;
    color: var(--primary)
`;

export const IconMember = styled(MdStars)`
    width: 1.5rem;
    height: 1.5rem;
    color: var(--primary)
`;

export const Menu = styled.div`
    font-weight: bold;
    display: flex;
    width: auto;
    height: 100%;
`;

export const MenuItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 100%;
    font-size: 0.9rem;
    font-weight: 700;
    margin-left: 1.3rem;
    margin-right: 1.3rem;
    /* color: #92765E; */
    color: var(--primary);
    font-family: 'Montserrat';
    transition: 0.3s;

    :hover {
        cursor: pointer;
        color: var(--dark);
    }
`;

export const Profile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 100%;
    margin-right: 1.5rem;

    > div {
        width: 40px;
        height: 40px;
        background-color: white;
        border-radius: 50%;
        border: solid 2.5px var(--primary);
        display: flex;
        justify-content: center;
        align-items: center;

        > img {
            width: 95%;
            height: 95%;
            border-radius: 100%;
        } 
    }
`;