"use strict";

//////// Задача 1

class Weapon {
  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = +attack;
    this.durability = +durability;
    this.range = +range;
    this.initialDurability = +durability;
  }

  takeDamage(damage) {
    let damageDelta = this.durability - damage;
    if (damageDelta >= 0) {
      this.durability = damageDelta;
    } else {
      this.durability = 0;
    }
  }

  getDamage() {
    if (this.durability >= this.initialDurability * 0.3) {
      return this.attack;
    } else if (this.durability === 0) {
      return 0;
    } else {
      return this.attack / 2;
    }
  }

  isBroken() {
    return this.durability === 0;
  }
}

const sword = new Weapon ("Меч", 24, 500, 1);

sword.takeDamage(5);
console.log(sword.durability);

sword.takeDamage(550);
console.log(sword.durability);

const arm = new Weapon ("Рука", 1, Infinity, 1 );
arm.takeDamage(20);
console.log(arm.durability);

const bow = new Weapon ("Лук", 10, 200, 3);
bow.takeDamage(20);
console.log(bow.durability);

bow.takeDamage(200);
console.log(bow.durability);

const knife = new Weapon ("Нож", 5, 300, 1);
const cane = new Weapon ("Посох", 8, 300, 2);

const longBow = new Weapon ("Длинный Лук", 5, bow.durability, 1);
const axe = new Weapon ("Секира", 8, 300, sword.range);
const caneStorm = new Weapon("Посх Бури", 10, cane.durability,);

/////////////// Задача 2

class Sword extends Weapon {
  constructor(name = "Меч", attack = 25, durability = 500, range = 555) {
    super(name, attack, durability, range);
  }
}

const sword = new Sword();
console.log(sword);

class Arm extends Weapon {
  constructor(name = "Рука", attack = 1, durability = Infinity, range = 1) {
    super(name, attack, durability, range);
  }
}

const arm = new Arm();
console.log(arm);

class Bow extends Weapon {
  constructor(name = "Лук", attack = 10, durability = 200, range = 3) {
    super(name, attack, durability, range);
  }
}

const bow = new Bow();
console.log(bow);

class Knife extends Weapon {
  constructor(name = "Нож", attack = 5, durability = 300, range = 1) {
    super(name, attack, durability, range);
  }
}

const knife = new Knife();
console.log(knife);

class Cane extends Weapon {
  constructor(name = "Посох", attack = 8, durability = 300, range = 2) {
    super(name, attack, durability, range);
  }
}

const cane = new Cane();
console.log(cane);

/// Усиленное оружие

class LongBow extends Bow {
  constructor(name = "Длинный Лук", attack = 15, durability, range = 4) {
    super(name, attack, durability, range);
  }
}

const longBow = new LongBow();
console.log(
  `${longBow.name} range is ${longBow.range} and longBow durability is ${
    longBow.durability
  }`
);

class Axe extends Sword {
  constructor(name = "Секира", attack = 27, durability = 800, range) {
    super(name, attack, durability, range);
  }
}

const axe = new Axe();
console.log(`${axe.name} атака ${axe.attack} и дальность ${axe.range}`);

class StormCane extends Cane {
  constructor(name = "Посох Бури", attack = 10, durability, range = 3) {
    super(name, attack, durability, range);
  }
}

const caneStorm = new Cane();
console.log(caneStorm);