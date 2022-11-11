import { defineStore } from "pinia";

export const useTasksStore = defineStore("taskList", {
  state: () => {
    return {
      taskArray: [],
      activeTaskId: undefined,
      filterArray: ["All", "Active", "Completed"],
      selectedFilter: "All",
    };
  },

  actions: {
    addToTasks(newTextForTask) {
      if (newTextForTask.length > 0) {
        const newTask = {
          id: this.taskArray.length,
          title: newTextForTask,
          isChecked: false,
        };
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
      this.activeTaskId = taskId;
    },

    setCloseInput() {
      this.activeTaskId = undefined;
    },
  },
});
