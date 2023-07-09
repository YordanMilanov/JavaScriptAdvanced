function createPerson(firstName, lastName) {
    const person = {
        firstName,
        lastName,
        fullName: firstName + ' ' + lastName
    };

    Object.defineProperty(person, 'fullName', {
        get() {
            return this.firstName + ' ' + this.lastName;
        },

        set(value) {
            const [first, last] = value.split(' ');
            if(first != undefined && last != undefined) {
                this.firstName = first;
                this.lastName = last;
            }
        }
    })

    return person;
}

let person = createPerson('Peter', 'Ivanov');
person.firstName = 'George';
console.log(person.fullName);
person.lastName = 'petrov';
console.log(person.fullName);
person.fullName = 'Nikola Tesla';
console.log(person.fullName);