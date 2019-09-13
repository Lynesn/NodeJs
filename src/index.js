import {today, date} from '../src/APP/TodayDate';
import {Person} from '../src/APP/Obj';

const myDiv = document.querySelector('#root') ;
const myLine = document.createElement('span');
myDiv.appendChild(myLine);

myLine.innerHTML = `${today} <br><br> Name: ${Person.Name}<br><br> Year of Birth: ${Person.Year} <br><br>Age: ${Person.Age()}`;

console.log(today);
console.log(date);

console.log(Person.Name);
console.log(Person.Year);
console.log(Person.Age());