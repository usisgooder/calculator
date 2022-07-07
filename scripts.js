const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.number, .operation');
function addToDisplay() {
    display.innerHTML += this.textContent;
}
buttons.forEach(button => button.onclick = addToDisplay);
document.querySelector('.result').onclick = () => {
    display.innerHTML = eval(display.innerHTML);
}
document.querySelector('.clear').onclick = () => {
    display.innerHTML = '';
}
