import styled from "styled-components";

export const Container = styled.div `
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: #33333380;
  

  display: flex;
  justify-content: center;
  align-items: middle;    
`;

export const ModalContainer = styled.div `
    min-width: 250px;
    min-height: 250px;
    padding: 20px;
    height: max-content;

    z-index: 19;
    overflow-y: auto;

    background-color: #FFFFFF;
    box-shadow: 0px 0px 10px black;
    border-radius: 10px;

    > span {
        position: absolute;
        top: 15px;
        right: 20px;
        font-size: 30px;
        cursor: pointer;
        transition: 0.2s;

        :hover {
        color: var(--primary);
        }
  }

  > header {
    font-size: 24px;
    text-align: center;
    margin: 0px 50px;
  }
    

`;