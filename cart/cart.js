// import cartItems from '../data/cart-data.js';
import { renderCartItem, getCartTotal } from '../cart/render-cart-items.js';
import { getCart, CART } from '../local-storage-utils.js';

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

const tableFoot = document.querySelector('tfoot');
const placeOrderButton = document.createElement('button');


placeOrderButton.textContent = 'Place Order';

placeOrderButton.addEventListener('click', () => {
    console.log('this button works');
    alert(`You are about to finalize your purchase. Your total is ${total.textContent} Thank you for shopping at Dubs Exotic Pets!`);
    localStorage.removeItem(CART);
    window.location.replace('../index.html');
});

tableFoot.appendChild(placeOrderButton);







// import pets from '../data/pets-data.js';
// import renderPets from './render-pets.js';

// const table = querySelector('table');

// for (let i = 0; i < pets.length; i++) {
//     const pet = pets[i];
//     const dom = renderPets(pet);
//     list.appendChild(dom);
// }
