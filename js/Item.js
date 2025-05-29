class Item extends GameObject{
    constructor(container,src,x,y,width,height,velX,velY, item){
        super(container,src,x,y,width,height,velX,velY);

        this.item = item
    }

    

    tick(){
        this.x += this.velX;
        this.y += this.velY;
    }

    render(){

        if(collisionCheck(this.img, hero.img)){
            this.container.removeChild(this.img);
            addItem = null;

            if(this.item ==1){
                bullet = 2;
            }else if(this.item ==2){
                bullet = 3;
            }

            
        }


        if(this.y >= 700){
            this.container.removeChild(this.img);
            addItem = null;

        }

        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
    }
}