//Common JS(CJS)모듈
//console.log("안녕 Node.js");
const hello = require("./greeting");
let username = "solde";
console.log(hello(username));
console.log("------------------------------");
//math 모듈
const math = require("./math");
console.log(math.add(5, 3));
console.log(math.subtract(5, 3));
console.log(math.multiply(5, 3));
console.log(math.divide(5, 3));
console.log("------------------------------");
//fileManager모듈
let fileManager = require("./fileManager");
const fileName = "sample.txt";
fileManager.writeFile(fileName, '허원 오늘 점심 뭐 먹지?');
console.log(fileManager.readFile(fileName));
console.log("--------------------------------");
//weatherModule모듈
/*
const getWeather = require("./weatherModule");
getWeather("Seoul");

console.log("------------------------------");
*/
//noteManager 모듈
const {addNote, getNotes, deleteNote } = require("./noteManager");
addNote("note1", "자고싶어");
addNote("note2","목 아프다");
console.log("추가완료------------------------");
getNotes();
deleteNote(2);
console.log("삭제완료-------------------------");
getNotes();
//deleteNote(1);
