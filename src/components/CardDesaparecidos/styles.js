import styled from "styled-components";

export const Container = styled.footer`
    width: 50%;
    height: auto;
    background-color: #ccc4;
    margin-top: 20px;
    border: solid 2px #cfcdca;
    border-radius: 13px;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

export const Informacoes = styled.div`
    width: 40%;
    display: flex;
    justify-content: right;
    position: absolute;
    flex-direction: column;
    align-items: left;
    float: right;
    padding: 30px;
`;

export const ImagemDesaparecido = styled.div`
    display: flex;
    justify-content: left;
    align-items: left;
    float: left;
    background-color: lightcoral;

    > div {
        width: 100%;
        height: 20%;
        border-radius: 50%;
  
        > img {
            width: 30%;
            height: 40%;
        }
    }
`;

export const Tipo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    margin-left: -105px;
    width: auto;
    height: 100%;
    
    > p {
        font-size: 12px;
        color: #000;
        padding-right: 20px;
    }

    > h5 {
        color: #00000055;
        /* margin: 5px -17px; */
    }
`;

export const Nome = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    width: auto;
    margin-left:-50px;
    margin-top: -20px;
    height: 100%;
    
    > p {
        font-size: 20px;
        color: #000;
        
        align-items: center;
        justify-content: center;
    }

    > h5 {
        color: #00000055;
        /* margin: 5px -17px; */
    }
`;

export const Data = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    justify-content: center;
    margin-left:-90px;
    width: auto;
    height: 100%;
    
    > p {
        font-size: 13px;
        color: #000;
        padding-right: 20px;
    }

    > h5 {
        color: #00000055;
        /* margin: 5px -17px; */
    }
`;

export const Descricao = styled.div`
    display:flex;
    align-items: left;
    justify-content: left;
    margin-bottom: 50px;
    background-color: magenta;
    width: auto;
    height: 100%;
    
    > p {
        font-size: 13px;
        color: #000;
        padding-right: 20px;
    }

    > h5 {
        color: #00000055;
        /* margin: 5px -17px; */
    }
`;