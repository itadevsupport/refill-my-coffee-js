let coffeLevel = 99;
const caffe = document.querySelector('.caffe');
const btnRefill = document.querySelector('button');

caffe.style.height = coffeLevel + '%';

let coffeInterval = setInterval(drink, 1000);

btnRefill.addEventListener('click', ()=>{
    coffeLevel = 99;
    caffe.style.height = coffeLevel + '%';
    btnRefill.disabled = true;
    coffeInterval = setInterval(drink, 1000);
});

function drink() {
    if(coffeLevel >= 10) {
        coffeLevel -= 10;
        caffe.style.height = coffeLevel + '%';
    } else {
        clearInterval(coffeInterval);
        btnRefill.disabled = false;
    }
}