class Enemy extends GameObject{
    constructor(container,src,x,y,width,height,velX,velY){
        super(container,src,x,y,width,height,velX,velY);

        //각 적군은 자신이 쏜 총알을 모아놓을 배열이 필요 ( 스스로 주인공에게 다가가면서, 충돌을 체크)
        this.enemyBulletArray=[];
    }

    createEnemyBullet(){
        this.enemyBulletArray.push(new EnemyBullet(this.container, this ,"images/plane/ball.png",this.x, this.y, 20, 20, 0, 30 ));
    }

    tick(){
        this.x += this.velX;
        this.y += this.velY;
    }

    render(){
        //적군이 레벨2부터 자체적으로 총알을 발사하면 자신의 배열에 누적시키고, 
        //그 누적된 배열은 render()안에서 지속적인 호출을 진행 
        for(let i=0;i<this.enemyBulletArray.length;i++){
            this.enemyBulletArray[i].tick();
            this.enemyBulletArray[i].render();
        }
    
        //적군, hero 닿으면 hp하나씩 감소, 적군 소멸
        if(collisionCheck(this.img, hero.img)){
            this.removeObject(enemyArray, this);//나 소멸
            hero.minusEnergy(); //주인공 에너지 감소
        }
        
        if(this.y >= 700){
            this.removeObject(enemyArray, this);

            //적군에 벽에 닿으면 hp 하나씩 감소 
            //hp_index -> hpArray의 마지막 index조사
            hero.minusEnergy(); //주인공 에너지 감소
        }
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
    }
}