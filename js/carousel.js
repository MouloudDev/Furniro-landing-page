const imgList = document.getElementById("carousel_img_list");
const slides = Array.from(imgList.children);

const firstSlide = slides[0];
// first slide width;
const width = firstSlide.getBoundingClientRect().width;

// Position slides.
slides.forEach((slide, idx) =>
  idx === 0 ? slide.style.left = 0 :
  slide.style.left = (width + 18)*idx + "px"
)

const nextButton = document.getElementById("next_button");
const dots = Array.from(document.querySelectorAll(".dot_wrapper"));
let currSlideIdx = 0;

nextButton.addEventListener("click", () => {
  const nextIdx = (currSlideIdx + 1) % slides.length;
  const nextSlide = slides[nextIdx]
  const nextSlidePosition = nextSlide.style.left;
  imgList.style.transform = `translateX(-${nextSlidePosition})`;

   // Show current slide dot with css
   dots[currSlideIdx].classList.remove("curr_slide_dot");
   dots[nextIdx].classList.add("curr_slide_dot")

   // update current slide index
   currSlideIdx = nextIdx
})

// Carousel nav logic
dots.forEach((dot, idx) =>
  dot.addEventListener("click", () =>{
    const nextSlide = slides[idx]
    const nextSlidePosition = nextSlide.style.left;
    imgList.style.transform = `translateX(-${nextSlidePosition})`;

    // Show current slide dot with css
    dots[currSlideIdx].classList.remove("curr_slide_dot");
    dot.classList.add("curr_slide_dot")

    // update current slide index
    currSlideIdx = idx
  })
)
