class Hp{
    constructor(container, x, y, width, height, bg, borderColor){
        this.container = container;
        this.div = document.createElement("div");
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.bg = bg;
        this.borderColor = borderColor;


        //style
        this.div.style.position = "absolute";
        this.div.style.display = "inline-block";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y  + "px";
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.background = this.bg;
        this.div.style.border = "1px solid " + this.borderColor;
        this.div.style.borderRadius = "5px"

        this.container.appendChild(this.div);
    }
}