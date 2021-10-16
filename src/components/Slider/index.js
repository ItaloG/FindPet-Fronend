import { ButtonContainer, SliderButton, Container, ImagesContainer ,Image } from "./styles";
import { useEffect, useState } from "react";
import Banner1 from "../../assets/banner1.png";
import Banner2 from "../../assets/banner2.png";
import Banner3 from "../../assets/banner3.png";

function Slider() {
  const [imagens, setImagens] = useState([]);

  let [indexDestaque, setIndexDestaque] = useState(1)

  useEffect(() => {
    const loadDestaques = () => {
      const destaques = [
        { id: "1", url: Banner1 },
        { id: "2", url: Banner2 },
        { id: "3", url: Banner3 },
      ];

      setImagens(destaques);
    };

    loadDestaques();
  }, []);

  const moveDestaque = (index) => {
    setIndexDestaque(index);
  }

  return (
    <Container>
      <ImagesContainer>
        {imagens.map((i, index) => (
          <Image
            key={index}
            opacidade={indexDestaque === index + 1 ? true : false}
          >
            <img
              src={i.url}
              alt="teste"
            />
          </Image>
        ))}
      </ImagesContainer>

      <ButtonContainer>
        {imagens.map((i, index) => (
          <SliderButton
            onClick={() => moveDestaque(index + 1)}
            key={index}
            marcado={indexDestaque === index + 1 ? true : false}
          />
        ))}
      </ButtonContainer>
    </Container>
  );
}

export default Slider;
