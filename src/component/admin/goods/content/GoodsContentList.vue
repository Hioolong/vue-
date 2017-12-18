<template>
    <div class="list">
        <!-- 面包屑导航 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>购物商城</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>内容管理</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 工具条 -->
        <section class="list_tool">
            <!-- 按钮 -->
            <div class="list_tool_btns">
                <el-button plain icon="el-icon-plus" size="small" @click="toAddGood">新增</el-button>
                <el-button plain icon="el-icon-check" size="small" @click="toggleSelection(tablelist)">全选</el-button>
                <el-button plain icon="el-icon-delete" size="small">删除</el-button>
            </div>
            <!-- 搜索框 -->
            <div class="list_tool_search">
                <el-input placeholder="请输入搜索内容" v-model="query.searchvalue" @blur="searchGoods" prefix-icon="el-icon-search" size="small"></el-input>
            </div>
        </section>
        <!-- 表格 -->
        <el-table ref="multipleTable" height="420"  border :data="tablelist" tooltip-effect="dark" style="width: 100%">
            <el-table-column type="selection" width="40"></el-table-column>
            <el-table-column label="标题" width="406" prop="title"></el-table-column>
            <el-table-column prop="categoryname" label="所属类别"></el-table-column>
            <el-table-column prop="stock_quantity" label="库存"></el-table-column>
            <el-table-column prop="market_price" label="市场价"></el-table-column>
            <el-table-column prop="sell_price" label="销售价"></el-table-column>
            <el-table-column label="属性">
                <template slot-scope="scope">
                    <!-- istop? -->
                    <i :class="['el-icon-star-on',scope.row.is_top? 'active':'']"></i>
                    <!-- isslide? -->
                    <i :class="['el-icon-picture',scope.row.is_slide? 'active':'']"></i>
                    <!-- ishot? -->
                    <i :class="['el-icon-service',scope.row.is_hot? 'active':'']"></i>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <a href="javascript:;">修改</a>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页器 -->
         <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :current-page="query.pageIndex" :page-size="query.pageSize" :page-sizes="[10, 20, 30, 40]"
            layout="total, sizes, prev, pager, next, jumper" :total="totalcount">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tablelist:[],
                // 获取商品数据的传输的数据
                query:{
                    pageIndex:1,
                    pageSize:10,
                    searchvalue:''
                },
                // 数据总量
                totalcount:0
            }
        },
        methods: {
            getTabelList() {
                this.$http.get(this.$api.gsList,{params:this.query})
                    .then(res => {
                        console.log(res.data);
                        this.tablelist = res.data.message;
                        this.totalcount = res.data.totalcount;
                    })
            },
            // 监听pagesize变化
            handleSizeChange(pageSize){
                this.query.pageSize = pageSize;
                this.getTabelList();
            },

            // 监听pageIndex变化
            handleCurrentChange(pageIndex){
                this.query.pageIndex = pageIndex;
                this.getTabelList();
            },
            // 搜索商品
            searchGoods(){
                // 此时需要将搜索内容写进query中的searchvalue，再发送请求
                this.getTabelList();
            },
            // 跳转到新增商品组件
            toAddGood(){
                this.$router.push('/goods/content/add');
            },
            // 选择所有商品
            toggleSelection(listArr){
                if(listArr){
                    listArr.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                }else{
                    this.$refs.multipleTable.clearSelection();
                }
            }
        },
        // 生命周期函数
        created(){
            this.getTabelList();
        }
    }
</script>

<style scoped lang="less">
    .list{
        .el-breadcrumb{
            border-bottom: 1px solid #ccc;
            padding-bottom: 10px;
        }
        .el-pagination{
            float: left;
            padding-top: 10px;
        }
        &_tool{
            overflow: hidden;
            padding: 15px 10px;
            border: 1px solid #ccc;
            border-radius: 8px;
            margin-top: 15px;
            &_btns{
                float: left;
            }
            &_search{
                float: right;
            }
        }
    }
    a{
        color: #267cb7;
        text-decoration: none;
    }
</style>