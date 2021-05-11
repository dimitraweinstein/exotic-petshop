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

    const div = document.createElement('div');
    div.className = 'pet-info';
    div.textContent = pet.habitat;
    li.appendChild(div);

    const div2 = document.createElement('div');
    div2.className = 'pet-info';
    div2.textContent = pet.threats;
    li.appendChild(div2);

    const div3 = document.createElement('div');
    div3.className = 'pet-info';
    div3.textContent = pet.note;
    li.appendChild(div3);

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

