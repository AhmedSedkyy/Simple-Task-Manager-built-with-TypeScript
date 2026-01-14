import { Task } from "../models/Task";
import { TaskStatus } from "../models/TaskStatus";


export class TaskService {

    private tasks: Task[] = [];
    private currentid = 1;

    create(title: string, description?: string) {

        if (!title.trim())
            throw new Error("Title is required");
        const task: Task = {
            id: this.currentid++,
            title,
            description,
            status: TaskStatus.Pending,
            createdAt: new Date()
        }

        this.tasks.push(task);
        return task;
    }

    getAll(): Task[] {
        return this.tasks;
    }

    getById(id: number): Task {

        const task = this.tasks.find(task => task.id === id)
        if (!task)
            throw new Error("Task not found");
        return task;
    }

    updateStatus(id: number, status: TaskStatus): Task {
        const task = this.getById(id);
        if (task.status === TaskStatus.Completed)
            throw new Error("Completed task cannot be changed");
        task.status = status;
        return task;
    }
    delete(id: number): void {
        const index = this.tasks.findIndex(t => t.id === id);
        if (index === -1)
            throw new Error("Task not found");
        this.tasks.splice(index, 1);
    }

    updateTitle(id: number, title: string): Task {
        const task = this.getById(id);
        task.title = title;
        return task;
    }

    getByStatus(status: TaskStatus): Task[] {
        return this.tasks.filter(task => task.status === status);
    }







}