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
    }
});