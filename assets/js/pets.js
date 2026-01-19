//raccogliamo i campi del form e creiamo i pets

const form = document.getElementById('pet-form');
const savedPet = []; //array vuoto per salvare gli animali

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


form.addEventListener('submit', function (event) {
    event.preventDefault();

    //riferimenti al campo imput
    const petNameInput = document.getElementById('pet-name');
    const ownerNameInput = document.getElementById('owner-name');
    const speciesInput = document.getElementById('species');
    const breedInput = document.getElementById('breed');

    const newPet = new pet(
        petNameInput.value, //valore di testo del campo imput
        ownerNameInput.value,
        speciesInput.value,
        breedInput.value
    );

    savedPet.push(newPet); //aggiunge l'oggetto creato all'array degli animali
    console.log(savedPet);

    form.reset(); //pulisce i campi del form dopo l'invio
});
