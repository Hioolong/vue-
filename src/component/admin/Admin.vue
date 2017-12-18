<template>
    <!-- 对首页进行布局 -->
      <el-container>
        <el-aside width="200px">
          <app-aside></app-aside>
        </el-aside>
        <el-container>
          <el-header>
            <app-header></app-header>
          </el-header>
          <!-- main是动态变化的，可以通过子路由来控制 -->
          <el-main>
            Main
          </el-main>
        </el-container>
      </el-container>
</template>

<script>
// 导入公共的左侧和头部组件，注册成子组件来使用
  import asideComponent from './frame/Aside.vue';
  import headerComponent from './frame/Header.vue';

  export default {
    data() {
      return {
        
      }
    },
    methods: {

    },
    components:{
      appAside:asideComponent,
      appHeader:headerComponent
    }
  };
</script>

<style scoped lang='less'>
  .el-container{
      height: 100%;
    .el-header{
      background-color: #B3C0D1;
      color: #333;
      text-align: right;
      line-height: 60px;
    }
  .el-aside {
    height: 100%;
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
}
</style>