class Bullet extends GameObject{
    constructor(container,src,x,y,width,height,velX,velY){
        super(container,src,x,y,width,height,velX,velY);

        this.hitCount=0;
    }
    tick(){}
    render(){}
}