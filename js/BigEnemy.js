class BigEnemy extends Enemy{
    constructor(container,src,x,y,width,height,velX,velY){
        super(container,src,x,y,width,height,velX,velY);

        //BigEnemy가 쏠 총알 배열
        this.enemyBulletArray = [];
        //대왕 적군의 hp;
        this.bigEnemyHp = 100;
    }

    //총알 생성
    createEnemyBullet(){
        this.enemyBulletArray.push(new EnemyBullet(this.container, this ,"../../images/plane/ball.png",this.x+200, this.y+200, 20, 20, 0, 5 ));
        this.enemyBulletArray.push(new EnemyBullet(this.container, this ,"../../images/plane/ball.png",this.x+400, this.y+200, 20, 20, 0, 5 ));
        this.enemyBulletArray.push(new EnemyBullet(this.container, this ,"../../images/plane/ball.png",this.x+600, this.y+200, 20, 20, 0, 5 ));
    }


    tick(){
        if(this.x <=0 || this.x >= 1000) { //방향 전환
            this.velX = -this.velX;
        }
        this.x += this.velX; //위치 업데이트
    }

    render(){
        for(let i=0; i<this.enemyBulletArray.length; i++) {
            this.enemyBulletArray[i].tick();
            this.enemyBulletArray[i].render();
        }

        if(collisionCheck(this.img, hero.img)){
            
            hero.minusAllEnergy();
        }




        this.img.style.left = this.x + "px";
    }

    
}