function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.length = 0;
    this.tail = [];

    this.draw = () => {
        ctx.fillStyle = "#FFFFFF";
        
        for(let i=0; i < this.tail.length; i++){
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }
    
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    this.update = () => {

        for(let i=0; i<this.tail.length - 1; i++){
            this.tail[i] = this.tail[i+1];
        }

        this.tail[this.length -1] = { x: this.x, y: this.y};

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > canvas.clientWidth) {
            this.x = 0;
        }
        if (this.y > canvas.clientHeight) {
            this.y = 0;
        }
        if (this.x < 0) {
            this.x = canvas.clientWidth;
        }
        if (this.y < 0) {
            this.y = canvas.clientHeight;
        }
    }

    this.changeDirection = (direction) => {
        if(this.xSpeed < -scale*1){
            this.xSpeed = -scale*1;
        }else if(this.xSpeed > scale*1){
            this.xSpeed = scale*1;
        }
        if(this.ySpeed < -scale*1){
            this.ySpeed = -scale*1;
        }else if(this.ySpeed > scale*1){
            this.ySpeed = scale*1;
        }
        switch (direction) {
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                break;
            case 'Left':
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
                break;
            case 'Right':
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                break;
        }
    }

    this.eat = (fruit) => {
        if(this.x === fruit.x && this.y === fruit.y){
            console.log("eating");
            this.length++;
            return true;
        }
        return false;

    }

    this.checkCollision = () => {
        for(var i=0; i<this.tail.length; i++){
            if(this.x === this.tail[i].x && this.y === this.tail[i].y){
                this.length = 0;
                this.tail = [];
                return true;
            }
        }
        return false;
    }
}