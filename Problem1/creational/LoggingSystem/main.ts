// main.ts
// Entry point for the logging system demonstration.
// This shows the Singleton pattern in action by logging messages until the user is satisfied.

import { Logger } from "./Logger";
import * as readline from "readline";

// Set up readline for input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Get the Logger instance
const logger = Logger.getInstance();

const inputLogMessage = () => {
    rl.question("Enter log message (or type 'exit' to quit): ", (message) => {
        if (message.toLowerCase() === 'exit') {
            rl.close(); // Close the readline interface
            return;
        }

        // Log the message
        logger.log(message);

        // Prompt for next message
        inputLogMessage();
    });
};

// Start the input loop
inputLogMessage();
