<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  data() {
    return {};
  },

  methods: {
    checkFilter(filterValue) {
      return this.modelValue === filterValue;
    },
  },

  computed: {
    currentFilter: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },

  mounted() {},
};
</script>

<template>
  <div class="filter-area">
    <input
      class="checkbox-filter"
      type="radio"
      id="All"
      value="All"
      v-model="currentFilter"
    />
    <label
      class="filter-item"
      :class="{ checked: checkFilter('All') }"
      for="All"
      >All</label
    >

    <input
      class="checkbox-filter"
      type="radio"
      id="Active"
      value="Active"
      v-model="currentFilter"
    />
    <label
      class="filter-item"
      :class="{ checked: checkFilter('Active') }"
      for="Active"
      >Active</label
    >

    <input
      class="checkbox-filter"
      type="radio"
      id="Completed"
      value="Completed"
      v-model="currentFilter"
    />
    <label
      class="filter-item"
      :class="{ checked: checkFilter('Completed') }"
      for="Completed"
      >Completed</label
    >
  </div>
</template>

<style scoped>
.task-content {
  display: flex;
  width: 100%;
}

.checkbox-filter {
  display: none;
}

.filter-area {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.filter-item {
  font-size: 18px;
  color: grey;
}

.checked {
  color: #007465;
  text-decoration: underline;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
}
</style>
