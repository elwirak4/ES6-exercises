// Lecture: Arrow functions

/*
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
    return 2016 - el;
});

console.log(ages5);

// ES6
let ages6 = years.map(el => 2016 - el);

console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now -el;
    return `Age element ${index + 1}: ${age}.`
});

console.log(ages6);


/////////////////////////////////
// Lecture: Arrow functions 2

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}

//box5.clickMe();

// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            let str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}

box6.clickMe();


const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            let str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}

box66.clickMe();


function Person(name) {
    this.name = name;
}

Person.prototype.myFriends5 = function(friends) {
    
    var arr = friends.map(function(el)
        {
             return this.name + ' is friends with ' + el;      
        }.bind(this));
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);
*/
//ES6

function Person(name) {
    this.name = name;
}

Person.prototype.myFriends6 = function(friends) {

    let arr = friends.map(el =>
                          
        `${this.name} is friends with ${el}`);
    console.log(arr);
}

let friends = ['Bob', 'Jane', 'Mark'];
new Person('Mary').myFriends6(friends);

//////////////////////////////////////////////
// Lecture: Destructuring

// ES5
/*
var john = ['John', 26];
//var name = john[0];
//var age = john[1];
*/
// ES6

const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);


function calcAgeRetirement(year) {
    const age = new Date().getFullYear() -year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);



















