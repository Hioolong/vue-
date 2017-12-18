<template>
    <div class="aside">
         <el-menu default-active="2" class="el-menu-vertical-demo" 
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-submenu  v-for="item in menuList" :key="item.title" :index="item.title">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>{{ item.title }}</span>
                </template>
                    <el-menu-item v-for="subItem in item.children" :key="subItem.title" :index="subItem.title">
                        <router-link :to="subItem.path">{{ subItem.title }}</router-link>
                    </el-menu-item>
                    <!-- <el-menu-item index="1-2">类别管理</el-menu-item>
                    <el-menu-item index="1-3">评论管理</el-menu-item> -->
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menuList: [
                    {title:'学生问题',children:[
                        {title:'内容管理',path:'/'},
                        {title:'类别管理',path:'/'},
                        {title:'评论管理',path:'/'}
                    ]},
                    {title:'前端技术',children:[
                        {title:'内容管理',path:'/'},
                        {title:'类别管理',path:'/'},
                        {title:'评论管理',path:'/'}
                    ]},
                    {title:'难点分析',children:[
                        {title:'内容管理',path:'/'},
                        {title:'类别管理',path:'/'},
                        {title:'评论管理',path:'/'}
                    ]},
                    {title:'资源管理',children:[
                        {title:'内容管理',path:'/'},
                        {title:'类别管理',path:'/'},
                        {title:'评论管理',path:'/'}
                    ]},
                    {title:'商品管理',children:[
                        {title:'内容管理',path:'/goods/content/list'},
                        {title:'类别管理',path:'/'},
                        {title:'评论管理',path:'/'}
                    ]},
                    {title:'订单管理',children:[
                        {title:'订单列表',path:'/'},
                    ]}
                ]
            }
        },
    }
</script>

<style scoped lang='less'>
    .aside{
        height: 100%;
        .el-menu{
            height: 100%;
            text-align: left;
            .el-menu-item{
                a{
                    color:#fff;
                    text-decoration: none;
                }
            }
        }
    }
</style>