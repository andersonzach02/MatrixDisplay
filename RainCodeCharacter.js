class RainCodeCharacter {

    constructor(xPosition, yPosition) {
        this.position = createVector(xPosition, yPosition);
        
        let charNumber = round(random(0, 96));
        this.character = String.fromCharCode(0x30A0 + charNumber);

        this.color = color("#00FF41");
    }

    draw() {
        fill(this.color);
        text(this.character, this.position.x, this.position.y);
    }
}