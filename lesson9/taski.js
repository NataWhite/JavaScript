//
//===========================================================================
// Сума цифр числа
// Дано натуральное число N. Вычислите сумму его цифр.
//     При решении этой задачи нельзя использовать строки,
//     списки, массивы ну и циклы, разумеется.
//     Рекурсія)


console.log(`----сума цифр-----------------`)

let numbers = []

function sumNumbers(number) {
    numbers.push(number % 10);
    if (number < 10) {
        return
    } else {
        let nextNumber = Math.floor(number / 10);
        sumNumbers(nextNumber)
    }

    return numbers.reduce((acc, item) => {
        return acc + item
    }, 0)
}

let sum = sumNumbers(2222)
console.log(sum);

//---------------------------------------------------------------
// Вирівняти багаторівневий масив в однорівневий
//     [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// flat використовувати заборонено.

console.log(`----вирівняти масив-----------------`)

let array = [1, 3, ['Hello', 'World', [9, 6, 1]], ['oops'], 9];

let flatArray = []

function flat(array) {
    for (const element of array) {
        !Array.isArray(element) ?
            flatArray.push(element) :
            flat(element)
    }
}

flat(array)
console.log(array)
console.log(flatArray)


//___________________________________________________________________
// Знайти набільший елемент в масиві за допомогою reduce
//     [1,6,9,0,17,88,4,7] -> 88

console.log(`-----знайти максимальне число через reduce----------------`)

let arrayOfNumbers = [1, 6, 9, 0, 17, 88, 4, 7];

let max = arrayOfNumbers.reduce((acc, number) => {
    if (number > acc) {
        acc = number
    }
    return acc
})

console.log(arrayOfNumbers)
console.log(max)


//================================
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

console.log(`-----максимальний і мінімальний індекс----------------`)

function findIndex(key, array) {
    if (array.length > 10) {
        return alert(`Введений масив містить більше 10 елементів`)
    }
    let minIndex = array.indexOf(key);
    let maxIndex = array.lastIndexOf(key);
    if (minIndex === -1) {
        return -1
    }
    return `minIndex = ${minIndex}, maxIndex = ${maxIndex}`
}


let someArr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9];
console.log(someArr)

console.log(`------число 4---------------`)
let answer = findIndex(4, someArr);
console.log(answer)

console.log(`-----число 1----------------`);
let nextAnswer = findIndex(1, someArr);
console.log(nextAnswer)

