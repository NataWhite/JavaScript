//Task #1
//------------------------

//--1--
// присвоить каждому из следующих значений свою переменную:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false
// Вывести каждую при помощи console.log , alert, document.write
//
// let wordHello = 'hello';
// console.log(wordHello)
// alert(wordHello);
// document.write(wordHello)

// let wordOwu = 'owu';
// console.log(wordOwu);
// alert(wordOwu);
// document.write(wordOwu)

// let wordCom = 'com';
// console.log(wordCom);
// alert(wordCom);
// document.write(wordCom)

// let numberOne = 123;
// console.log(numberOne);
// alert(numberOne);
// document.write(numberOne)

// let numberTwo = 3.14;
// console.log(numberTwo);
// alert(numberTwo);
// document.write(numberTwo);

// let okey = 5 > 3;
// console.log(okey);
// alert(okey);
// document.write(okey)

// let notOkey = 4 > 8;
// console.log(notOkey);
// alert(notOkey);
// document.write(notOkey)

//--2--
//- переопределить каждую переменную из задания 1 дав им произвольные значения
//Вывести каждую при помощи console.log , alert, document.write

// let wordHello = 'hello';
// wordHello = 'good bye'
// console.log(wordHello)
// alert(wordHello);
// document.write(wordHello)

// let numberOne = 123;
// numberOne = 200;
// console.log(numberOne);
// alert(numberOne);
// document.write(numberOne)


//--3--
//- Создать 3 числовых и 3 стринговых константы.
// Вывести каждую при помощи console.log , alert, document.write

// const firstString = 'Hello';
// console.log(firstString);
// alert(firstString);
// document.write(firstString)

// const secondString = 'world';
// console.log(secondString);
// alert(secondString);
// document.write(secondString)

//--4--
//- при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО.
// Для фамилии имени и отчества создать разные переменные.
// Вывести каждую при помощи console.log , alert, document.write

// let surname = prompt('Введіть ваше прізвище');
// let name = prompt('Введіть ваше імя');
// let fatherName = prompt('Введіть ваше по-батькові');
// console.log(surname);
// console.log(name);
// console.log(fatherName);
// document.write(surname + ' ');
// document.write(name + ' ');
// document.write(fatherName)

//--5--
//- Взять переменные из задания 4 и сконкатенировать их в одной переменной person.

// let surname = prompt('Введіть ваше прізвище');
// let name = prompt('Введіть ваше імя');
// let fatherName = prompt('Введіть ваше по-батькові');
// let person = surname + ' ' + name + ' ' + fatherName;
// console.log(person);
// document.write(person)

//--6--
//- Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.

// let motherName = prompt('Введіть імя вашої матері');
// let motherSurname = prompt('Введіть прізвище вашої матері');
// let herFatherName = prompt('Введіть по-батькові вашої матері');
// let myMother = motherName + ' ' + motherSurname + ' ' + herFatherName;
// console.log(myMother);
// document.write(myMother)

//--7--
//- при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.

// let one = +prompt('Введіть перше число');
// let two = +prompt('Введіть друге число');
// let three = +prompt('Введіть третє число');
// let numbers = one + '/' + two + '/' + three;
// console.log(numbers);

//--8--
//- при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt.
// Сложить их между собой записав результат в переменную result и вывести в консоль браузера

// let numberOne = prompt('ВВедіть число #1');
// let numberTwo = prompt('ВВедіть число #2');
// let numberThree = prompt('ВВедіть число #3');
// let numberFour = prompt('ВВедіть число #4');
// let parseOne = parseInt(numberOne);
// let parseTwo = parseInt(numberTwo);
// let parseThree = parseInt(numberThree);
// let parseFour = parseInt(numberFour);
// let result = parseOne + parseTwo + parseThree + parseFour;
// console.log(result);

//--9--
//- при помощи prompt()  получить 3 числа с плавающей точекой.
// при помощи parseFloat привести их к соответсвующему типу.
// Сложить их между собой записав результат в переменную result и вывести в консоль браузера

// let numberOne = prompt('ВВедіть число #1');
// let numberTwo = prompt('ВВедіть число #2');
// let numberThree = prompt('ВВедіть число #3');
// let parseOne = parseFloat(numberOne);
// let parseTwo = parseFloat(numberTwo);
// let parseThree = parseFloat(numberThree);
// let result = parseOne + parseTwo + parseThree;
// console.log(result);

//--10--
//- при помощи prompt()  получить 3 числа с плавающей точекой.
// Округлить их при помощи Math.round
// Сложить их между собой записав результат в переменную  и вывести в консоль браузера

// let numberOne = prompt('ВВедіть число #1');
// let numberTwo = prompt('ВВедіть число #2');
// let numberThree = prompt('ВВедіть число #3');
// let mathOne = Math.round(numberOne);
// let mathTwo = Math.round(numberTwo);
// let mathThree = Math.round(numberThree);
// let result = mathOne + mathTwo + mathThree;
// console.log(result);

//-11--
//- при помощи prompt()  получить 2 целых числа.
// Привести их к целочисленному типу.
// Первое число - это число которое будут возводить в степень.
// Второе число - это число которое является степенью.
// При помощи Math.pow возвести первое число в степень второго числа.

// let one = +prompt('Введіть перше число');
// let two = +prompt('Введіть друге число');
// let result = Math.pow(one, two);
// console.log(result);

//--12--
//- При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль
//
// let a = 100;
// let b = '100';
// let c = true;
// let d = undefined;
// console.log(typeof a, a);
// console.log(typeof b, b);
// console.log(typeof c, c);
// console.log(typeof d, d)


//--13--
//- Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//В одинаковых выражениях в задании не использовать два одинаковых оператора.
//Каждое выражение вложить в свою переменную
//5 ? 6 -> true
//5 ? 6 -> false
//5 ? 6 -> false
//5 ? 6 -> false
//10 ? 10 -> true
//10 ? 10 -> true
//10 ? 10 -> false
//10 ? 10 -> false
//10 ? 10 -> false
//123 ? '123' -> false
//123 ? '123' -> true

// let a1 = 5 < 6;
// console.log(a1);
// let a2 = 5 > 6;
// console.log(a2);
// let a3 = 5 === 6;
// console.log(a3);
// let a4 = 5 == 6;
// console.log(a4);
// let b1 = 10 === 10;
// console.log(b1);
// let b2 = 10 == 10;
// console.log(b2);
// let b3 = 10 > 10;
// console.log(b3);
// let b4 = 10 < 10;
// console.log(b4);
// let b5 = 10 != 10;
// console.log(b5);
// let c1 = 123 === '123';
// console.log(c1);
// let c2 = 123 == '123';
// console.log(c2);

//Дополнительно:
//    - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
//console.log(132 > 100 && 45 < 12 );    ===> false
//console.log(34 > 33 && 23 < 90 );    ===> true
//console.log(99 > 100 && 45 > 12 );    ===> false
//console.log(132 > 100 || 45 < 12 );    ===> true
//console.log(111 > 11 || 45 < 111 );    ===> true
//console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );    ===> true
//console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );    ===> true
//console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );    ===> false
//console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));    ===> true
//console.log(!!'-1');    ===> true
//console.log(!!-1);    ===> true
//console.log(!!'0');    ===> false
//console.log(!!'null');    ===> false
//console.log(!!'undefined');    ===> false
//console.log(!!(3/'owu'));    ===> false
//console.log((111 > 11 || 45 < 111) ||  !!'0');    ===> true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));   ===> false


//CLASS

//1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
//При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.

// let str = 'Привет';
// console.log(typeof str,str);
// let num = 123;
// console.log(typeof num, num);
// let flag = true;
// console.log(typeof flag, flag);
// let txt = "true";
// console.log(typeof txt, txt)

//2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.)
// найдите значения выражений:
//    5 + 3,
//    5 - 3,
//    5 * 3,
//    5 / 3,
//    5 % 3
//поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.

// let a1 = 5 + 3;
// console.log(a1);
// let a2 = 5 - 3;
// console.log(a2);
// let a3 = 5 * 3;
// console.log(a3);
// let a4 = 5 / 3;
// console.log(a4);
// let a5 = 5 % 3;
// console.log(a5)

//3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//    5 % 3,
//    3 % 5,
//    5 + '3',
//    '5' - 3,
//    75 + 'кг'

// let a6 = 5 % 3;
// document.write(a6 + '</br>');
// let a7 = 3 % 5;
// document.write(a7 + '</br>');
// let a8 = 5 + '3';
// document.write(a8 + '</br>');
// let a9 = '5' - 3;
// document.write(a9 + '</br>');
// let a10  = 75 + 'кг';
// document.write(a10 + '</br>');

//4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
//шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.

// let height = 23;
// let width = 10;
// let s = height * width;
// console.log(s)

//5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//   результат поместите в переменную v.

// let heightC = 10;
// let dC = 4;
// let v = heightC * 3.14 * (dC*1/2)**2;
// console.log(v)

//6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень)
// или оператор возведения в степень ** ).

// let n = 3;
// let m = 4;
// let k = Math.pow(n**2+m**2, 1/2);
// console.log(k)

//7. Напишите скрипт, который выводит "Hello world",
// создавши переменную str и выводить спомощью document.write, alert и console.log

// let str = "Hello world";
// console.log(str);
// document.write(str);
// alert(str)

//8. Вывести в окно браузера при помощи метода alert() следующие данные:
// Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

// let surName = 'Ivanova';
// let name = 'Natalia';
// let fatherName = 'Ihorivna';
// let age = 28;
// let hobby = 'reading, walking, coding'
// alert(`${surName} ${name} ${fatherName}\n ${age}\n ${hobby}`)


//9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//    Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//  Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//    Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1 = 'Кто';
// let str2 = 'ты';
// let str3 = 'такой?';
// let concatenation = str1 + ' ' + str2 + ' ' + str3;
// document.write(concatenation)


//10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//    let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");   // ===> 205
// document.write(str - a + "<br/>");  //  ===> 15
// document.write(str * "2" + "<br/>");  //  ===>  40
// document.write(str / 2 + "<br/>");   // ===>  10

//11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
// console.log(parseInt("3.14")); //    ===> 3
// console.log(parseInt("-7.875"));//     ===> -7
// console.log(parseInt("435"));//    ===> 435
// console.log(parseInt("Вася"));//    ===> NaN

//12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные,
// которые будут использоваться далее, повторите код ниже
// let str = prompt("Enter something", "ho-ho")
// console.log(str);

// let str = prompt('Enter somethsing');
// console.log(str)

//13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел,
// а вывод результата при помощи метода alert

// let a = +prompt('Введіть число');
// let b = +prompt('Введіть число');
// alert(a+b)

//14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит
// имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

// let name = prompt('Ваше імя?');
// let surName = prompt('Ваше прізвище?');
// let age = prompt('Ваш вік?');
// alert(`Доброго вечера ${name} ${surName}, мои поздравления что вам ${age}`)
