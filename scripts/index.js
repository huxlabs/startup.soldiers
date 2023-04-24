import triggerAnimation from "./services/triggerAnimation.js";
import changeHeaderOnScroll from "./services/changeHeaderOnScroll.js";

document.addEventListener("DOMContentLoaded", function() { 
  triggerAnimation('.fade-in-up');
  changeHeaderOnScroll();

   // Add scroll event listener to window
   window.addEventListener('scroll', function() {
    changeHeaderOnScroll();
  });
});
