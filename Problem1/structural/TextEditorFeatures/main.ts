// main.ts
// Entry point for the text editor features demonstration.
// Allows the user to apply various text editor features until they are satisfied.

import { TextEditor } from "./TextEditor";
import { SpellCheckDecorator } from "./SpellCheckDecorator";
import { GrammarCheckDecorator } from "./GrammarCheckDecorator";
import { HighlightDecorator } from "./HighlightDecorator";
import * as readline from "readline";

// Set up readline for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let editor: TextEditor = new TextEditor();

const inputFeature = () => {
    rl.question("Choose a feature to apply (spellcheck, grammarcheck, highlight, or exit to quit): ", (feature) => {
        if (feature.toLowerCase() === 'exit') {
            rl.close(); // Close the readline interface
            return;
        }

        switch (feature.toLowerCase()) {
            case 'spellcheck':
                editor = new SpellCheckDecorator(editor);
                break;
            case 'grammarcheck':
                editor = new GrammarCheckDecorator(editor);
                break;
            case 'highlight':
                editor = new HighlightDecorator(editor);
                break;
            default:
                console.log("Invalid feature. Please choose 'spellcheck', 'grammarcheck', or 'highlight'.");
                return;
        }

        // Display the text editor with applied features
        editor.display();

        // Prompt for the next feature
        inputFeature();
    });
};

// Start the input loop
inputFeature();
