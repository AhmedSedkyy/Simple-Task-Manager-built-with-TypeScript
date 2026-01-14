import { TaskService } from "./services/TaskService";
import { TaskStatus } from "./models/TaskStatus";
import { config } from "./config/app.config";


console.log(config);

const service = new TaskService();

service.create("Learn TS");
service.create("Build Project");

service.updateStatus(1, TaskStatus.Completed);

console.log(service.getAll());
