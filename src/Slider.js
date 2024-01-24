export default class Slider {
	constructor(
		container,
		images = [],
		width,
		height,
		autoplay = true,
		controls = true
	) {
		this.container = container;
		this.images = images;
		this.width = width;
		this.height = height;
		this.autoplay = autoplay;
		this.controls = controls;
	}
}
