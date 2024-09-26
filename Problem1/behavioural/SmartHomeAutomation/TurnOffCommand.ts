// TurnOffCommand.ts
// Command implementation to turn off the light.

import { Command } from "./Command";
import { Light } from "./Light";

export class TurnOffCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    // Execute the command to turn off the light
    public execute(): void {
        this.light.turnOff();
    }
}
