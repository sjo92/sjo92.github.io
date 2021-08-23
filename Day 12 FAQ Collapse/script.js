const buttons = document.querySelectorAll('.faq-toggle');

//toggle == an und aus
buttons.forEach((button) => {
    button.addEventListener('click', ()=> {
        button.parentNode.classList.toggle('active');
    })
})
