<script>
export default {
  props: {
    selectedFilter: String,
  },
  emits: ["onChangeSelectedFilter"],

  data() {
    return {
      filterArray: ["All", "Active", "Completed"],
    };
  },

  methods: {
    checkFilter(filterValue) {
      return this.selectedFilter === filterValue;
    },

    changeFilter(filterValue) {
      this.$emit("onChangeSelectedFilter", filterValue);
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
      @click="changeFilter(filterItem)"
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
