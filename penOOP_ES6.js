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

////////////////////////////////////////////////////////////////

class AutoPen extends Pen() {
    constructor (size, color, material, ink, inkColor) {
        super(size, color, material, ink, inkColor);
        this.type = "Autopen";
    }
    
    get type() {
        super.type();
    }

    openClose () {
        var status = prompt("Want to write something? Yes or No");
        if (status == "yes") {
            console.log("Ready to write something");
            this.write();
        }
        else if (status == "no") {
            console.log("Maybe another time...");
        }
    };
}

var autopen = new AutoPen("medium", "black", "metal", "oil", "green");
autopen.type();
autopen.openClose();


//////////////////////////////////////////////////////////////////


class AutoPencil extends AutoPen {
    constructor (size, color, material, ink, inkColor){
        super(size, color, material, ink, inkColor);
        this.type = "autopencil";
    }

    get type() {
        super.type();
    }
    
    openClose() {
        super.openClose();
    }

    replaceRod (newRod) {
        this.inkType = newRod;
        this.inkColor = "grey";
        console.log("Pencil is ready to draw or write!");
    };
}

var Autopencil = new autoPencil("small", "brown", "wood");
autopencil.replaceRod("graphite");
autopencil.getType();
autopencil.openClose();
