import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 9;
  top: 0;
  background-color: #333c;
  display: flex;
  justify-content: center;
  align-items: center;
    /* width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    //margin-top: 150px;
    margin-left:700px; */
    
`;

export const FormContainer = styled.form`
    width: 25vw;
    padding: 30px;
    display: flex;
    height: 30vh;
    z-index: 19;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    border-radius: 20px;
    margin-top: -30px;
    box-shadow: 0px 0px 20px #00000055;
    > h1 {
        text-align: center;
    }
    background-color: #FFFFFF;
    > .bttn1 {
        width: 70%;
        height: max-content;
        background-color: #D4C6A9;
        padding: 10px;
        border: none;
        border-radius: 6px;
        margin-top: 5px;
    }
    > .bttn2 {
        width: 70%;
        height: max-content;
        background-color: #D4C6A9;
        padding: 10px;
        border: none;
        border-radius: 6px;
    }
    > .titulo{
        font-size: 1.4em;
        margin-top: -10px;
    }
    
    > .imgX{
            /* margin-left: 500px; */
            margin-left: auto;
        }
    
`;