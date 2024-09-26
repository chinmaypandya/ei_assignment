// Bike.ts
// Concrete product class representing a Bike in the vehicle manufacturing system.

import { IVehicle } from "./Vehicle";

export class Bike implements IVehicle {
    // Method to create a bike
    public create(): void {
        console.log("Bike created.");
    }
}
