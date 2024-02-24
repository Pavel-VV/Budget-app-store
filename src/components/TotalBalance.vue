<template>
  <!-- <div>
    <template v-if="total > 0">
      <div class="total-value balance-positive">Total Balance: {{total}} </div>
    </template>
    <template v-else-if="total === 0">
      <div class="total-value balance-neutral">Total Balance: {{total}} </div>
    </template>
    <template v-else>
      <div class="total-value balance-negative">Total Balance: {{total}} </div>
    </template>
  </div> -->
  <div class="total-value" :class="balanceColor">
    Total Balance: {{ total }}
  </div>
</template>

<script>
export default {
  name: "TotalBalance",
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    // balanceColor(total) {
    //   return total > 0 ? 'balance-positive' : total === 0 ? 'balance-neutral' : 'balance-negative';
    // },
  },
  computed: {
    balanceColor() {
      return {
        "balance-positive": this.total > 0,
        "balance-neutral": this.total === 0,
        "balance-negative": this.total < 0,
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
