import { SliderContainer } from "./styles";
import { useEffect } from "react";
import Banner1 from "../../assets/banner1.png"
import Banner2 from "../../assets/banner2.png"
import Banner3 from "../../assets/banner3.png"

function Slider() {
    useEffect(() => {
        'use strict';

        const images = [
            { 'id': '1', 'url' : Banner1 },
            { 'id': '2', 'url' : Banner2 },
            { 'id': '3', 'url' : Banner3 }
        ];

        const sliderButtons = document.querySelector('#slider-buttons-container');

        let buttons;

        for (let i = 0; i < images.length; i++) {
            sliderButtons.innerHTML += `
                <button class='slide-button' id='slider-button${i+1}'></button>
            `
            buttons += document.querySelectorAll("slide-button");
        }

        const selectedSlide = () => {
            buttons[0].setAttribute('id', 'selected-slide-button');
        }

        // document.querySelector('#slider-button1').addEventListener('click', changeSlide);

        const containerItems = document.querySelector('#container-items');

        const loadImages = ( images, container ) => {
            images.forEach( image => {
                container.innerHTML += `
                    <div class='item'>
                        <img src='${image.url}'/> 
                    </div>
                `
            })
        }

        loadImages( images, containerItems );

        let items = document.querySelectorAll('.item');

        const previous = () => {
            containerItems.appendChild(items[0]);
            items = document.querySelectorAll('.item');
        } 

        const next = () => {
            const lastItem = items[items.length - 1];
            containerItems.insertBefore( lastItem, items[0] );
            items = document.querySelectorAll('.item');
        }

        setInterval(previous, 5000);

        // document.querySelector('#previous').addEventListener('click', next);
        // document.querySelector('#next').addEventListener('click', previous);
    });

    return (
        <SliderContainer>
            {/* <div className="action-button" id="previous">prev</div> */}
            <div className="container-items" id="container-items"></div>   
            {/* <div className="action-button" id="next">next</div> */}
            <div className="slider-buttons-container" id="slider-buttons-container"></div>

            {/* <button className="btnSlider" onClick={(e) => {
              e.preventDefault();
              alert('clicado');
            }}>clique aqui</button> */}
        </SliderContainer>
    );
}

export default Slider;