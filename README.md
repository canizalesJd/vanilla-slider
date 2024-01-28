# vanilla-slider

Simple Vanilla JS Image sliders

### Features

- Width control
- Height control
- Autoplay (with custom play time)
- Buttons to slide to the left and right
- Circle buttons to navigate to a specific slide
- Function to hide control buttons

### How to use

**1 - Create a container with a custom width and height a**

- Recommended: Use porcentages for responsiveness. The CSS file contains 4 different width and 2 height presents that you can use: `.w-100` full width (100vw), `.w-90` (90vw), `.w-75` (75vw) and `.w-50` half width(50vw) h-660p 600px height and h-300p 300px height. Refer to the example below:

```
<div class="w-100 h-600p">
</div>
```

- Let's call this container "parent". The above would generate a Full width 600px parent container for your slider

**2 - Add a div inside the parent container with the slider class**

```
<div class="w-100 h-600p">
    <div class="slide" id="yourSliderId">
    </div>
</div>
```

- Add a custom id or class to create the slider later (refer to next step)

**3 - Create the slider**

- Select the container from the DOM

```
const container = document.getElementById("yourSliderId");
```

- Using the `Slider` class, create a constant and pass the following required parameters:

  - container: This will be the parent container
  - images: list of images to be used (array)
  - width: value for the width (string). Recommended use porcentages e.g 100%
  - height: value for the height (string) e.g 100%

```
const slider = new Slider(container, images, width, height);
slider.createSlider();
```

### Contribute

This is an open source project, pull requests are more than welcome :D

### Future Features

I'm planning on converting this repo in an npm module for easier use
