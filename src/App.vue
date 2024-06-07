<template>
  <div id="app">
<one-form :model="model">
  <one-form-item label="用户名">
    <one-input placeholder="请输入用户名"></one-input>
  </one-form-item>
</one-form>
  </div>
  




</template>

<script>


export default {
data(){
  return{
    model:{

    }
  }
}
}
</script>
<style lang="less" >
// #app{
//   .one-input{
//   width: 100px;
// }
 
// }

</style>