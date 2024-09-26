import { IVehicle } from './Vehicle';
import { Car } from './Car';
import { Bike } from './Bike';
import { Truck } from './Truck';

export class VehicleFactory {
    public static createVehicle(type: string): IVehicle | null {
        switch (type.toLowerCase()) {
            case "car":
                return new Car();
            case "bike":
                return new Bike();
            case "truck":
                return new Truck();
            default:
                console.log("Invalid vehicle type provided.");
                return null;
        }
    }
}
