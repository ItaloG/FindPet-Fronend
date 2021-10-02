import { Body, Container, FlexColumn } from "../../GlobalStyles";
import Card from "../../components/Card";
import Slider from "../../assets/banner1.png";
import Profile from "../../assets/default_profile_photo.jpg";
import Banner from "../../assets/cat.jpg";
import Banner2 from "../../assets/banner2.png";
import ImgOng from "../../assets/ong.png";
import ImgShop from "../../assets/shop.png";
import ImgPata from "../../assets/pata.png"

function Favoritos() {
    return (
        <Body>
            <Container>
                <FlexColumn>
                    <Card img={Profile} banner={Banner} instituicao="Nome da instituição" titulo="Nome do animal" IconPets={ImgPata}/>
                    <Card img={Profile} banner={Slider} titulo="Nome do Petshop"  IconPets={ImgShop}/>
                    <Card img={Profile} banner={Banner2} titulo="Nome da ONG" IconPets={ImgOng}/>
                </FlexColumn>
            </Container>
        </Body>
    );
}

export default Favoritos;