import { pets } from '../data/pets-data.js';
import { cartItems } from '../data/cart-data.js';
import { findById } from './utils.js';
// import { pets } from './data/pets-data.js';

export default function renderCartItem(cartItems) {
    console.table(pets, cartItems);
    const pets = findById(pets, cartItems.id);

    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const totalTd = document.createElement('td');

    nameTd.textContent = pets.species;
    quantityTd.textContent = cartItems.quantity;
    priceTd.textContent = pets.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    
    const total = pets.price * cartItems.quantity;

    totalTd.textContent = total.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
});

    tr.append(nameTd, quantityTd, priceTd. totalTd);

    return tr;
}