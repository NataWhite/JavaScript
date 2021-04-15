// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let text = document.getElementById('text');
// text.value = localStorage.getItem('textArea')
// text.oninput = (event) => {
//     localStorage.setItem('textArea', event.target.value)
// }

//===============================================
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.

// const form = document.getElementById('myForm');
//
// getItem(form)
// saveForm = (form) => {
//     setItem(form)
//
// }
//
// function setItem(tagField) {
//     for (let i = 0; i < tagField.length; i++) {
//         if (tagField[i].type === 'checkbox' || tagField[i].type === 'radio')
//             tagField[i].checked ?
//                 tagField[i].value = true :
//                 tagField[i].value = false
//         localStorage.setItem(tagField[i].id, tagField[i].value)
//     }
// }
//
// function getItem(tagField) {
//     for (let i = 0; i < localStorage.length; i++) {
//         localStorage.getItem(tagField[i].id) === 'true' ?
//             document.getElementById(tagField[i].id).setAttribute('checked', 'checked') :
//             document.getElementById(tagField[i].id).value = localStorage.getItem(tagField[i].id)
//     }
// }

//=====================================
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// let someText = document.getElementById('someTextArea');
// let reverse = document.getElementById('reverse');
// let forward = document.getElementById('forward');
// let save = document.getElementById('save');
//
// save.onclick = () => {
//     localStorage.setItem(localStorage.length + 1, someText.value)
// }
//
// reverse.onclick = () => {
//     let count
//     for (const key in localStorage) {
//         if (localStorage.getItem(key) === someText.value) {
//             count = key
//         }
//     }
//     count === '1' ?
//         reverse.hidden = true :
//         someText.value = localStorage.getItem(count - 1)
// }
//
// forward.onclick = () => {
//     let count
//     for (const key in localStorage) {
//         if (localStorage.getItem(key) === someText.value) {
//             count = key
//         }
//     }
//     count === localStorage.length.toString() ?
//         forward.hidden = true :
//         someText.value = localStorage.getItem(+count + 1)
//
// }



//====================================
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма,
// в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта


