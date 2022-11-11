<script>
import { storeToRefs } from "pinia";
import FilterArea from "./components/FilterArea.vue";
import TaskList from "./components/TaskList.vue";
import { useTasksStore } from "./stores/todoStore";

export default {
  setup() {
    const taskArrayState = useTasksStore();
    const { taskArray, selectedFilter } = storeToRefs(taskArrayState);
    const { addToTasks, setCloseInput, setOpenInput } = taskArrayState;
    return {
      taskArrayState,
      taskArray,
      selectedFilter,
      addToTasks,
      setOpenInput,
      setCloseInput,
    };
  },
  created() {},

  unmounted() {},

  data() {
    return {
      newTextForTask: "",
    };
  },

  methods: {
    addTask() {
      this.addToTasks(this.newTextForTask);
      this.newTextForTask = "";
    },
  },
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
  components: { TaskList, FilterArea },
};
</script>

<template>
  <div class="task-list-area">
    <form class="form-new-task" @submit.prevent="addTask">
      <input type="text" v-model.trim="newTextForTask" />
      <button type="submit">></button>
    </form>
    <TaskList></TaskList>
    <FilterArea></FilterArea>
  </div>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>

<style scoped>
.task-list-area {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
}

.form-new-task {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-new-task > input {
  width: 100%;
  outline: none;
  border: 1px solid #007465;
  font-size: 28px;
  font-weight: 500;
  border-radius: 5px 0 0 5px;
  padding: 5px;
}

.form-new-task > button {
  height: 100%;
  outline: none;
  border: 1px solid #007465;
  font-size: 28px;
  font-weight: 500;
  color: #007465;
  border-radius: 0 5px 5px 0;
  padding: 5px;
}

.form-new-task > button:active {
  color: #ffffff;
  background-color: #007465;
}
</style>
