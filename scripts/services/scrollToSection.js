function scrollToSection(section) {
  const targetSection = document.getElementById(section);
  const sectionPosition = targetSection.offsetTop;
  window.scrollTo({
    top: sectionPosition,
    behavior: 'smooth'
  });
}
