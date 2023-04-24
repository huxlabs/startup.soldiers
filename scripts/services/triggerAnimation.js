export default function triggerAnimation(type) {
  const elements = document.querySelectorAll(type);
  
  // Create a new IntersectionObserver
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // If the observed element is in the viewport
      if (entry.isIntersecting) {
        // Get the index of the observed element
        const index = Array.from(elements).indexOf(entry.target);
        // Set a delay based on the index
        const delay = index * 50;
        // Add a class to the observed element with a delayed animation
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, delay);
        // Stop observing the observed element
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Observe each float element
  elements.forEach(element => {
    observer.observe(element);
  });
}
