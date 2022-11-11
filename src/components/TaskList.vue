<script>
import TaskRow from "./TaskRow.vue";

export default {
  props: {
    filteredTasks: Array,
  },
  emits: ["onChangeIsCheckedTask", "onChangeTitleTask", "deleteFromTasks"],

  created() {},

  unmounted() {},

  data() {
    return {
      activeTaskId: -1,
      newTextForTask: "",
    };
  },

  methods: {
    setOpenInput(taskId) {
      this.activeTaskId = taskId;
    },

    setCloseInput() {
      this.activeTaskId = -1;
    },

    onChangeIsCheckedTask(isChecked, taskId) {
      this.$emit("onChangeIsCheckedTask", isChecked, taskId);
    },

    onChangeTitleTask(newTitle, taskId) {
      this.$emit("onChangeTitleTask", newTitle, taskId);
    },

    deleteFromTasks(taskId) {
      this.$emit("deleteFromTasks", taskId);
    },
  },
  computed: {},
  mounted() {},
  components: { TaskRow },
};
</script>

<template>
  <TaskRow
    :key="item.id"
    v-for="item in filteredTasks"
    :taskValue="item"
    :activeTaskId="activeTaskId"
    @onChangeIsCheckedTask="onChangeIsCheckedTask"
    @onChangeTitleTask="onChangeTitleTask"
    @deleteFromTasks="deleteFromTasks"
    @setOpenInput="setOpenInput"
    @setCloseInput="setCloseInput"
  >
  </TaskRow>
</template>

<style scoped></style>
