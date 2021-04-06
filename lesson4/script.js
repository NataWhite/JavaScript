// 1) створити функцію яка приймає масив та виводить його

// arr = [12, 56, true, 'Why not?', 'happy', 34];
//
// function arrayLog(array) {
//     console.log(array);
// }
//
// arrayLog(arr)

//-----------------------------------------------------------------------
// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// function randomArray(amount, range) {
//     let array = [];
//     for (let i = 0; i < amount; i++) {
//         let number = Math.floor(Math.random() * range)
//         array.push(number)
//     }
//     arrayLog(array);
//
// }
//
// randomArray(10, 20);

//-----------------------------------------------------------------------
// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function minNumber(numberOne, numberTwo, numberThree) {
//     numberOne < numberTwo && numberOne < numberThree ? console.log(numberOne) :
//         numberTwo < numberOne && numberTwo < numberThree ? console.log(numberTwo) : console.log(numberThree)
// }
//
// minNumber(12, 5, 10)

//-----------------------------------------------------------------------
// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maxNumber(numberOne, numberTwo, numberThree) {
//     numberOne > numberTwo && numberOne > numberThree ? console.log(numberOne) :
//         numberTwo > numberOne && numberTwo > numberThree ? console.log(numberTwo) : console.log(numberThree)
// }
//
// maxNumber(7, 55, 100)

//-----------------------------------------------------------------------
// 5) створити функцію яка повертає найбільше число з масиву

// function maximal(array) {
//     let max = array[0]
//     for (let number of array) {
//         if (max < number) {
//             max = number
//         }
//     }
//     return max
// }
//
// let numbers = [12, 145, 7, 34, -56, 5, 0, -34];
// let biggestNumber = maximal(numbers);
// console.log(biggestNumber);

//-----------------------------------------------------------------------
// 6) створити функцію яка повертає найменьше число з масиву

// function minimal(array) {
//     let min = array[0]
//     for (let number of array) {
//         if (min > number) {
//             min = number
//         }
//     }
//     return min
// }
//
// let numbers = [12, 34, 67, -100, 1, 0, 2, -8];
// let smallestNumber = minimal(numbers);
// console.log(smallestNumber);

//-----------------------------------------------------------------------
// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// function sum(array) {
//     let summa = 0;
//     for (let number of array) {
//         summa = summa + number
//     }
//     return summa
// }
//
// let numbers = [12, 6, 7, 34, 5, 0, 6, 11];
// let plusNum = sum(numbers);
// console.log(plusNum)

//-----------------------------------------------------------------------
// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function middle(array) {
//     let number = 0;
//     for (let element of array) {
//         number = number+element
//     }
//     let arifmetic = number/array.length
//     return arifmetic
// }
//
// let numbers = [12, 6, 7, 34, 5, 0, 6, 11];
// let middleNumber = middle(numbers);
// console.log(middleNumber)

//-----------------------------------------------------------------------
// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let someList = [
//     {name: 'John Doe', age :25, car: true},
//     {address: 'Lviv'},
//     {work: 'Intel Duotex'}
// ]
//
// function keysOfArray(array) {
//     let keys = []
//     for (let object of array) {
//         for (let property in object) {
//             keys.push(property)
//         }
//     }
//     return keys
// }
//
// let keys = keysOfArray(someList);
// console.log(keys);

//-----------------------------------------------------------------------
// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let someList = [
//     {name: 'John Doe', age: 25, car: true},
//     {address: 'Lviv'},
//     {work: 'Intel Duotex'}
// ]
//
// function arrayOfValue(array) {
//     let value = []
//     for (let object of array) {
//         for (const sense in object) {
//             value.push(object[sense])
//         }
//     }
//     return value
// }
//
// let value = arrayOfValue(someList);
// console.log(value);

//-----------------------------------------------------------------------
// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// let oneArr = [1, 2, 3, 4];
// let twoArr = [2, 3, 4, 5];
//
// function sumOfNumbers(arrayOne, arrayTwo) {
//     let newArray = []
//     for (let i = 0; i < arrayOne.length; i++) {
//         newArray.push(arrayOne[i] + arrayTwo[i])
//     }
//     return newArray
// }
// let total = sumOfNumbers(oneArr,twoArr);
// console.log(total)
//

// ============================================================================================
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function minAndMax() {
//     let mini = arguments[0]
//     let max = arguments [0]
//     for (let i = 0; i < arguments.length; i++) {
//         if (mini > arguments[i]) {
//             mini = arguments[i]
//         }
//         if (max < arguments[i]) {
//             max = arguments[i]
//         }
//     }
//     console.log(mini);
//     return max
//
// }
// let biggestNumber = minAndMax(1, 45, 3, 6, 7, -6, 0);
// console.log(biggestNumber)

//-----------------------------------------------
// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.

// let someList = [
//     {name: 'John Doe', age: 25, car: true},
//     {address: 'Lviv'},
//     {work: 'Intel Duotex'}
// ]

// //варіант #1
// function askFromPrompt(array) {
//     let answer = prompt(`Return key or value`)
//        answer === 'key' ? console.log(keysOfArray(array)) :
//         answer === 'value' ? console.log(arrayOfValue(array)) : console.log(`Введіть "key" або "value"`)
//
// }
//
// function keysOfArray(array) {
//     let keys = []
//     for (let object of array) {
//         for (let property in object) {
//             keys.push(property)
//         }
//     }
//     return keys
// }
//
// function arrayOfValue(array) {
//     let value = []
//     for (let object of array) {
//         for (const sense in object) {
//             value.push(object[sense])
//         }
//     }
//     return value
// }
//
// askFromPrompt(someList)

// //варіант #2
// function askFromFile(array, keyOrValue) {
//     keyOrValue === 'key' ? console.log(keysOfArray(array)) :
//         keyOrValue === 'value' ? console.log(arrayOfValue(array)) : console.log(`Введіть "key" або "value"`)
//
// }
//
// function keysOfArray(array) {
//     let keys = []
//     for (let object of array) {
//         for (let property in object) {
//             keys.push(property)
//         }
//     }
//     return keys
// }
//
// function arrayOfValue(array) {
//     let value = []
//     for (let object of array) {
//         for (const sense in object) {
//             value.push(object[sense])
//         }
//     }
//     return value
// }
//
// askFromFile(someList, 'key')

// //варіант #3
// function askFromConfirm (array) {
//     confirm(`Щоб вивести ключі обєктів нажми "ОК" \n А шоб вивести значення обери "Cancel"`) ?
//         console.log(keysOfArray(array)) :
//         console.log(arrayOfValue(array))
// }
//
// function keysOfArray(array) {
//     let keys = []
//     for (let object of array) {
//         for (let property in object) {
//             keys.push(property)
//         }
//     }
//     return keys
// }
//
// function arrayOfValue(array) {
//     let value = []
//     for (let object of array) {
//         for (const sense in object) {
//             value.push(object[sense])
//         }
//     }
//     return value
// }
//
// askFromConfirm(someList)

//-----------------------------------------------
// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// //варіант #1
// function change (array, index) {
//     let newArray = [...array]
//     for (let i = 0; i < newArray.length; i++) {
//         if (i === index) {
//             newArray[i]++
//         }
//     }
//     return newArray
// }
//
// let array =[2, 4, 15, 4, 10, 6, 7]
// console.log(array);
// let changedArr = change(array, 2)
// console.log(changedArr)

// //варіант #2
// function change(array, index) {
//     let newArray = [...array]
//     if (index >= 0 && index < newArray.length - 1) {
//         newArray[index] = newArray[index+1]
//     }
// return newArray
// }
//
// let array =[2, 4, 15, 4, 10, 6, 7];
// console.log(array);
// let changeInArray = change(array,5);
// console.log(changeInArray)


// ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
//     - Додає в боді блок з текстом "Hello owu"

// function text(text) {
//     let divka = document.createElement('div');
//     divka.innerText = text
//     document.body.appendChild(divka)
// }
//
// text('Hello owu')

//----------------------------------------------
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// function addText(text, argument) {
//     let type = document.createElement(argument)
//     type.innerText = text
//     document.body.appendChild(type)
// }
//
// addText('hello baby', 'h2')

//----------------------------------------------------
// - приймає масив автомобілів (можна взяти з попередніх дз ),
// та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//     Всі властивості авто в обному блоці

// let cars = [
//     {
//         model: 'BMW',
//         enginePower: 400,
//         price: 3000
//     },
//     {
//         model: 'Volkswagen',
//         enginePower: 210,
//         price: 1900
//
//     },
//     {
//         model: 'Ford',
//         enginePower: 172,
//         price: 10000
//
//     },
//     {
//         model: 'Honda',
//         enginePower: 155,
//         price: 8000
//     },
//     {
//         model: 'Audi',
//         enginePower: 163,
//         price: 12000
//     },
//     {
//         model: 'Toyota',
//         enginePower: 150,
//         price: 15000
//     }
// ]

// function blockOfCars(array,idName) {
//     let block = document.getElementById(idName)
//     for (let car of array) {
//         let divka = document.createElement('div')
//         let model = document.createElement('h3')
//         let engPower = document.createElement('h3')
//         let price = document.createElement('h3')
//
//         model.innerText =`Model : ${car.model}`
//         engPower.innerText = `Power : ${car.enginePower}`
//         price.innerText = `Price : ${car.price}`
//
//         divka.appendChild(model)
//         divka.appendChild(engPower)
//         divka.appendChild(price)
//
//         block.appendChild(divka)
//
//         divka.style.backgroundColor = 'coral'
//         divka.style.margin = '10px'
//     }
//
// }
//
// blockOfCars(cars,'carList')


//--------------------------------------------------------------
// - приймає масив автомобілів (можна взяти з попередніх дз ),
// та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//     Для кожної властивості створити всередені блока автомоблія свій блок

// let cars = [
//     {
//         model: 'BMW',
//         enginePower: 400,
//         price: 3000
//     },
//     {
//         model: 'Volkswagen',
//         enginePower: 210,
//         price: 1900
//
//     },
//     {
//         model: 'Ford',
//         enginePower: 172,
//         price: 10000
//
//     },
//     {
//         model: 'Honda',
//         enginePower: 155,
//         price: 8000
//     },
//     {
//         model: 'Audi',
//         enginePower: 163,
//         price: 12000
//     },
//     {
//         model: 'Toyota',
//         enginePower: 150,
//         price: 15000
//     }
// ]
//
//
// function blockInBlock(array, idName) {
//     let block = document.getElementById(idName)
//     for (let car of array) {
//         let carBlock = document.createElement('div')
//         let model = document.createElement('div')
//         let power = document.createElement('div')
//         let price = document.createElement('div')
//
//         model.innerText = `model ${car.model}`
//         power.innerText = `power ${car.enginePower}`
//         price.innerText = `price ${car.price}`
//
//         carBlock.appendChild(model)
//         carBlock.appendChild(power)
//         carBlock.appendChild(price)
//
//         block.appendChild(carBlock)
//
//         carBlock.style.backgroundColor = 'lightgreen'
//         carBlock.style.padding = '20px'
//         carBlock.style.margin = '20px'
//         model.style.backgroundColor = 'coral'
//         power.style.backgroundColor = 'lightblue'
//         price.style.backgroundColor = 'gold'
//     }
//
//
// }
//
//
// blockInBlock(cars, 'carList')

//--------------------------------------------------------------
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// // Варіант #1
//
// function zero (array) {
//     let newArray = [...array]
//     for (let i = newArray.length - 1; i >= 0; i--) {
//         if (newArray[i] === 0) {
//             newArray.splice(i, 1)
//             newArray.push(0)
//         }
//
//     }
//     return newArray
// }
// let zeroInEnd = zero([1,0,6,0,3]);
// console.log(zeroInEnd);
// zeroInEnd = zero([0,0,1,0]);
// console.log(zeroInEnd)



// // Варіант #2
// [1,0,6,0,3];
//  [0,0,1,0]
// function fromStartToEnd(array) {
//     let one = [];
//     let two = [];
//     if (array.length >= 2 && array.length <= 100) {
//         for (let number of array) {
//             if (number === 0) {
//                 one.push(0)
//             } else {
//                 two.push(number)
//             }
//         }
//         return two.concat(one)
//     }
// }
//
// let newArray = fromStartToEnd([1,0,6,0,3]);
// console.log(newArray);
// newArray = fromStartToEnd([0,0,1,0]);
// console.log(newArray);

// ============================================================================================
// ЗАДАЧІ ПІДВИЩЕНОГО РІВНЯ СКЛАДНОСТІ
// ============================================================================================
//
// 1) Точная степень двойки.
//     Дано натуральное число N.
//     Выведите слово YES, если число N является точной степенью двойки,
//     или слово NO в противном случае.
//     Операцией возведения в степень пользоваться нельзя!

//
// function num(number) {
//     let result = 'NO'
//     let i = 0
//     while (i < number) {
//         i++
//         if (Math.pow(2, i) === number) {
//             result = 'YES'
//         }
//     }
//     console.log(result);
// }
//
// num(128)







//===========================================================
// // ===========залишилось доробити============================

//-------------------------------------------------------------------------------
// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
// ============================================================================================

//-------------------------------------------------------
// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій

//---------------------------------------------------
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]


