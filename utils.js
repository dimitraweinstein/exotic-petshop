export default function findById(pets, id){

    for (let pet of pets) {
        if (id === pet.id) {
            return pet;
        }

    }
    return null;
}