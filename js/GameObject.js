class GameObject{
    constructor(container,src,x,y,width,height,velX,velY){
        this.container = container;
        this.src = src;
        this.img = document.createElement("img")
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;

        //style
        this.img.src = this.src;
        this.img.style.position = "absolute";
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
        this.img.style.width = this.width + "px";
        this.img.style.height = this.height + "px";

        this.container.appendChild(this.img);

    }

    removeObject(array, target){
        this.container.removeChild(target.img);
        array.splice(array.indexOf(target), 1);
    }    

    tick(){};
    render(){};
}