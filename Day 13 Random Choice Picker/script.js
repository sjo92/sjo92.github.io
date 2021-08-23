const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')


textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if(e.key == 'Enter') {
        //to remove input value before random select
        setTimeout(()=> {
            e.target.value = '';
        }, 10)

        randomSelect();
    }
})

//by using comma will split the value
function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim()!=='').map(tag => tag.trim());
    tagsEl.innerHTML = "";
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;

        tagsEl.appendChild(tagEl);

    })
}

function randomSelect() {
    const times = 30;
    const interval = setInterval(()=> {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        setTimeout(()=> {
            unHighlightTag(randomTag)
        },100)

    }, 100);
    setTimeout(()=> {
        clearInterval(interval)
        setTimeout(()=> {
            const randomTag = pickRandomTag();
            highlightTag(randomTag)
        }, 100)
    }, times*100)
}

//math.random is to get a number between 0 - 1
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random()* tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}
function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}