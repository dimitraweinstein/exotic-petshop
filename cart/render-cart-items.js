import pets from '../data/pets-data.js';
import cartStuff from '../data/cart-data.js';
import findById from '../utils.js';


export function renderCartItem(cartItems) {
    // console.log(cartItems);
    const animals = findById(pets, cartItems.id);
    // console.log(pets, 'pets');
    // console.log(cartItems, 'cart items');
    // console.log(animals, 'animals');
    // console.log(cartItems.id, 'this is the cart');
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const totalTd = document.createElement('td');
console.log(animals.price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'}));

    nameTd.textContent = animals.species;
    quantityTd.textContent = cartItems.quantity;
    priceTd.textContent = animals.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    
    const total = animals.price * cartItems.quantity;

    totalTd.textContent = total.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
});

    tr.append(nameTd, quantityTd, priceTd, totalTd);

    return tr;
}

export function getCartTotal() {
    let accumulator = 0;

    for (let item of cartStuff) {
        const pet = findById(pets, item.id);
        const total = item.quantity * pet.price;

        accumulator = accumulator + total;
    }
    return accumulator;
}