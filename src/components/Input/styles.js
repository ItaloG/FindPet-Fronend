import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;

  > input {
    width: 100%;
	  margin: 0 auto;
    padding: 15px;
    border-radius: 5px;
    border:solid #C4C4C4  1px;
    font-size: 1em;
  }

  > input::-webkit-input-placeholder{
    font-size: 1em;
  }
 
  > label {
    height: 40px;
    font-size: 16px;
    top: 10px;
  }

  > Button {
    background-color: aqua;
  }

`;