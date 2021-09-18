const $ = document.querySelector.bind(document);

const slides = $(".slides");

const widths = [0, -1200, -2400, -3600, -2400, -1200, 0];
const length = widths.length;
let count = 0;

function sliderAutomacti(ms) {
    setInterval(() => {
        if (count < length - 1) {
            count++;
        } else if (count === length - 1) {
            count = 1;
        }
        console.log(count);
        Object.assign(slides.style, {
            transform: `translateX(${widths[count]}px)`,
        });
    }, ms);
}

sliderAutomacti(4000);
