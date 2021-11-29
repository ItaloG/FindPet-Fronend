import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 700px;
  height: 325px;
  background-color: #fff;
  border-radius: 7px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const ImagesContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    width: 680px;
    height: 280px;
    overflow-x: hidden;
    margin-left: 10px;
    margin-top: 10px;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: ${(props) => (props.opacidade ? 1 : 0)};
  transition: opacity ease-in-out 0.4s;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 3px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 700px;
  height: 20px;
  position: absolute;
  margin-top: 295px;
`;

export const SliderButton = styled.button`
  margin: 0 5px;
  width: 13px;
  height: 13px;
  border-radius: 100%;
  border: 1px solid #C4C4C4;
  cursor: pointer;
  background: ${(props) => (props.marcado ? "#C4C4C4" : "#fff")};

`;
