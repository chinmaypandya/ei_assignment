// Logger.ts
// This is the Singleton Logger class that ensures only one instance exists
// for logging messages throughout the application.

export class Logger {
    private static instance: Logger;

    // Private constructor to prevent direct instantiation
    private constructor() { }

    // Static method to get the single instance of Logger
    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    // Log a message to the console
    public log(message: string): void {
        console.log(`Log: ${message}`);
    }
}
