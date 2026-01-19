class user {
    constructor(_name, _surname_, _age, _city) {
        this.name = _name;
        this.surname = _surname_;
        this.age = _age;
        this.city = _city;
    }

    compareAge(otherUser) {
        if (this.age > otherUser.age) {
            return `${this.name} is older than ${otherUser.name}`;
        } else if (this.age < otherUser.age) {
            return `${this.name} is younger than ${otherUser.name}`;
        } else {
            return `${this.name} and ${otherUser.name} are of the same age`;
        }
    }
}

const user1 = new user("Federico", "Lepore", 28, "Milano");
const user2 = new user("Mario", "Rossi", 25, "Roma");

user1.compareAge(user2);