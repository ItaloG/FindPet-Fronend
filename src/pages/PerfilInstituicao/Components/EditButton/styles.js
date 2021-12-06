import styled from "styled-components";
import { MdEdit } from "react-icons/md";

export const Button = styled.button`
    width: 40px;
    height: 40px;
    background-color: var(--primary);
    border: solid 4px white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        cursor: pointer;
    }
`;

export const IconEdit = styled(MdEdit)`
    width: 20px;
    height: 20px;
    color: white;
`;