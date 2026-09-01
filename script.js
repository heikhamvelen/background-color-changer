const redBtn = document.querySelector('#redBtn');
const greenBtn = document.querySelector('#greenBtn');
const blueBtn = document.querySelector('#blueBtn');
const yellowBtn = document.querySelector('#yellowBtn');
const randomBtn = document.querySelector('#randomBtn');
const heading = document.querySelector('#title');
redBtn.addEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
});
greenBtn.addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
});
blueBtn.addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue';
});
yellowBtn.addEventListener('click', function(){
    document.body.style.backgroundColor = 'yellow';
});
const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink'];
randomBtn.addEventListener('click', function(){
    const randomIndex=Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
});