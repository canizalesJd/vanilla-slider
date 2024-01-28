import Slider from "./Slider";

const container = document.getElementById("slider1");
const images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];

const slider = new Slider(container, images, "100%", "100%");
slider.createSlider();

const container2 = document.getElementById("slider2");
const slider2 = new Slider(
	container2,
	images,
	"100%",
	"100%",
	true,
	3000,
	true,
	false
);
slider2.createSlider();

const container3 = document.getElementById("slider3");
const slider3 = new Slider(container3, images, "100%", "100%", false);
slider3.createSlider();

export default Slider;
