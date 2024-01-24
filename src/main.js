import Slider from "./Slider";

const container = document.querySelector(".slider");
const images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];

const slider = new Slider(container, images, "900px", "500px");
console.log(slider);

container.style.width = slider.width;
container.style.height = slider.height;

const controls = document.createElement("div");
controls.classList.add("controls");

container.appendChild(controls);
const leftArrow = document.createElement("div");
leftArrow.classList.add("left-arrow");
controls.appendChild(leftArrow);
const arrowLeftButton = document.createElement("img");
leftArrow.appendChild(arrowLeftButton);
arrowLeftButton.src = "assets/arrow-left.svg";

const rightArrow = document.createElement("div");
rightArrow.classList.add("right-arrow");
controls.appendChild(rightArrow);
const arrowRightButton = document.createElement("img");
rightArrow.appendChild(arrowRightButton);
arrowRightButton.src = "assets/arrow-right.svg";

const circles = document.createElement("div");
circles.classList.add("circles");
controls.appendChild(circles);

const sliderFrame = document.createElement("div");
sliderFrame.classList.add("slider-frame");
container.appendChild(sliderFrame);

slider.images.forEach((image) => {
	const slideImage = document.createElement("img");
	slideImage.classList.add("slide-image");
	slideImage.src = image;
	sliderFrame.appendChild(slideImage);
	const circleButton = document.createElement("img");
	circleButton.classList.add("circle-button");
	circleButton.classList.add("empty");
	circleButton.src = "assets/empty-circle.svg";
	circles.appendChild(circleButton);
});
