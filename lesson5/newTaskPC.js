//=============================================================================
// Реалізовуємо свій компютерний магазин.
//============================================================================
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
//     Назва.
//     В кожного компютера має бути метод включання.
// ===

class BasicComputer {
    constructor(ram, cpuPower, model) {
        this.ram = ram;
        this.cpuPower = cpuPower;
        this.model = model;
    }

    turnOn() {
        console.log(`Computer ${this.model} is Turn On`)
    }
}

console.log(`-------basicComputer---------------------`)
let comp = new BasicComputer(4, 400, 'Dell');
comp.turnOn()
console.log(comp)

//=================
// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)

class Laptop extends BasicComputer {
    constructor(ram, cpuPower, model, monitorSize) {
        super(ram, cpuPower, model);
        this.monitorSize = monitorSize;
        this.batteryTime = Math.floor(this.cpuPower / (this.monitorSize * this.ram))
    }
}

console.log(`-------laptop---------------------`)
let noutBook = new Laptop(4, 620, 'Dell', 15.6)
noutBook.turnOn()
console.log(noutBook);

// ===
// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.

class UltraBook extends Laptop {
    constructor(ram, cpuPower, model, monitorSize, weight) {
        super(ram, cpuPower, model, monitorSize);
        this.weight = weight;
    }

    turnOn() {
        this.weight > 2 || this.batteryTime < 4 ?
            console.log(`Something in ultraBook ${this.model} is bad`) :
            console.log(`UltraBook ${this.model} is Turn On`)
    }
}

console.log(`-------ultraBook---------------------`)
let superBook = new UltraBook(4, 320, 'Dell', 15.6, 3);
console.log(superBook);
superBook.turnOn();
let superBook2 = new UltraBook(4, 320, 'Dell', 15.6, 2);
console.log(superBook2);
superBook2.turnOn()

// ===
// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`

class BasicPC extends BasicComputer {
    constructor(ram, cpuPower, model) {
        super(ram, cpuPower, model);
        this.fsp = Math.floor(this.cpuPower / this.ram);
    }

    gameing(gameName) {
        console.log(`You are playing ${gameName} with ${this.fsp} FPS`)
    }
}

console.log(`-------basicPC---------------------`);
let gamePC = new BasicPC(8, 600, 'LG');
gamePC.gameing('The Witcher')

//-------------------------------------
// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.


class SuperPC extends BasicPC {
    constructor(ram, cpuPower, model) {
        super(ram, cpuPower, model);
    }

    growCpuPower() {
        this.cpuPower = this.cpuPower + 0.1 * this.cpuPower;
        console.log(`Потужність процесора збільшилась на 10% і становить тепер ${this.cpuPower}`)
    }

    growRam() {
        this.ram *= 2;
        console.log(`Оперативка збільшилась в 2 рази і становить тепер ${this.ram}`)
    }
}

console.log(`------upDate-basicPC---------------------`);
let superBasicPC = new SuperPC(4, 300, 'Asus');
console.log(superBasicPC);
superBasicPC.growCpuPower();
console.log(superBasicPC);
superBasicPC.growRam();
console.log(superBasicPC);

// ===
// Від базового ПК необхідно зробити ігнорий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно ивдати помилку,
//     що на цьому відрі ігри не запускаються.

class GamePC extends BasicPC {
    constructor(ram, cpuPower, model) {
        super(ram, cpuPower, model);
        this.fsp = Math.floor(2 * (this.cpuPower / this.ram))
    }

    startPlayGame() {
        if (this.cpuPower >= 500 && this.ram >= 8) {
            this.cpuPower -= 0.01 * this.cpuPower
            console.log(`You are playing game`)
        } else {
            console.error(`на цьому відрі ігри не запускаються`)
        }
    }
}

console.log(`------Game-basicPC---------------------`);
let goPlayGame = new GamePC(8, 400, 'Apple');
goPlayGame.startPlayGame()
console.log(goPlayGame);
let goPlayGame2 = new GamePC(8, 800, 'Apple');
goPlayGame2.startPlayGame();
console.log(goPlayGame2)

///