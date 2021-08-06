function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.showFullName = function() {
    console.log(this.firstName + ' ' + this.lastName);
}