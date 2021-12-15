import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  max-width: 70%;
  min-height: 150px;
  background-color: #ffffff;
  margin-top: 20px;
  border: solid 2px #cfcdca;
  border-radius: 13px;
  display: flex;
  gap: 15px;
  padding: 10px;
`;

export const Informacoes = styled.div`
    padding: 10px;
`;

export const ImagemDesaparecido = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 200px;
  min-height: 100px;

  > img {
    width: 100%;
    height: 100%;
    min-width: 200px;
    min-height: 170px;
    max-width: 200px;
    max-height: 150px;
  }
`;

export const Tipo = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;

  > p {
    font-size: 12px;
    color: #000;
  }
`;

export const Nome = styled.div`
  align-items: center;
  justify-content: left;
  display: flex;

  > p {
    font-size: 17px;
    color: #000000;
    padding-top: 5px;

    align-items: center;
    justify-content: center;
  }
`;

export const Data = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;

  > p {
    font-size: 13px;
    color: #000000;
    padding-right: 20px;
    padding-top: 15px;
  }
`;

export const Descricao = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;

  > p {
    font-size: 13px;
    color: #000000;
    padding-right: 20px;
    padding-top: 15px;
  }

`;
