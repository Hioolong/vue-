<template>
    <div>
        <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
                你好，{{user.uname}}
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">修改密码</el-dropdown-item>
                <el-dropdown-item command="logout">注销登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: JSON.parse(localStorage.getItem('user')) || {}
            }
        },
        methods: {
            logout(){
                this.$http.get(this.$api.logout)
                    .then(res => {
                        // 删除localStorage存放的用户信息
                        localStorage.removeItem('user');
                        // 跳转到登录页面
                        this.$router.push('/login');
                    })
            },
            handleCommand(command) {
                if(command=='logout'){
                    // 进行登出操作
                    this.logout();
                }
            }
        }   
    }
</script>

<style scoped>
.el-dropdown-link {
    cursor: pointer;
    color: #fff;
}
.el-icon-arrow-down {
    font-size: 12px;
}
</style>