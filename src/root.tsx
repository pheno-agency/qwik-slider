import { Slider } from "./components/slider/slider";

export default () => {
  const sliderSettings = {
    scrollSpeed: 1,
    gap: 50,
    showScrollbar: false,
    autoScroll: true,
    autoScrollSpeed: 5,
    width: "1400px",
    styleClass: "test",
  };

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <h3>slide</h3>

        <Slider {...sliderSettings}>
          <div class="bg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path
                style=" stroke:none;fill-rule:nonzero;fill:rgb(9.411765%,71.372549%,96.470588%);fill-opacity:1;"
                d="M 95.671875 112.554688 L 78.242188 95.214844 L 77.996094 95.257812 L 77.996094 95.074219 L 40.929688 58.417969 L 50.082031 49.597656 L 44.699219 18.757812 L 19.230469 50.355469 C 14.90625 54.722656 14.074219 61.863281 17.207031 67.105469 L 33.125 93.527344 C 35.558594 97.578125 39.382812 100.183594 44.722656 99.992188 C 56.027344 99.589844 60.996094 99.589844 60.996094 99.589844 L 95.664062 112.546875 L 95.671875 112.558594 Z M 95.671875 112.554688 "
              />
              <path
                style=" stroke:none;fill-rule:nonzero;fill:rgb(67.45098%,49.411765%,95.686275%);fill-opacity:1;"
                d="M 104.285156 63.960938 C 106.792969 58.785156 107.691406 54.257812 105.214844 49.707031 L 101.691406 43.222656 L 99.863281 39.894531 L 99.152344 38.597656 L 99.085938 38.671875 L 89.5 22.042969 C 87.082031 17.835938 82.582031 15.265625 77.734375 15.320312 L 69.328125 15.558594 L 44.234375 15.625 C 39.496094 15.65625 35.125 18.175781 32.722656 22.257812 L 17.476562 52.539062 L 44.761719 18.59375 L 80.554688 57.953125 L 74.148438 64.445312 L 77.972656 95.238281 L 78.027344 95.167969 L 78.027344 95.257812 L 77.972656 95.257812 L 78.046875 95.332031 L 81.03125 98.238281 L 95.46875 112.339844 C 96.074219 112.925781 97.058594 112.222656 96.65625 111.5 L 87.730469 93.9375 "
              />
              <path
                style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;"
                d="M 80.640625 57.855469 L 44.753906 18.695312 L 49.851562 49.359375 L 40.71875 58.222656 L 77.90625 95.179688 L 74.554688 64.5 L 80.640625 57.867188 Z M 80.640625 57.855469 "
              />
            </svg>
          </div>
          <div class="bg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path
                style=" stroke:none;fill-rule:nonzero;fill:rgb(9.411765%,71.372549%,96.470588%);fill-opacity:1;"
                d="M 95.671875 112.554688 L 78.242188 95.214844 L 77.996094 95.257812 L 77.996094 95.074219 L 40.929688 58.417969 L 50.082031 49.597656 L 44.699219 18.757812 L 19.230469 50.355469 C 14.90625 54.722656 14.074219 61.863281 17.207031 67.105469 L 33.125 93.527344 C 35.558594 97.578125 39.382812 100.183594 44.722656 99.992188 C 56.027344 99.589844 60.996094 99.589844 60.996094 99.589844 L 95.664062 112.546875 L 95.671875 112.558594 Z M 95.671875 112.554688 "
              />
              <path
                style=" stroke:none;fill-rule:nonzero;fill:rgb(67.45098%,49.411765%,95.686275%);fill-opacity:1;"
                d="M 104.285156 63.960938 C 106.792969 58.785156 107.691406 54.257812 105.214844 49.707031 L 101.691406 43.222656 L 99.863281 39.894531 L 99.152344 38.597656 L 99.085938 38.671875 L 89.5 22.042969 C 87.082031 17.835938 82.582031 15.265625 77.734375 15.320312 L 69.328125 15.558594 L 44.234375 15.625 C 39.496094 15.65625 35.125 18.175781 32.722656 22.257812 L 17.476562 52.539062 L 44.761719 18.59375 L 80.554688 57.953125 L 74.148438 64.445312 L 77.972656 95.238281 L 78.027344 95.167969 L 78.027344 95.257812 L 77.972656 95.257812 L 78.046875 95.332031 L 81.03125 98.238281 L 95.46875 112.339844 C 96.074219 112.925781 97.058594 112.222656 96.65625 111.5 L 87.730469 93.9375 "
              />
              <path
                style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;"
                d="M 80.640625 57.855469 L 44.753906 18.695312 L 49.851562 49.359375 L 40.71875 58.222656 L 77.90625 95.179688 L 74.554688 64.5 L 80.640625 57.867188 Z M 80.640625 57.855469 "
              />
            </svg>
          </div>
          <div class="bg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path
                style=" stroke:none;fill-rule:nonzero;fill:rgb(9.411765%,71.372549%,96.470588%);fill-opacity:1;"
                d="M 95.671875 112.554688 L 78.242188 95.214844 L 77.996094 95.257812 L 77.996094 95.074219 L 40.929688 58.417969 L 50.082031 49.597656 L 44.699219 18.757812 L 19.230469 50.355469 C 14.90625 54.722656 14.074219 61.863281 17.207031 67.105469 L 33.125 93.527344 C 35.558594 97.578125 39.382812 100.183594 44.722656 99.992188 C 56.027344 99.589844 60.996094 99.589844 60.996094 99.589844 L 95.664062 112.546875 L 95.671875 112.558594 Z M 95.671875 112.554688 "
              />
              <path
                style=" stroke:none;fill-rule:nonzero;fill:rgb(67.45098%,49.411765%,95.686275%);fill-opacity:1;"
                d="M 104.285156 63.960938 C 106.792969 58.785156 107.691406 54.257812 105.214844 49.707031 L 101.691406 43.222656 L 99.863281 39.894531 L 99.152344 38.597656 L 99.085938 38.671875 L 89.5 22.042969 C 87.082031 17.835938 82.582031 15.265625 77.734375 15.320312 L 69.328125 15.558594 L 44.234375 15.625 C 39.496094 15.65625 35.125 18.175781 32.722656 22.257812 L 17.476562 52.539062 L 44.761719 18.59375 L 80.554688 57.953125 L 74.148438 64.445312 L 77.972656 95.238281 L 78.027344 95.167969 L 78.027344 95.257812 L 77.972656 95.257812 L 78.046875 95.332031 L 81.03125 98.238281 L 95.46875 112.339844 C 96.074219 112.925781 97.058594 112.222656 96.65625 111.5 L 87.730469 93.9375 "
              />
              <path
                style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;"
                d="M 80.640625 57.855469 L 44.753906 18.695312 L 49.851562 49.359375 L 40.71875 58.222656 L 77.90625 95.179688 L 74.554688 64.5 L 80.640625 57.867188 Z M 80.640625 57.855469 "
              />
            </svg>
          </div>
          <div class="bg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path
                style=" stroke:none;fill-rule:nonzero;fill:rgb(9.411765%,71.372549%,96.470588%);fill-opacity:1;"
                d="M 95.671875 112.554688 L 78.242188 95.214844 L 77.996094 95.257812 L 77.996094 95.074219 L 40.929688 58.417969 L 50.082031 49.597656 L 44.699219 18.757812 L 19.230469 50.355469 C 14.90625 54.722656 14.074219 61.863281 17.207031 67.105469 L 33.125 93.527344 C 35.558594 97.578125 39.382812 100.183594 44.722656 99.992188 C 56.027344 99.589844 60.996094 99.589844 60.996094 99.589844 L 95.664062 112.546875 L 95.671875 112.558594 Z M 95.671875 112.554688 "
              />
              <path
                style=" stroke:none;fill-rule:nonzero;fill:rgb(67.45098%,49.411765%,95.686275%);fill-opacity:1;"
                d="M 104.285156 63.960938 C 106.792969 58.785156 107.691406 54.257812 105.214844 49.707031 L 101.691406 43.222656 L 99.863281 39.894531 L 99.152344 38.597656 L 99.085938 38.671875 L 89.5 22.042969 C 87.082031 17.835938 82.582031 15.265625 77.734375 15.320312 L 69.328125 15.558594 L 44.234375 15.625 C 39.496094 15.65625 35.125 18.175781 32.722656 22.257812 L 17.476562 52.539062 L 44.761719 18.59375 L 80.554688 57.953125 L 74.148438 64.445312 L 77.972656 95.238281 L 78.027344 95.167969 L 78.027344 95.257812 L 77.972656 95.257812 L 78.046875 95.332031 L 81.03125 98.238281 L 95.46875 112.339844 C 96.074219 112.925781 97.058594 112.222656 96.65625 111.5 L 87.730469 93.9375 "
              />
              <path
                style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;"
                d="M 80.640625 57.855469 L 44.753906 18.695312 L 49.851562 49.359375 L 40.71875 58.222656 L 77.90625 95.179688 L 74.554688 64.5 L 80.640625 57.867188 Z M 80.640625 57.855469 "
              />
            </svg>
          </div>
          <div class="bg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path
                style=" stroke:none;fill-rule:nonzero;fill:rgb(9.411765%,71.372549%,96.470588%);fill-opacity:1;"
                d="M 95.671875 112.554688 L 78.242188 95.214844 L 77.996094 95.257812 L 77.996094 95.074219 L 40.929688 58.417969 L 50.082031 49.597656 L 44.699219 18.757812 L 19.230469 50.355469 C 14.90625 54.722656 14.074219 61.863281 17.207031 67.105469 L 33.125 93.527344 C 35.558594 97.578125 39.382812 100.183594 44.722656 99.992188 C 56.027344 99.589844 60.996094 99.589844 60.996094 99.589844 L 95.664062 112.546875 L 95.671875 112.558594 Z M 95.671875 112.554688 "
              />
              <path
                style=" stroke:none;fill-rule:nonzero;fill:rgb(67.45098%,49.411765%,95.686275%);fill-opacity:1;"
                d="M 104.285156 63.960938 C 106.792969 58.785156 107.691406 54.257812 105.214844 49.707031 L 101.691406 43.222656 L 99.863281 39.894531 L 99.152344 38.597656 L 99.085938 38.671875 L 89.5 22.042969 C 87.082031 17.835938 82.582031 15.265625 77.734375 15.320312 L 69.328125 15.558594 L 44.234375 15.625 C 39.496094 15.65625 35.125 18.175781 32.722656 22.257812 L 17.476562 52.539062 L 44.761719 18.59375 L 80.554688 57.953125 L 74.148438 64.445312 L 77.972656 95.238281 L 78.027344 95.167969 L 78.027344 95.257812 L 77.972656 95.257812 L 78.046875 95.332031 L 81.03125 98.238281 L 95.46875 112.339844 C 96.074219 112.925781 97.058594 112.222656 96.65625 111.5 L 87.730469 93.9375 "
              />
              <path
                style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;"
                d="M 80.640625 57.855469 L 44.753906 18.695312 L 49.851562 49.359375 L 40.71875 58.222656 L 77.90625 95.179688 L 74.554688 64.5 L 80.640625 57.867188 Z M 80.640625 57.855469 "
              />
            </svg>
          </div>
          <div class="bg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path
                style=" stroke:none;fill-rule:nonzero;fill:rgb(9.411765%,71.372549%,96.470588%);fill-opacity:1;"
                d="M 95.671875 112.554688 L 78.242188 95.214844 L 77.996094 95.257812 L 77.996094 95.074219 L 40.929688 58.417969 L 50.082031 49.597656 L 44.699219 18.757812 L 19.230469 50.355469 C 14.90625 54.722656 14.074219 61.863281 17.207031 67.105469 L 33.125 93.527344 C 35.558594 97.578125 39.382812 100.183594 44.722656 99.992188 C 56.027344 99.589844 60.996094 99.589844 60.996094 99.589844 L 95.664062 112.546875 L 95.671875 112.558594 Z M 95.671875 112.554688 "
              />
              <path
                style=" stroke:none;fill-rule:nonzero;fill:rgb(67.45098%,49.411765%,95.686275%);fill-opacity:1;"
                d="M 104.285156 63.960938 C 106.792969 58.785156 107.691406 54.257812 105.214844 49.707031 L 101.691406 43.222656 L 99.863281 39.894531 L 99.152344 38.597656 L 99.085938 38.671875 L 89.5 22.042969 C 87.082031 17.835938 82.582031 15.265625 77.734375 15.320312 L 69.328125 15.558594 L 44.234375 15.625 C 39.496094 15.65625 35.125 18.175781 32.722656 22.257812 L 17.476562 52.539062 L 44.761719 18.59375 L 80.554688 57.953125 L 74.148438 64.445312 L 77.972656 95.238281 L 78.027344 95.167969 L 78.027344 95.257812 L 77.972656 95.257812 L 78.046875 95.332031 L 81.03125 98.238281 L 95.46875 112.339844 C 96.074219 112.925781 97.058594 112.222656 96.65625 111.5 L 87.730469 93.9375 "
              />
              <path
                style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;"
                d="M 80.640625 57.855469 L 44.753906 18.695312 L 49.851562 49.359375 L 40.71875 58.222656 L 77.90625 95.179688 L 74.554688 64.5 L 80.640625 57.867188 Z M 80.640625 57.855469 "
              />
            </svg>
          </div>
          <div class="bg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path
                style=" stroke:none;fill-rule:nonzero;fill:rgb(9.411765%,71.372549%,96.470588%);fill-opacity:1;"
                d="M 95.671875 112.554688 L 78.242188 95.214844 L 77.996094 95.257812 L 77.996094 95.074219 L 40.929688 58.417969 L 50.082031 49.597656 L 44.699219 18.757812 L 19.230469 50.355469 C 14.90625 54.722656 14.074219 61.863281 17.207031 67.105469 L 33.125 93.527344 C 35.558594 97.578125 39.382812 100.183594 44.722656 99.992188 C 56.027344 99.589844 60.996094 99.589844 60.996094 99.589844 L 95.664062 112.546875 L 95.671875 112.558594 Z M 95.671875 112.554688 "
              />
              <path
                style=" stroke:none;fill-rule:nonzero;fill:rgb(67.45098%,49.411765%,95.686275%);fill-opacity:1;"
                d="M 104.285156 63.960938 C 106.792969 58.785156 107.691406 54.257812 105.214844 49.707031 L 101.691406 43.222656 L 99.863281 39.894531 L 99.152344 38.597656 L 99.085938 38.671875 L 89.5 22.042969 C 87.082031 17.835938 82.582031 15.265625 77.734375 15.320312 L 69.328125 15.558594 L 44.234375 15.625 C 39.496094 15.65625 35.125 18.175781 32.722656 22.257812 L 17.476562 52.539062 L 44.761719 18.59375 L 80.554688 57.953125 L 74.148438 64.445312 L 77.972656 95.238281 L 78.027344 95.167969 L 78.027344 95.257812 L 77.972656 95.257812 L 78.046875 95.332031 L 81.03125 98.238281 L 95.46875 112.339844 C 96.074219 112.925781 97.058594 112.222656 96.65625 111.5 L 87.730469 93.9375 "
              />
              <path
                style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;"
                d="M 80.640625 57.855469 L 44.753906 18.695312 L 49.851562 49.359375 L 40.71875 58.222656 L 77.90625 95.179688 L 74.554688 64.5 L 80.640625 57.867188 Z M 80.640625 57.855469 "
              />
            </svg>
          </div>
          <div class="bg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path
                style=" stroke:none;fill-rule:nonzero;fill:rgb(9.411765%,71.372549%,96.470588%);fill-opacity:1;"
                d="M 95.671875 112.554688 L 78.242188 95.214844 L 77.996094 95.257812 L 77.996094 95.074219 L 40.929688 58.417969 L 50.082031 49.597656 L 44.699219 18.757812 L 19.230469 50.355469 C 14.90625 54.722656 14.074219 61.863281 17.207031 67.105469 L 33.125 93.527344 C 35.558594 97.578125 39.382812 100.183594 44.722656 99.992188 C 56.027344 99.589844 60.996094 99.589844 60.996094 99.589844 L 95.664062 112.546875 L 95.671875 112.558594 Z M 95.671875 112.554688 "
              />
              <path
                style=" stroke:none;fill-rule:nonzero;fill:rgb(67.45098%,49.411765%,95.686275%);fill-opacity:1;"
                d="M 104.285156 63.960938 C 106.792969 58.785156 107.691406 54.257812 105.214844 49.707031 L 101.691406 43.222656 L 99.863281 39.894531 L 99.152344 38.597656 L 99.085938 38.671875 L 89.5 22.042969 C 87.082031 17.835938 82.582031 15.265625 77.734375 15.320312 L 69.328125 15.558594 L 44.234375 15.625 C 39.496094 15.65625 35.125 18.175781 32.722656 22.257812 L 17.476562 52.539062 L 44.761719 18.59375 L 80.554688 57.953125 L 74.148438 64.445312 L 77.972656 95.238281 L 78.027344 95.167969 L 78.027344 95.257812 L 77.972656 95.257812 L 78.046875 95.332031 L 81.03125 98.238281 L 95.46875 112.339844 C 96.074219 112.925781 97.058594 112.222656 96.65625 111.5 L 87.730469 93.9375 "
              />
              <path
                style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;"
                d="M 80.640625 57.855469 L 44.753906 18.695312 L 49.851562 49.359375 L 40.71875 58.222656 L 77.90625 95.179688 L 74.554688 64.5 L 80.640625 57.867188 Z M 80.640625 57.855469 "
              />
            </svg>
          </div>
        </Slider>
      </body>
    </>
  );
};
