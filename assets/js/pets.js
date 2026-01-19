//raccogliamo i campi del form e creiamo i pets
class pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species; //specie
        this.breed = _breed; //razza
    }

    compareOwner(otherPet) {
        if (this.ownerName === otherPet.ownerName) {
            return true;
        } else {
            return false;
        }

        //return this.ownerName === otherPet.ownerName; stessa cosa dell'if sopra
    }
}




const petForm = document.getElementById("pet-form");
const savedPets = []; // array globale dei pets

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }
}

petForm.addEventListener("submit", function (event) {
    event.preventDefault();

    //riferimenti al campo input
    const petNameInput = document.getElementById("pet-name");
    const ownerNameInput = document.getElementById("owner-name");
    const speciesInput = document.getElementById("species");
    const breedInput = document.getElementById("breed");

    const newPet = new Pet(
        petNameInput.value,
        ownerNameInput.value,
        speciesInput.value,
        breedInput.value
    );

    savedPets.push(newPet);
    console.log("Pets:", savedPets);

    petForm.reset(); //pulisce i campi del form dopo l'invio

    // 🔥 aggiorna la UI anche quando aggiungi un pet
    if (typeof showOwners === "function") {
        showOwners();
    }
});