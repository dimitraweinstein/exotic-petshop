// import cartStuff from './data/cart-data.js';
import findById from './utils.js';
// import cartItems from './data/cart-data.js';
// import pets from './data/pets-data.js';

export function getCart() {
    const CART = 'CART';
    const cartString = localStorage.getItem(CART);
    const cartParsed = JSON.parse(cartString);

    if (cartParsed) {
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