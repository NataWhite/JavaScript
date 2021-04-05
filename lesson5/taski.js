//-------------------------------------------------------------------------------
// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
//
// let nameAndSurname = (userName) => {
//     let array = userName.split(' ')
//     let name =[]
//     for (const element of array) {
//         if (element) {
//             name.push(element)
//         }
//     }
//     return name.join(' ')
// }
//
// console.log(n1);
// console.log(nameAndSurname(n1));
// console.log(n2);
// console.log(nameAndSurname(n2));
// console.log(n3);
// console.log(nameAndSurname(n3));


//-------------------------------------------------------
//Cоздать функцию которая принимает число и возвращает  текст как в примере:
//    3275  —>  "3000 + 200 + 70 +5"

// let number = 3275
// let number2 = 34978
//
// let sumOfNumber = (number) => {
//     let string = number.toString()
//     let zero = ''
//     let arr = []
//     let lenght = string.length - 1
//     for (let i = lenght; i >= 0; i--) {
//         let num = string[i] + zero;
//         arr.unshift(num)
//         zero+='0'
//     }
//     return arr.join(' + ')
// }
//
// console.log(number);
// console.log(sumOfNumber(number));
// console.log(number2);
// console.log(sumOfNumber(number2))

//-------------------------------------------------------
// Количество единиц
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд.
// Определите, сколько раз в этой последовательности встречается число 1.
// Числа, идущие после двух нулей, необходимо игнорировать.
//
// 2176491947586100 -> 3

// let numbers = '2176491947586100';                 //   -->3
// let numbers1 = '21764919475861002176491947586100' //   -->3
//
// let ones = (stringOfNumbers) => {
//     let times = 0
//     for (let i = 0; i < stringOfNumbers.length; i++) {
//         if (stringOfNumbers[i] === '1') {
//             times++
//         }
//         if (stringOfNumbers[i] === stringOfNumbers[i - 1]) {
//             return times
//         }
//
//     }
//     return times
// }
// console.log(ones(numbers))
// console.log(ones(numbers1))


//-------------------------------------------------------
// Знайти анаграму.
//     Перевірити чи слово має в собі такі самі літери як і поеперднє слово.
//
//     ANAGRAM | MGANRAA -> true
// EXIT | AXET -> false
// GOOD | DOGO -> true


// let anagram = (wordOne, wordTwo) => {
//     let sortLettersOne = wordOne.split('').sort();
//     let joinWordOne = sortLettersOne.join('');
//     let sortLettersTwo = wordTwo.split('').sort();
//     let joinWordTwo = sortLettersTwo.join('')
//     return joinWordOne === joinWordTwo
//
// }
//
// console.log(anagram('ANAGRAM', 'MGANRAA'))
// console.log(anagram('EXIT', 'AXET'))
// console.log(anagram('GOOD', 'DOGO'))

//-------------------------------------------------------
// Палиндром
// Дано слово, состоящее только из строчных латинских букв. Проверьте, является ли это слово палиндромом. Выведите YES или NO.
//     При решении этой задачи нельзя пользоваться циклами, в решениях на питоне нельзя использовать срезы с шагом, отличным от 1.

// let palindrom = (word) => {
//     if (word === word.split('').reverse().join('')) {
//         return 'YES'
//     }
//     return 'NO'
// }
// console.log(palindrom('ASDFDSA'));
// console.log(palindrom('detartrated'));
// console.log(palindrom('wermaht'))

//-------------------------------------------------------
//Знайти найблільше число поліндром яке утворюється завдяки добутку двох простих пятизначних чисел.


//-------------------------------------------------------
//Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.
// Всегда будет только одно целое число, которое встречается нечетное количество раз
//    [1,2,3,4,5,2,4,1,3] -> 5

// let a = [1,2,3,4,5,2,4,1,3];