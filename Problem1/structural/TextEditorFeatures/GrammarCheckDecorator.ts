// GrammarCheckDecorator.ts
// Concrete decorator for adding grammar check functionality.

import { TextDecorator } from "./TextDecorator";

export class GrammarCheckDecorator extends TextDecorator {
    public display(): void {
        super.display();
        console.log("Grammar Check Feature: Checking for grammatical errors.");
    }
}
