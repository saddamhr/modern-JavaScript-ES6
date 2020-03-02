const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

// Objects
const person = {
    name: 'Saddam'
};
const newPerson = {
    ...person,
    age: 23
};
console.log(newPerson);

// Rest
const filter = (...args) => {
    return args.filter(el => el === 1);
}
console.log(filter(1, 2, 3));