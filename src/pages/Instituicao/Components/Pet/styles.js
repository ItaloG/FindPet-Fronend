import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;


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