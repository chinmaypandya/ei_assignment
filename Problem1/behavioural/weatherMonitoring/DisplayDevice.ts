// DisplayDevice.ts
// This is a concrete observer that displays the temperature.

import { Observer } from "./Observer";

export class DisplayDevice implements Observer {
    private id: number;

    constructor(id: number) {
        this.id = id; // Assign a unique ID to each display
    }

    // Method to update the display with the new temperature
    public update(temperature: number): void {
        console.log(`Display ${this.id} updated: Current temperature is ${temperature}°C`);
    }
}
