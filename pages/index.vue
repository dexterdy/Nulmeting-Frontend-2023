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
                        <td>{{ formatNL(todoItem[1].dueDateTime) }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
function getTodo() {
    const myRequest = new Request("https://86a4h9y007.execute-api.eu-west-1.amazonaws.com/development/nulmeting/todo",
        {
            headers: {
                'x-api-key': useGlobalStore().api_key
            }
        });
    
    // Preventing copies is handled by the Map
    fetch(myRequest)
        .then((response) => response.json())
        .then((data) => useGlobalStore().todoItems.set(data.todo.id, new TodoItem(data.todo.id, data.todo.assignee, new Date(data.todo.dueDateTime), data.todo.description)))
        .catch(console.error);
}

function formatNL(dueDateTime: Date): string {
    return dueDateTime.toLocaleString('nl-NL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', second: '2-digit' })
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