const glasses = document.querySelector('.glasses');

const goalLiter = document.querySelector('.goalLiter');
const remainingLiter = document.querySelector('#liters');
const percentage = document.querySelector('.percentage');
const remained = document.querySelector('.remained');
const btns = document.querySelectorAll('.btn');
const input = document.querySelector('input');
const formcontainer = document.querySelector('.form-container');
const waterpage = document.querySelector('.waterpage');
const refresh = document.querySelector('.refresh');

const ml = +200;
let filling = +0;
let globalLiter;

input.addEventListener('keydown', (liter) => {
    liter = +liter.key;
    updateValue(liter);
    divideIntoCups(liter);
    globalThis.globalLiter = liter;
} );



btns.forEach( btn => {
    btn.addEventListener('click', ()=> {
            changePage();
            
        })
    })

    refresh.addEventListener('click', ()=> {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
    filling = 0;
    remained.classList.add('remain');
    refresh.classList.remove('completed')

    while(glasses.firstChild){
        
        glasses.removeChild(glasses.lastChild);
        }
   
})



function highlightGlasses(idx) {
    smallGlasses.forEach((glass, idx2) => {
        if(idx2 <=idx) {
            glass.classList.add('full');
        } else {
            glass.classList.remove('full');
        }
    })
}

function changePage() {
    formcontainer.classList.toggle('inactive');
    waterpage.classList.toggle('inactive');

}

function updateValue(e) {
    goalLiter.innerHTML = `Goal: ${e} Liters`;
    remainingLiter.innerHTML =`${e} L`
}


function divideIntoCups(e) {
    const max = Math.ceil((e*1000)/ml);
    for (let i=0; i<max; i++) {
        const glassEl = document.createElement('div');
        glassEl.classList.add("glass", "glass-small");
        glassEl.innerText = `${ml}ml`;
        glasses.appendChild(glassEl);
        const countFilling = glasses.childElementCount
        glassEl.addEventListener('click', () => {

            updateBigGlass(countFilling, max)
            /*
            if (!glassEl.previousElementSibling.classList.contains("full") || !glassEl.classList.contains('full')){
                while(glassEl.previousElementSibling!= glasses.firstElementChild){
                    glassEl.previousElementSibling.classList.add('full');
                    glassEl = glassEl.previousElementSibling;}
            }
            */
            /*
            if(glassEl.classList.contains("full")){
                glassEl.classList.remove('full');
                filling = +filling-1;
                updateBigGlass(filling, count);
            }
            else{
                glassEl.classList.add('full');
                filling = +filling +1;
                updateBigGlass(filling, count);
            }*/

        })
    }
    
}
function indexCounter(e){
    let i=1;
    while(e.previousElementSibling!= glasses.firstElementChild){
    e = e.previousElementSibling;
    i++}
    console.log("The index is" + i);
    return i
}

function updateBigGlass(filling, count) {
    for (let i = (filling-1); i > -1; i--) {
        glasses.children[i].classList.add('full');
    }
    for (let i = filling; i < count; i++) {
      glasses.children[i].classList.remove('full');
    }
    if(filling === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility ='visible';
        percentage.style.height = `${(filling/count)*330}px`;
        percentage.innerText = `${Math.ceil((filling/count)*100)}%`;
    }
    if(filling ===count) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
        refresh.classList.add('completed');
    } else {
        remained.style.visibility = 'visible';
        remainingLiter.innerHTML =`${(globalThis.globalLiter - ((filling/count))).toFixed(1)} L`
        console.log(remainingLiter)
    }
    

}
//element.classList.contains(class);

/*

glasses.forEach((glass, idx) => {
    glass.addEventListener('click', () => highlightCups(idx))
})
function highlightCups(idx) {
    glasses.forEach((glass, idx2) => {
        if(idx2 <=idx) {
            glass.classList.add('full');
        }
        else {
            glass.classList.remove('remove')
        }
    })
}
*/