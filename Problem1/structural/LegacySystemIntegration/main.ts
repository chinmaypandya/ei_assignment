// main.ts
// Entry point for the legacy system integration demonstration.
// Allows the user to choose between old and new payment systems until they are satisfied.

import { OldPaymentSystem } from "./OldPaymentSystem";
import { PaymentAdapter } from "./PaymentAdapter";
import * as readline from "readline";

// Set up readline for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const oldPaymentSystem = new OldPaymentSystem();
const paymentAdapter = new PaymentAdapter();

const inputPaymentSystem = () => {
    rl.question("Choose payment system (old, new, or exit to quit): ", (system) => {
        if (system.toLowerCase() === 'exit') {
            rl.close(); // Close the readline interface
            return;
        }

        rl.question("Enter payment amount: ", (amount) => {
            const paymentAmount = parseFloat(amount);
            if (isNaN(paymentAmount)) {
                console.log("Please enter a valid number.");
            } else {
                switch (system.toLowerCase()) {
                    case 'old':
                        oldPaymentSystem.makePayment(paymentAmount);
                        break;
                    case 'new':
                        paymentAdapter.makePayment(paymentAmount);
                        break;
                    default:
                        console.log("Invalid payment system. Please choose 'old' or 'new'.");
                }
            }

            // Prompt for the next payment system
            inputPaymentSystem();
        });
    });
};

// Start the input loop
inputPaymentSystem();
