export default function changeHeaderOnScroll() {
  // Get a reference to the header
  const header = document.querySelector('#header');
  // Get a reference to the hero section
  const heroSection = document.querySelector('#hero');
  // Calculate the position of the hero section relative to the top of the page
  if (window.pageYOffset > heroSection.offsetHeight) {
  // if (window.pageYOffset > heroSection.offsetHeight - 100) {

    header.classList.add('bg-primary');
  } else {
    // logo.setAttribute('src', 'assets/logo.svg');
    header.classList.remove('bg-primary');
  }
}