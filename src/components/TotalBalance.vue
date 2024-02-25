<template>
  <div class="total-value" :class="balanceColor">
    Total Balance: {{ totalBalanceList }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TotalBalance",
  data: () => ({
    total: "0",
  }),
  methods: {},
  computed: {
    ...mapGetters("list", ["budgetList"]), // приходит объект со списком
    totalBalanceList() {
      return Object.values(this.budgetList).reduce((acc, item) => {
        return acc + item.value;
      }, 0);
    },
    balanceColor() {
      return {
        "balance-positive": this.totalBalanceList > 0,
        "balance-neutral": this.totalBalanceList === 0,
        "balance-negative": this.totalBalanceList < 0,
      };
    },
  },
};
</script>

<style scoped>
.total-value {
  padding: 20px;
  font-size: 26px;
  text-transform: uppercase;
  text-align: center;
}

.balance-positive {
  color: green;
}

.balance-neutral {
  color: black;
}

.balance-negative {
  color: red;
}
</style>
