<script>
import { storeToRefs } from "pinia";
import { useTasksStore } from "../stores/todoStore";

export default {
  setup() {
    const taskArrayState = useTasksStore();

    const { filterArray } = taskArrayState;
    const { selectedFilter } = storeToRefs(taskArrayState);

    return {
      filterArray,
      selectedFilter,
    };
  },

  data() {
    return {};
  },

  methods: {
    checkFilter(filterValue) {
      return this.selectedFilter === filterValue;
    },

    onClick(filterItem) {
      this.selectedFilter = filterItem;
    },
  },

  computed: {},

  mounted() {},
};
</script>

<template>
  <div class="filter-area">
    <p
      v-for="(filterItem, index) in filterArray"
      :key="index"
      class="filter-item"
      :class="{ checked: checkFilter(filterItem) }"
      @click="onClick(filterItem)"
    >
      {{ filterItem }}
    </p>
  </div>
</template>

<style scoped>
.filter-area {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.filter-item {
  font-size: 18px;
  color: grey;
  cursor: pointer;
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
