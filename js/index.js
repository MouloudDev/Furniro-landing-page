const nav = document.getElementById("nav")
const xIcon = document.getElementById("x_icon")
const barsIcon = document.getElementById("bars_icon")
const toggleNavBtn = document.getElementById("toggle_nav_btn")

toggleNavBtn.addEventListener("click", () => {
  xIcon.classList.toggle("hidden")
  barsIcon.classList.toggle("hidden")
  nav.classList.toggle("show_mobile_nav")
})
