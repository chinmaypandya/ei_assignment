// Car.ts
// Concrete product class representing a Car in the vehicle manufacturing system.

import { IVehicle } from "./Vehicle";

export class Car implements IVehicle {
    // Method to create a car
    public create(): void {
        console.log("Car created.");
    }
}
