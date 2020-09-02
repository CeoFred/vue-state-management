import * as types from '../types';


const state = {
  counter : 0
};

const getters = {
  [types.DOUBLE_COUNTER]: function(state){
      return state.counter * 2
    },
    stringCounter: function(state){
      return state.counter + ' Clicks'
    },
}

const mutations = {
   increment: function(state, payload){
      state.counter += payload
    },
    decrement: function(state, payload){
      state.counter -= payload
    },
}

const actions = {
   increment: function({commit}, payload){
      commit('increment',payload);
    },
     decrement: function({commit}, payload){
      commit('decrement',payload);
    },
    asyncIncrement: function({commit}, payload){
      setTimeout(() => {
        commit('increment',payload.by);
      }, payload.duration);
    },
    asyncDecrement: function({commit},payload){
  setTimeout(() => {
        commit('decrement',payload.by);
      }, payload.duration);
    },
}

export default {
  actions,
  state,
  getters,
  mutations
}