import styled from "styled-components";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdDoDisturbOn, MdCheckCircle } from "react-icons/md";

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

export const Option = styled.div`
    width: fit-content;
    height: auto;
    /* background-color: ${props => props.color}; */
    background-color: var(--light);
    border-radius: 18px;
    display: flex;
    align-items: center;
    padding: 5px 5px;
    margin-bottom: 7px;
    margin-right: 7px;
    user-select: none;
    
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

export const OptionOff = styled.div`
    width: fit-content;
    height: auto;
    background-color: #c9c9c9;
    border-radius: 18px;
    display: flex;
    align-items: center;
    padding: 5px 5px;
    margin-bottom: 7px;
    margin-right: 7px;
    user-select: none;
    
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