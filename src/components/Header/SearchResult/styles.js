import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    /* background-color: antiquewhite; */
    border-radius: 5px;
    margin-top: 8px;
    margin-bottom: 8px;
    padding: 0px 10px;

    > div {
        width: 2.5rem;
        height: 2.5rem;
        background-color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        overflow: hidden;
        border: solid 1px var(--dark);
        padding: 1px;

        > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 100%;
            border: solid 2px var(--secondary);
        }
    }

    > p {
        font-size: 1rem;
        font-weight: 600;
        padding-left: 10px;
        padding-right: 10px;
        width: 13.5rem;
        max-width: 13.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #92765E
    }

    > span {
        font-size: 0.8rem;
        font-weight: 600;
        text-align: right;
        width: 2.8rem;
        color: #bababa
    }
`;