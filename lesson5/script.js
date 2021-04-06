// Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select

// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// function CreatTag (titleOfTag, action, nameOne, actionOne, nameTwo, actionTwo) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = [
//         {nameOfAttr: nameOne, action: actionOne},
//         {nameOfAttr: nameTwo, action: actionTwo}
//         ]
// }
//
// let tagA = new CreatTag ('a', 'предназначен для создания ссылок', 'accesskey',
//     'Активация ссылки с помощью комбинации клавиш.', 'href',
//     'Задает адрес документа, на который следует перейти.');
// console.log(tagA);
//
// let tadDiv = new CreatTag ('div',
//     'является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',
//     'align', 'Задает выравнивание содержимого тега div', 'title',
//     'Добавляет всплывающую подсказку к содержимому.');
// console.log(tadDiv);
//
// let tagH1 = new CreatTag ('h1', 'представляет собой наиболее важный заголовок первого уровня',
//     'align', 'Определяет выравнивание заголовка.', 'style',
//     'Применяется для определения стиля элемента с помощью правил CSS')
// console.log(tagH1);
//
// let tagSpan = new CreatTag ('span', 'предназначен для определения строчных элементов документа',
//     'class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.',
//     'hidden', 'Скрывает содержимое элемента от просмотра');
// console.log(tagSpan);
//
// let tagInput = new CreatTag ('input',
//     'позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
//     'accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов',
//     'autocomplete', 'Включает или отключает автозаполнение');
// console.log(tagInput);
//
// let tagForm = new CreatTag ('form','Связывает поле с формой по её идентификатору.',
//     'class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.',
//     'style', 'Применяется для определения стиля элемента с помощью правил CSS');
// console.log(tagForm);
//
// let tagOption = new CreatTag ('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера select',
//     'disabled','Заблокировать для доступа элемент списка','label',
//     'Указание метки пункта списка.');
// console.log(tagOption);
//
// let tagSelect = new CreatTag ('select',
//     'позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором',
//     'form', 'Связывает список с формой.', 'name',
//     'Имя элемента для отправки на сервер или обращения через скрипты.');
// console.log(tagSelect);

//-----------------------------------------------------------------------------------------
// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select

// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// class CreatNewTag {
//     constructor(titleOfTag, action, nameOne, actionOne, nameTwo, actionTwo) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = [
//             {nameOfAttr: nameOne, action: actionOne},
//             {nameOfAttr: nameTwo, action: actionTwo}
//         ]
//     }
// }
//
// let tagA = new CreatNewTag ('a', 'предназначен для создания ссылок', 'accesskey',
//     'Активация ссылки с помощью комбинации клавиш.', 'href',
//     'Задает адрес документа, на который следует перейти.');
// console.log(tagA);
//
// let tadDiv = new CreatNewTag ('div',
//     'является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',
//     'align', 'Задает выравнивание содержимого тега div', 'title',
//     'Добавляет всплывающую подсказку к содержимому.');
// console.log(tadDiv);
//
// let tagH1 = new CreatNewTag ('h1', 'представляет собой наиболее важный заголовок первого уровня',
//     'align', 'Определяет выравнивание заголовка.', 'style',
//     'Применяется для определения стиля элемента с помощью правил CSS')
// console.log(tagH1);
//
// let tagSpan = new CreatNewTag ('span', 'предназначен для определения строчных элементов документа',
//     'class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.',
//     'hidden', 'Скрывает содержимое элемента от просмотра');
// console.log(tagSpan);
//
// let tagInput = new CreatNewTag ('input',
//     'позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
//     'accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов',
//     'autocomplete', 'Включает или отключает автозаполнение');
// console.log(tagInput);
//
// let tagForm = new CreatNewTag ('form', 'Связывает поле с формой по её идентификатору.',
//     'class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.',
//     'style', 'Применяется для определения стиля элемента с помощью правил CSS');
// console.log(tagForm);
//
// let tagOption = new CreatNewTag ('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера select',
//     'disabled', 'Заблокировать для доступа элемент списка', 'label',
//     'Указание метки пункта списка.');
// console.log(tagOption);
//
// let tagSelect = new CreatNewTag ('select',
//     'позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором',
//     'form', 'Связывает список с формой.', 'name',
//     'Имя элемента для отправки на сервер или обращения через скрипты.');
// console.log(tagSelect);


//--------------------------------------------------------------------------------------------------
// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// Додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let car = {
//     model: 'Ferrari F150',
//     maker: 'Scuderia Ferrari',
//     year: 2014,
//     maxSpeed: 340,
//     engineVolume: 6.3,
//     drive: function () {
//         console.log(`їдемо зі швидкістю ${car.maxSpeed} на годину`)
//     },
//     info: function () {
//         console.log(`модель ${car.model}, виробник ${car.maker}, рік випуску ${car.year},
//         максимальна швидкість ${car.maxSpeed}, об'єм двигуна ${car.engineVolume}`)
//     },
//     increaseMaxSpeed: function (newSpeed) {
//         car.maxSpeed = car.maxSpeed + newSpeed
//     },
//     changeYear:  function (newValue) {
//         car.year = newValue
//     },
//     addDriver: function (driver) {
//         car.driver = driver
//     }
// };
//
// console.log('виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину');
// car.drive();
// console.log('--------------');
//
// console.log('виводить всю інформацію про автомобіль');
// car.info();
// console.log('--------------');
//
// console.log('підвищує значення максимальної швидкості на значення newSpeed');
// console.log(car.maxSpeed + 'км/год');
// car.increaseMaxSpeed(50);
// console.log(car.maxSpeed + 'км/год');
//
// console.log('--------------');
// console.log('змінює рік випуску на значення newValue');
// console.log(car.year);
// car.changeYear(2020);
// console.log(car.year);
//
// console.log('--------------');
// console.log('приймає об єкт який "водій" з довільним набором полів, і доавляет його в поточний об єкт car');
// let newDriver = {name: 'Charli', age: 30, experience: 10, car: 'Ford'};
// car.addDriver(newDriver);
// console.log(car);
// console.log(car.driver);

// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//

// function createNewCar(model, maker, year, maxSpeed, engineVolume) {
//     this.model = model;
//     this.maker = maker;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     this.info = function () {
//         console.log(`модель ${this.model}, виробник ${this.maker}, рік випуску ${this.year},
//         максимальна швидкість ${this.maxSpeed}, об'єм двигуна ${this.engineVolume}`)
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver
//     }
//
// }

////-----------------------------------------------------------------------------------------
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class newCar {
//
//     constructor(model, maker, year, maxSpeed, engineVolume) {
//         this.model = model;
//         this.maker = maker;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//         };
//         this.info = function () {
//             console.log(`модель ${this.model}, виробник ${this.maker}, рік випуску ${this.year},
//             максимальна швидкість ${this.maxSpeed}, об'єм двигуна ${this.engineVolume}`)
//         };
//         this.increaseMaxSpeed = function (newSpeed) {
//             this.maxSpeed = this.maxSpeed + newSpeed
//         };
//         this.changeYear = function (newValue) {
//             this.year = newValue
//         };
//         this.addDriver = function (driver) {
//             this.driver = driver
//         }
//     }
// }

////-----------------------------------------------------------------------------------------
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Popelushka {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// class Prince {
//     constructor(name, age, foundShooe) {
//         this.name = name;
//         this.age = age;
//         this.foundShooe = foundShooe;
//     }
//
// }
//
// let popiOne = new Popelushka('Masha', 23, 35);
// let popiTwo = new Popelushka('Lola', 24, 36);
// let popiThree = new Popelushka('Olia', 25, 37);
// let popiFour = new Popelushka('Katyya', 26, 38);
// let popiFive = new Popelushka('Tanyya', 27, 39);
// let popiSix = new Popelushka('Nina', 28, 40.5);
// let popiSeven = new Popelushka('Izabel', 29, 36.5);
// let popiEight = new Popelushka('Mery', 22, 38.5);
// let popiNine = new Popelushka('Mila', 30, 41);
// let popiTen = new Popelushka('kate', 19, 42)
//
// let girls = [popiOne, popiTwo, popiThree, popiFour, popiFive, popiSix, popiSeven, popiEight, popiNine, popiTen];
//
// let prince = new Prince('Charming', 25, 38);
//
// for (let girl of girls) {
//     if (girl.footSize === prince.foundShooe) {
//         console.log(`Твоя Попелюшка ${girl.name}`)
//     }
// }

////-----------------------------------------------------------------------------------------
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов,
// та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// function CreatePopelushka(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// function CreatePrince(name, age, foundShooe ) {
//     this.name = name;
//     this.age = age;
//     this.foundShooe = foundShooe;
//     this.searchGirl = function (array) {
//         for (let girl of array) {
//             if (girl.footSize === this.foundShooe) {
//                 console.log(`Твою Попелюшку звуть ${girl.name}`)
//             }
//
//         }
//
//     }
// }
//
// let girlNumberOne = new CreatePopelushka('Masha', 23, 35);
// let girlNumberTwo = new CreatePopelushka('Lola', 24, 36);
// let girlNumberThree = new CreatePopelushka('Olia', 25, 37);
// let girlNumberFour = new CreatePopelushka('Katyya', 26, 38);
// let girlNumberFive = new CreatePopelushka('Tanyya', 27, 39);
// let girlNumberSix = new CreatePopelushka('Nina', 28, 40.5);
// let girlNumberSeven = new CreatePopelushka('Izabel', 29, 36.5);
// let girlNumberEight = new CreatePopelushka('Mery', 22, 38.5);
// let girlNumberNine = new CreatePopelushka('Mila', 30, 41);
// let girlNumberTen = new CreatePopelushka('kate', 19, 42)
//
// let girls = [girlNumberOne, girlNumberTwo, girlNumberThree, girlNumberFour, girlNumberFive, girlNumberSix,
//     girlNumberSeven, girlNumberEight, girlNumberNine, girlNumberTen];
//
// let prince = new CreatePrince('KingGarry', 28, 37)
// prince.searchGirl(girls);