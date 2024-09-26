interface ITask {
    description: string;
    startTime: string;
    endTime: string;
    priority: string;
    isCompleted?: boolean;
}

export {ITask};