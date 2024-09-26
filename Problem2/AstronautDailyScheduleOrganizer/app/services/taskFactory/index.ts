import { Task } from '../tasks';
import { ITask } from '../tasks';
import { Logger } from '../../../core/logger';
import { TaskError } from '../../../core/exceptions';

export class TaskFactory {
    public static createTask(description: string, startTime: string, endTime: string, priority: string): ITask | null {
        try {
            if (Task.validateTimeFormat(startTime) && Task.validateTimeFormat(endTime)) {
                Logger.log(`Task created: ${description} from ${startTime} to ${endTime} [Priority: ${priority}]`);
                return new Task(description, startTime, endTime, priority);
            } else {
                throw new TaskError('Error: Invalid time format.');
            }
        } catch (error) {
            if (error instanceof TaskError) {
                console.log(error.message);
                Logger.log(error.message);
            }
            return null;
        }
    }
}
