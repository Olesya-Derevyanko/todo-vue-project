<script>
export default {
  props: {
    taskValue: {
      id: Number,
      title: String,
      isChecked: Boolean,
    },
    isOpenInputId: Number,
  },
  emits: [
    "onChangeIsCheckedTask",
    "onChangeTitleTask",
    "deleteFromTasks",
    "setOpenInput",
    "setCloseInput",
  ],
  data() {
    return {
      changedTitleOftask: this.taskValue.title,
    };
  },

  methods: {
    setFocus() {
      setTimeout(() => {
        this.$refs["`input-${taskValue.id}`"].focus();
      }, 10);
    },
  },

  computed: {
    checkOpenInput() {
      if (this.isOpenInputId === this.taskValue.id) {
        this.setFocus();
        return true;
      } else return false;
    },
  },

  mounted() {},
};
</script>

<template>
  <div class="task-area">
    <form
      class="task-content"
      v-if="checkOpenInput"
      @submit.prevent="
        $emit('onChangeTitleTask', changedTitleOftask, taskValue.id)
      "
    >
      <input
        class="task-input"
        ref="`input-${taskValue.id}`"
        type="text"
        v-model="changedTitleOftask"
        @blur="$emit('onChangeTitleTask', changedTitleOftask, taskValue.id)"
      />
    </form>
    <div v-else class="task-content">
      <input
        class="task-check"
        type="checkbox"
        :checked="taskValue.isChecked"
        @click="
          $emit('onChangeIsCheckedTask', $event.target.checked, taskValue.id)
        "
      />
      <p
        @dblclick="$emit('setOpenInput', taskValue.id)"
        class="task-title"
        :class="{ checked: taskValue.isChecked }"
      >
        {{ taskValue.title }}
      </p>
      <button
        class="delete-task-button"
        @click="$emit('deleteFromTasks', taskValue.id)"
      >
        x
      </button>
    </div>
  </div>
</template>

<style scoped>
.task-content {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
  padding: 0 5px;
  background-color: #e9fff8;
  border-radius: 5px;
  border: 1px solid #007465;
  height: 45px;
}

.task-title {
  width: 100%;
  padding: 0 10px;
  font-size: 28px;
  font-weight: 700;
  color: #007465;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.checked {
  color: #849290;
  text-decoration: line-through;
}

.task-check {
  z-index: 20;
  border-radius: 50%;
}

.delete-task-button {
  font-size: 20px;
  color: #007465;
  border: 1px solid #007465;
  border-radius: 50%;
  width: 40px;
  height: 36.5px;
}

.delete-task-button:hover {
  cursor: pointer;
}

.delete-task-button:active {
  color: #ffffff;
  background-color: #007465;
}

.task-input {
  width: 100%;
  height: 30px;
  outline: none;
  border: none;
  background: none;
  font-size: 28px;
  font-weight: 700;
  padding-left: 23px;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  /* top: -10px; */
}
</style>
