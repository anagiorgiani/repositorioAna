
const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };



const damageDragon = (dragão) => {
    let min = 15;
    let max = dragon.strength;
    let danoD = Math.floor(Math.random() * (max - min + 1) + min);
    return danoD;
}
console.log(damageDragon());

const damageWarrior = (guerreiro) => {
    let min = warrior.strength;
    let max = min * 2;
    let danoW = Math.floor(Math.random() * (max - min + 1) + min);
    return danoW;
}
console.log(damageWarrior());

const damageMage = (mago) => {
    let min = mage.intelligence;
    let max = min * 2;
    let dano = Math.floor(Math.random() * (max - min + 1) + min);
    let manaMage = mage.mana;

    return { damage: (manaMage < 15) ? 'Não possui mana suficiente' : `${dano}`, mana: `${manaMage}` };
}
console.log(damageMage()); 