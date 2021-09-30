import Header from "../../components/Header";
import { Body, ContainerCenter, FlexColumn } from "../../GlobalStyles";
import Card from "../../components/Card";
import Slider from "../../components/Slider";
import FotoPadrao from "../../assets/default_profile_photo.jpg";
import IconeOng from "../../assets/ong.png";
import IconePetShop from "../../assets/shop.png";
import Banner1 from "../../assets/banner1.png"
import Banner2 from "../../assets/banner2.png"
import Banner3 from "../../assets/banner3.png"

function PaginaFeed() {
    return (
        <Body>
            <Header/>
            <ContainerCenter>
                <FlexColumn>
                    <Slider/>
                    <Card foto={FotoPadrao} nome_instituicao={"Instituto A"} icone={IconeOng} distancia={"2,6km"} banner={Banner1}/>
                    <Card foto={FotoPadrao} nome_instituicao={"Petshop B"} icone={IconePetShop} distancia={"3,5km"} banner={Banner2}/>
                    <Card foto={FotoPadrao} nome_instituicao={"ONG ABC"} icone={IconeOng} distancia={"10km"} banner={Banner3}/>
                </FlexColumn>
            </ContainerCenter>
        </Body>
    );
}

export default PaginaFeed;