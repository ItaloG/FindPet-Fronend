import styled, { createGlobalStyle } from "styled-components";
import { MenuItem } from "./components/Header/styles";

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary: #C98822;
        --secondary: #FFB853;
        --logoColor: #935B00;
        --headerColor: #F6E4CB;
        --text: #000000;
        --backgroundColor: #F3F3F3;
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Roboto', 'sans-serif';
    }

    body {
        overflow-x: hidden;
        background-color: #ECECEC;
    }

    /* @media(max-width: 1000px) {
        ${MenuItem} {
            background-color: aquamarine;
        }
    } */
`;

export const Body = styled.div`
    height: auto;
    padding: 20px;
    display: flex;
    justify-content: center;
    background-color: pink;

    :-webkit-scrollbar{
        
    }
`;

export const Container = styled.div`
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0px 0px 15px #cfcfcf;
    margin-top: 75px;
    width: auto;
    height: auto;
    background-color: #ffffff;
`;

export const ContainerCenter = styled.div`
    padding-top: 40px;
    margin-top: 75px;
    width: 940px;
    height: auto;
    background-color: peru;
`;

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
`;

export const FlexRow = styled.div`
    display: flex;
    width: 100%;
    height: auto;
`;
