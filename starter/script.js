// Function constructor
/*
// john Object
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

// Constructor - identified by capital first letter
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function () {
        console.log(2016-this.yearOfBirth);
    }
}

Person.prototype.calculateAge = function () {
    console.log(2016-this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

// Instantiation - 
var john = new Person('John', 1990, 'teacher');

var jane = new Person('Jane', 1969, 'designer');

var mark = new Person('Mark', 1946, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


// Object.create

var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, 
{
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer'}
})



// Primitives vs. Objects

// Primitives = carry their own copy of the data
var a = 23;
var b = a;
a = 46;
console.log(a); //46 
console.log(b); //23 - b points to the original obj var a, not its mutation

var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);//30
console.log(obj2.age);//30

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b){
    a = 30;
    b.city = 'San Francisco'
}

change(age, obj);

console.log(age); //27 - age is a primitive, so it does not change. a = 30 in the change function is only 30 within the function. Outisde the function, age = 27
console.log(obj.city); //San Francisco - we are not passing the object in the function, but rather the reference that points to the original object. This is why it is reflected outside the function


// Passing Functions as Arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        //Remember push adds data to the end of an array
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(286.9 - (0.67 * el));
    } else {
        return -1;
    }
} 

var ages = arrayCalc(years, calculateAge);
console.log(ages);
var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);
var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
*/

// Functions returning functions 

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        } 
    } else if (job === 'teacher') {
        return function(name) {    
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
} 

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Jake');
designerQuestion('Jules');

interviewQuestion('teacher')('Mark');