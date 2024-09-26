import * as readline from 'readline';
import { TaskFactory } from './services/taskFactory';
import { ScheduleManager } from './services/scheduleManager';
import { Logger } from '../core/logger';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const scheduleManager = ScheduleManager.getInstance();

const mainMenu = () => {
    console.log("\nAstronaut Daily Schedule Organizer");
    console.log("1. Add Task");
    console.log("2. Remove Task");
    console.log("3. View Tasks");
    console.log("4. Exit");

    rl.question("Choose an option: ", (answer) => {
        switch (answer) {
            case '1':
                addTask();
                break;
            case '2':
                removeTask();
                break;
            case '3':
                scheduleManager.viewTasks();
                mainMenu();
                break;
            case '4':
                Logger.log('Application exited.');
                rl.close();
                break;
            default:
                console.log("Invalid option. Please try again.");
                Logger.log('Invalid option selected in the menu.');
                mainMenu();
                break;
        }
    });
};

const addTask = () => {
    rl.question("Enter task description: ", (description) => {
        rl.question("Enter start time (HH:MM): ", (startTime) => {
            rl.question("Enter end time (HH:MM): ", (endTime) => {
                rl.question("Enter priority (Low, Medium, High): ", (priority) => {
                    const task = TaskFactory.createTask(description, startTime, endTime, priority);
                    if (task) {
                        scheduleManager.addTask(task);
                    }
                    mainMenu();
                });
            });
        });
    });
};

const removeTask = () => {
    rl.question("Enter task description to remove: ", (description) => {
        scheduleManager.removeTask(description);
        mainMenu();
    });
};

// Start the program
mainMenu();