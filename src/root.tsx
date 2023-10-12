import { Slider } from "./components/slider/slider";
// import styles from "./components/slider/slider.css?inline";

export default () => {
  // useStylesScoped$(styles);
  // useStylesScopedQrl(styles);

  const sliderSettings = {
    scrollSpeed: 5,
    gap: 50,
    showScrollbar: true,
    autoScroll: true,
    autoScrollSpeed: 15,
    width: "1500px",
  };

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        {/* <div class="hh"> */}
        <Slider
          scrollSpeed={5}
          gap={50}
          showScrollbar={false}
          autoScroll={true}
          autoScrollSpeed={5}
          width="1000px"
        >
          {/* <div class="inner"> */}
          <div class="bg"></div>
          <div class="bg"></div>
          <div class="bg"></div>
          <div class="bg"></div>
          <div class="bg"></div>
          <div class="bg"></div>
          {/* </div> */}
        </Slider>
        {/* </div> */}

        <h3>another slider with different settings</h3>

        {/* <div class="hh"> */}
        <Slider {...sliderSettings}>
          <div class="bg"></div>
          <div class="bg"></div>
          <div class="bg"></div>
          <div class="bg"></div>
          <div class="bg"></div>
          <div class="bg"></div>
        </Slider>
        {/* </div> */}
        {/*  */}
      </body>
    </>
  );
};
