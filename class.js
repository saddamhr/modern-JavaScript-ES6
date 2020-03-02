/*
class Human {
    constructor() {
        this.gender = 'Female';
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super();
        this.name = 'Saddam';
        this.gender = 'Male';
    }
    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();
*/

class Human {
    gender = 'Female';

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = 'Saddam';
    gender = 'Male';

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();