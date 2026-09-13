const redBtn = document.querySelector('#redBtn');
const greenBtn = document.querySelector('#greenBtn');
const blueBtn = document.querySelector('#blueBtn');
const yellowBtn = document.querySelector('#yellowBtn');
const randomBtn = document.querySelector('#randomBtn');
const heading = document.querySelector('#title');

const colorButtons = [redBtn, greenBtn, blueBtn, yellowBtn];
const buttonColors = ['red', 'green', 'blue', 'yellow'];
for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener('click', function(){
        document.body.style.backgroundColor = buttonColors[i];
        heading.textContent = `Background Color: ${buttonColors[i]}`;
    });
}
const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink'];
randomBtn.addEventListener('click', function(){
    let randomIndex=Math.floor(Math.random()*colors.length);
    let randomColor = colors[randomIndex];
    let currentColor = document.body.style.backgroundColor;
    while (randomColor === currentColor) {
        randomIndex = Math.floor(Math.random() * colors.length);
        randomColor = colors[randomIndex];
    }
    document.body.style.backgroundColor = randomColor;
    heading.textContent = `Background Color: ${randomColor}`;
});
const resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', function(){
    document.body.style.backgroundColor = 'white';
    heading.textContent = 'Background Color: White';
});
