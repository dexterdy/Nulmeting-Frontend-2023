import { defineStore } from "pinia";
import { TodoItem } from "~/model/todoItem";

export const useGlobalStore = defineStore({
    id: 'global',

    state: () => ({
        loading: false,
        todoItems: (new Map<string, TodoItem>),
        api_key: 'Gj44z30T9TZdz7IvKzmu4xP4ZdlI3Du41MemjHJd'
    }),

    actions: {
        startLoader() {
            this.loading = true;
        },
        stopLoader() {
            this.loading = false;
        },
        getTodo() {
            const myRequest = new Request("https://86a4h9y007.execute-api.eu-west-1.amazonaws.com/development/nulmeting/todo",
                {
                    headers: {
                        'x-api-key': this.api_key
                    }
                });
            
            // Preventing copies is handled by the Map
            fetch(myRequest)
                .then((response) => response.json())
                .then((data) => this.todoItems.set(data.todo.id, new TodoItem(data.todo.id, data.todo.assignee, new Date(data.todo.dueDateTime), data.todo.description)))
                .catch(console.error);
        },
    }
});