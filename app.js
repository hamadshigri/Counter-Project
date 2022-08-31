const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increase');
const decrementBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

let count = 0;
incrementBtn.addEventListener('click', () => {
    count++;
    // count = count + 1;
    counter.innerHTML = count;
});

decrementBtn.addEventListener('click', () => {
    
    if (count > 0 ){
        count--;
        // count = count - 1;
        counter.innerHTML = count;
    }
    else {
        alert("Counter is zero");    
    }
    
});

resetBtn.addEventListener('click', () => {
    count = 0;
    counter.innerHTML = count;
});