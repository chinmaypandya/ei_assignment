import { ITask } from './ITask';
import { TaskError } from '../../../core/exceptions';

export class Task implements ITask {
    constructor(
        public description: string,
        public startTime: string,
        public endTime: string,
        public priority: string,
        public isCompleted: boolean = false
    ) {}

    // Validate time format (HH:MM)
    public static validateTimeFormat(time: string): boolean {
        const timePattern = /^(2[0-3]|[01]?[0-9]):([0-5][0-9])$/;
        return timePattern.test(time);
    }
}