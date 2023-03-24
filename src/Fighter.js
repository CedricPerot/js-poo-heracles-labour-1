/* Fighter class definition */
const maxLife = 100;

module.exports = class Fighter {
    constructor (name, strength, dexterity){
        this.name = name,
        this.strength = strength,
        this.dexterity = dexterity,
        this.life = maxLife;
    }
    fight(enemy) {
        const attack = Math.floor((Math.random() * this.strength) + 1);
        if (attack > enemy.dexterity) {
            const damages = attack - enemy.dexterity;
            if (damages > enemy.life) {
                return enemy.life = 0;
            } 
            else {
                return enemy.life -= damages;
            }
        } 
        else {
            return enemy.life;
        } 
    }
}

