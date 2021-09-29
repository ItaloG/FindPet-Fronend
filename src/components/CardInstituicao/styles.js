import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 90%;
    height: 145px;
    background-color: #fff;
    margin-bottom: 20px;
    border-radius: 13px;
    border: solid 1px #C4C4C4;
`;

export const CardHeader = styled.div`
    display: flex;
    width: 100%;
    height: 40%;
    border-radius: 13px 13px 0px 0px;
`;

export const FotoPerfil = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 100%;

    > div {
        width: 40px;
        height: 40px;
        border-radius: 50%;

        > img {
            width: 100%;
            height: 100%;
            border-radius: 100%;
        }
    }
`;

export const Nome = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 100%;
    
    > p {
        font-weight: bold;
        font-size: 18px;
        color: var(--logoColor);
        padding-right: 20px;
    }
`;

export const Icone = styled.div`
    display: flex;
    align-items: center;
    width: 12%;
    height: 100%;

    > img {
        width: 25px;
        height: 25px;
        filter: invert(28%) sepia(63%) saturate(3490%) hue-rotate(39deg) brightness(92%) contrast(101%);
    }
`;

export const CardBody = styled.div`
    padding: 20px;
    width: 100%;
    height: 60%;
    border-radius: 0px 0px 13px 13px;

    > p {
        font-size: 17px;
        margin-bottom: 8px;
    }
`;