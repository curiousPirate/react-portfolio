import { Overlay } from "./overlay.js";

// Select the overlay element from the DOM
const overlayEl = document.querySelector('.overlay');

// Instantiate an Overlay object using the selected overlay element
const overlay = new Overlay(overlayEl, {
rows: 6,
columns: 11
});

let isAnimating = false;

// Attach click event listeners to buttons to trigger animation and page loading
const button = document.querySelectorAll(".animateButtons");
button.forEach((animateButtons, position) => {
  animateButtons.addEventListener("click", () => {
    if (isAnimating) return;
    isAnimating = true;

    overlay
      .show({
        // Specify the cell's transform origin
        transformOrigin: "0% 50%",
        // Duration for each cell animation
        duration: 0.3,
        // Ease for each cell animation
        ease: "power4.in",
        // Stagger object
        stagger: {
          grid: [overlay.options.rows, overlay.options.columns],
          from: "start",
          each: 0.04,
        },
      })
      .then(() => {
        // Now hide the overlay
        overlay
          .hide({
            // Specify the cell's transform origin
            transformOrigin: "100% 50%",
            // Duration for each cell animation
            duration: 0.5,
            // Ease for each cell animation
            ease: "power4",
            // Stagger function
            stagger: {
              grid: [overlay.options.rows, overlay.options.columns],
              from: "start",
              each: 0.04,
            },
          })
          .then(() => (isAnimating = false));
      });
  });
});
