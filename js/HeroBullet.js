class HeroBullet extends Bullet{
    constructor(container,src,x,y,width,height,velX,velY){
        super(container,src,x,y,width,height,velX,velY);

        this.hitCount=0;
    }

    tick(){
        this.y += this.velY;
    }

    render(){
        //적군과의 충돌 시, 처리 후 점수 처리 
        for(let i=0; i<enemyArray.length; i++){
            if(collisionCheck(this.img, enemyArray[i].img)){

                //청소먼저 시키고 죽어야 한다..
                //무조건하지말고, 적군 총알이 잇을때만..
                if(level>1){
                    enemyArray[i].removeEnemyBullet()//그 적군이 보유한 총알수거 메서드 호출
                }

                //청소할게없거나, 청소한 적군 죽이기
                this.removeObject(enemyArray, enemyArray[i]);//적군소멸

                this.removeObject(bulletArray, this);
                setScore(10);
                //console.log("충돌 감지");
                this.hitCount++;
                break;
            }
        }
        //console.log("hitCount=",this.hitCount);

        if(this.y <= 0){
            this.removeObject(bulletArray, this);
            
        }
        this.img.style.top = this.y + "px";
    }
}