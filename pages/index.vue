<template>
    <div class="page-wrapper">
        <div class="element-wrapper">
            <div class="element-body">
                <LevButton @clicked="useGlobalStore().getTodo" style="margin: 10px; margin-left: 0px;">Get Todo</LevButton>
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