export default { renderPets };

export function renderPets(pets) {
    const li = document.createElement('li');
    li.className = pets.category;
    li.title = pets.note;

    const h3 = document.createElement('h3');
    h3.textContent = pets.species;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets' + pets.image;
    img.alt = pets.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const price = '$' + pets.price.toFixed(2);
    p.textContent = price;
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = pets.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

