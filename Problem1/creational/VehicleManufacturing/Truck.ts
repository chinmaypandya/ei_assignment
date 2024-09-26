// Truck.ts
// Concrete product class representing a Truck in the vehicle manufacturing system.

import { IVehicle } from "./Vehicle";

export class Truck implements IVehicle {
    // Method to create a truck
    public create(): void {
        console.log('Truck Created');
    }
}
