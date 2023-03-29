// First Labour : Heracles vs Nemean Lion
// use your Fighter class here
const Fighter = require('./src/Fighter.js');
const Heracles = new Fighter("🧔 Heracles", 20 , 6);
const NemeanLion = new Fighter("🦁 Nemean Lion", 11, 16);

while (Heracles.life > 0 && NemeanLion.life > 0) {
        console.log(Heracles.fight(NemeanLion), Heracles, NemeanLion);
        console.log(NemeanLion.fight(Heracles), Heracles, NemeanLion);
}