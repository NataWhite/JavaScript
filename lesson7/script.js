// ---підключено до файла <-index.html-> ----

// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".

let button = document.getElementById('button');
button.onclick = () => {
    document.getElementById('text').hidden = true
}

//============================
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// //version #1
// document.getElementById('hideButton').onclick = () => {
//     document.getElementById('hideButton').hidden = true
// }

//version #2
document.getElementById('hideButton').onclick = () => {
    document.getElementById('hideButton').style.display = 'none'
}

//==============================
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

document.getElementById('submitOfAge').onclick = () => {
    let age = document.getElementById('age').value;
    parseInt(age) >= 18 ? alert(`Welcome!!!`) : alert(`You so young. Go away!!!`)
}

//==============================
// - Создайте меню, которое раскрывается/сворачивается при клике

let title = document.getElementById('daysOfWeek');
let listItem = document.querySelectorAll('li');

for (let i = 0; i < listItem.length; i++) {
    listItem[i].hidden = true
}
title.onclick = () => {
    for (let i = 0; i < listItem.length; i++) {
        listItem[i].hidden === true ? listItem[i].hidden = false : listItem[i].hidden = true
    }
}

//===============================
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let context = [
    {
        title: 'Undefined',
        body: 'is a primitive value automatically assigned to variables that have just been declared, ' +
            'or to formal arguments for which there are no actual arguments.'
    },
    {
        title: 'Number',
        body: 'Number is a numeric data type in the double-precision 64-bit floating point format (IEEE 754). ' +
            'In other programming languages different numeric types exist; for example, Integers, Floats, Doubles,' +
            ' or Bignums.'
    },
    {
        title: 'String',
        body: 'In any computer programming language, a string is a sequence of characters used to represent text.' +
            ' In JavaScript, a String is one of the primitive values and the String object is a wrapper' +
            ' around a String primitive'
    }
]

let formForList = document.getElementById('primitiveData')
for (let element of context) {
    let div = document.createElement('div');
    formForList.appendChild(div);

    let title = document.createElement('h3');
    title.innerText = element.title;
    let button = document.createElement('input');
    button.type = 'button';
    button.id = `button${element.title}`;
    button.value = 'сховати текст';
    let peshka = document.createElement('p');
    peshka.innerText = element.body;
    peshka.id = `body${element.title}`

    div.appendChild(title);
    div.appendChild(button)
    div.appendChild(peshka)
}

document.getElementById('buttonUndefined').onclick = () => {
    document.getElementById('bodyUndefined').hidden = true
}

document.getElementById('buttonNumber').onclick = () => {
    document.getElementById('bodyNumber').hidden = true
}

document.getElementById('buttonString').onclick = () => {
    document.getElementById('bodyString').hidden = true
}

//================================================
// - створити 2 форми  по 2 інпути в кожній.          // <---- в index.html форми з name #myFormOne, #myFormTwo
// ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let myFormOne = document.forms.myFormOne;
let myFormTwo = document.forms.myFormTwo;
let [radOne] = myFormTwo.check

document.getElementById('submitButton').onclick = () => {
    let allInput = {
        name: myFormOne.yourName.value,
        age: myFormOne.yourAge.value,
        favouriteDrink: radOne.checked ? 'tea' : 'coffee'
    }
    console.log(allInput)
}


//===============================
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
//
//

function creatTable(tRow, tData, idOfTag) {
    let element = document.getElementById(idOfTag)
    let table = document.createElement('table');

    let tableTr
    let tableTd
    for (let i = 0; i < tRow; i++) {
        tableTr = document.createElement('tr');
        table.appendChild(tableTr)
        for (let j = 0; j < tData; j++) {
            tableTd = document.createElement('td');
            tableTd.innerText = 'hello'
            tableTd.style.border = '1px solid black'
            tableTr.appendChild(tableTd)
        }

    }
    element.appendChild(table)

}

creatTable(5, 5, 'divForTable')

// =======********
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

document.getElementById('madeTable').onclick = () => {

    let element = document.getElementById('divForSpecialTable');
    let table = document.createElement('table');
    let tableForm = document.forms.formForTable;

    let tableTr
    let tableTd
    let numberOfRow = parseInt(tableForm.numberOfRow.value);
    let numberOfDate = parseInt(tableForm.numberOfData.value);
    let context = tableForm.context.value;
    for (let i = 0; i < numberOfRow; i++) {
        tableTr = document.createElement('tr');
        table.appendChild(tableTr)
        for (let j = 0; j < numberOfDate; j++) {
            tableTd = document.createElement('td');
            tableTd.innerText = context
            tableTd.style.border = '1px solid black'
            tableTr.appendChild(tableTd)
        }

    }
    element.appendChild(table)


}


//====================================================
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//

let images = document.querySelectorAll('#pictures div');

let count = 0
document.getElementById('forward').onclick = () => {
    if(count === images.length-1) {
        alert(`картинки закінчились`)
        --count
        images[count].style.display = 'block'
    }
    images[count].style.display = 'none'
    images[count + 1].style.display = 'block'
    ++count

}
document.getElementById('reverse').onclick = () => {
    if (count<= 0) {
        alert(`картинки закінчились`)
        ++count
        images[count].style.display = 'block'
    }
    images[count].style.display = 'none'
    images[count-1].style.display = 'block'
    --count

}




