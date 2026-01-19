class Owner {
    constructor(_name, _surname, _age, _city) {
        this.name = _name;
        this.surname = _surname;
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



const ownerForm = document.getElementById("owner-form");
const ownersList = document.getElementById("owners-list");


ownerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const ownerNameInput = document.getElementById("owner-name");
    const ownerSurnameInput = document.getElementById("owner-surname");
    const ownerAgeInput = document.getElementById("owner-age");
    const ownerCityInput = document.getElementById("owner-city");

    const newOwner = new Owner(
        ownerNameInput.value,
        ownerSurnameInput.value,
        parseInt(ownerAgeInput.value),
        ownerCityInput.value
    );

    savedOwners.push(newOwner);
    console.log("Owners:", savedOwners);

    ownerForm.reset();
    showOwners();
});

function showOwners() {
    ownersList.innerHTML = "";

    savedOwners.forEach(function (owner) {

        // LI OWNER
        const ownerLi = document.createElement("li");
        ownerLi.textContent = `${owner.name} ${owner.surname}`;

        // UL PETS DELL'OWNER
        const petsUl = document.createElement("ul");

        const ownerPets = savedPets.filter(function (pet) {
            return pet.ownerName === owner.name;
        });

        if (ownerPets.length > 0) {
            ownerPets.forEach(function (pet) {
                const petLi = document.createElement("li");
                petLi.textContent = `${pet.petName} (${pet.species}, ${pet.breed})`;
                petsUl.appendChild(petLi);
            });
        } else {
            const emptyLi = document.createElement("li");
            emptyLi.textContent = "Nessun pet associato";
            petsUl.appendChild(emptyLi);
        }

        ownerLi.appendChild(petsUl);
        ownersList.appendChild(ownerLi);
    });
}
