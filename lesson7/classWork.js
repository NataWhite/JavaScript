// ---підключено до файла <-classWork.html-> ----

//     ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let badWords = ['дурак', 'cock', 'ідіот', 'стерва', 'pee hole', 'cocksucker', 'bitch', 'придурок'];
// document.getElementById('badWord').onclick = () => {
//     let value = document.querySelector('div input').value;
//     for (let i = 0; i < badWords.length; i++) {
//         if (badWords[i] === value)
//             return alert(`Ая-яй-яй, поганий хлопчик)))`)
//     }
//     return alert(`Все окей`)
// }

//=======================================
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let badWordsTwo = ['дурак', 'cock', 'ідіот', 'стерва', 'pee hole', 'cocksucker', 'bitch', 'придурок'];
// document.getElementById('findBadWord').onclick = () => {
//     let string = document.getElementById('sentence').value;
//     let words = string.split(' ');
//     for (let word of words) {
//         for (let i = 0; i < badWordsTwo.length; i++) {
//             if (word === badWordsTwo[i]) return alert(`Ти написав погане слово`)
//         }
//     }
//     return alert(`Все добре, молодець)`)
// }


//=======================================================
// -- взять массив пользователей
//
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе
// так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];


let inputOne = document.getElementById('marriedUsers');
inputOne.onclick = () => {
    let notMarriedUsers = usersWithAddress.filter(user => user.isMarried === false);
    let htmlDiv= document.createElement('div');
    let title = document.createElement('h3');
    htmlDiv.appendChild(title);
    title.innerText = `неодружені юзери`
    for (let i = 0; i < notMarriedUsers.length; i++) {
        let htmlParagraph = document.createElement('p');
        htmlParagraph.innerText = `Мене звати ${notMarriedUsers[i].name}, мені ${notMarriedUsers[i].age}років,
            мій адрес: ${notMarriedUsers[i].address.city}, вулиця ${notMarriedUsers[i].address.street},
            ${notMarriedUsers[i].address.number}`
        htmlDiv.appendChild(htmlParagraph);
    }
    document.getElementById('content').appendChild(htmlDiv);
}

let inputTwo = document.getElementById('oldUsers');
inputTwo.onclick = () => {
    let oldUsers = usersWithAddress.filter(user => user.age >= 29);
    let divka = document.createElement('div');
    let title = document.createElement('h3');
    divka.appendChild(title);
    title.innerText = `старше 29 років`
    for (let i = 0; i < oldUsers.length; i++) {
        let htmlParagraph = document.createElement('p');
        htmlParagraph.innerText = `Мене звати ${oldUsers[i].name}, мені ${oldUsers[i].age}років,
            мій адрес: ${oldUsers[i].address.city}, вулиця ${oldUsers[i].address.street},
            ${oldUsers[i].address.number}`
        divka.appendChild(htmlParagraph);
    }
    document.getElementById('content').appendChild(divka);
}

let inputThree = document.getElementById('cityKiev');
inputThree.onclick = () => {
    let oldUsers = usersWithAddress.filter(user => user.address.city === 'Kyiv');
    let divka = document.createElement('div');
    let title = document.createElement('h3');
    divka.appendChild(title);
    title.innerText = `живуть в Києві`
    for (let i = 0; i < oldUsers.length; i++) {
        let htmlParagraph = document.createElement('p');
        htmlParagraph.innerText = `Мене звати ${oldUsers[i].name}, мені ${oldUsers[i].age}років,
            мій адрес: ${oldUsers[i].address.city}, вулиця ${oldUsers[i].address.street},
            ${oldUsers[i].address.number}`
        divka.appendChild(htmlParagraph);
    }
    document.getElementById('content').appendChild(divka);
}

//==================================================
//     ---> переключилась на rule.html
//===================================================
// -- создать скрипт, который берет считывает на странице (rules.html)
// текст и делает сбоку меню-оглавление
// по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// // варіант з якорями ( не знаю як зробити через <js.events> )
// let menuBar = document.getElementById('menuBar')
// let listItems = document.querySelectorAll('h2');
// let rules = document.getElementsByClassName('rules');
// for (let i = 0; i < rules.length; i++) {
//     rules[i].id = `rule${i + 1}`
// }
// for (let i = 0; i < listItems.length; i++) {
//     let peshka = document.createElement('p');
//     peshka.innerHTML = `<a href="#${rules[i].id}" > ${listItems[i].textContent} </a>`;
//     menuBar.appendChild(peshka);
// }

