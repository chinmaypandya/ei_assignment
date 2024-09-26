# Astronaut Daily Schedule Organizer

## Overview
A console-based application that helps astronauts organize their daily schedules. Users can add, remove, and view tasks with functionalities including task conflict detection and logging.

## Features
- **CRUD Operations**: Create, Read, Update, Delete tasks.
- **Task Validation**: Ensures no overlapping tasks.
- **Logging**: Tracks application usage and errors in `app.log`.
- **Task Persistence**: Stores tasks in `tasks.json`.

## Design Patterns Used
- **Singleton Pattern**: Ensures only one instance of the `ScheduleManager`.
- **Factory Pattern**: Creates `Task` objects via `TaskFactory`.
- **Observer Pattern**: Notifies users of task conflicts.

## Functional Requirements
1. Add a new task with description, start time, end time, and priority level.
2. Remove an existing task.
3. View all tasks sorted by start time.
4. Validate non-overlapping tasks.
5. Provide error messages for invalid operations.

## Optional Requirements
1. Edit an existing task.
2. Mark tasks as completed.
3. View tasks by priority level.

## Installation
1. Ensure Node.js and TypeScript are installed.
   ```bash
   node -v
   typescript -v
2. Clone the repository:
   ```bash
   git clone https://github.com/chinmaypandya/ei_assignment.git
   cd Problem2/AstronautDailyScheduleOrganizer
   npm i
   npm run build
   npm run start
