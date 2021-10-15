import { ButtonContainer, SliderButton, SliderContainer } from "./styles";
import { useEffect, useRef, useState } from "react";
import Banner1 from "../../assets/banner1.png";
import Banner2 from "../../assets/banner2.png";
import Banner3 from "../../assets/banner3.png";

function Slider() {
  const [imagens, setImagens] = useState([]);

  let indexDestaque = useRef(0)

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

  const handleSliderButton = () => {
    console.log("teste");
  }

  useEffect(() => {
    // const images = [
    //   { id: "1", url: Banner1 },
    //   { id: "2", url: Banner2 },
    //   { id: "3", url: Banner3 },
    // ];

    // const sliderButtons = document.querySelector("#slider-buttons-container");

    // let buttons;

    // const selectedSlide = () => {
    //   buttons[0].setAttribute("id", "selected-slide-button");
    // };

    // document.querySelector('#slider-button1').addEventListener('click', changeSlide);

    // let items = document.querySelectorAll(".item");

    // const previous = () => {
    //   containerItems.appendChild(items[0]);
    //   items = document.querySelectorAll(".item");
    // };

    // const next = () => {
    //   const lastItem = items[items.length - 1];
    //   containerItems.insertBefore(lastItem, items[0]);
    //   items = document.querySelectorAll(".item");
    // };

    // setInterval(previous, 5000);

    // document.querySelector('#previous').addEventListener('click', next);
    // document.querySelector('#next').addEventListener('click', previous);
  });

  return (
    <SliderContainer>
      {/* <div className="action-button" id="previous">prev</div> */}
      <div className="container-items" id="container-items">
          {imagens.map((i, index) => (
              <div class="item">
                  <img src={i.url} />
              </div>
          ))}
      </div>
      {/* <div className="action-button" id="next">next</div> */}

      <ButtonContainer>
        {imagens.map((i, index) => (
          <SliderButton onClick={handleSliderButton} key={index} />
        ))}
      </ButtonContainer>

      {/* <button className="btnSlider" onClick={(e) => {
              e.preventDefault();
              alert('clicado');
            }}>clique aqui</button> */}
    </SliderContainer>
  );
}

export default Slider;
