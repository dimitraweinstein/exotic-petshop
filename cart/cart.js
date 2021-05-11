import { cartItems } from '../data/cart-data.js';
import { renderCartItem, getCartTotal } from './cart/render-cart-items.js';

const anchor = document.querySelector('tbody');
const total = document.getElementById('total');

for (let item of cartItems) {
    const tableRow = renderCartItem(item);

    anchor.append(tableRow);
}

const totalPrice = getCartTotal();

total.textContent = totalPrice.toLocaleString('en=US,' {
    style: 'currency',
    currency: 'USD'
})








// import pets from '../data/pets-data.js';
// import renderPets from './render-pets.js';

// const table = querySelector('table');

// for (let i = 0; i < pets.length; i++) {
//     const pet = pets[i];
//     const dom = renderPets(pet);
//     list.appendChild(dom);
// }
