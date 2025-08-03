class Overworld {
    constructor(config){
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d")
    }

    init() {
        console.log("Hello From the Overworld", this);
        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage()
        }
        image.src = "./images/punyworld-overworld-tileset.png"
    }
}