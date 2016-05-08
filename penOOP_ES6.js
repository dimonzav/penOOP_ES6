class Pen {
    constructor(size, color, material, ink, inkColor) {
        this.type = "pen";
        this.size = size;
        this.color = color;
        this.material = material;
        this.inkType = ink;
        this.inkColor = inkColor;
    }

    get type() {
        return this.type;
    }

    write () {
        console.log("I'am writing!!!");
    }
    description() {
        console.log("You create ${this.material} ${this.size} ${this.color} ${this.type} with ${this.inkType} ink and ${this.inkColor} color");
    };
}

var pen = new Pen("big", "red", "metal", "gel", "black");
pen.description();
pen.write();
pen.type();