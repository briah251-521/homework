const player = {
    name: "герой",
    hp: 100,
    attack: 20
};

const monster = {
    name: "гоблін",
    hp: 80,
    attack: 15
};

const inventory = ["меч", "щит", "зілля здоров'я"];

function showStatus() {
    console.log(`${player.name}: ${player.hp} HP | ${monster.name}: ${monster.hp} HP`)
}

function attack() {
    monster.hp = monster.hp - player.attack;
    if(monster.hp < 0) {
        monster.hp = 0;
    }
    console.log(`${player.name} атакує! Здоров'я монстра: ${monster.hp} HP`);
}

function monsterAttack() {
    player.hp = player.hp - monster.attack;
    if (player.hp < 0) {
        player.hp = 0;
    }
    console.log(`${monster.name} атакує! Здоров'я гуроя: ${player.hp} HP`);
}

console.log("Гра битва з монстром");
showStatus();

let round = 1;

while (player.hp > 0  && monster.hp > 0 ) {
    console.log(`\n=== Раунд ${round} ===`);
    attack();

    if (monster.hp > 0) {
        monsterAttack ();
    }

    round = round + 1
}

console.log("");
if(player.hp > 0) {
    console,log("Перемога!");
    console.log(`${player.name} переміг ${monster.name}!`);
} else {
    console.log("Поразка!");
    console.log(`${monster.name} переміг ${player.name}!`);
}
