<template>
  <div class="budget-list-wrap">
    <!-- <div class="list-sort">
      <ElButton size="mini" data-sort="OUTCOME" @click="onSort">Расходы</ElButton>
      <ElButton size="mini" data-sort="INCOME" @click="onSort">Доходы</ElButton>
      <ElButton size="mini" data-sort="ALL" @click="onSort">Показать все</ElButton>
    </div> -->
    <BudgetListSort @onSortState="onSort" />
    <ElCard :header="header">
      <template v-if="!IsEmpty">
        <div v-for="(item, prop) in budgetList" :key="prop">
          <BudgetListItem
            :class="setShudow(item.type)"
            :list-item="item"
            @deleteItemId="broadcastItemId"
          />
          <!-- устанавливаем класс shudow в зависимости от выполнения условия в методу setShudow-->
          <!-- {{item.visible}} -->
          <!-- <span class="budget-comment"> {{ item.comment }} </span>
          <span class="budget-value"> {{item.value}} </span>
          <ElButton type="danger" size="mini" @click="deleteItem(item.id)">Delete</ElButton> -->
        </div>
      </template>
      <ElAlert
        v-else
        type="info"
        :title="emptyTitle"
        :closable="false"
      ></ElAlert>
    </ElCard>
  </div>
</template>

<script>
import BudgetListItem from "@/components/BudgetListItem";
import BudgetListSort from "@/components/BudgetListSort";
import { mapGetters } from "vuex";

export default {
  name: "BudgestList",
  components: {
    BudgetListItem,
    BudgetListSort,
  },
  data: () => ({
    header: "Budget List",
    emptyTitle: "Empty List",
    itemVisibleClickButton: "ALL", // стартовое значение стоит ALL чтоб при первой загрузке все элементы списка отображались
  }),
  computed: {
    ...mapGetters("list", ["budgetList"]), //приходит объект со списком, из которого потом формируется список
    IsEmpty() {
      return !Object.keys(this.budgetList).length;
    },
  },
  methods: {
    broadcastItemId(id) {
      this.$emit("deleteItemId", id); // принимаем из компоненты BudgetListItem id кликнутого item и передаем его дальше в компоненту App
    },
    // onSort(e) {
    //   let state = e.target.closest('button').dataset.sort; //находим значение data-set в котором описано что будем скрывать при нажатии
    //   // console.log(state);
    //   this.itemVisibleClickButton = state; // сохраням значение кнопки
    // },
    onSort(clickState) {
      // принимаем из компоненты BudgetListSort значение кликнутой кнопки
      this.itemVisibleClickButton = clickState;
    },
    setShudow(type) {
      return {
        shudow:
          type !== this.itemVisibleClickButton &&
          "ALL" !== this.itemVisibleClickButton, // если значение нажатой кнопки совпадает с типом списка, класс не применяется к этому спису, а применяется к списку где нет совпадений
      };
    },
  },
};
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}

/* .list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
} */

.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}

.shudow {
  display: none;
}
</style>

// нужно передать в качестве props один item при переборе v-for, в компоненту
BudgestListItem и там сформировать один элемент списка
