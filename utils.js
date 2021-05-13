export default function findById(array, id){

    for (let partOfArray of array) {
        if (id === partOfArray.id) {
            return partOfArray;
        }

    }
    return null;
}