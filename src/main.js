import Slider from "./Slider";

const container = document.querySelector(".slider");
const images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];

const slider = new Slider(container, images, "100%", "100%");
slider.createSlider();
