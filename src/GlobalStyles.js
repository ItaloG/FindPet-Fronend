import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
    --primary: #fe0000;
    --textPrimary: #000000;
}
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
body{
    font-family: -apple-system, Roboto, Oxygen, Cantarell, sans-serif;
    color: var(--textPrimary);
}

`;

export const Body = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
    background-color: #ffffff;

    :-webkit-scrollbar{
        
    }
`;

export const Container = styled.div`
    margin-top: 75px;
    width: auto;
    height: auto;
    background-color: ffffff;
`;

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
`;