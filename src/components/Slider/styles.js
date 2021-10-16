import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  /* display: flex; */
  /* justify-content: space-between; */
  width: 940px;
  height: 450px;
  background-color: #fff;
  border-radius: 13px;

`;

export const ImagesContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    width: 850px;
    height: 360px;
    margin-top: 20px;
    margin-left: 45px;
    overflow-x: hidden;

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
    object-fit: cover;
  }
`;


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 940px;
  height: 20px;
  position: absolute;
  margin-top: 405px;
`;

export const SliderButton = styled.button`
  margin: 0 5px;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 1px solid black;
  cursor: pointer;
  background: ${(props) => (props.marcado ? "#C9882280" : "#fff")};

`;
