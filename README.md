# Slider Component

Hey there! 👋 Thanks for checking out the Slider component, a simple and customizable way to add horizontal scrolling to your web pages.

## Installation

To get started, you'll need to install package if you haven't already. You can do this with npm

```
npm install qwik-slider
```

## Usage

Now that you're all set up, let's see how you can use the Slider component to add scrollable content to your website.

```
import { Slider } from 'qwik-slider';

<Slider>
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</Slider>

```

You can pass in various options to customize the behavior of your slider. Here are some of the available options:

| Option          | Default value | Description                               |
| --------------- | ------------- | ----------------------------------------- |
| scrollSpeed     | 1             | Adjust the scroll speed                   |
| gap             | 15 (px)       | Set the gap between items                 |
| showScrollbar   | true          | Control the visibility of the scrollbar   |
| autoScroll      | false         | Enable or disable auto-scrolling          |
| autoScrollSpeed | 15            | Adjust the speed of auto-scrolling        |
| width           | ""            | Adjust the width of the slider            |
| styleClass      | ""            | Styling the slider by providing the class |

## Customization

Feel free to style your slider by applying the CSS class name to the slider component. You can also pass in a `settings` object to configure your slider in one place:

```
const sliderSettings = {
  scrollSpeed: 5,
  gap: 20,
  showScrollbar: false,
  autoScroll: true,
  autoScrollSpeed: 10,
};


<Slider {...sliderSettings}>
  <Cards/>
</Slider>

```

## Pause on Hover

If you want your slider to pause when someone hovers their mouse over it, you're in luck! The Slider component has got you covered. Just hover your mouse over it, and it will pause. Move the mouse away, and it will start scrolling again.

## Looping

By default, your slider content will loop back to the start when it reaches the end. It's like an endless cycle, so your users won't miss a thing.

---

And that's it! The Slider component is a great way to add a dynamic and interactive element to your website. Have fun customizing and making your web pages scroll-tastic!

Happy coding! 🚀
