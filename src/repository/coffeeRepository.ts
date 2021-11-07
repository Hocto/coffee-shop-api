import coffeesList from "../data/coffees.json";
import { CoffeeList } from "../model/coffee"

export const getAllCoffees = (): CoffeeList => {
    //database queries if it is needed
    return coffeesList;
}