import styled, { keyframes } from "styled-components";

const spin = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
    margin: 10px 0px;
    width: 35px;
    height: 35px;
    border-top: 5px solid var(--primary);
    border-right: 5px solid transparent;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;

    > div {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        animation: ${spin} 3s linear infinite;
    }
`;