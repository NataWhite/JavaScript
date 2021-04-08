// 1) Створити масив з 20 чисел та:
//     a) відсортувати його від меншого до більшого.
//     b) відсортувати його від більшого до меншого.
//     c) Відфілтрувати числа які є кратними 3.
// d) Відфілтрувати числа які є більшими за 10.
// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// f) За допомогою map збільшити кожен елемент в масиві в три рази.
//     g) Порахувати загальну суму всіх елментів у масиві (reduce)

// let numbersArray = [1, 2, 6, 43, 2, 0, 12, 666, 3, 56, 4, 2, 7, 10, 22, 54, 9, 15, 6, 19]
// console.log(`------------даний масив--------------------`)
// console.log(numbersArray);
// console.log(`-------від більшого до меншого-------------`);
// let fromBigToLittle = numbersArray.sort((a, b) => b - a);
// console.log(fromBigToLittle);
// console.log(`-------від меншого до більшого-------------`);
// let fromLittleToBig = numbersArray.sort((a, b) => a - b);
// console.log(fromLittleToBig)
// console.log(`-------числа кратні 3-------------`);
// let multiplesTree = numbersArray.filter(number => number % 3 === 0);
// console.log(multiplesTree);
// console.log(`-------числа більші за 10-------------`);
// let biggerTen = numbersArray.filter(number => number > 10);
// console.log(biggerTen);
//
// numbersArray.forEach(number => document.write(`${number}, `))
//
// console.log(`-------збільшити в 3 рази через Map-------------`);
// let biggerOnThreeTimes = numbersArray.map(number => number * 3);
// console.log(biggerOnThreeTimes);
// console.log(`---------сума через reduce-----------------`);
// let sum = numbersArray.reduce((acc, number) => acc + number);
// console.log(sum);

// // 2) Створити масив з 20 стрічок та:
// //     a) Відсортувати його в алфавітному порядку
// let strings = ['apple', 'water', 'love', 'monday', 'Viktor', 'om-nom-nom', 'car', 'Katherina', 'go', '234', 'stop',
//     '111111', 'coffee', 'click', 'why not?', 'february is a month', 'cat', 'dog', 'red', 'okten']
// ;
// let alphabet = strings.sort();
// console.log(alphabet);
//
// // b) Відсортувати в зворотньому порядку
// let reverseAlphabet = strings.sort((a, b) => {
//     if (a < b) {
//         return 1
//     }
//     return -1
// });
// console.log(reverseAlphabet);
//
// // c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// let longWords = strings.filter(word => word.length > 4);
// console.log(longWords);
//
// // d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
// let samSays = strings.map(word => word = `Sam says "${word}"`);
// console.log(samSays);

// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
//     const users = [
//         {name: 'vasya', age: 31, isMarried: false},
//         {name: 'petya', age: 30, isMarried: true},
//         {name: 'kolya', age: 29, isMarried: true},
//         {name: 'olya', age: 28, isMarried: false},
//         {name: 'max', age: 30, isMarried: true},
//         {name: 'anya', age: 31, isMarried: false},
//         {name: 'oleg', age: 28, isMarried: false},
//         {name: 'andrey', age: 29, isMarried: true},
//         {name: 'masha', age: 30, isMarried: true},
//         {name: 'olya', age: 31, isMarried: false},
//         {name: 'max', age: 31, isMarried: true}
//     ];

// const users = [
//     {name: 'vasya', age: 31, isMarried: false},
//     {name: 'petya', age: 30, isMarried: true},
//     {name: 'kolya', age: 29, isMarried: true},
//     {name: 'olya', age: 28, isMarried: false},
//     {name: 'max', age: 30, isMarried: true},
//     {name: 'anya', age: 31, isMarried: false},
//     {name: 'oleg', age: 28, isMarried: false},
//     {name: 'andrey', age: 29, isMarried: true},
//     {name: 'masha', age: 30, isMarried: true},
//     {name: 'olya', age: 31, isMarried: false},
//     {name: 'max', age: 31, isMarried: true}
// ];

// //a) відсортувати його за  віком (зростання , а потім окремо спадання)
// console.log(`-------вік зростає-----------`)
// let toBigAge = users.sort((userOne, userTwo) => userOne.age - userTwo.age);
// console.log(toBigAge);

// console.log(`-------вік спадає-----------`)
// let toSmallAge = users.sort((userOne, userTwo) => userTwo.age - userOne.age);
// console.log(toSmallAge)

// //b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// console.log(`-------довжина імені зростає-----------`)
// let shortNameFirst = users.sort((nameOne, nameTwo) => nameOne.name.length - nameTwo.name.length);
// console.log(shortNameFirst)

// console.log(`-------довжина імені спадає-----------`)
// let longNameFirst = users.sort((nameOne, nameTwo) => nameTwo.name.length - nameOne.name.length);
// console.log(longNameFirst);

// // c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// // (По якому принципу його створювати - ваше рішення),
// // та зберегти це в новий масив (первинний масив залишиться без змін)
// // d) відсортувати його за індентифікатором
//
// let copyUsers = JSON.parse(JSON.stringify(users));
// let usersWithId = copyUsers.map((user, index) => {
//     user.id = index + 1
//     return user
// });
// console.log(users);
// console.log(usersWithId)
// console.log(`------відсортувати його за індентифікатором-----`);
// let sortUsers = usersWithId.sort((userOne, userTwo) => userOne.id - userTwo.id);
// console.log(sortUsers)

// // e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
// let usersWithFlat = users.reduce((acc,user) => {
//     if (user.isMarried) {
//         user.hasFlat = true
//         acc.push(user)
//     }
//     return acc
// }, []);
// console.log(usersWithFlat)


// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//


// const cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];


// // Відфільтрувати масив за наступними крітеріями :
// //     - двигун більше 3х літрів
// let filteredVolume = cars.filter(car => car.volume > 3);
// console.log(`------двигун більше 3х літрів------`)
// console.log(filteredVolume);

// // - двигун = 2л
// let twoLitres = cars.filter(cars => cars.volume === 2);
// console.log(`------двигун = 2л-----------`);
// console.log(twoLitres);

// // - виробник мерс
// let producerMers = cars.filter(car => car.producer === 'mercedes');
// console.log(`-------виробник мерс--------`);
// console.log(producerMers)

// // - двигун більше 3х літрів + виробник мерседес  //  <---треба в умові задачі змінити на більше 2-х, бо виводить пустий масив
// let mercedesAndVolumeThree = cars.filter(car => car.producer === 'mercedes' && car.volume > 3);
// console.log(`-----двигун більше 3х літрів + виробник мерседес-------`);
// console.log(mercedesAndVolumeThree)

// // - двигун більше 3х літрів + виробник субару
// let subaruAndVolumeThree = cars.filter(car => car.producer === 'subaru' && car.volume > 3);
// console.log(`---------двигун більше 3х літрів + виробник субару--------`);
// console.log(subaruAndVolumeThree)

// // - сили більше ніж 300
// let strongPower = cars.filter(car => car.power > 300);
// console.log(`--------сили більше ніж 300------------`);
// console.log(strongPower)

// // - сили більше ніж 300 + виробник субару
// let powerAndProducer = cars.filter(car => car.power > 300 && car.producer === 'subaru');
// console.log(`----------сили більше ніж 300 + виробник субару-----------`);
// console.log(powerAndProducer)

// // - мотор серіі ej
// let motorType = cars.filter(car => car.engine.startsWith('ej'));
// console.log(`-----------мотор серіі ej-------------`);
// console.log(motorType)

// // - сили більше ніж 300 + виробник субару + мотор серіі ej
// let manyProperty = cars.filter(car => car.power > 300 && car.producer === 'subaru' && car.engine.startsWith('ej'));
// console.log(`---сили більше ніж 300 + виробник субару + мотор серіі ej---`);
// console.log(manyProperty)

// // - двигун меньше 3х літрів + виробник мерседес
// let mercedesAndVolume = cars.filter(car => car.producer === 'mercedes' && car.volume > 3);
// console.log(`-----двигун меньше 3х літрів + виробник мерседес----`);
// console.log(mercedesAndVolume)

// // - двигун більше 2л + сили більше 250
// let powerAndVolume = cars.filter(car => car.power > 250 && car.volume > 2);
// console.log(`--------двигун більше 2л + сили більше 250------`);
// console.log(powerAndVolume)

// // - сили більше 250  + виробник бмв
// let powerAndBMW = cars.filter(car => car.power > 250 && car.producer === 'bmw');
// console.log(`-------сили більше 250  + виробник бмв---------`);
// console.log(powerAndBMW)

////==============================================================================================
// - взять слдующий массив

// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];

// // -- Відсортувати їх по ID
// let sortOfUserId = usersWithAddress.sort((userOne, userTwo) => userOne.id - userTwo.id);
// console.log(`---Відсортувати їх по ID----`)
// console.log(sortOfUserId)

// // -- Відсортувати їх по ID в зворотньому порядку
// let reversSortOfId = usersWithAddress.sort((userOne, userTwo) => userTwo.id - userOne.id);
// console.log(`-----Відсортувати їх по ID в зворотньому порядку------`);
// console.log(reversSortOfId)

// // -- Відсортувати по віку
// let sortOfAge = usersWithAddress.sort((userOne, userTwo) => userOne.age - userTwo.age);
// console.log(`--------- -- Відсортувати по віку--------`);
// console.log(sortOfAge)

// // -- Відсортувати по віку в зворотньому порядку
// let reverseSortOfAge = usersWithAddress.sort((userOne, userTwo) => userTwo.age - userOne.age);
// console.log(`--------Відсортувати по віку в зворотньому порядку-------`);
// console.log(reverseSortOfAge)

// // -- Відсорутвати по імені
// let sortName = usersWithAddress.sort((userOne, userTwo) => {
//     if (userOne.name > userTwo.name) {
//         return 1
//     }
//     return -1
// });
// console.log(`------Відсорутвати по імені-------`);
// console.log(sortName)

// // -- Відсорутвати по назві вулиці
// let sortOfStreet = usersWithAddress.sort((userOne, userTwo) => {
//     if (userOne.address.street > userTwo.address.street) {
//         return 1
//     }
//     return -1
// })
// console.log(`----------Відсорутвати по назві вулиці-------`);
// console.log(sortOfStreet)

// // -- Відсорутвати по номеру будинку
// let sortOfHouseNumber = usersWithAddress.sort((userOne, userTwo) =>
//     userOne.address.number - userTwo.address.number);
// console.log(`-----Відсорутвати по номеру будинку-------`);
// console.log(sortOfHouseNumber)

// // -- Залигити тільки тих, хто молодший ніж 30 (filter)
// let youngUsers = usersWithAddress.filter(user => user.age < 30);
// console.log(`------Залигити тільки тих, хто молодший ніж 30 (filter)-----`);
// console.log(youngUsers)

// // -- Залишити тільки одружених
// let onlyMarring = usersWithAddress.filter(user => user.isMarried);
// console.log(`-----------Залишити тільки одружених---------`)
// console.log(onlyMarring)

// // -- Залишити тільки одружених, які молодні за 30
// let youngAndMarring = usersWithAddress.filter(user => user.isMarried && user.age < 30);
// console.log(`------Залишити тільки одружених, які молодні за 30--------`);
// console.log(youngAndMarring)

// // -- Залишити лише тих, в кого парні номери будинків.
// let sortOfSomeHouseNumbers = usersWithAddress.filter(user => user.address.number % 2 === 0);
// console.log(`---Залишити лише тих, в кого парні номери будинків.-----`);
// console.log(sortOfSomeHouseNumbers)

// // -- Порахувати загальний вік всіх людей. (reduce)
// let sumAgeOfPeople = usersWithAddress.reduce((acc, user) => {
//     return acc + user.age
// }, 0);
// console.log(`----Порахувати загальний вік всіх людей. (reduce)-----`);
// console.log(sumAgeOfPeople)

// // -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
//
// let userWithChild = usersWithAddress.reduce((acc, user) => {
//     if (user.isMarried === true && user.age > 30) {
//         user.child = true
//         acc.push(user)
//     }
//     return acc
// }, []);
// console.log(userWithChild)


// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.

//
// let cars = [
//     {model: 'BMW', enginePower: 400, driver: {name: 'Misha', age: 25, experience: 6}, price: 3000, year: 1999},
//     {model: 'Volkswagen', enginePower: 210, driver: {name: 'Victor', age: 34, experience: 8}, price: 1900, year: 1998},
//     {model: 'Opel', enginePower: 120, driver: {name: 'Roman', age: 27, experience: 3}, price: 3100, year: 2000},
//     {model: 'Daewoo', enginePower: 110, driver: {name: 'Nazar', age: 21, experience: 2}, price: 6000, year: 2007},
//     {model: 'Chevrolet', enginePower: 121, driver: {name: 'Ruslan', age: 35, experience: 10}, price: 8000, year: 2010},
//     {model: 'Ford', enginePower: 172, driver: {name: 'Valeriy', age: 23, experience: 3}, price: 10000, year: 2016},
//     {model: 'Honda', enginePower: 155, driver: {name: 'Oleg', age: 45, experience: 20}, price: 8000, year: 2008},
//     {model: 'Audi', enginePower: 163, driver: {name: 'Eduard', age: 50, experience: 32}, price: 12000, year: 2011},
//     {model: 'Mercedes', enginePower: 330, driver: {name: 'Arsen', age: 42, experience: 4}, price: 190000, year: 2019},
//     {model: 'Toyota', enginePower: 150, driver: {name: 'Vasya', age: 18, experience: 1}, price: 15000, year: 2009}];

// console.log(`-----масив для порівняння змін------`)
// let copyCars = JSON.parse(JSON.stringify(cars));
// console.log(copyCars)

// //     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// let repair = cars.map((car, index) => {
//     if (index % 2 === 0) {
//         car.enginePower += 0.1 * car.enginePower
//     }
//     return car
// });
// console.log(`--------зробила ремонт +10% до потужності (enginePower)--------`)
// console.log(repair);
//
// // На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// let newDrivers = [                                      // <----  створила масив нових водіїв
//     {name: 'Olia', age: 20, experience: 2},
//     {name: 'Masha', age: 30, experience: 4},
//     {name: 'Petya', age: 35, experience: 6},
//     {name: 'Sasha', age: 22, experience: 8},
//     {name: 'Taras', age: 40, experience: 9},
//     {name: 'Natalia', age: 42, experience: 10}
// ];
//
//
// let changeDriver = repair.map((car, index) => {
//     if (index % 2 === 0) {
//         car.driver = newDrivers[index/2]
//     }
//     return car
// })
// // for (let i = 0; i < repair.length; i += 2) {
// //     repair[i].driver = newDrivers[i/2]
// // }
// console.log(`------- тут нові водії--------`)
// console.log(changeDriver)


////====================================================================================
// Для початку вкладіть всі наші створені автомобілі в масив cars.   // <---- уже зробила вгорі
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2),  //  <---- я робила це через методи масивів
//     та робити їй підвищення потужності двигуна на 10% та ціну на 5%

// let superCars = cars.map((car,index) => {
//     if (index % 2 === 0) {
//         car.enginePower += 0.1 * car.enginePower
//         car.price += 0.05 * car.price
//     }
//     return car
// });
// console.log(`------ потужність + 10%, ціна + 5%---------`);
// console.log(superCars);

//----------------------------------------------------------------
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.

// let checkExperience = cars.map(car => {
//     if (car.driver.experience < 5 && car.driver.age > 25) {
//         car.driver.experience++
//     }
//     return car
// });
// console.log(`---------відправила на курси підвищення кваліфікації ----------`);
// console.log(checkExperience)

//----------------------------------------------------
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі // <--- reduce

// let sumOfPrice = cars.reduce((acc,car) => {
//     return acc + car.price
// }, 0);
// console.log(sumOfPrice)
//
// // перевірка суми через цикл
// let sumOfCars = 0
// for (let i = 0; i < cars.length; i++) {
//     sumOfCars += cars[i].price
// }
// console.log(sumOfCars);





/// доробити задачу
//============================================================================================
// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

