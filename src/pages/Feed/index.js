import Header from "../../components/Header";
import { Body, ContainerCenter, FlexColumn } from "../../GlobalStyles";
import Card from "../../components/Card";
import Slider from "../../components/Slider";

function PaginaFeed() {
    return (
        <Body>
            <Header/>
            <ContainerCenter>
                <FlexColumn>
                    <Slider/>
                    <Card></Card>
                    <Card></Card>
                </FlexColumn>
            </ContainerCenter>
        </Body>
    );
}

export default PaginaFeed;