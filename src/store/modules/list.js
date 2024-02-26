import Vue from "vue";

const listStore = {
  namespaced: true,
  state: {
    list: {
      1: {
        type: "INCOME",
        value: 100,
        comment: "Some comment",
        id: 1,
      },
      2: {
        type: "OUTCOME",
        value: -50,
        comment: "Some outcome comment",
        id: 2,
      },
    },
  },
  getters: {
    budgetList: ({ list }) => list,
  },
  mutations: {
    ADD_OBJECT_LIST: (state, objectList) => {
      Vue.set(state.list, objectList.id, objectList);
    },
    DELETE_OBJECT_LIST: (state, id) => {
      Vue.delete(state.list, id);
    },
  },
  actions: {
    addNewObjectList({ commit }, objectList) {
      const newObject = {
        ...objectList,
        id: String(Math.random()),
      };
      commit("ADD_OBJECT_LIST", newObject);
    },
    deleteObjectList({ commit }, idList) {
      commit("DELETE_OBJECT_LIST", idList);
    },
  },
};
//
export default listStore;
