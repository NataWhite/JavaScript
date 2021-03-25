// task #2

//--------------------------------------------------------------------
// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

// let numbers = [1, 4, 78, 34, 2];
// console.log(numbers);
// let array = ['hello', 'okten', 'apple', 'baby', 'monday'];
// console.log(array);
// let mixed = [12, true, 'girl', 7, false];
// console.log(mixed)

//--------------------------------------------------------------------
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let emptyArray = [];
// emptyArray[2] = 'monday';
// emptyArray[4] = 12;
// emptyArray[10] = true;
// emptyArray[12] = 'false';
// console.log(emptyArray);

//--------------------------------------------------------------------
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Good Morning, Baby</div>`)
// };
// for (let i = 0; i < 10; i++) {
//     document.write(`${i} <div>I am a rabbit John</div>`)
// }

//--------------------------------------------------------------------
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>I like green apple and coffee</h1>`)
//     i++
// };

// let i = 0;
// while (i < 20) {
//     document.write(`${i}<h1>I like green apple and coffee</h1>`)
//     i++
// }

//--------------------------------------------------------------------
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arrayOfNumbers = [13, 4, 7, 435, 78, 1, 75, 10, 4, 5];
// for (let number of arrayOfNumbers) {
//     console.log(number);
// }

// let arrayOfStrings = ['apple', 'coffee', 'milk', 'asdsads', '5', 'Karina', 'true', 'false', 'abc', '12'];
// for (let i = 0; i < arrayOfStrings.length; i++) {
//     console.log(arrayOfStrings[i])
// }

//--------------------------------------------------------------------
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи

// let funnyThings = ['baby', 12, true, 'love', 23, false, 'false', 34, 1, 'Victor', 'coffee', true];
//
// for (let i = 0; i < funnyThings.length; i++) {
//     if (typeof funnyThings[i] === "boolean") {
//         console.log(funnyThings[i])
//     }
// }
//
// for (let i = 0; i < funnyThings.length; i++) {
//     if (typeof funnyThings[i] === "number") {
//         console.log(funnyThings[i])
//     }
// }
//
// for (let i = 0; i < funnyThings.length; i++) {
//     if (typeof funnyThings[i] === "string") {
//         console.log(funnyThings[i])
//     }
// }

//--------------------------------------------------------------------
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

// let emptyArray = [];
// emptyArray[0] = 'car';
// emptyArray[1] = 1;
// emptyArray[2] = 'coffee';
// emptyArray[3] = true;
// emptyArray[4] = 34;
// emptyArray[5] = false;
// emptyArray[6] = 'monday';
// emptyArray[7] = 56;
// emptyArray[8] = 2;
// emptyArray[9] = 'baby';
// for (let i = 0; i < emptyArray.length; i++) {
//     console.log(emptyArray[i])
// }

//--------------------------------------------------------------------
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log([i])
//     document.write(`<h2>${[i]}</h2>`)
// }

//--------------------------------------------------------------------
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log([i])
//     document.write(`<h2>${[i]}</h2>`)
// }

//--------------------------------------------------------------------
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i += 2) {
//     console.log([i])
//     document.write(`<h2>${[i]}</h2>`)
// }

//--------------------------------------------------------------------
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write


// for (let i = 0; i < 100; i++) {
//     if ([i] % 2 === 0) {
//         console.log([i])
//         document.write(`<h2>${[i]}</h2>`)
//     }
// }

//--------------------------------------------------------------------
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if ([i] % 2 !== 0) {
//         console.log([i])
//         document.write(`<h2>${[i]}</h2>`)
//     }
// }

//--------------------------------------------------------------------
// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// for (minutes = 0; minutes < 2;minutes++) {
//     for ( seconds = 0; seconds <60; seconds++) {
//         console.log(minutes,seconds)
//     }
//  }

//--------------------------------------------------------------------
// - Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// for (hours = 0; hours < 2; hours++) {
//     for (minutes = 0; minutes < 60; minutes++) {
//         for (seconds = 0; seconds < 60; seconds++) {
//             console.log(hours,minutes,seconds)
//         }
//     }
// }


//--------------------------------------------------------------------
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let array = ['a', 'b', 'c'];
// let someArray = [1, 2, 3];
// for (let i = 0; i < someArray.length; i++) {
//     array.push(someArray[i])
// }
// console.log(array)

//--------------------------------------------------------------------
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

// let array = [1, 2, 3];
// let emptyArray = [];
// for (let i = array.length - 1; i >= 0; i--) {
//     emptyArray.push(array[i])
// }
// console.log(emptyArray)

//--------------------------------------------------------------------
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let array = [1, 2, 3];
// console.log(array);
// array.push(4,5,6);
// console.log(array)

//--------------------------------------------------------------------
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let array = [1, 2, 3];
// console.log(array);
// array.unshift(4, 5, 6);
// console.log(array);

//--------------------------------------------------------------------
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

// let array =['js', 'css', 'jq'];
// let a = array.shift();
// let b = array.pop();
// console.log(a);
// console.log(b)

//--------------------------------------------------------------------
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

// let array = [1, 2, 3, 4, 5];
// console.log(array);
// let miniArray = array.splice(3,2);
// console.log(miniArray);
// let secondMiniArray = array.splice(0,2);
// console.log(secondMiniArray);

//--------------------------------------------------------------------
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

// let array = [1, 2, 3, 4, 5];
// array.splice(1,2);
// console.log(array);

//--------------------------------------------------------------------
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let array = [1, 2, 3, 4, 5];
// console.log(array);
// array.splice(3,2,'a', 'b', 'c',4,5);
// console.log(array);

// let array = [1, 2, 3, 4, 5];
// console.log(array);
// array.splice(1,0,'a','b');
// array.splice(6,0,'c');
// array.splice(8,0,'e');
// console.log(array);

//--------------------------------------------------------------------
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let arrayOfNumbers = [13, 4, 7, 435, 78, 1, 75, 10, 4, 5];
// for (let i = 0; i < arrayOfNumbers.length; i++) {
//     if (arrayOfNumbers[i] % 2 === 0) {
//         console.log(arrayOfNumbers[i])
//     }
// }

// --------------------------------------------------------------------
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

// let arrayOfNumbers = [13, 4, 7, 435, 78, 1, 75, 10, 4, 5];
// let emptyArray = [];
// for (let i = 0; i < arrayOfNumbers.length; i++) {
//     emptyArray.push(arrayOfNumbers[i])
// };
// console.log(emptyArray)

//--------------------------------------------------------------------
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let arrayOfNumbers = [13, 4, 7, 435, 78, 1, 75, 10, 4, 5];
// let emptyArray = [];
// let i = 0;
// while (i < arrayOfNumbers.length) {
//     emptyArray.push(arrayOfNumbers[i])
//     i++
// }
// console.log(emptyArray)

// =====================================================
//======================================================
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"

// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// let i = 0
// while ( i <numbers.length) {
//     console.log(numbers[i])
//     i++
//}

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

// let i = 0
// while (i<numbers.length) {
//     if ([i]%2 !==0) {
//         console.log([i],numbers[i])
//     }
//     i++
// }

// for (let i = 0; i < numbers.length; i++) {
//     if ([i] % 2 !== 0) {
//         console.log([i], numbers[i])
//     }
// }

// let i = 0
// while (i < numbers.length) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i])
//     }
//     i++
// }

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i])
//     }
// }

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 3 === 0) {
//         numbers[i] = 'okten'
//     }
//
// }
// console.log(numbers)

// 8. вивести масив в зворотньому порядку.

// let reverseNumbers = [];
// for (let i = 9; i >= 0; i--) {
//     reverseNumbers.push(numbers[i])
// }
// console.log(numbers);
// console.log(reverseNumbers);

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

//let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// //перебрати його циклом while
// let i = 9
// while (i >= 0) {
//     console.log(numbers[i])
//     i--
//}

// //перебрати його циклом for
// for (let i = 9; i >= 0; i--) {
//     console.log(numbers[i])
// }

//// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 9
// while (i >= 0) {
//     if ([i] % 2 !== 0) {
//         console.log([i], numbers[i])
//     }
//     i--
// }

//// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 9; i >= 0; i--) {
//     if ([i] % 2 !== 0) {
//         console.log([i], numbers[i])
//     }
// }

//// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 9
// while (i >= 0) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i])
//     }
//     i--
// }

//// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 9; i >= 0; i--) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i])
//     }
// }

//// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 9; i >= 0; i--) {
//     if (numbers[i] % 3 === 0) {
//         numbers[i] = 'okten'
//     }
// }
// console.log(numbers)

//----------------------------------------------------------------------------------------
// 1.
// створити пустий масив та :
// a. заповнити його 50 парними числами за допомоги циклу.
// d. заповнити його 50 непарними числами за допомоги циклу.

// let evenNumbers = [];
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         evenNumbers.push(i)
//     }
// }
// console.log(evenNumbers);
//
// let oddNumbers = [];
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         oddNumbers.push(i)
//     }
// }
// console.log(oddNumbers)

//----------------------------------------------------------------------------------------
// // 2. используя Math.random заполнить массив из ???(сколько хотите) элементов.
// //     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
//
// let random = Math.floor((Math.random() * 732) + 8);
// console.log(random)
// let someArea = [];                                 /*   <==== тут створюється масив для наступних завдань  */
// for (let i = 0; i < 20; i++) {
//     someArea.push(Math.floor((Math.random() * 732) + 8))
// }
// console.log(someArea);
//
// //// 2. вывести на консоль  каждый третий елемент
// for (let i = 1; i < someArea.length; i++) {
//     if (i % 3 === 0) {
//         console.log(someArea[i - 1])
//     }
// }
//
// // 3. вывести на консоль  каждый третий елемент, но при условии что его значение является парным.
// for (let i = 1; i < someArea.length; i++) {
//     if (i % 3 === 0 && someArea[i-1] % 2 === 0) {
//         console.log('парне число', someArea[i-1])
//     }
// }
//
// // 4. вывести на консоль  каждый третий елемент, но при условии что он имеет парное значение и
// // записать их в другой массив.
// let evenNumbers = [];
// for (let i = 1; i < someArea.length; i++) {
//     if (i % 3 === 0 && someArea[i-1] % 2 === 0) {
//         evenNumbers.push(someArea[i-1])
//     }
// }
// console.log(evenNumbers);
//
// // 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
// console.log(someArea)
// for (let i = 0; i < someArea.length; i++) {
//     if (someArea[i]%2 ===0) {
//         console.log(someArea[i-1])
//     }
// }

//-------------------------------------------------------------------------------

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки.
// обрахувати середній чек.

// let price = [100, 250, 50, 168, 120, 345, 188];
// let dayCheck = 0;
// for (let i = 0; i < price.length; i++) {
//     dayCheck = dayCheck + price[i]
// }
// dayChek = dayCheck / price.length
// console.log(dayChek);


// 7. створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let someList = [];
// for (let i = 0; i < 10; i++) {
//     someList.push(Math.floor(Math.random()*20))
// }
// console.log(someList);
// let anotherList = [];
// for (let i = 0; i < someList.length; i++) {
//     anotherList.push(someList[i]*5)
// }
// console.log(anotherList);

// 8. створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.

// let someItems = [12, 'baby', false, "true", 45, 7, 'baby', 34, 'tea', 67, 4, 'true'];
// let onlyNumbers = [];
// for (let i = 0; i < someItems.length; i++) {
//     if (typeof someItems[i] == "number") {
//         onlyNumbers.push(someItems[i])
//     }
// }
// console.log(someItems);
// console.log(onlyNumbers)

//--------------------------------------------------------------------
// Додатково
//--------------------------------------------------------------------

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//

// let letters = ['a', 'b', 'c'];
// let word = [];

// for (let i = 0; i < letters.length; i++) {
//     word = word + letters[i]
// }
// console.log(word);

// let i = 0;
// while (i < letters.length) {
//     word = word + letters[i]
//     i++
// }
// console.log(word);

// for (let letter of letters) {
//     word = word + letter
// }
// console.log(word);
