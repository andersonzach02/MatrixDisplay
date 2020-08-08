let word;
// let trailingCharacterColor;
let leadingCharacterColor;

function setup() {
    createCanvas(400, 400);

    // trailingCharacterColor = color("#00FF41");
    leadingCharacterColor = color("#dbffe4");

    word = new RainCodeCharacter(width / 2, height / 2);

}

function draw() {
    background(0);

    word.draw();
}