// Observer.ts
// This interface defines the structure for observers that receive updates from the WeatherStation.

interface Observer {
    update(temperature: number): void;
}

export {Observer}
