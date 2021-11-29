import styled from "styled-components";
import { MdShare, MdBookmark, MdAdd } from "react-icons/md";

export const FeedContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

export const LeftMenu = styled.aside`
  height: calc(100vh - 60px);
  width: 20%;
  position: fixed;
`;

export const FeedBox = styled.main`
  width: 100%;
  height: 100%;
  grid-column: span 3/5;
  grid-column-start: 2;
  background-color: var(--bg);
  margin-top: 20px;
`;

export const RightMenu = styled.aside`
  height: calc(100vh - 60px);
  width: 20%;
  position: fixed;
  right: 20px;
  overflow-y: auto;

  ::-webkit-scrollbar-track {
    background-color: #ededed;
  }
  ::-webkit-scrollbar {
    width: 5px;
    background: gray;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #bababa;
  }
`;

export const List = styled.section`
  width: 100%;
  height: auto;
  background-color: var(--bg);
  padding-top: 20px;
  border-bottom: ${(props) => (props.border ? "solid 1px #c4c4c4" : "none")};
  padding-bottom: 20px;

  > h3 {
    margin-bottom: 15px;
    font-size: 1rem;
    font-weight: 600;
    color: gray;
  }
`;

export const MyPet = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: 7px;
  align-items: center;

  > img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    border: solid 2px var(--light);
    padding: 1px;
  }

  > p {
    font-size: 0.9rem;
    margin-left: 10px;
    margin-top: 8px;
    font-weight: 500;
  }

  > label {
    font-size: 0.8rem;
    margin-left: 10px;
    margin-top: 8px;
    font-weight: 600;
    background-color: var(--pink);
    color: white;
    padding: 3px 7px;
    border-radius: 6px;
  }
`;

export const MyCampaign = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: 12px;
  align-items: center;

  > p {
    width: 100%;
    font-size: 0.9rem;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-left: 2px;
  }

  > div {
    width: fit-content;
    display: flex;
    justify-content: end;

    > label {
      font-size: 0.8rem;
      margin-left: 5px;
      font-weight: 600;
      display: flex;
      color: white;
      padding: 3px 7px;
      border-radius: 10px;
    }

    > label:first-child {
      background-color: var(--green);
    }
    > label:last-child {
      background-color: #4d77bf;
    }
  }
`;

export const LeftMenuItem = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: 15px;
  align-items: center;

  > p {
    width: fit-content;
    font-size: 0.9rem;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-right: 10px;
  }

  > label {
    font-size: 0.8rem;
    margin-left: 5px;
    font-weight: 600;
    display: flex;
    color: white;
    padding: 3px 7px;
    border-radius: 10px;
    background-color: lightcoral;
  }
`;

export const IconShare = styled(MdShare)`
  width: 0.75rem;
  height: 0.8rem;
  color: white;
  margin-right: 2px;
  margin-top: 1px;
`;

export const IconSave = styled(MdBookmark)`
  width: 0.8rem;
  height: 0.9rem;
  color: white;
  margin-right: 2px;
  margin-top: 1px;
`;

export const IconAdd = styled(MdAdd)`
  width: 0.8rem;
  height: 0.8rem;
  color: white;
  margin-right: 2px;
  margin-top: 1px;
`;

