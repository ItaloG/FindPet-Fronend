import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 25px;

  > div:first-child {
    width: 100%;
    height: 260px;
    display: flex;
    background-color: pink;

    > aside {
      position: absolute;
      margin-left: 495px;
    }

    > :first-child {
      margin-top: 5px;
    }

    > :nth-child(2) {
      margin-top: 50px;
    }

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 2px;
    }
  }

  > div:nth-child(2) {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    font-size: 0.98rem;
    margin-top: 10px;
    padding: 0 10px;

    > h3 {
      grid-column: 1 / span 3;
      color: var(--primary);
    }

    > p {
      grid-column: 1 / span 1;
      grid-column-start: 4;
      justify-self: end;
      font-size: 1rem;
      color: var(--primary);
      font-weight: 600;
      margin-top: 2px;
    }
  }

  > div:last-child {
    padding: 10px;
    padding-top: 15px;

    > p {
      font-size: 1rem;
      color: #bababa;
      font-weight: 500;
    }
  }

  > p {
    font-size: 0.9rem;
    color: #bababa;
    font-weight: 500;
    margin-top: 3px;
    text-align: center;
    text-transform: capitalize;
  }
`;
