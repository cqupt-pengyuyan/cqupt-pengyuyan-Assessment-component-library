<template>
  <div id="app">
    <div class="row">
    <one-button @click="fn">按钮</one-button>
    <one-button type="primary">primary按钮</one-button>
    <one-button type="success">success按钮</one-button>
    <one-button type="info">info按钮</one-button>
    <one-button type="danger">danger按钮</one-button>
    <one-button type="warning">warning按钮</one-button>
    </div>
 
    <div class="row">
    <one-button plain>按钮</one-button>
    <one-button plain type="primary">primary按钮</one-button>
    <one-button plain type="success">success按钮</one-button>
    <one-button plain type="info">info按钮</one-button>
    <one-button plain type="danger">danger按钮</one-button>
    <one-button plain type="warning">warning按钮</one-button>
   
  </div>
  
  <div class="row">
    <one-button plain round>按钮</one-button>
    <one-button plain round type="primary">primary按钮</one-button>
    <one-button plain round type="success">success按钮</one-button>
    <one-button plain round type="info">info按钮</one-button>
    <one-button plain round type="danger">danger按钮</one-button>
    <one-button plain round type="warning">warning按钮</one-button>
    
  </div>
  <div class="row">
    <one-button plain circle>12</one-button>
    <one-button plain circle type="primary">12</one-button>
    <one-button plain circle type="success">12</one-button>
    <one-button plain circle type="info">12</one-button>
    <one-button plain circle type="danger">12</one-button>
    <one-button plain circle type="warning">21</one-button>
  </div>

  <div class="row">
    <one-button plain disabled circle>12</one-button>
    <one-button plain disabled circle type="primary">12</one-button>
    <one-button plain disabled circle type="success">12</one-button>
    <one-button plain disabled circle type="info">12</one-button>
    <one-button plain disabled circle type="danger">12</one-button>
    <one-button plain disabled circle type="warning">21</one-button>
  </div>
<one-button type="primary" @click="visible=true">按钮</one-button>
  <onedialog width="20%" top="200px" :visible="visible" @close="close">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
     
  <template v-slot:footer>
          <one-button @click="visible=false">确定</one-button>
          <one-button type="primary" @click="visible=false">取消</one-button>
        </template>
      </onedialog>

  </div>



</template>

<script>


export default {
data(){
  return{
    visible:false
  }
},
methods:{
  fn(){
    console.log('123')
  }
 
}
}
</script>
<style lang="less" >

 
</style>