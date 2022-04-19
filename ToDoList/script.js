const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const total = document.querySelector('#total');
let i = 0;

// add event

btn.addEventListener('click', (e) => {
    if (!input.value) return;
    createDeleteElements(input.value);
    input.value = '';
})

// create and delete todo
function createDeleteElements(value) {
    i++
    const li = document.createElement('li');
    const btn = document.createElement('button');

    li.className = 'li';
    li.textContent = value;
    result.appendChild(li);

    btn.className = 'btn';
    btn.textContent = 'delete';
    li.appendChild(btn);

    //remove todo
    btn.addEventListener('click', (e) => {
        i--;
        total.textContent = i;
        result.removeChild(li);
    });

    // toogle class avtive
    li.addEventListener('click', (e) => {
        li.classList.toggle('li-active');
    });

    total.textContent = i;
    result.appendChild(li);

}