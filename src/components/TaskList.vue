<script>
import { storeToRefs } from "pinia";
import TaskRow from "./TaskRow.vue";
import { useTasksStore } from "../stores/todoStore";

export default {
  setup() {
    const taskArrayState = useTasksStore();
    const { taskArray, selectedFilter } = storeToRefs(taskArrayState);
    return {
      taskArrayState,
      taskArray,
      selectedFilter,
    };
  },
  created() {},

  unmounted() {},

  data() {
    return {};
  },

  methods: {},
  computed: {
    filteredTasks() {
      switch (this.selectedFilter) {
        case "All":
          return this.taskArray;
        case "Completed":
          return this.taskArray.filter((task) => task.isChecked);
        case "Active":
          return this.taskArray.filter((task) => !task.isChecked);
        default:
          return this.taskArray;
      }
    },
  },
  mounted() {},
  components: { TaskRow },
};
</script>

<template>
  <TaskRow :key="item.id" v-for="item in filteredTasks" :taskValue="item">
  </TaskRow>
</template>

<style scoped></style>
