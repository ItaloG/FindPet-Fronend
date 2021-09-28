import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 940px;
    height: 320px;
    background-color: #fff;
    margin-top: 20px;
    border: solid 2px #cfcdca;
    border-radius: 13px;

`;

export const CardHeader = styled.header`
    display: flex;
    width: 100%;
    height: 22%;
    border-bottom: solid 2px #cfcdca;
    border-radius: 13px 13px 0px 0px;

    > div.dados-container {
        display: flex;
        width: 80%;
        height: 100%;
    }

    > div.distancia-container {
        display: flex;
        justify-content: flex-end;
        width: 20%;
        height: 100%;
    }
`;

export const FotoPerfil = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12%;
    height: 100%;

    > div {
        width: 50px;
        height: 50px;
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
        font-size: 20px;
        color: #000;
        padding-right: 20px;
    }

    > h5 {
        color: #00000055;
        margin-top: 5px;
        margin-left: -12px;
        /* margin: 5px -17px; */
    }
`;

export const Icone = styled.div`
    display: flex;
    align-items: center;
    width: 12%;
    height: 100%;

    > img {
        width: 40px;
        height: 30px;
        margin-left: 10px;
        color: #000;
    }
`;

export const Distancia = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 100%;

    > p {
        font-weight: bold;
        font-size: 16px;
        color: #000;
    }
`;

export const CardBody = styled.main`
    display: flex;
    align-items: center;
    overflow-y: hidden;
    width: 100%;
    height: 78%;
    border-radius: 0px 0px 13px 13px;

    > img {
        width: 100%;
        height: auto;
    }
`;