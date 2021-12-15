import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 6rem;

  h2 {
    font-size: 0.9rem;
    cursor: pointer;
    margin-bottom: 2px;
  }
`;

export const ContainerSearch = styled.div`
  padding: 10px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 10px;
  label {
    font-weight: bold;
    color: var(--acent);
    font-size: 1em;
  }

  input {
  border:solid 1px;
  border-radius: 5px;
  width: 400px;
  height: 22px;
  font-size: 1em;
  padding: 3px;
  }

`;

export const ComboboxInput = styled.section`
`;