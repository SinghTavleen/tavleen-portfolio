// AOS importeren
import AOS from 'aos';
import 'aos/dist/aos.css'; // CSS importeren zodat de animaties werken

// Initialiseren
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800, // animatie duurt 0.8s
    once: true, // animatie 1x per scroll
    easing: 'ease-out', // optioneel: animatie easing
  });
});
