// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderCartItem } from '../cart/render-cart-items.js';
import renderPets from '../products/render-pets.js';
import findById from '../utils.js';

const test = QUnit.test;
QUnit.module('Render Pets');

test('renders an owl', assert => {
    //Arrange
    // Set up your arguments and expectations
    const barnOwl = {
        id: 'barnOwl',
        species: 'Barn Owl',
        image: '/barn-owl-.jpeg',
        note: 'Besides excellent vision, Barn Owls are extraordinarily sensitive to sound; their ability to locate prey by sound alone is the best of any animal ever tested.',
        threats: 'Habitat loss, vehicle collisions',
        habitat: 'Grasslands, deserts, and agricultural fields',
        category: 'birds-owls',
        price: 600.00,
        cost: 250.00
    };

    const expected = '<li class="birds-owls" title="Besides excellent vision, Barn Owls are extraordinarily sensitive to sound; their ability to locate prey by sound alone is the best of any animal ever tested."><h3>Barn Owl</h3><img src="../assets/barn-owl-.jpeg" alt="undefined image"><div class="pet-info">Grasslands, deserts, and agricultural fields</div><div class="pet-info">Habitat loss, vehicle collisions</div><div class="pet-info">Besides excellent vision, Barn Owls are extraordinarily sensitive to sound; their ability to locate prey by sound alone is the best of any animal ever tested.</div><p class="price">$600.00<button value="undefined">Add</button></p></li>';

    const dom = renderPets(barnOwl);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});


test('renders a cart item', assert => {
    //Arrange
    // Set up your arguments and expectations
    const cartItems = {
        id: 1,
        quantity: 9

    };

    const expected = '<tr><td>Barn Owl</td><td>9</td><td>$600.00</td><td>$5,400.00</td></tr>';

    const dom = renderCartItem(cartItems);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});

const owl = {
    id: 1,
    quantity: 2
};

const rock = {
    id: 4,
    quantity: 6
};

const myArray = [
    owl,
    rock
];


test('finds item by matching id', assert => {
    //Arrange
    // Set up your arguments and expectations
    const idOne = 1;
    const idTwo = 4;
    const expected1 = owl;
    const expected2 = rock;

    const actual1 = findById(myArray, idOne);
    const actual2 = findById(myArray, idTwo);

    assert.equal(actual1, expected1);
    assert.equal(actual2, expected2);

});


