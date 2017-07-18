import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
const state={
  count:1
};
const mutations={
  //不能传参的写法
  // add(state){
  //   state.count++;
  // },
  // reduce(state){
  //   state.count--;
  // },
  //++++++++++++++++++++++++++++

//可以传递参数
  add(state,n){
    state.count+=n;
  },
  reduce(state){
    state.count--;
  }
};
//getters 相当于一个过滤器 每次操作count 都会走getter中的方法
const getters={
  count:state=>state.count+=100,
};
const actions={
  //countext 上下文对象 包含一些vuex的方法
  addAction(context){
    context.commit('add',10)

  },
  reduceAction({commit}){
    commit('reduce');console.log(commit)},}

export default new vuex.Store({
  state,mutations,getters,actions
})
