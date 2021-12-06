import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 6rem;
`;

export const ContainerSearch = styled.div`
  padding: 10px;
  label {
    font-weight: bold;
    color: var(--acent);
    font-size: 1em;
  }

  input {
    margin-top: 2px;
    font-size: 1em;
    padding: 3px;
    width: 40%;
  }

`;
