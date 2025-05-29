class Hero extends GameObject{
    constructor(container,src,x,y,width,height,velX,velY){
        super(container,src,x,y,width,height,velX,velY);
    }

    //내가 보유한 에너지 소모 처리 
    minusEnergy(){
        //hp소멸
        let hp_idex = hpArray.length-1;
        this.container.removeChild(hpArray[hp_idex].div);
        hpArray.splice(hpArray.length-1, 1);        
    }

    //hp 전멸
    minusAllEnergy(){
        for(let i=hpArray.length-1; i>=0; i--){
                this.container.removeChild(hpArray[i].div);
                hpArray.splice(i,1);
            }
    }


    tick(){
        this.x += this.velX;
        this.y += this.velY;

    // 화면 좌우 래핑
    if (this.x > 1500) {
        this.x = -this.width;
    } else if (this.x + this.width < 0) {
        this.x = 1500;
    }

    // 위쪽 경계 (0 이상)
    if (this.y < 0) this.y = 0;

    // 아래쪽 경계 (700 이하)
    if (this.y > 700) this.y = 700;
    }

    render(){
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
    }
}