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
    // width: 100%;
    height: 40px;
    font-size: 16px;
    top: 10px;
    // background-color: #0390fc; */azul claro*/
  }
  // > input:focus {
    // border-bottom: 2px solid var(--primary);
  //}
  // > input:not(:placeholder-shown) + label,
  // > input:focus + label {
  //   font-size: 14px;
  // color: var(--textPrimary);
  //   top: -25px;
  //   left: 0;
  //}

  //

  >Button{
    background-color: aqua;
  }

`;