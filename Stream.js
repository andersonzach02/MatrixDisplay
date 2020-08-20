class Stream {

    constructor(leadingCharacter) {
        this.leadingCharacter = leadingCharacter;
        this.followingCharacters = [];
        this.position = leadingCharacter.position;
        this.streamSize = round(random(3, 14));
        this.characterSize = this.leadingCharacter.size;
        this.populateFollowingCharacters();
    }


    draw() {
        this.leadingCharacter.draw();
        this.followingCharacters.forEach(character => {
            character.draw();
        });
    }

    populateFollowingCharacters() {
        this.followingCharacters[0] = new RainCodeCharacter(this.leadingCharacter.position.x, this.leadingCharacter.position.y - this.leadingCharacter.size, this.characterSize);

        for(let i = 1; i < this.streamSize; i++) {

            let previousCharacter = this.followingCharacters[i - 1];

            this.followingCharacters[i] = new RainCodeCharacter(previousCharacter.position.x, previousCharacter.position.y - previousCharacter.size, this.characterSize);
        }
    }

}