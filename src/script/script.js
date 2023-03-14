// variable for bottom to top button
const buttonTop = document.getElementById("buttonBottomToTop");
// function is called when the scroll event is triggered
window.onscroll = function () {
  stickyNavigation();
};
// variable for taking the ID of the navigation bar
const navbar = document.getElementById("navbar");
// variable for getting offsetTop value of navbar element
const sticky = navbar.offsetTop;

// Code for bottom to top button
window.addEventListener("scroll", () => {
  /**
   * if scrollTop is greater than 20 pixels, then display the element as block-level element on the web page
   * else does not display the element on the web page
   */
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonTop.style.display = "block";
  } else {
    buttonTop.style.display = "none";
  }
});
buttonTop.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

/**
 * @function stickyNavigation
 * @description creates a sticky navigation bar on a webpage
 * @params none
 * @returns void
 */
function stickyNavigation() {
  /**
   * if the pageYOffset(number of pixels by which the document is scrolled vertically)
   * is greater than or equal to sticky then add sticky to classList property of navbar
   * else remove that property
   */
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
