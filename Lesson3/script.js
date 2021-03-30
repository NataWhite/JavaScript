// Домашка до файлу template1.html

// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або
// document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"
// b) отримує текст з блоку з id "rules"

// console.log(document.getElementById('content').textContent);
// console.log(document.getElementById('rules').textContent);

// c) замініть текст параграфа з id 'content' на будь-який інший
// d) замініть текст параграфа з id 'rules' на будь-який інший

// document.getElementById('content').innerText = 'How do you cheer up a JS developer? - "Console" them!';
// document.getElementById('rules').innerText = 'Dont trust JavaScript programmers.' +
//     ' All they do is promises but they never callback.'

// e) змініть кожному елементу колір фону на червоний  <== тут я щось не зрозуміла про який кожен елемент йдеться
// f) змініть кожному елементу колір тексту на синій    <== і тут теж

// g) отримати весь список класів елемента з id=rules і вивести їх в console.log

// console.log(document.getElementById('rules').classList);

// h) отримати всі елементи з класом fc_rules
// i) поміняти колір тексту у всіх елементів fc_rules на червоний

// let rulesOfClub = document.getElementsByClassName('fc_rules');
// for (let i = 0; i < rulesOfClub.length; i++) {
//     console.log(rulesOfClub[i]);
//     rulesOfClub[i].style.color = 'red'
// }


//-----------------------------------------------------------------------------
// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Вставити цей блок на сторінку

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// for (let i = 0; i < users.length; i++) {
//     let userBlock = document.createElement('div');
//     userBlock.style.backgroundColor = '#7acc93';
//     userBlock.style.margin = '10px';
//     userBlock.style.padding = '15px';
//
//     userBlock.innerHTML = `
//                 My name ${users[i].name} <br>
//                 my age ${users[i].age} <br>
//                 status ${users[i].status} <br>
//                 Address: city ${users[i].address.city}, country ${users[i].address.country},
//         street ${users[i].address.street}, ${users[i].address.houseNumber}`;
//
//     document.body.appendChild(userBlock)
// }

//--------------------------------------------------------------------------------
// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (let i = 0; i < users.length; i++) {
//     let userBlock = document.createElement('div');
//     userBlock.style.backgroundColor = '#7acc93';
//     userBlock.style.margin = '10px';
//     userBlock.style.padding = '15px';
//
//     userBlock.innerHTML = `
//                 My name ${users[i].name} <br>
//                 my age ${users[i].age} <br>
//                 status ${users[i].status} <br>
//                 <div class="address"> address:
//                     <div class="div"> city ${users[i].address.city},</div>
//                     <div class="div"> country ${users[i].address.country},</div>
//                     <div class="div"> street ${users[i].address.street}, ${users[i].address.houseNumber}</div>
//                 </div>`;
//
//     document.body.appendChild(userBlock);
// };
//
// let address = document.getElementsByClassName('address');
// for (let i = 0; i < address.length; i++) {
//      address[i].style.backgroundColor = '#3c73e8'
//     address[i].style.padding = '10px'
// };
//
// let divOfAddress = document.getElementsByClassName('div');
// for (let i = 0; i < divOfAddress.length; i++) {
//     divOfAddress[i].style.backgroundColor = '#e8783c';
//     divOfAddress[i].style.margin = '10px'
// };
//

//--------------------------------------------------------------------------------
// РОБОТА В АУДИТОРІЇ
//--------------------------------------------------------------------------------


// Взяти файл template_2.html та працювати в ньому

// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)

// document.getElementById('main_header').innerText = 'Feb-2021'

//------------------------------------
// b) робить шириниу елементу ul 400px

// let list = document.getElementsByTagName("ul");
// list[0].style.width = '400px'

//------------------------------------
// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let linkList = document.getElementsByClassName('linkList');
// for (let i = 0; i < linkList.length; i++) {
//     linkList[i].style.width = '50%'
// }

//------------------------------------
// d) отримує текст який зберігається в елементі з класом listElement2

// let listElement2 = document.getElementsByClassName('listElement2');
// listElement2[0].innerText = 'listElement2'

//------------------------------------
// e) отримує всі елементи li та змінює ім колір фону на сірий

// let listItem = document.getElementsByTagName("li");
// for (let i = 0; i < listItem.length; i++) {
//     listItem[i].style.backgroundColor = 'grey'
// }

//------------------------------------
// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let ashki = document.getElementsByTagName('a');

// for (let i = 0; i < ashki.length; i++) {
//     ashki[i].classList.add('anchor')
// }
//
// for (let i = 0; i < ashki.length; i++) {
//     if (ashki[i].textContent === 'link3') {
//         ashki[i].style.fontSize = '40px'
//     }
// }
//
// for (let i = 0; i < ashki.length; i++) {
//     ashki[i].classList.add(`element_${ashki[i].textContent}`)
// }

//------------------------------------
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()

// let header = document.getElementsByClassName('sub-header');

// let color = prompt('Enter color');
// for (let i = 0; i < header.length; i++) {
//     header[i].style.backgroundColor = color
// }

// let color = prompt('Enter color');
// for (let i = 0; i < header.length; i++) {
//     if ( header[i].textContent === 'content 2 segment') {
//         header[i].style.color = color
//     }
// }

//------------------------------------
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let text = prompt('Enter text');
// let content = document.getElementsByClassName('content_1');
// content[0].innerText = text

//------------------------------------
// l) отримати елементи p та змінити їм padding на 20px

// let peshku = document.getElementsByTagName("p");
// for (let i = 0; i < peshku.length; i++) {
//     peshku[i].style.padding = '20px'
// }

//------------------------------------
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

// let text = document.getElementsByClassName('text2');
// for (let i = 0; i < text.length; i++) {
//      text[i].innerText = 'Feb - 2021'
// }

//------------------------------------
//------------------------------------
// 2) Є масив котрий характеризує правила.
//     Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html

// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     }
// ];
//
// let wrap = document.getElementById('wrap')
// for (let i = 0; i < rules.length; i++) {
//
//     let div = document.createElement('div');
//     let title = document.createElement('h2');
//     let body = document.createElement('p');
//     div.className = `rules rule${i+1}`;
//     title.innerText = rules[i].title;
//     body.innerText = rules[i].body;
//     div.appendChild(title);
//     div.appendChild(body);
//     wrap.appendChild(div)
// }
// document.body.appendChild(wrap)


// ===========================================================================
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]


// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// for (let user of usersWithId) {
//     for (let city of citiesWithId) {
//         if (city.user_id === user.id) {
//             user.address = city
//         }
//     }
// }
//
// let usersWithCities = JSON.parse(JSON.stringify(usersWithId)) ;
// console.log(usersWithCities);

