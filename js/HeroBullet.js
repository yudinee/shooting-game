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

                //청소할게없거나, 청소한 적군 죽이기
                this.removeObject(enemyArray, enemyArray[i]);//적군소멸

                this.removeObject(bulletArray, this);
                setScore(10);
                //console.log("충돌 감지");
                this.hitCount++;
                break;
            }
        }

        //레벨이 3인 경우엔, 주인공 총알은 위에서 적군과의 충돌 검사뿐 아니라, 대왕과의 충돌 검사도 실시해야 한다
        if((level>=3) && (bigEnemy!=null)){
            //대왕 적군은 10번 맞아야 죽음
            for(let i=0; i<bulletArray.length; i++){
                if(collisionCheck(this.img, bigEnemy.img)){
                    bigEnemy.bigEnemyHp--;
                    
                    setScore(10);

                    console.log("hp : ", bigEnemy.bigEnemyHp);

                    this.removeObject(bulletArray, bulletArray[i]);
                    

                    if(bigEnemy.bigEnemyHp <=0){
                        this.container.removeChild(bigEnemy.img);
                        
                        bigEnemy=null;//대왕을죽은 상태로 전환해야, tick(),render()호출을 막을 수 있다.
                        clearInterval(bigSt);

                    }
                    break;
                }
            }    
        }    

        //console.log("hitCount=",this.hitCount);

        if(this.y <= 0){
            this.removeObject(bulletArray, this);
            
        }
        this.img.style.top = this.y + "px";
    }
}