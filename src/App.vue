<template>
  <div id="app">
    <FormBudget @submitForm="onFormSubmit" />
    <TotalBalance :total="totalBalanceList" />
    <BudgetList :list="list" @deleteItemId="onDeleteItem" />
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import FormBudget from "@/components/FormBudget";

export default {
  name: "App",
  components: {
    BudgetList,
    TotalBalance,
    FormBudget,
  },
  data: () => ({
    list: {
      1: {
        type: "INCOME",
        value: 100,
        comment: "Some comments",
        id: 1,
      },
      2: {
        type: "OUTCOME",
        value: -50,
        comment: "Some outcome comments",
        id: 2,
      },
    },
  }),
  computed: {
    totalBalanceList() {
      return Object.values(this.list).reduce((acc, item) => {
        return acc + item.value;
      }, 0);
    },
  },
  methods: {
    onDeleteItem(id) {
      this.$delete(this.list, id); // принимаем из компоненты BudgetList id кликнутого item в компоненте BudgetListItem
    },
    onFormSubmit(data) {
      // console.log(data);
      const newObj = {
        ...data,
        id: String(Math.random()),
      };
      // console.log(newObj)
      this.$set(this.list, newObj.id, newObj);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
