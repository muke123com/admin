class Particle {
    constructor(o){
        this.x0 = o.x0;
        this.y0 = o.y0;
        this.x_c = o.x0;
        this.y_c = o.y0;
        this.x1 = o.x1;
        this.y1 = o.y1;
        this.color = o.color;
        this.count = 0;
        this.currentTime = 0;
        this.duration = 100*Math.random();  //持续时间
        this.delay = 100*Math.random();    //延迟时间
        this.vx = this.getPosition()['vx'];
        this.vy = this.getPosition()['vy'];
    }
    draw(ctx){
        let x,y;
        let n = 2;
        x = this.x_c;
        y = this.y_c;
        ctx.beginPath();
        ctx.rect(x,y,1,1);
        ctx.fillStyle = this.color;
        ctx.fill()
    }
    update(ctx){
        // this.x_c += this.vx;
        // this.y_c += this.vy;
        this.x_c = easeInOutQuad(this.currentTime, this.x0, this.x1 - this.x0, this.duration);
        this.y_c = easeInOutQuad(this.currentTime, this.y0, this.y1 - this.y0, this.duration);
        if(this.currentTime > this.duration ){
            this.x_c = this.x1;
            this.y_c = this.y1;
        }
        if(this.count > this.delay){
            this.currentTime++;
        }
        this.count++;
        this.draw(ctx);
    }
    getPosition(){
        let vx = (this.x1 - this.x0)/this.duration;
        let vy = (this.y1 - this.y0)/this.duration;
        return {
            vx: vx,
            vy: vy
        }
    }
}
let easeInOutQuad = function (e, a, g, f) {
    e /= f / 2;
    if (e < 1) {
        return g / 2 * e * e + a
    }
    e--;
    return -g / 2 * (e * (e - 2) - 1) + a
};
export default Particle