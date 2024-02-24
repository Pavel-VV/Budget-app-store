<template>
  <div class="list-sort">
    <ElButton size="mini" data-sort="OUTCOME" @click="onSort">Расходы</ElButton>
    <ElButton size="mini" data-sort="INCOME" @click="onSort">Доходы</ElButton>
    <ElButton size="mini" data-sort="ALL" @click="onSort"
      >Показать все</ElButton
    >
  </div>
</template>

<script>
export default {
  name: "BudgetListSort",
  methods: {
    onSort(e) {
      const state = e.target.closest("button").dataset.sort;
      this.$emit("onSortState", state);
    },
  },
};
</script>

<style scoped>
.list-sort {
  padding: 10px 0px;
}
</style>
