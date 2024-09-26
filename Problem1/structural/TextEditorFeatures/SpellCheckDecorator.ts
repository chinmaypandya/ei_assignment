// SpellCheckDecorator.ts
// Concrete decorator for adding spell check functionality.

import { TextDecorator } from "./TextDecorator";

export class SpellCheckDecorator extends TextDecorator {
    public display(): void {
        super.display();
        console.log("Spell Check Feature: Checking for spelling mistakes.");
    }
}
