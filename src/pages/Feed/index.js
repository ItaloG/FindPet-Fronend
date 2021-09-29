import Header from "../../components/Header";
<<<<<<< HEAD
import { Body, ContainerCenter, FlexColumn } from "../../GlobalStyles";
=======
import { Body, Container, FlexColumn } from "../../GlobalStyles";
>>>>>>> 2fd56a927c871c3e66793d10684e7907761d6bc3
import Card from "../../components/Card";
import Slider from "../../components/Slider";

function PaginaFeed() {
    return (
        <Body>
            <Header/>
<<<<<<< HEAD
            <ContainerCenter>
=======
            <Container>
>>>>>>> 2fd56a927c871c3e66793d10684e7907761d6bc3
                <FlexColumn>
                    <Slider/>
                    <Card></Card>
                    <Card></Card>
<<<<<<< HEAD
                </FlexColumn>
            </ContainerCenter>
=======
                    <Card></Card>
                </FlexColumn>
            </Container>
>>>>>>> 2fd56a927c871c3e66793d10684e7907761d6bc3
        </Body>
    );
}

export default PaginaFeed;