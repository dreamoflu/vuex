<template>
    <div>
      <h2>hello Vuex</h2>
      <hr/>
       <div>{{$store.state.count}}-{{count}}</div>
      <input type="button" value="+" @click="$store.commit('add',10)"/>
      <input type="button" value="-" @click="reduce"/>
      <input type="button" value="====" @click="aa"/>


      <div>
        <!--<div>{{$store.state.count}}-{{count}}</div>-->
        <input type="button" value="+" @click="addAction"/>
        <input type="button" value="-" @click="reduceAction"/>
      </div>
    </div>
</template>

<script>
  import store from '@/Vuex/store'
  import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default {
        data() {
            return {}
        },
        mounted() {

        },
//      computed:{
//          //count简写1 此时不需要引用import {mapState} from 'Vuex'
//          count(){
//            return this.$store.state.count
//          }
//      },
      //count简写2  需要引用import {mapState} from 'Vuex'
//      computed:mapState({
//        count:state=>state.count
//
//      }),
      //count简写3  需要引用import {mapState} from 'Vuex'
        computed:{
          ...mapState(['count']),
          //gettter 方法一
//          count(){
//           return this.$store.getters.count
//          }
          //gettter 方法二
//          ...mapGetters(['count']),

        },
        methods:{
          ...mapMutations(['add','reduce']),
          ...mapActions(['addAction','reduceAction']),

          aa(){
            alert(1)
          }
        },
      store
    }
</script>
<style scoped>

</style>
