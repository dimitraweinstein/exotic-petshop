import { cartStuff } from './data/cart-data.js';
import findById from './utils.js';

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

export function setCart() {
    const cartString = JSON.stringify(cartStuff);
    localStorage.setItem('CART', cartString);
}

export function addItemToCart() {
    const cart = getCart();
    const cartItem = findById(cart, cartStuff);

    if (cartItem) {
        cartItem.quantity++;
    }
    else {
        const newItem = {
            id: cartStuff,
            quantity: 1,
        };
        cart.push(newItem);
    }
    setCart(cart);
}