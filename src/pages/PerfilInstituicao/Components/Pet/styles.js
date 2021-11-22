import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    > aside {
        position: absolute;
        margin-left: 75px;
        margin-top: -6px;
    }

    > :nth-child(2) {
        position: absolute;
        margin-left: 75px;
        margin-top: 40px;
    }

    > img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        object-fit: cover; 
    }

    > h3 {
        text-align: center;
        font-size: 1rem;
        font-weight: 700;
        color: var(--primary);
        margin-top: 10px;
        text-transform: capitalize;
    }

    > p {
        font-size: 0.9rem;
        color: #bababa;
        font-weight: 500;
        margin-top: 3px;
        text-align: center;
        text-transform: capitalize;
    }
`;