import triggerAnimation from "./services/triggerAnimation.js";
import changeHeaderOnScroll from "./services/changeHeaderOnScroll.js";
import handleSubmit from "./services/handleFormSubmit.js";

document.addEventListener("DOMContentLoaded", function() { 
  triggerAnimation('.fade-in-up');
  changeHeaderOnScroll();

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', handleSubmit);
  }

   // Add scroll event listener to window
   window.addEventListener('scroll', function() {
    changeHeaderOnScroll();
  });
});
