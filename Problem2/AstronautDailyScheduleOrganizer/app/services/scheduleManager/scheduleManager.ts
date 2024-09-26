import * as fs from 'fs';

import { ITask } from '../tasks';
import { IObserver } from '../observer';
import { TaskConflictObserver } from '../observer';
import { Logger } from '../../../core/logger';
import { TaskError } from '../../../core/exceptions';

export class ScheduleManager {
    private static instance: ScheduleManager;
    private tasks: ITask[] = [];
    private observers: IObserver[] = [];
    private tasksFile = 'db/task.json';  // File to store tasks

    private constructor() {
        this.loadTasksFromFile();
        this.addObserver(new TaskConflictObserver());  // Add observer for conflict notifications
    }

    // Ensure only one instance of ScheduleManager
    public static getInstance(): ScheduleManager {
        if (!ScheduleManager.instance) {
            ScheduleManager.instance = new ScheduleManager();
        }
        return ScheduleManager.instance;
    }

    // Add task to the schedule
    public addTask(task: ITask): void {
        try {
            if (this.checkForConflicts(task)) {
                this.notifyObservers(`Task "${task.description}" conflicts with an existing task.`);
                Logger.log(`Conflict: Task "${task.description}" could not be added due to conflicts.`);
                throw new TaskError(`Error: Task conflicts with existing task.`);
            } else {
                this.tasks.push(task);
                this.saveTasksToFile();
                Logger.log(`Task added: ${task.description} [${task.priority}] from ${task.startTime} to ${task.endTime}.`);
                console.log('Task added successfully. No conflicts.');
            }
        } catch (error) {
            if (error instanceof TaskError) {
                console.log(error.message);
                Logger.log(error.message);
            }
        }
    }

    // Remove task from the schedule
    public removeTask(description: string): void {
        try {
            const taskIndex = this.tasks.findIndex(task => task.description === description);
            if (taskIndex > -1) {
                const removedTask = this.tasks.splice(taskIndex, 1)[0];
                this.saveTasksToFile();
                Logger.log(`Task removed: ${removedTask.description}.`);
                console.log('Task removed successfully.');
            } else {
                throw new TaskError('Error: Task not found.');
            }
        } catch (error) {
            if (error instanceof TaskError) {
                console.log(error.message);
                Logger.log(error.message);
            }
        }
    }

    // View tasks sorted by start time
    public viewTasks(): void {
        try {
            if (this.tasks.length === 0) {
                throw new TaskError('No tasks scheduled for the day.');
            }

            const sortedTasks = this.tasks.sort((a, b) => {
                return a.startTime.localeCompare(b.startTime);
            });

            sortedTasks.forEach(task => {
                console.log(`${task.startTime} - ${task.endTime}: ${task.description} [${task.priority}] ${task.isCompleted ? '(Completed)' : ''}`);
            });

            Logger.log('View tasks: Displayed tasks.');
        } catch (error) {
            if (error instanceof TaskError) {
                console.log(error.message);
                Logger.log(error.message);
            }
        }
    }

    // Check for task conflicts
    private checkForConflicts(newTask: ITask): boolean {
        return this.tasks.some(existingTask => {
            return (newTask.startTime < existingTask.endTime && newTask.endTime > existingTask.startTime);
        });
    }

    // Add observer for task conflict notification
    public addObserver(observer: IObserver): void {
        this.observers.push(observer);
    }

    // Notify all observers
    private notifyObservers(message: string): void {
        this.observers.forEach(observer => observer.update(message));
    }

    // Save tasks to file (CRUD operation)
    private saveTasksToFile(): void {
        try {
            fs.writeFileSync(this.tasksFile, JSON.stringify(this.tasks, null, 2), 'utf8');
            Logger.log('Tasks saved to file.');
        } catch (error) {
            Logger.log(`Error saving tasks to file: ${error}`);
        }
    }

    // Load tasks from file (CRUD operation)
    private loadTasksFromFile(): void {
        try {
            if (fs.existsSync(this.tasksFile)) {
                const data = fs.readFileSync(this.tasksFile, 'utf8');
                this.tasks = JSON.parse(data);
                Logger.log('Tasks loaded from file.');
            } else {
                Logger.log('No existing tasks found. Starting fresh.');
            }
        } catch (error) {
            Logger.log(`Error loading tasks from file: ${error}`);
        }
    }
}
