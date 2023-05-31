import { defineStore } from "pinia";

class TodoItem {

}

export const useGlobalStore = defineStore({
    id: 'global',

    state: () => ({
        loading: false,
        todoItems: (new Map<string, TodoItem>),
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