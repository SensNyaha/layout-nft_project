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

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});