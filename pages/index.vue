<template>
    <div class="page-wrapper">
        <div class="element-wrapper">
            <div class="element-body">
                <LevButton @clicked="getTodo" style="margin: 10px; margin-left: 0px;">Get Todo</LevButton>
                <table id="todoTable">
                    <tr>
                        <th>Assignee</th>
                        <th>Description</th>
                        <th>Due Date</th>
                    </tr>
                    <tr v-for="todoItem in useGlobalStore().todoItems">
                        <td>{{ todoItem[1].assignee }}</td>
                        <td>{{ todoItem[1].description }}</td>
                        <td>{{ todoItem[1].dueDateTime.toLocaleString('nl-NL', {
                            weekday: 'long', year: 'numeric', month:
                                'long', day: 'numeric', hour: 'numeric', minute: '2-digit', second: '2-digit'
                        }) }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
class TodoResponse {
    todo: TodoItem;

    constructor(todo: TodoItem) {
        this.todo = todo;
    }
}
function getTodo() {
    const myRequest = new Request("https://86a4h9y007.execute-api.eu-west-1.amazonaws.com/development/nulmeting/todo",
        {
            headers: {
                'x-api-key': useGlobalStore().api_key
            }
        });

    fetch(myRequest)
        .then((response) => response.json())
        .then((data) => useGlobalStore().todoItems.set(data.todo.id, data.todo))
        .catch(console.error);

}
</script>

<style>
#todoTable,
#todoTable th,
#todoTable td {
    border: 1px solid black;
    border-collapse: collapse;
}

#todoTable th,
#todoTable td {
    padding: 5px;
    width: 15vw;
}
</style>