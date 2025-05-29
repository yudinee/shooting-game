class EnemyBullet extends Bullet{
    //적군총알에 대해서만 주인인 owner 매개변수가 필요..따라서 super에는 넣지 말고, 이 객체의 생성자에서만 사용하자
    constructor(container, owner, src,x,y,width,height,velX,velY){
        super(container,src,x,y,width,height,velX,velY);
        this.owner=owner; //이 총알이 태어날때, 주인님인 적군의 정보를 has a 로 보유
    }

   

    tick(){
        this.y += this.velY;
    }

    render(){
        //주인과의 충돌 시, 처리 후 점수 처리 
        if(collisionCheck(this.img, hero.img)){
            this.removeObject(this.owner.enemyBulletArray, this);//나죽고
            hero.minusEnergy();//주인공 에너지 삭감처리
            
            //console.log("EnemyBullet : 충돌 감지");
        }else if(this.y >= 700){
            this.removeObject(this.owner.enemyBulletArray, this);            
        }
        this.img.style.top = this.y + "px";
    }
}