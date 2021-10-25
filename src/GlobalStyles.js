import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary: #C98822;
        --secondary: #FFB853;
        --logoColor: #935B00;
        --headerColor: #F6E4CB;
        --backgroundColor: #F3F3F3;
        --gray: #B9B9B9;
        --dark: #654D41;
        --acent: #C98822;
        --pink: #D37171;
        --yellow: #EEBB5B;
        --green: #33B878; 
        --light: #CCA583;
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        
    }
    body {
        background-color: #FFFFFF;
        /* background-color: #ECECEC; */
        font-family: Montserrat,'sans-serif';
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }
    html, body, #root{
        height: 100%;
    }
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
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    main {
        display: flex;
        flex-direction: column;
        flex-grow: 3; 
    }
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