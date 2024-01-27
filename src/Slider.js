export default class Slider {
	constructor(
		container,
		images = [],
		width,
		height,
		autoplay = true,
		controls = true,
		currentSlide = 0
	) {
		this.container = container;
		this.images = images;
		this.width = width;
		this.height = height;
		this.autoplay = autoplay;
		this.controls = controls;
		this.currentSlide = currentSlide;
		this.container.style.width = this.width;
		this.container.style.height = this.height;
	}

	slideTo(index) {
		this.currentSlide = parseInt(index);
		this.updateSliderFrame();
		this.updateCircleButtons();
	}

	slideLeft() {
		this.currentSlide =
			(this.currentSlide - 1 + this.images.length) % this.images.length;
		this.updateSliderFrame();
	}

	slideRight() {
		this.currentSlide = (this.currentSlide + 1) % this.images.length;
		this.updateSliderFrame();
	}

	updateSliderFrame() {
		const translateValue = -this.currentSlide * 100;
		this.sliderFrame.style.transform = `translateX(${translateValue}%)`;
	}

	createSlider() {
		this.sliderFrame = document.createElement("div");
		this.sliderFrame.classList.add("slider-frame");

		this.controlsContainer = document.createElement("div");
		this.controlsContainer.classList.add("controls");
		this.container.appendChild(this.sliderFrame);
		this.container.appendChild(this.controlsContainer);

		this.leftArrow = document.createElement("div");
		this.leftArrow.classList.add("left-arrow");
		this.controlsContainer.appendChild(this.leftArrow);
		this.arrowLeftButton = document.createElement("img");
		this.arrowLeftButton.src = "assets/arrow-left.svg";
		this.leftArrow.appendChild(this.arrowLeftButton);
		this.leftArrow.addEventListener("click", () => {
			this.slideLeft();
			this.updateCircleButtons();
		});

		this.rightArrow = document.createElement("div");
		this.rightArrow.classList.add("right-arrow");
		this.controlsContainer.appendChild(this.rightArrow);
		this.arrowRightButton = document.createElement("img");
		this.arrowRightButton.src = "assets/arrow-right.svg";
		this.rightArrow.appendChild(this.arrowRightButton);
		this.rightArrow.addEventListener("click", () => {
			this.slideRight();
			this.updateCircleButtons();
		});

		this.circles = document.createElement("div");
		this.circles.classList.add("circles");
		this.controlsContainer.appendChild(this.circles);

		this.images.forEach((image) => {
			const slideImage = document.createElement("img");
			slideImage.classList.add("slide-image");
			slideImage.src = image;
			this.sliderFrame.appendChild(slideImage);
			const circleButton = document.createElement("img");
			circleButton.classList.add("circle-button");
			circleButton.classList.add("empty");
			circleButton.src = "assets/empty-circle.svg";
			this.circles.appendChild(circleButton);
		});
		this.updateCircleButtons();
	}

	updateCircleButtons() {
		this.circleButtons = this.circles.querySelectorAll(".circle-button");
		// Remove existing event listeners
		this.circleButtons.forEach((button) => {
			button.removeEventListener("click", this.handleCircleButtonClick);
		});

		this.circleButtons.forEach((button, index) => {
			button.dataset.index = index;
			if (index === this.currentSlide) {
				button.src = "assets/filled-circle.svg";
			} else {
				button.src = "assets/empty-circle.svg";
			}
			button.addEventListener("click", this.handleCircleButtonClick);
		});
	}

	handleCircleButtonClick = (event) => {
		const index = event.currentTarget.dataset.index;
		if (!isNaN(index) && index >= 0 && index < this.images.length) {
			this.slideTo(index);
		}
	};
}
