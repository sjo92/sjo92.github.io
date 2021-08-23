// generate a node list (like an array) with all elements with the class 'panel'
const panels = document.querySelectorAll('.panel') 

//for Loop for all elements of panels
panels.forEach((panel) => {
    panel.addEventListener('click', ()=> {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach((panel) =>{
        panel.classList.remove('active');
    })
}