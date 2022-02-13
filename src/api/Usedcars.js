import UsedCars from "./usedcars.json";
export function getAll() {
    return Promise.resolve(UsedCars);
}
export function getById(id) {
    const usedcar =UsedCars.find(item=>item.id===id);
    return Promise.resolve(usedcar);
}
export default {getAll,getById}