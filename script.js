//Lecture: let and const

/*
//ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);


// ES5
function driversLicense5(passedTest) {
    
    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
        
    }
    console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
}


driversLicense5(true);

// ES6
function driversLicense6(passedTest) {
    console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;
    
    if (passedTest) {
        firstName = 'John';
    }
    
    console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
}

driversLicense6(true);

//ES5
var j = 23;

for(var j = 0; j < 5; j++) {
    console.log(j);
}

console.log(j);


//ES6
let i = 23;

for(let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);

*/

/////////////////////////////
// Lecture: Blocks and IIFEs

//ES5
(function() {
    var c =3;
})();

//console.log(c);


//ES6
{
    const a = 1;
    let b = 2;
    var d = 3;
}

//console.log(a + b);
console.log(d);



//Strings

let firstName = 'john';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
    return 2016 - year;
}

// ES5

console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');


//ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(firstName.repeat(5));
console.log(`${firstName} `.repeat(5));