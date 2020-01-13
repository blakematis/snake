const canvas = document.querySelector(".canvas");
const score = document.querySelector(".score");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.clientHeight / scale;
const columns = canvas.clientWidth / scale;
var play = false;

window.onload = () => {
        snake = new Snake();
        fruit = new Fruit();
        fruit.spawnLocation();
        Play(snake, fruit);
        
};

window.addEventListener('keydown', ((evt) => {
    console.log(evt);
    if(evt.code == "Space"){
        if(play){
            play = false;    
        }else{
            play = true;
            Play(snake,fruit);
        }
    }
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
    
}));

function Play(snake, fruit){
    var interval = setInterval(() => {
        if(play){
            ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
            snake.update();
            fruit.draw();
            snake.draw();
            
            if(snake.eat(fruit)){
                fruit.spawnLocation();
                console.log(score);
                score.innerHTML = "Score: " + snake.length;

            }

            if(snake.checkCollision()){
                score.innerHTML = "Score: " + snake.length;
            }
            console.log(snake.xSpeed);
        }else{
            clearInterval(interval);
        }
    }, 250);
}