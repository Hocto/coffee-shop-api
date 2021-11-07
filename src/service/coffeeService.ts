import { CoffeeResponseList } from "../model";
import { getAllCoffees as getAllCoffeesRepository} from "../repository/coffeeRepository";
import moment from 'moment'

export const getAllCoffees = (): CoffeeResponseList => {
    // some business logic if needed
    const result = getAllCoffeesRepository().map((coffee) => {
        return {   
            ...coffee,
            createdTime: moment(new Date()).format('DD-MMM-YYYY HH:mm:ss'),
            updatedTime: moment(new Date()).format('DD-MMM-YYYY HH:mm:ss')
        }
    });
    return result;
}