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
		this.sliderFrame = document.createElement("div");
		this.sliderFrame.classList.add("slider-frame");
		container.appendChild(this.sliderFrame);
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
}
