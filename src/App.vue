<template>
  <div id="app">
    <FormBudget />
    <TotalBalance />
    <BudgetList />
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
  data: () => ({}),
  computed: {},
  methods: {},
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
