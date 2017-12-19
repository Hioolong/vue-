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
            <router-view></router-view>
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
		isLogin(){
			this.$http.get(this.$api.islogin)
				.then(res => {
					console.log(res.data);
					if(res.data.code == 'nologin'){
						this.$message('亲爱的你还没登录呢');
						this.$router.push('/login');
					}else{
						this.$message('欢迎您，'+JSON.parse(localStorage.getItem('user')).uname);
					}
				})
		}
	},
	created(){
		// 判断用户是否登录，如果没有登录就返回登录页面
		// this.isLogin();
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