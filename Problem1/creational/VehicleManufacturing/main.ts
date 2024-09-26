import { VehicleFactory } from './VehicleFactory';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askForVehicleType = () => {
    rl.question('Enter the type of vehicle (car, bike, truck): ', (answer) => {
        const vehicle = VehicleFactory.createVehicle(answer);
        if (vehicle) {
            console.log(vehicle.create());
        }
        askForAnotherVehicle();  // Ask user if they want to create another vehicle
    });
};

const askForAnotherVehicle = () => {
    rl.question('Do you want to create another vehicle? (yes/no): ', (answer) => {
        if (answer.toLowerCase() === 'yes') {
            askForVehicleType();
        } else {
            console.log('Exiting...');
            rl.close();
        }
    });
};

// Start the program
askForVehicleType();
