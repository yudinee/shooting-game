class Energy extends GameObject{
    constructor(container,src,x,y,width,height,velX,velY){
        super(container,src,x,y,width,height,velX,velY);
    }

    removeObject(array, target){
        this.container.removeChild(target.img);
        array.splice(array.indexOf(target),1);
    }
    


    tick(){
        this.x += this.velX;
        this.y += this.velY;
    }

    render(){

        //hero, addhp 충돌체크
        if(collisionCheck(this.img, hero.img)){
                   
            //addHp, hero 충돌 시 hp 갯수 7개까지
            if(hpArray.length  < 7) {
                 hpArray.push(new Hp(this.container, 100+(hpArray.length*45), 50, 40,20,"lightgreen","green"));

            }
            
            //addHp지움
            this.removeObject(addHpArray, this);
           
        }

        if(this.y >= 700){
            this.removeObject(addHpArray, this);
        }

        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
    }
}