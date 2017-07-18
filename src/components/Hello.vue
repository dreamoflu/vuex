<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    function* f(){
       for(var i=0; true; i++){
           var  reset = yield i;
           if(reset){
               i=-1
           }
       }
     };
    var g=f();


    function* f2() {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
      yield 5;
      var a=6
//      return 6;
    }


//var  set=new Set([1,2,3,4,3,2,'3',3]);
//    set.add(6)
//    console.log(JSON.stringify(set))
//    console.log(JSON.stringify(set.size ));
    var item=new Set([1,2,3,4,5,5]);
    var array=Array.from(item);
//    console.log(item)
//    console.log(array)
    let un =new Set(['a','b','c']);
    let arr=[...un]
    console.log(arr)
//    let arr=[3,5,2,2,5,5];
//    let un=[...new Set(arr)];
//    console.log(un)

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
