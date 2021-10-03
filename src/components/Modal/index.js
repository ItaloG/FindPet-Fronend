import { Container, ModalContainer } from "./styles";

function Modal({title, children, handleClose}) {

    return (
        <Container>
            <ModalContainer>
                <header>{title}</header>
                <span onClick={handleClose}>&times;</span>
                {children}
            </ModalContainer>
        </Container>
    )
};

export default Modal;