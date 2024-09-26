import * as fs from 'fs';

export class Logger {
    private static logFile: string = 'app.log';

    // Log message to file
    public static log(message: string): void {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] ${message}\n`;
        fs.appendFileSync(this.logFile, logMessage, 'utf8');
    }
}