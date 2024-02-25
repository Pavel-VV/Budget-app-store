<template>
  <ElCard class="form-card">
    <ElForm :model="formData" ref="addItemForm" :rules="rules">
      <ElFormItem label="Type" prop="type">
        <ElSelect
          class="type-select"
          v-model="formData.type"
          placeholder="choose type..."
        >
          <ElOption label="Income" value="INCOME" />
          <ElOption label="Outcome" value="OUTCOME" />
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Comments" prop="comment">
        <ElInput v-model="formData.comment" />
      </ElFormItem>
      <ElFormItem label="Value" prop="value">
        <ElInput v-model.number="formData.value" />
      </ElFormItem>
      <ElButton @click="onSubmit" type="primary">Submit</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FormBudget",
  data: () => {
    let validateZero = (rule, value, callback) => {
      // кастомный валидатор
      if (value === 0) {
        callback(new Error("Input a number other than zero"));
      } else {
        callback();
      }
    };
    return {
      formData: {
        type: "INCOME",
        comment: "",
        value: 0,
      },
      rules: {
        type: [
          { required: true, message: "Please select type", trigger: "blur" },
        ],
        comment: [
          {
            required: true,
            message: "Please input comment",
            trigger: "change",
          },
        ],
        value: [
          { required: true, message: "Please input value", trigger: "change" },
          {
            type: "number",
            message: "Value must be a number",
            trigger: "change",
          },
          { validator: validateZero, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate((valid) => {
        if (valid) {
          const newObj = { ...this.formData };
          if (newObj.type === "OUTCOME") {
            // если выбрали в выпадающем списке "расходы" значит графа value должна быть с отрицательным числом
            newObj.value =
              newObj.value > 0
                ? Number("-" + String(newObj.value))
                : newObj.value; // если число положительно, значит преобразуем в строку и конкатенируем с минусом, а потом преобразуем обратно в число, если отрицательно, оставляем как есть
          }
          // this.$emit("submitForm", newObj);
          this.addNewObjectList(newObj);
          this.$refs.addItemForm.resetFields();
        }
      });
    },
    ...mapActions("list", ["addNewObjectList"]),
  },
};
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin: auto;
}

.type-select {
  width: 100%;
}
</style>
