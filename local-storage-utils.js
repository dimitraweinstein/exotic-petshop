// import cartStuff from './data/cart-data.js';
import findById from './utils.js';
// import cartItems from './data/cart-data.js';
// import pets from './data/pets-data.js';
export const CART = 'CART';

export function getCart() {
    const cartString = localStorage.getItem(CART);
    console.log(typeof cartString);

    if (cartString) {
        console.log('this is a strign');
        const cartParsed = JSON.parse(cartString);
        return cartParsed;
    }
    else {
        return [];
    } 
}

export function setCart(cartStuff) {
    const cartString = JSON.stringify(cartStuff);
    localStorage.setItem('CART', cartString);
}

export function addItemToCart(itemId) {
    const cart = getCart();
    const cartItem = findById(cart, itemId);

    if (cartItem) {
        cartItem.quantity++;
    }
    else {
        const newItem = {
            id: itemId,
            quantity: 1,
        };
        cart.push(newItem);
    }
    setCart(cart);
}