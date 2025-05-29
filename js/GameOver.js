class GameOver{
    constructor(container, width, height,bg,f_size, f_border,f_color, text){
        this.container = container;
        this.div = document.createElement("div");
        this.width = width;
        this.height = height;
        this.bg = bg;
        this.font = document.createElement("div");
        this.f_size = f_size;
        this.f_border = f_border;
        this.f_color = f_color;
        this.text = text;

        //style
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.background = this.bg;
        this.div.style.display = "flex";
        this.div.style.justifyContent = "center";   // 수평 가운데
        this.div.style.alignItems = "center";       // 수직 가운데

        this.font.style.fontSize = this.f_size + "px";
        this.font.style.fontWeight = this.f_border;
        this.font.style.color = this.f_color;
        this.font.innerText = this.text; 

        this.container.appendChild(this.div);
        this.div.appendChild(this.font);
    }
}