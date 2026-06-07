const aboutAnimation = document.querySelector('.js-about-animation');

if (aboutAnimation) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutAnimation.classList.add('is-visible');
          observer.unobserve(aboutAnimation);
        }
      });
    },
    {
      threshold: 0.35,
    },
  );

  observer.observe(aboutAnimation);
}
