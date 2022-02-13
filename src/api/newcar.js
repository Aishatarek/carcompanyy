import NewCars from "./NewCars.json";
export function getAll() {
    return Promise.resolve(NewCars);
}
export function getById(id) {
    const newcar =NewCars.find(item=>item.id===id);
    return Promise.resolve(newcar);
}
export default {getAll,getById}