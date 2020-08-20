class RainCodeCharacter {

    constructor(xPosition, yPosition, size) {
        this.position = createVector(xPosition, yPosition);
        
        this.size = size;

        let charNumber = round(random(0, 96));
        this.character = String.fromCharCode(0x30A0 + charNumber);

        this.color = color("#00FF41");
    }

    draw() {
        fill(this.color);
        textSize(this.size);
        text(this.character, this.position.x, this.position.y);
    }
}