import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    background-color: #ECECEC;

    > main {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        flex: 2;
        
        
        > img {
            width: 65%;
            height: 50%;
            /* margin-left: 5vw; */
        }

        > .titulo {
            width: 70%;
            display: flex;
            
            font-size: 3em;
            color: #FFB853;
            
            
            > h1 {
                display:flex;
                gap: 15px;
                > span {
                    color: #C98822;
                }
            }
        }

        > .texto{
            width: 70%;
            display: flex;
            text-align: start;
        }
    }

    > section {
        display: flex;
        flex: 2;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }

    @media(max-width: 690px){
        flex-direction: column;
        gap: 50px;
        img{
            display: none;
        }
    }
    
`;

export const FormContainer = styled.form`
    width: 60%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;   
    padding: 30px;
    border-radius: 10px;
    gap: 15px;
    box-shadow: 0px 0px 20px #00000055;
    background-color: #fff;

    > hr {
        width: 100%;
    }

    > .btnEntrar {
        width: 90%;
        height: 15%;
        margin-top: 10%;
        padding: 10px;

        background-color: #C98822;
	    border: none;
	    border-radius: 10px;
        color: #fff;
        font-weight: bold;
        font-size: 1.2em;

        cursor: pointer;

    }

    > .btnCadastrar {
        width: 75%;
        height: 15%;
        background-color: #FFB853;
        padding: 10px;
	    border: none;
	    border-radius: 10px;

        color: #fff;
        font-weight: bold;
        font-size: 1.2em;

        cursor: pointer;
    }

    > .check{
        display: flex;
        justify-content: space-between;
        width: 100%; 
        > p {
            user-select: none;
            cursor: pointer;

            :hover {
                text-decoration: underline;
                color: blue;
            }
        }

            > div {
                display: flex;
                align-items: center;
                gap: 5px;
            }
    }
`;


export const Button = styled.button`
    width: 75%;
    height: 15%;
    margin-top: 30px;
    background-color: #D4C6A9;
    padding: 10px;
	border: none;
	border-radius: 10px;

    font-size: 1.2em;

    cursor: pointer;
`;

export const CadastroInstituicoes = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    input, select {
        margin-top: 10px;
        padding: 10px;
        width: 100%;
        border-radius: 5px;
        border:solid #C4C4C4  1px;
        font-size: .9em;
    }

    > .endereco {
        display: flex;
        gap: 15px;    
    }

    button {
        width: 75%;
        height: 15%;
        margin-top: 15px;
        background-color: #FFB853;
        padding: 10px;
	    border: none;
	    border-radius: 10px;

        color: #fff;
        font-weight: bold;
        font-size: 1.2em;

        cursor: pointer;
    }
`;

  export const CadastroUsuario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    input, select {
        margin-top: 10px;
        padding: 10px;
        width: 100%;
        border-radius: 5px;
        border:solid #C4C4C4  1px;
        font-size: .9em;
    }

    > .endereco {
        display: flex;
        gap: 15px;    
    }

    button {
        width: 75%;
        height: 15%;
        margin-top: 15px;
        background-color: #FFB853;
        padding: 10px;
	    border: none;
	    border-radius: 10px;

        color: #fff;
        font-weight: bold;
        font-size: 1.2em;

        cursor: pointer;
    }
`;
    
