const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    //maximum should be the length of the circles
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    update();
})

prev.addEventListener('click', () => {
    currentActive--;
    //minimum should be 1 (first circle)
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
})

//class of circle and progress should be modified
//buttons should be disabled depending on the current status
function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        }
        else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active')

    // circle 1: 0% , to circle 2: 33%, to circle 3: 66%, to circle 4: 100%
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if (currentActive === 1) {
        prev.disabled = true; //so the prev button cannot get clicked
    } else if (currentActive === circles.length) {
        next.disabled = true;
    }
    else {
        prev.disabled = false;
        next.disabled = false;
    }


}