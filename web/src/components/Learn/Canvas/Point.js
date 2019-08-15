let colors = [
    '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
    '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
    '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
    '#FF5722'
];
class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.radius = Math.random()*6 + 1;
        this.rv = 0.05;
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    draw(ctx){
        let x,y;
        let n = 5;
        x = this.x*n + 50;
        y = this.y*n + 50;
        ctx.beginPath();
        ctx.arc(x,y,this.radius,0,Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill()
    }
    update(ctx){
        this.radius += this.rv;
        if(this.radius >= 4){
            this.rv = -Math.abs(this.rv);
        }else if(this.radius <= 2){
            this.rv = Math.abs(this.rv);
        }
        this.draw(ctx);
    }
}

export default Point;