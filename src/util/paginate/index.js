export const paginate = (array, size, number) => array.slice((number - 1) * size, number * size);
