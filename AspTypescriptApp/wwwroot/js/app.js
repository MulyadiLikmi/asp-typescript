function GreetButton() {
    document.getElementById("ts-greeting").innerHTML = greeter(user);
}
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("John", "Smith");
//# sourceMappingURL=app.js.map