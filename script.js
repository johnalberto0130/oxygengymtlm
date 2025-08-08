// Initialisation مكتبة الرسوم المتحركة GSAP
gsap.registerPlugin(ScrollTrigger);

// Initialisation مكتبة AOS للرسوم المتحركة عند التمرير
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800, // مدة الرسوم المتحركة
        once: true,    // تفعيل الرسوم المتحركة مرة واحدة
        offset: 50,    // إزاحة لتفعيل الرسوم المتحركة قبل الوصول للعنصر
        easing: 'ease-in-out', // نوع التباطؤ
    });

    // إظهار رسالة الترحيب المنبثقة
    showPopup();
});

// وظيفة لإظهار الرسالة المنبثقة
const showPopup = () => {
    const popupContainer = document.querySelector('.popup-container');
    // إظهار الرسالة بعد 1.5 ثانية
    setTimeout(() => {
        popupContainer.classList.add('active');
    }, 1500);
};

// وظيفة لإغلاق الرسالة المنبثقة
const closePopup = () => {
    const popupContainer = document.querySelector('.popup-container');
    popupContainer.classList.remove('active');
};

const popupCloseBtn = document.querySelector('.popup-close-btn');
const popupFermerBtn = document.querySelector('.popup-fermer-btn');

popupCloseBtn.addEventListener('click', closePopup);
popupFermerBtn.addEventListener('click', closePopup);

// التحكم في قائمة التنقل الجانبية للأجهزة الصغيرة
const navToggleBtn = document.querySelector('.nav-toggle-btn');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');

navToggleBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// إغلاق القائمة عند النقر على رابط
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
    });
});

// تغيير لون خلفية الهيدر عند التمرير
const mainHeader = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        mainHeader.classList.add('scrolled');
    } else {
        mainHeader.classList.remove('scrolled');
    }
});

// التحكم في قسم الوثائق (accordion)
document.addEventListener('DOMContentLoaded', () => {
    const documentsToggle = document.querySelector('.documents-toggle');
    const documentsList = document.querySelector('.documents-list');

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
});
