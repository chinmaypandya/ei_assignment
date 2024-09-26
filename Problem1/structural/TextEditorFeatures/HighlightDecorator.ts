// HighlightDecorator.ts
// Concrete decorator for adding text highlighting functionality.

import { TextDecorator } from "./TextDecorator";

export class HighlightDecorator extends TextDecorator {
    public display(): void {
        super.display();
        console.log("Highlight Feature: Highlighting important text.");
    }
}
