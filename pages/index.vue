<template>
  <div class="page-wrapper">
    <div class="element-wrapper">
      <div class="element-body">
        <table>
            <tr v-for="todoItem in useGlobalStore().todoItems">
                <td></td>
            </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>