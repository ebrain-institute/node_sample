// const person = {
//     name: 'Jhon',
//     age:30
// }

class Person{

    constructor(_name, _age){

        this.name = _name;
        this.age = _age;
    }

    greeting(){
        console.log(`My name is ${this.name} and i am ${this.age} years old`);
    }
}



module.exports = Person;