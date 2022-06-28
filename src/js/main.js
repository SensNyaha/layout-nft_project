'use strict'

let faqQuestions = document.querySelectorAll('.faq__question')
faqQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('faq__question_active');
        item.closest('.faq__item').querySelector('.faq__answer').classList.toggle('faq__answer_active');
    })
})

document.querySelectorAll('.menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        if (e.target.closest('.menu').classList.contains('menu_active')) {
            e.target.closest('.menu').classList.remove('menu_active');
            setTimeout(() => {e.target.click(); console.log(1)}, 200);
        }
        else {
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

let hamburger = document.querySelector('.header__hamburger');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    hamburger.previousSibling.classList.toggle('menu_active');
    hamburger.closest('body').classList.toggle('overflowed');
})
