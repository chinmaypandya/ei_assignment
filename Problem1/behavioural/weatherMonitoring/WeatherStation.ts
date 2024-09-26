// WeatherStation.ts
// This is the WeatherStation (Subject) that maintains a list of observers (DisplayDevices) 
// and notifies them of temperature changes.

import { Observer } from "./Observer";

export class WeatherStation {
    private observers: Observer[] = [];
    private temperature: number = 0;

    // Adds a display device (observer) to the list
    public registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    // Removes a display device (observer) from the list
    public unregisterObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Sets the temperature and notifies all observers of the change
    public setTemperature(temp: number): void {
        this.temperature = temp;
        this.notifyObservers();
    }

    // Notifies all registered observers about the updated temperature
    private notifyObservers(): void {
        this.observers.forEach(observer => observer.update(this.temperature));
    }
}
