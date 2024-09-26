// RemoteControl.ts
// This class acts as a central controller for executing commands.

import { Command } from "./Command";

export class RemoteControl {
    private command: Command;

    // Method to set the command to be executed
    public setCommand(command: Command): void {
        this.command = command;
    }

    // Execute the current command
    public pressButton(): void {
        if (this.command) {
            this.command.execute();
        } else {
            console.log("No command set.");
        }
    }
}
