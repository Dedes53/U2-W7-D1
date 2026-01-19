class owner {
    constructor(_name, _surname_, _age, _city) {
        this.name = _name;
        this.surname = _surname_;
        this.age = _age;
        this.city = _city;
    }

    compareAge(otherOwner) {
        if (this.age > otherOwner.age) {
            return `${this.name} is older than ${otherOwner.name}`;
        } else if (this.age < otherOwner.age) {
            return `${this.name} is younger than ${otherOwner.name}`;
        } else {
            return `${this.name} and ${otherOwner.name} are of the same age`;
        }
    }
}

const owner1 = new owner("Federico", "Lepore", 28, "Milano");
const owner2 = new owner("Mario", "Rossi", 25, "Roma");

console.log(owner1.compareAge(owner2)); // "Federico is older than Mario"


const form = document.getElementById('owner-form');
const savedOwners = []; //array vuoto per salvare i proprietari

form.addEventListener('submit', function (event) {
    event.preventDefault();

    //riferimenti al campo input
    const ownerNameInput = document.getElementById('owner-name');
    const ownerSurnameInput = document.getElementById('owner-surname');
    const ownerAgeInput = document.getElementById('owner-age');
    const ownerCityInput = document.getElementById('owner-city');

    const newOwner = new owner(
        ownerNameInput.value, //valore di testo del campo imput
        ownerSurnameInput.value,
        parseInt(ownerAgeInput.value),
        ownerCityInput.value
    );

    savedOwners.push(newOwner); //aggiunge l'oggetto creato all'array dei proprietari
    console.log(savedOwners);

    form.reset(); //pulisce i campi del form dopo l'invio
})