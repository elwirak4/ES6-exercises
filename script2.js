//////////////////////////////////
// Lecture: Arrays

const boxes = document.querySelectorAll('.box');

// ES5

//var boxesArr5 = Array.prototype.slice.call(boxes);
/*
boxesArr5.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerblue';
});
*/

//ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//ES5
/*
for(var i = 0; i < boxesArr5.length; i++){
    if(boxesArr5[i].className === 'box blue') {
        //continue;
        break;
    }
    boxesArr5[i].textContent = 'I changed to blue!';
}
*/

//ES6
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to orange!';
}

//ES5
/*
var ages = [12, 17,8, 21, 14, 11];

var full = ages.map(function(cur) {
    //return cur +5;
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6

console.log(ages.findIndex(cur => cur >= 18));

console.log(ages.find(cur => cur >= 18));
*/
//////////////////////////////////////
//Lecture: The Spread Operator

function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);

console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);

console.log(sum2);


//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);


const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);


const h = document.querySelector('h1');
const boxes1 = document.querySelectorAll('.box');
const all = [h, ...boxes1];

Array.from(all).forEach(cur => cur.style.color = 'yellow');


//////////////////////////////////
// Lecture: Rest parameters

/*
//ES5
function isFullAge5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    })
}

//isFullAge5(1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2015, 1987);

//ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log((2016 - cur) >= 18));
}
isFullAge6(1990, 1999, 1965);
isFullAge6(1990, 1999, 1965, 2015, 1987);
*/

//ES5
function isFullAge5(limit) {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    console.log(argsArr);
    
    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= limit);
    })
}

//isFullAge5(21, 1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2015, 1987);

//ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2016 - cur) >= limit));
}
isFullAge6(19, 2009, 1990, 1999, 1965);
//isFullAge6(1990, 1999, 1965, 2015, 1987);






















