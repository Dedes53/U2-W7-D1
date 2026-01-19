const petForm = document.getElementById("pet-form");

class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }
}

petForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const petNameInput = document.getElementById("pet-name");
    const ownerNameInput = document.getElementById("pet-owner-name");
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

    petForm.reset();

    // 🔁 aggiorna la UI se esiste già la funzione
    if (typeof showOwners === "function") {
        showOwners();
    }
});
