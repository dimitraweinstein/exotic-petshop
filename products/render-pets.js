// export default { renderPets };

export default function renderPets(pet) {
    const li = document.createElement('li');
    li.className = pet.category;
    li.title = pet.note;

    const h3 = document.createElement('h3');
    h3.textContent = pet.species;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets' + pet.image;
    img.alt = pet.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const price = '$' + pet.price.toFixed(2);
    p.textContent = price;
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = pet.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

