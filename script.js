// Initialisation de GSAP
gsap.registerPlugin(ScrollTrigger);

// Initialisation de AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        once: true,
        offset: 50,
        easing: 'ease-in-out',
    });
});

// Animations de l'en-tête (Header)
const mainHeader = document.querySelector('.main-header');
const navLinks = document.querySelectorAll('.main-nav a');

// Animation de la section Hero
gsap.from(".hero-content h1", { duration: 1.5, y: -50, opacity: 0, ease: "power4.out" });
gsap.from(".hero-content p", { duration: 1.5, y: 50, opacity: 0, ease: "power4.out", delay: 0.5 });
gsap.from(".hero-content .btn", { duration: 1.5, scale: 0, opacity: 0, ease: "bounce.out", delay: 1 });

// Fonctionnalité du slider des coachs
const trainersWrapper = document.querySelector('.trainers-wrapper');
const trainerCards = document.querySelectorAll('.trainer-card');
const totalTrainers = trainerCards.length;
let currentTrainerIndex = 0;

function moveTrainerSlider(direction) {
    const gap = 30;
    const cardsToShow = window.innerWidth <= 1024 ? 1 : 3;
    const cardWidth = trainerCards[0].offsetWidth;

    currentTrainerIndex = (currentTrainerIndex + direction + totalTrainers) % totalTrainers;
    
    // Déplace le slider pour afficher la carte sélectionnée
    gsap.to(trainersWrapper, {
        x: -(currentTrainerIndex * (cardWidth + gap)),
        duration: 0.8,
        ease: "power2.inOut"
    });
}

// Fonctionnalité du slider des avis
const testimonialsWrapper = document.querySelector('.testimonials-wrapper');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const totalTestimonials = testimonialCards.length;
let currentTestimonialIndex = 0;

function moveTestimonialSlider(direction) {
    const gap = 30;
    const cardsToShow = window.innerWidth <= 1024 ? 1 : 3;
    const cardWidth = testimonialCards[0].offsetWidth;

    currentTestimonialIndex = (currentTestimonialIndex + direction + totalTestimonials) % totalTestimonials;

    // Déplace le slider pour afficher la carte sélectionnée
    gsap.to(testimonialsWrapper, {
        x: -(currentTestimonialIndex * (cardWidth + gap)),
        duration: 0.8,
        ease: "power2.inOut"
    });
}

// Gestion du redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    // Réinitialise les sliders pour s'adapter à la nouvelle taille
    currentTrainerIndex = 0;
    gsap.to(trainersWrapper, { x: 0, duration: 0.1 });
    currentTestimonialIndex = 0;
    gsap.to(testimonialsWrapper, { x: 0, duration: 0.1 });
});

// Accordéon pour la section "Documents"
document.addEventListener('DOMContentLoaded', () => {
    const documentsToggle = document.querySelector('.documents-toggle');
    const documentsList = document.querySelector('.documents-list');

    documentsToggle.addEventListener('click', () => {
        documentsToggle.classList.toggle('active');
        if (documentsToggle.classList.contains('active')) {
            gsap.to(documentsList, { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.inOut' });
        } else {
            gsap.to(documentsList, { height: 0, opacity: 0, duration: 0.5, ease: 'power2.inOut' });
        }
    });
});

// Fonctionnalité de la popup
const popupContainer = document.querySelector('.popup-container');
const popupCloseBtn = document.querySelector('.popup-close-btn');
const popupFermerBtn = document.querySelector('.popup-fermer-btn');

// Animation d'ouverture de la popup
gsap.from(popupContainer, {
    opacity: 0,
    scale: 0.8,
    duration: 0.6,
    ease: "power3.out"
});

const closePopup = () => {
    gsap.to(popupContainer, {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
            popupContainer.style.display = 'none';
        }
    });
};

popupCloseBtn.addEventListener('click', closePopup);
popupFermerBtn.addEventListener('click', closePopup);
