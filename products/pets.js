import pets from '../data/pets-data.js';
import renderPets from './render-pets.js';

const list = document.getElementById('pets');

for (let i = 0; i < pets.length; i++) {
    const pet = pets[i];
    const dom = renderPets(pet);
    list.appendChild(dom);
}

