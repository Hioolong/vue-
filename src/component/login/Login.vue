<template>
    <div class="login">
        <!-- 居中的盒子 -->
        <div class="login_content">
            <section class="login_content_logo">
                <img src="../../images/logo.png" alt="logo">
            </section>
            <section class="login_content_form">
                <!-- model属性用于关联整个表单的数据 -->
                <el-form :model="user" status-icon :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm" label-position="left">
                    <el-form-item label="用户名" prop="uname">
                        <el-input type="text" v-model="user.uname" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="upwd">
                        <el-input type="password" v-model="user.upwd" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="submitForm('ruleForm')">登录</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    uname:'',
                    upwd:''
                },
                // 配置效验规则
                rules:{
                    uname:[
                        {required:true,message:'请输入用户名',trigger:'blur'},
                        {pattern:/\w{5,18}/,message:'长度在5到18位，且只能为&_或字母与数字',trigger:'blur'}
                    ],
                    upwd:[
                        {required:true,message:'请输入密码',trigger:'blur'},
                        {pattern:/.{6,18}/,message:'密码长度为6到18位',trigger:'blur'}
                    ]
                }
            }
        },
        methods:{
            submitForm(formName) {
                // 检验表单数据，再提交登录请求
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    // 发送登录请求
                    this.$http.post(this.$api.login,this.user)
                        .then(res => {
                            console.log(res.data)
                            if(res.data.status==0){
                                // 登录成功，设置localstorage保存用户信息，然后跳转到首页
                                localStorage.setItem('user',JSON.stringify(res.data.message))
                                this.$router.push('/');
                            }else{
                                this.$message(res.data.message);
                            }
                            })
                } else {
                    this.$message('用户名或者密码不符合规则');
                    return false;
                }
                });
            },
            resetForm(formName) {
                // vue中提供了$refs对象用于快速获取dom元素
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped lang="less">
    .login{
        height: 100%;
        background-color: rgb(38, 124, 183);
        &_content{
            border: 2px solid #fff;
            width: 400px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            border-radius: 8px;
            padding: 10px;
            &_logo{
                text-align: center;
            }
            &_form{
                padding: 2px 10px;
            }
        }
        .el-form-item__label{
            color: #fff;
        }
    }
</style>