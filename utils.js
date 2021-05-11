import cartItems from './data/cart-data.js';
// import pets from './data/pets-data.js';

export function findById(pets, id){

    for (let pet of pets) {
        if (id === cartItems.id) {
            return cartItems;
        }

        return null;
    }
}