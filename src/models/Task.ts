import type { TaskStatus } from "./TaskStatus";


export interface Task {
    readonly id: number;
    title: string;
    description?: string;
    status: TaskStatus;
    createdAt: Date;
    updatedAt?: Date;
}