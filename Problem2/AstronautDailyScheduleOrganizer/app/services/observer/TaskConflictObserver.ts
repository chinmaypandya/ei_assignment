import { IObserver } from './IObserver';

export class TaskConflictObserver implements IObserver {
    public update(message: string): void {
        console.log(`Notification: ${message}`);
    }
}