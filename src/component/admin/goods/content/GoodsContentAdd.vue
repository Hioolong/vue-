<template>
    <div class="add">
        <!-- 面包屑导航 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/goods/content/list' }" >返回上一层</el-breadcrumb-item>
            <el-breadcrumb-item>购物商城</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>新增内容</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 填写商品信息 -->
        <section class="information">
            <el-form :rules="rules" :ref="ruleForm" label-width="70px" class="demo-ruleForm">
                <el-form-item label="内容标题" prop="title">
                <el-input></el-input>
                </el-form-item>
                <el-form-item label="内容标题" prop="title">
                <el-input></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" >提交保存</el-button>
                    <el-button>返回上一页</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm:{

                },
                rules:{
                    title:[]
                }   
            }
        },
        methods: {
                
        },
    }
</script>

<style scoped lang='less'>
    .add{
        .el-breadcrumb{
            border-bottom: 1px solid #ccc;
            padding-bottom: 10px;
        }
        .information{
            padding: 10px;
            border-radius: 8px;
            margin-top: 13px;
            border: 1px solid #ccc;
        }
    }
</style>