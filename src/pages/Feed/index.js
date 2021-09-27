import Header from "../../components/Header";
import { Body, Container, FlexColumn } from "../../GlobalStyles";
import Card from "../../components/Card";
import Slider from "../../components/Slider";

function PaginaFeed() {
    return (
        <Body>
            <Header/>
            <Container>
                <FlexColumn>
                    <Slider/>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </FlexColumn>
            </Container>
        </Body>
    );
}

export default PaginaFeed;