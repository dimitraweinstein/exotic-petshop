// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderPets } from '../products/render-pets.js';

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

    const expected = '<li class="birds-owls" title="Besides excellent vision, Barn Owls are extraordinarily sensitive to sound; their ability to locate prey by sound alone is the best of any animal ever tested."><h3>Barn Owl</h3><img src="../assets/barn-owl-.jpeg" alt="undefined image"><p class="price">$600.00<button value="undefined">Add</button></p></li>';

    const dom = renderPets(barnOwl);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});

