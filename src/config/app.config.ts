interface AppConfig {
    appName: string;
    version: string;
    debug: boolean;
}

export const config: Readonly<AppConfig> = {
    appName: "Task Manager",
    version: "1.0.0",
    debug: true
};
