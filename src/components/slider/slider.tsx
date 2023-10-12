import {
  $,
  Slot,
  component$,
  useSignal,
  useStore,
  useStyles$,
  useVisibleTask$,
} from "@builder.io/qwik";
import type { QwikMouseEvent } from "@builder.io/qwik";
import styles from "./slider.css?inline";

interface SliderProps {
  scrollSpeed?: number;
  gap?: number;
  showScrollbar?: boolean;
  autoScroll?: boolean;
  autoScrollSpeed?: number;
  width?: string;
}

export const Slider = component$<SliderProps>(
  ({
    scrollSpeed = 1,
    gap = 15,
    showScrollbar = true,
    autoScroll = false,
    autoScrollSpeed = 15,
    width = "",
  }) => {
    useStyles$(styles);
    const state = useStore({
      isDown: false,
      startX: 0,
      scrollLeft: 0,
    });
    const slider = useSignal<HTMLDivElement>();

    const onMouseDown = $((e: QwikMouseEvent) => {
      state.isDown = true;
      state.startX = e.pageX - slider.value!.offsetLeft;
      state.scrollLeft = slider.value!.scrollLeft;
    });

    const exit = $(() => {
      state.isDown = false;
    });

    const onMouseMove = $((e: QwikMouseEvent) => {
      if (!state.isDown) return;
      const x = e.pageX - slider.value!.offsetLeft;
      const walk = (x - state.startX) * scrollSpeed;
      slider.value!.scrollLeft = state.scrollLeft - walk;
    });

    useVisibleTask$(() => {
      if (autoScroll) {
        const sliderElement = slider.value;
        if (sliderElement) {
          const maxScrollLeft =
            sliderElement.scrollWidth - sliderElement.clientWidth;
          let scrollDirection = 1;

          const interval = setInterval(() => {
            if (scrollDirection === 1) {
              if (sliderElement.scrollLeft >= maxScrollLeft) {
                scrollDirection = -1;
              }
            } else {
              if (sliderElement.scrollLeft <= 0) {
                scrollDirection = 1;
              }
            }

            if (scrollDirection === 1) {
              sliderElement.scrollLeft += 1;
            } else {
              sliderElement.scrollLeft -= 1;
            }
          }, autoScrollSpeed);

          return () => clearInterval(interval);
        }
      }
    });

    return (
      <div
        style={{
          overflowX: `${showScrollbar ? "scroll" : "hidden"}`,
          display: "flex",
          gap: `${gap}px`,
          width: width,
        }}
        ref={slider}
        preventdefault:mousedown
        onMouseDown$={onMouseDown}
        onMouseLeave$={exit}
        onMouseUp$={exit}
        onMouseMove$={onMouseMove}
      >
        <Slot />
      </div>
    );
  }
);
