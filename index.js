let word;
let stream;
// let trailingCharacterColor;
let leadingCharacterColor;

function setup() {
    createCanvas(400, 400);
    
    // trailingCharacterColor = color("#00FF41");
    // leadingCharacterColor = color("#dbffe4");

    word = new LeadingRainCodeCharacter(width / 2, height / 2, 34);
    stream = new Stream(word);

}

function draw() {
    background(0);

    stream.draw();
}