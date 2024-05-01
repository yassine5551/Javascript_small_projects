const result = document.querySelector('.result');
const btns = document.querySelectorAll('button');
let count = 0;
result.textContent = count;


btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('increase')) {
            count++;
        } else if (btn.classList.contains('decrease')) {
            count--;
        } else {
            count =0
        }

        if (count > 0) {
            result.style.color = 'green';
        } else if (count < 0) {
            result.style.color = 'red';
        } else {
            result.style.color = 'white';
        }
        result.textContent = count;
    })

 })



 

