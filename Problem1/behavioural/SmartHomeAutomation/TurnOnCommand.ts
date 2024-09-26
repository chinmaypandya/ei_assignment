// TurnOnCommand.ts
// Command implementation to turn on the light.

import { Command } from "./Command";
import { Light } from "./Light";

export class TurnOnCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    // Execute the command to turn on the light
    public execute(): void {
        this.light.turnOn();
    }
}
