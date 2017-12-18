<template>
    <div class="aside">
         <el-menu default-active="2" class="el-menu-vertical-demo" 
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>学生问题</span>
                </template>
                    <el-menu-item index="1-1">内容管理</el-menu-item>
                    <el-menu-item index="1-2">类别管理</el-menu-item>
                    <el-menu-item index="1-3">评论管理</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-menu"></i>                    
                    <span>前端技术</span>
                </template>
                    <el-menu-item index="1-1">内容管理</el-menu-item>
                    <el-menu-item index="1-2">类别管理</el-menu-item>
                    <el-menu-item index="1-3">评论管理</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-menu"></i>                    
                    <span>难点分析</span>
                </template>
                    <el-menu-item index="1-1">内容管理</el-menu-item>
                    <el-menu-item index="1-2">类别管理</el-menu-item>
                    <el-menu-item index="1-3">评论管理</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>资源管理</span>
                </template>
                    <el-menu-item index="1-1">内容管理</el-menu-item>
                    <el-menu-item index="1-2">类别管理</el-menu-item>
                    <el-menu-item index="1-3">评论管理</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>商品管理</span>
                </template>
                    <el-menu-item index="1-1">内容管理</el-menu-item>
                    <el-menu-item index="1-2">类别管理</el-menu-item>
                    <el-menu-item index="1-3">评论管理</el-menu-item>
            </el-submenu>
            <el-submenu index="6">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>订单管理</span>
                </template>
                    <el-menu-item index="1-1">订单列表</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='less'>
    .aside{
        height: 100%;
        .el-menu{
            height: 100%;
            text-align: left;
        }
    }
</style>