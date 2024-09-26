// main.ts
// Entry point for the smart home automation demonstration.
// Allows the user to control the light through commands until they are satisfied.

import { Light } from "./Light";
import { TurnOnCommand } from "./TurnOnCommand";
import { TurnOffCommand } from "./TurnOffCommand";
import { RemoteControl } from "./RemoteControl";
import * as readline from "readline";

// Set up readline for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Create light and remote control instances
const light = new Light();
const remote = new RemoteControl();

const inputCommand = () => {
    rl.question("Enter command (on, off, or exit to quit): ", (command) => {
        if (command.toLowerCase() === 'exit') {
            rl.close(); // Close the readline interface
            return;
        }

        switch (command.toLowerCase()) {
            case 'on':
                remote.setCommand(new TurnOnCommand(light));
                break;
            case 'off':
                remote.setCommand(new TurnOffCommand(light));
                break;
            default:
                console.log("Invalid command. Please enter 'on' or 'off'.");
                return;
        }

        // Execute the command
        remote.pressButton();

        // Prompt for next command
        inputCommand();
    });
};

// Start the input loop
inputCommand();
