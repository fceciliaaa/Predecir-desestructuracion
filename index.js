
//Problema 1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) //Tesla
console.log(otherRandomCar) //Mercedes


//Problema 2

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee; //otherName = 'Elon'
//Predict the output
console.log(name); //'name' no está definida
console.log(otherName);


//Problema 3

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  //no existe una propiedad 'password' en el objeto 'person'
//Predict the output
console.log(password);
console.log(hashedPassword); //undefined porque 'password' no se encuentra en el objeto 'person'


//Problema 4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // numbers[1] = 2
const [,,,second] = numbers; // numbers[3] =5
const [,,,,,,,,third] = numbers; // numbers[8] = 2
//Predict the output
console.log(first == second); //false
console.log(first == third); //true

//Problema 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; // key = 'value'
const { secondKey } = lastTest; // secondKey = [1, 5, 1, 8, 3, 3]
const [ ,willThisWork] = secondKey; //secondKey[1] = 5
//Predict the output
console.log(key); //value
console.log(secondKey); //[1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); //1
console.log(willThisWork); //5






