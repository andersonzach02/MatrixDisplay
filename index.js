let word;

function setup() {
    createCanvas(400, 400);
        

    word = String.fromCharCode('0x30A1');
}

function draw() {
    background(0);

    fill(255);
    text(word, width/2, height/2);
}