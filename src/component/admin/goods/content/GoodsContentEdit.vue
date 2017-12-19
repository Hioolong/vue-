<template>
    <div>
        <!-- 面包屑导航 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>购物商城</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>编辑商品</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 修改商品表单 -->
        <section class="edit">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="edit_form">
                <el-form-item label="内容标题" prop="title">
                    <el-input v-model="ruleForm.title"></el-input>
                </el-form-item>

                <el-form-item label="副标题" prop="sub_title">
                    <el-input v-model="ruleForm.sub_title"></el-input>
                </el-form-item>

                <el-form-item label="所属类别" prop="category_id">
                    <el-select v-model="ruleForm.category_id" placeholder="请选择所属类别">
                    <el-option v-for="item in goodsCategory" :key="item.category_id" :label="item.title" :value="item.category_id">
						<span v-for="i in (item.class_layer -1)" :key="i">&nbsp;</span>
						<span v-if="item.class_layer!=1">|-</span>
						<span>{{ item.title }}</span>
					</el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="是否发布" required prop="status">
                    <el-switch v-model="ruleForm.status"></el-switch>
                </el-form-item>

                <el-form-item label="推荐类型" required>
                    <el-switch v-model="ruleForm.is_slide" active-text="轮播图"></el-switch>
                    <el-switch v-model="ruleForm.is_top" active-text="置顶"></el-switch>
                    <el-switch v-model="ruleForm.is_hot" active-text="热度"></el-switch>
                </el-form-item>

                <el-form-item label="上传封面">
                    <el-upload class="upload-demo" :action="uploadImgUrl"
						:file-list="ruleForm.imgList" :on-success="imgUploadHandler" list-type="picture">
						<el-button size="small" type="primary">点击上传</el-button>
					</el-upload>
                </el-form-item>

                <el-form-item label="上传附件">
                    <el-upload class="upload-demo" :action="uploadFileUrl"
						multiple  :on-success="fileUploadHandler" :file-list="ruleForm.fileList">
						<el-button size="small" type="primary">点击上传</el-button>
					</el-upload>
                </el-form-item>

                <el-form-item label="商品货号" prop="goods_no">
                    <el-input v-model="ruleForm.goods_no"></el-input>
                </el-form-item>

                <el-form-item label="库存数量" prop="stock_quantity">
                    <el-input v-model="ruleForm.stock_quantity"></el-input>
                </el-form-item>

                <el-form-item label="市场价格" prop="market_price">
                    <el-input v-model="ruleForm.market_price"></el-input>
                </el-form-item>

                <el-form-item label="销售价格" prop="sell_price">
                    <el-input v-model="ruleForm.sell_price"></el-input>
                </el-form-item>
				
                <el-form-item label="内容摘要" prop="zhaiyao">
                    <el-input type="textarea" v-model="ruleForm.zhaiyao"></el-input>
                </el-form-item>

                <el-form-item label="详细内容" prop="content">
                    <el-input type="textarea" v-model="ruleForm.content"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>

<script>
  export default {
    data() {
      return {
          id:this.$route.params.id,
		  goodsCategory:[],
		  uploadImgUrl: this.$domain + this.$api.atImg,
		  uploadFileUrl: this.$domain + this.$api.atFile,
          ruleForm: {
              title: "Hazzys哈吉斯2017新款男士长袖衬衫纯棉修身英伦衬衫显瘦商务衬衣",
              sub_title: "英伦轻奢 专柜同款 为不凡而生",
              category_id: "",
              goods_no: "NZ0000000002",
              stock_quantity: 200,
              market_price: 1000,
              sell_price: 800,
              status: true,
              is_slide: true,
              is_top: false,
              is_hot: true,
              zhaiyao: "Hazzys哈吉斯2017",
              content: "<p><strong>产品参数：</strong></p>",
              imgList: [
                      {
                          name: "wTgAWDLpQReTQ-ZOMdlAk4vF.jpg",
                          url: "http://139.199.192.48:6060/imgs/wTgAWDLpQReTQ-ZOMdlAk4vF.jpg",
                          shorturl: "/imgs/wTgAWDLpQReTQ-ZOMdlAk4vF.jpg"
                      }
                  ],
              fileList: [
                      {
                          uid: 34,
                          name: "HN5d4_wrbsUk5KQNjzYSGGwm.jpg",
                          url: "http://139.199.192.48:6060/imgs/HN5d4_wrbsUk5KQNjzYSGGwm.jpg",
                          shorturl: "/imgs/HN5d4_wrbsUk5KQNjzYSGGwm.jpg"
                      }
                  ]
          },
          rules: {
            title: [
                { required: true, message: '请输入内容标题', trigger: 'blur' },
            ],
            category_id: [
                { required: true, message: '请选择所属类别', trigger: 'blur' }
            ],
            zhaiyao: [
                {  required: true, message: '请填写内容摘要', trigger: 'blur' }
            ],
            content: [
                { required: true, message: '请填写详细内容', trigger: 'blur' }
            ]
          }
      };
    },
    methods: {
        // 获取商品详情
        getGoodData(){
            this.$http.get(this.$api.gsDetail + this.id)
                .then(res => {
					// 将category_id从string类型转换为number类型
					res.data.message.category_id = +res.data.message.category_id;
                    this.ruleForm = res.data.message;
                })
		},
		// 修改商品信息
		modifyGood(){
			this.$http.post(this.$api.gsEdit + this.id, this.ruleForm)
				.then( res => {
					this.$message(res.data.message);
				})
		},
		// 图片上传成功后的处理函数
		imgUploadHandler(newImg){
			// 图片只能有一张，所以要覆盖之前那一张
			this.ruleForm.imgList = [newImg];
		},
		// 文件上传成功后的处理函数
		fileUploadHandler(newFile){
			// 文件可以上传多个，所以push进去
			this.ruleForm.fileList.push(newFile);
		},
		getGoodsCategory(){
			this.$http.get(this.$api.ctList + 'goods')
				.then(res => {
					this.goodsCategory = res.data.message;
				})
		},
        submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
						this.modifyGood();//post请求
					}
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
    created(){
		this.getGoodData();
		this.getGoodsCategory();
    }
  }
</script>

<style scoped lang='less'>
    .el-breadcrumb{
        padding-bottom: 13px;
        border-bottom: 1px solid #ccc;
    }
    .edit{
        padding-top: 12px;
        border: 1px solid #ccc;
        border-radius: 10px;
        margin-top: 12px;
        &_form{
            width: 700px;
        }
    }
</style>