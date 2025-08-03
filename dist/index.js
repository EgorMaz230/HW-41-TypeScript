"use strict";
// // типизація простих типів данних
// const price = 100;
// const messege = 'good';
// const isOpenModal = true;
// const backet = null;
// const data = undefined;
// // якщо ми не типізуємо данні у змінних то у type script відбувається НЕявна типізація
// // Типізуємо змінну явно (явна типізація)
// const newPrice: number = 30;
// const newMessege: string = 'Helloo';
// const openModal: boolean = false;
// const newBacket: null = null;
// const newData: undefined = undefined;
// // якщо ми плануємо змінювати змінні, то краще їх
// let myAge = 44;
// myAge = 33;
// const numbers: number[] = [1,3,6,8,10];
// const user: {name: string, age:number} = {
//         name:'Pavlo',
//         age:17
// }
// type Friend = {
//         login: string,
//         password: number | string
// }
// const friend: Friend = {
//     login:'mylogin',
//     password: 13456
// }
// // 
// type LessonType = 'typeScript';
// // const lesson: LessonType = 'JavaScript'; Буде помилка оскільки в змінну ми поставили інше значення не з LessonType
// // type LessonType = 'TypeScript' | 'Javascript' | 'React'; Можемо використовивати коли нам треба рядок але лише з вказаним значенням
// // правила хорошого тону - виносити всю типізацію на верх файлу або навіть создати новий файл і імпортувати його
// //Тип данних Any
// let info:any = 'test';
// info = 5;
// info = true;
// //Тип данних any ми використовуемо в ситуаціях в яких ми хочемо використовувати будь який тип данних , він дозволяе переписати будь який тип на інший 
// // Проте НЕРЕКОМЕНДОВАНО використовувати  оскільки втрачаеться сенс type скрипта 
// // Він зручний для тестування коду, коли немае часу на типізацію данних
// // Тип unknown це невідомий тип схожий на any (іігнорке перевірку типів ), АЛЕ при зміні значення видасть помилку  на відмінe від any
// let dataBekend :unknown = 5
// dataBekend = 5.5;
// type ContainerSize = 'small' | 'medium' | 'large';
// const withContainer: ContainerSize = 'medium'
// // ТИПІЗАЦІЯ ФУНКЦІЙ
// // У функціі потрібно типізувати параметри та значення які будуть вертатися в return (данні)
// function message(num1: number, num2: number ): string{
//         const text = `число 1 це ${num1}, а 2 число це ${num2}`
//         return text  
// }
// console.log(message(1, 2))
// //коли функція нічого не повертає то вказуемо void
// function test(): void{
//         console.log('hello')
// }
// test()
// // Якщо функція вертае складний тип данних то можемо під нього зробити окремий тип 
// // function makeUser(age:number, name:string, login: string, password: number | string): {userName: string, userAge:number, userLogin: string,  userPassword:string | number  }{
// //         const user = {
// //                 userName: name,
// //                 userAge: age,
// //                 userLogin: login,
// //                 userPassword: password
// //         }
// //         return user
// // }
// // type NewUser = {userName: string, userAge:number, userLogin: string,  userPassword:string | number  }
// // function makeUser(age:number, name:string, login: string, password: number | string): NewUser {
// //         return {
// //                 userName: name,
// //                 userAge: age,
// //                 userLogin: login,
// //                 userPassword: password
// //         }
// // }
// type NewUser = {userName: string, userAge:number, userLogin: string,  userPassword:string | number  }
// const makeUser = (age:number, name:string, login: string, password: number | string): NewUser =>({
//                 userName: name,
//                 userAge: age,
//                 userLogin: login,
//                 userPassword: password
//         })
//         // Напиши функцію яка додае 2 числа і виводе результат
//         function addNumbers( a: number, b: number): number{
//                 const result = a + b
//                 return result
//         }
//   console.log(addNumbers(10,6))
// // Напиши скрипт пошуку логіна
// //  - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
// //  - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
// const logins: string[] = ['John Doe', 'danik0011', 'Bill Gates'];
// const loginSearch = (query: string): string => {
//   const loginFound = logins.includes(query);
//   const status = loginFound ? '' : ' not';
//   return `User ${query}${status} found`;
// };
// console.log(loginSearch('danik0011'));
// console.log(loginSearch('danik'));
// // ? Напишіть функцію, яка отримує масив об'єктів і повертає масив імен з тих об'єктів,
// // ? які мають вік більше 18 років.
// type Person = {
//   name: string;
//   age: number;
// };
// function getAdultsNames(people: Person[]): string[] {
//   return people.filter(person => person.age > 18).map(person => person.name);
// }
// const users: Person[] = [
//   { name: 'Egor', age: 17 },
//   { name: 'Dania', age: 22 },
//   { name: 'Misha', age: 19 },
//   { name: 'Polina', age: 16 },
// ];
// console.log(getAdultsNames(users))
// //Зробити статистику всіх тегів. Назву тега потрібно зробити ключем, значення якого буде кількістьповторень тегів в масиві. Якщо властивість з ключем tag є, 
// // збільшуємо його значення на 1 якщо властивості немає с таким ключем що в tag, створити і записати 1
// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
//   ];
//	1) задайте правильні ts типи для класичних js;
let age = 50;
let nama = 'Max';
let toggle = true;
let empty = null;
let notInitialize = undefined;
let callback = (a) => { return 100 + a; };
//	2) задайте тип для змінної, в яку можна зберегти будь-яке значення.
let anything = -20;
anything = 'Text';
anything = {};
//	3) Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.
let some;
some = 'Text';
let str;
if (typeof some === 'string') {
    str = some;
}
//	5) Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
const person = ['Max', 21];
//6) Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
var LoadStatus;
(function (LoadStatus) {
    LoadStatus["LOADING"] = "loading";
    LoadStatus["READY"] = "ready";
})(LoadStatus || (LoadStatus = {}));
const pageStatus = LoadStatus.LOADING;
//7) Зробіть змінну, яка може приймати або рядок, або число.
let unionVar;
unionVar = 'Hello';
unionVar = 42;
//8) Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
let literalVar;
literalVar = 'enable';
//9) Вкажіть типи для наступних функцій
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
