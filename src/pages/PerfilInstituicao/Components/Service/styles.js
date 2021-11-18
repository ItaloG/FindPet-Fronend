import styled from "styled-components";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdDoDisturbOn } from "react-icons/md";

export const IconSelected = styled(BsCheckCircleFill)`
width: 25px;
height: 25px;
color: white;
`;

export const IconNotSelected = styled(MdDoDisturbOn)`
width: 25px;
height: 25px;
color: white;
`;

export const ServiceOn = styled.div`
    width: fit-content;
    height: auto;
    background-color: #6dd1a1;
    border-radius: 18px;
    display: flex;
    align-items: center;
    padding: 5px 5px;
    margin-bottom: 7px;
    margin-right: 7px;
    
    > p {
        padding-right: 5px;
        padding-left: 5px;
        font-size: 0.9rem;
        font-weight: 600;
        color: white;
    }

    :hover {
        cursor: pointer;
    }
`;

export const ServiceOff = styled.div`
    width: fit-content;
    height: auto;
    background-color: #c9c9c9;
    border-radius: 18px;
    display: flex;
    align-items: center;
    padding: 5px 5px;
    margin-bottom: 7px;
    margin-right: 7px;
    
    > p {
        padding-right: 5px;
        padding-left: 5px;
        font-size: 0.9rem;
        font-weight: 600;
        color: white;
    }

    :hover {
        cursor: pointer;
    }
`;