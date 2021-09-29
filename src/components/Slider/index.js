import { SliderContainer, BannerContainer } from "./styles";
import Banner2 from "../../assets/banner3.png"

function Slider() {
    return (
        <SliderContainer>
            <BannerContainer>
                <img src={Banner2}/>
            </BannerContainer>   
        </SliderContainer>
    );
}

export default Slider;