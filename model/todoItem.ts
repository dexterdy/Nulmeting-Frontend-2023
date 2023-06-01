class TodoItem {
    id: string;
    assignee: string;
    dueDateTime: Date;
    description: String;

    constructor(id: string, assignee: string, dueDateTime: Date, description: String) {
        this.id = id;
        this.assignee = assignee;
        this.dueDateTime = dueDateTime;
        this.description = description;
    }
}