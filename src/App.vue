<script>
import FilterArea from "./components/FilterArea.vue";
import TaskRow from "./components/TaskRow.vue";

export default {
  created() {},

  unmounted() {},

  data() {
    return {
      taskArray: [],
      newTextForTask: "",
      isOpenInputId: -1,
      filter: "All",
    };
  },

  methods: {
    addToTasks() {
      if (this.newTextForTask.length > 1) {
        const newTask = {
          id: this.taskArray.length,
          title: this.newTextForTask,
          isChecked: false,
        };
        this.newTextForTask = "";
        this.taskArray.push(newTask);
      }
    },

    deleteFromTasks(taskId) {
      this.taskArray = this.taskArray.filter((task) => task.id !== taskId);
    },

    onChangeIsCheckedTask(isChecked, taskId) {
      this.taskArray.map((task) => {
        if (task.id === taskId) {
          task.isChecked = isChecked;
        }
        return task;
      });
    },

    onChangeTitleTask(newTitle, taskId) {
      this.taskArray.map((task) => {
        if (task.id === taskId) {
          task.title = newTitle;
        }
        return task;
      });
      this.setCloseInput();
    },

    setOpenInput(taskId) {
      this.isOpenInputId = taskId;
    },

    setCloseInput() {
      this.isOpenInputId = -1;
    },
  },
  computed: {
    filteredTasks() {
      switch (this.filter) {
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
  components: { TaskRow, FilterArea },
};
</script>

<template>
  <div class="task-list-area">
    <form class="form-new-task" @submit.prevent="addToTasks">
      <input type="text" v-model.trim="newTextForTask" />
      <button type="submit">></button>
    </form>

    <TaskRow
      :key="item.id"
      v-for="item in filteredTasks"
      :taskValue="item"
      :isOpenInputId="isOpenInputId"
      @onChangeIsCheckedTask="onChangeIsCheckedTask"
      @onChangeTitleTask="onChangeTitleTask"
      @deleteFromTasks="deleteFromTasks"
      @setOpenInput="setOpenInput"
      @setCloseInput="setCloseInput"
    >
    </TaskRow>
    <FilterArea v-model="filter"></FilterArea>
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
