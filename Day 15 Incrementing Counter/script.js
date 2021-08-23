const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = 0;

    const updateCounter = () => {
        // + will makae a string into a number
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText

        const increment = target / 200

        if(c < target) {
            counter.innerText= `${Math.ceil(c+increment)}`
            setTimeout(updateCounter, 2);
        } else {
            counter.innerText = target;
        }
    }

    updateCounter()
})