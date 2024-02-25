<template>
  <div class="list-item">
    <span class="budget-comment"> {{ listItem.comment }}</span>
    <span class="budget-value" :class="colorNumberClass">
      {{ listItem.value }}
    </span>
    <i class="budget-icon" :class="typeIcon"></i>
    <ElButton type="danger" size="mini" @click="dialogVisible = true"
      >Delete</ElButton
    >
    <ElDialog :visible.sync="dialogVisible" width="30%" :show-close="false">
      <span>Вы точно хотите удалить запись?</span>
      <span slot="footer" class="dialog-footer">
        <ElButton @click="dialogVisible = false">Отмена</ElButton>
        <ElButton type="primary" @click="deleteItem(listItem.id)"
          >Подтвердить</ElButton
        >
      </span>
    </ElDialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "BudgetListItem",
  data: () => ({
    dialogVisible: false,
  }),
  props: {
    listItem: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    ...mapActions("list", ["deleteObjectList"]),
    deleteItem(id) {
      // if(!confirm('Вы уверены?')) return;
      this.dialogVisible = false;
      this.deleteObjectList(id); //вызывается метод из state.list удаление объекта из списка по id
    },
    // typeIcon(value) {
    //   return value === "INCOME" ? "el-icon-top" : "el-icon-bottom";
    // }
  },
  computed: {
    typeIcon() {
      return {
        "el-icon-top": this.listItem.type === "INCOME",
        "el-icon-bottom": this.listItem.type === "OUTCOME",
      };
    },
    colorNumberClass() {
      return {
        income: this.listItem.type === "INCOME",
        outcome: this.listItem.type === "OUTCOME",
      };
    },
  },
};
</script>

<style scoped>
.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}

.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 10px;
}

.budget-icon {
  margin-right: 10px;
}

.income {
  color: green;
}

.outcome {
  color: red;
}
</style>
