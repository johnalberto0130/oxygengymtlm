// Initialisation مكتبة الرسوم المتحركة GSAP
gsap.registerPlugin(ScrollTrigger);

// Hero section animation
gsap.from(".hero-content .logo-img", { duration: 1.5, y: -50, opacity: 0, ease: "power4.out" });
gsap.from(".hero-content h1", { duration: 1.5, y: -50, opacity: 0, ease: "power4.out", delay: 0.5 });
gsap.from(".hero-content p", { duration: 1.5, y: 50, opacity: 0, ease: "power4.out", delay: 1 });
gsap.from(".hero-content .btn", { duration: 1.5, scale: 0, opacity: 0, ease: "bounce.out", delay: 1.5 });

// Fade-in animation for sections on scroll
const sections = ["#trainers", "#tarifs", "#documents-section", "#avis", "#why-us", "#hours", "#motivational-message"];
sections.forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out"
    });
});

// Trainer slider functionality
const trainersWrapper = document.querySelector('.trainers-wrapper');
const totalTrainers = document.querySelectorAll('.trainer-card').length;
let currentTrainerIndex = 0;

function moveTrainerSlider(direction) {
    const gap = 20;
    const cardWidth = document.querySelector('.trainer-card').offsetWidth;
    const cardsToShow = window.innerWidth <= 768 ? 1 : 4;
    currentTrainerIndex = (currentTrainerIndex + direction + totalTrainers) % totalTrainers;
    let translateX = -currentTrainerIndex * (cardWidth + gap);
    trainersWrapper.style.transform = `translateX(${translateX}px)`;
}

// Testimonial slider functionality
const testimonialsWrapper = document.querySelector('.testimonials-wrapper');
const totalTestimonials = document.querySelectorAll('.testimonial-card').length;
let currentTestimonialIndex = 0;

function moveTestimonialSlider(direction) {
    const gap = 20;
    const cardWidth = document.querySelector('.testimonial-card').offsetWidth;
    const cardsToShow = window.innerWidth <= 768 ? 1 : 3;
    currentTestimonialIndex = (currentTestimonialIndex + direction + totalTestimonials) % totalTestimonials;
    let translateX = -currentTestimonialIndex * (cardWidth + gap);
    testimonialsWrapper.style.transform = `translateX(${translateX}px)`;
}

// Accordion for "Why us" section
function toggleAccordion() {
    const accordionHeader = document.querySelector('.accordion-header');
    const accordionContent = document.querySelector('.accordion-content');
    accordionHeader.classList.toggle('active');
    accordionContent.classList.toggle('open');
}

// Popup functionality
const popupContainer = document.querySelector('.popup-container');
const popupCloseBtn = document.querySelector('.popup-close-btn');
const popupFermerBtn = document.querySelector('.popup-fermer-btn');

// متغير لـ مقطع الصوت
let backgroundAudio;

const showPopup = () => {
    // إظهار الرسالة بعد 1.5 ثانية
    setTimeout(() => {
        gsap.fromTo(popupContainer, 
            { opacity: 0, scale: 0.8, display: 'flex' },
            { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
        );
    }, 1500);
};

// وظيفة لإغلاق الرسالة المنبثقة وتشغيل الصوت
const closePopup = () => {
    // تشغيل الموسيقى بعد إغلاق النافذة المنبثقة
    // تم تعديل هذا السطر لتشغيل الصوت مرة واحدة فقط
    playBackgroundMusicOnce('https://od.lk/s/NjlfMzk2MDk0MjZf/yeah-buddy-lightweight.mp3'); 
    // استخدام GSAP لإغلاق النافذة المنبثقة
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

// وظيفة لإنشاء وتشغيل مقطع صوتي مرة واحدة في الخلفية
const playBackgroundMusicOnce = (audioUrl) => {
    if (!backgroundAudio) {
        backgroundAudio = new Audio(audioUrl);
        backgroundAudio.volume = 0.5; // تعديل مستوى الصوت (0.0 إلى 1.0)
    }
    backgroundAudio.play();
};


if (popupCloseBtn) {
    popupCloseBtn.addEventListener('click', closePopup);
}
if (popupFermerBtn) {
    popupFermerBtn.addEventListener('click', closePopup);
}

// Accordion for "Documents" section
document.addEventListener('DOMContentLoaded', () => {
    const documentsToggle = document.querySelector('.documents-toggle');
    const documentsList = document.querySelector('.documents-list');

    if (documentsToggle && documentsList) {
        documentsToggle.addEventListener('click', () => {
            documentsToggle.classList.toggle('active');
            if (documentsToggle.classList.contains('active')) {
                // استخدام GSAP لفتح القائمة بسلاسة
                gsap.to(documentsList, { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.inOut' });
            } else {
                // استخدام GSAP لإغلاق القائمة بسلاسة
                gsap.to(documentsList, { height: 0, opacity: 0, duration: 0.5, ease: 'power2.inOut' });
            }
        });
    }

    // إظهار رسالة الترحيب المنبثقة عند تحميل الصفحة
    showPopup();
});

// Reset sliders on window resize
window.addEventListener('resize', () => {
    currentTrainerIndex = 0;
    moveTrainerSlider(0);
    currentTestimonialIndex = 0;
    moveTestimonialSlider(0);
});
