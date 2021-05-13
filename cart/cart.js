// import cartItems from '../data/cart-data.js';
import { renderCartItem, getCartTotal } from '../cart/render-cart-items.js';
import { getCart } from '../local-storage-utils.js';

const cartItems = getCart();
const anchor = document.querySelector('tbody');
const total = document.getElementById('total');

for (let item of cartItems) {
    const tableRow = renderCartItem(item);
// console.log(item,'this is item');
    anchor.append(tableRow);
}

// for (let i = 0; i < cartItems.length; i++) {
//     const tableRow = cartItems[i];
//     const dom = renderCartItem(tableRow);
// }

const totalPrice = getCartTotal(cartItems);

total.textContent = totalPrice.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
});








// import pets from '../data/pets-data.js';
// import renderPets from './render-pets.js';

// const table = querySelector('table');

// for (let i = 0; i < pets.length; i++) {
//     const pet = pets[i];
//     const dom = renderPets(pet);
//     list.appendChild(dom);
// }
