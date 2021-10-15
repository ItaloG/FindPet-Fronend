import styled from "styled-components";

export const SliderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 940px;
  height: 450px;
  background-color: #fff;
  margin-bottom: 20px;
  border: solid 2px #cfcdca;
  border-radius: 13px;

  > .container-items {
    position: absolute;
    display: flex;
    align-items: center;
    width: 850px;
    height: 360px;
    margin-top: 20px;
    margin-left: 45px;
    overflow-x: hidden;

    > .item {
      width: 850px;
      height: 360px;
      transition: all 2s;
      /* max-height: 360px; */

      > img {
        width: 850px;
        height: 360px;
      }

      :first-child {
        margin-left: -850px;
      }
    }
  }

  > .action-button {
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;

    :hover {
      cursor: pointer;
    }
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
  margin-right: 5px;
  margin-left: 5px;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  border: solid 0.5px gray;

  
  :hover {
    cursor: pointer;
  }
`;
