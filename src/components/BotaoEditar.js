import styled from 'styled-components';
import { MdEdit } from 'react-icons/md';

const StyledMdEdit = styled(MdEdit)`
  width: 25px;
  height: 25px;
  margin-top: -2px;
  color: var(--light);

`; 

const IconBox = styled.div`
    width: 40px;
    height: 40px;
    background-color: white;
    border: solid 3px var(--light);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        background-color: var(--light);
    }

    :hover > ${StyledMdEdit} {
        color: white;
    }
`;

function BotaoEditar() {
    return(
        <>
            <IconBox>
                <StyledMdEdit/>
            </IconBox>
        </>
    );
}

export default BotaoEditar;