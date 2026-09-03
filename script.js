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
    });
}
const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink'];
randomBtn.addEventListener('click', function(){
    const randomIndex=Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
});