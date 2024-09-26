// main.ts
// Entry point for the weather monitoring system demonstration.
// Allows the user to update the weather and observe the displays until they are satisfied.

import { WeatherStation } from "./WeatherStation";
import { DisplayDevice } from "./DisplayDevice";
import * as readline from "readline";

// Set up readline for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Instantiate WeatherStation
const weatherStation = new WeatherStation();
const display1 = new DisplayDevice(1);
const display2 = new DisplayDevice(2);

// Register displays as observers
weatherStation.registerObserver(display1);
weatherStation.registerObserver(display2);

const inputTemperature = () => {
    rl.question("Enter the new temperature (or type 'exit' to quit): ", (input) => {
        if (input.toLowerCase() === 'exit') {
            rl.close(); // Close the readline interface
            return;
        }

        const temperature = parseFloat(input);
        if (!isNaN(temperature)) {
            // Update the weather station with the new temperature
            weatherStation.setTemperature(temperature);
        } else {
            console.log("Please enter a valid number.");
        }
        
        // Prompt for next input
        inputTemperature();
    });
};

// Start the input loop
inputTemperature();
