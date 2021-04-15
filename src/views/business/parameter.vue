<template>
  <div class="tab-container">
    <el-row :gutter="10" style="margin-top: 30px;margin-bottom: 20px;display:flex;align-items:center">
      <el-col :span="1.3">
        <div class="grid-content">
          <el-button type="primary" class="btn" @click="add">新增</el-button>
        </div>
      </el-col>
      <el-col :span="1.2">
        <div class="grid-content">
          总数据：{{total}}
        </div>
      </el-col>
    </el-row>

    <el-card class="box-card" style="width: 95%;margin: 0 auto;">
      <el-table :data="tableData" height="650">
        <el-table-column prop="a" label="公众号名称"> </el-table-column>
        <el-table-column prop="a" label="APPID"></el-table-column>
        <el-table-column prop="a" label="APPSecret"> </el-table-column>
        <el-table-column prop="a" label="创建时间"> </el-table-column>
        <el-table-column label="操作" width="160" align="center">
          <template slot-scope="scope">
            <el-button @click.stop.prevent="update(scope.row)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>


<!--    新增/修改弹窗-->
    <el-dialog
        :visible.sync="isVisible"
        :title="addFundDialog">
      <div class="form">
        <el-form
            ref="form"
            :model="form"
            :rules="formRules"
            label-width="120px"
            style="margin:10px;width:auto;" label-position="left">

          <el-form-item prop='name' label="公众号名称:">
            <el-input type="text" class="inputWidth" v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item prop='appID'  label="APPID:">
            <el-input type="text" class="inputWidth" v-model.number="form.appID"></el-input>
          </el-form-item>

          <el-form-item prop='appSecret' label="APPSecret:">
            <el-input type="text" class="inputWidth" v-model.number="form.appSecret"></el-input>
          </el-form-item>

          <el-form-item  class="text_right">
            <el-button @click="isVisible = false">取 消</el-button>
            <el-button type="primary" @click='onSubmit("form")'>保 存</el-button>
          </el-form-item>

        </el-form>
      </div>
    </el-dialog>


  </div>
</template>

<script>
export default {
  name: "parameter",
  data(){
    return{
      tableData:[
        {a:'XXX'}
      ],
      total:0,

    //  弹窗
      isVisible:false,
      addFundDialog:'新增',
      form:{
        name:'',
        appID:'',
        appSecret:'',
      },
      formRules:{
        name: [
          {required: true, message : '公众号名称不能为空！',trigger : 'blur'}
        ],
        appID: [
          {required: true, message : 'APPID不能为空！',trigger : 'blur'}
        ],
        appSecret: [
          {required: true, message : 'APPSecret不能为空！',trigger : 'blur'}
        ],
      },
    }
  },
  created(){

  },
  methods:{

  //  新增
    add(){
      this.$data.addFundDialog = '新增';
        this.$data.isVisible = true;
    },

  //  修改
    update(){
      this.$data.addFundDialog = '修改';
      this.$data.isVisible = true;
    },

  // 提交
    onSubmit(form){
      this.$refs[form].validate((valid) => {
        if (valid) {//表单数据验证完成之后，提交数据;
          let formData = this[form];
          const para = Object.assign({}, formData)
          // edit
          if(this.addFundDialog.type === 'edit'){
            // updateMoney(para).then(res => {
            //   this.$message({
            //     message: '修改成功',
            //     type: 'success'
            //   })
            //   this.$refs['form'].resetFields()
            //   this.isVisible = false
            //   this.$emit('getFundList');
            // })
          }else{
            // add
            // addMoney(para).then(res => {
            //   this.$message({
            //     message: '新增成功',
            //     type: 'success'
            //   })
            //   this.$refs['form'].resetFields()
            //   this.isVisible = false
            //   this.$emit('getFundList');
            // })
          }
        }
      })
    },

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.tab-container {
  padding-bottom: 30px;
  /deep/ .permission-alert {
    width: 320px;
    margin-top: 30px;
    background-color: #f0f9eb;
    color: #67c23a;
    padding: 8px 16px;
    border-radius: 4px;
    display: block;
  }
  /deep/ .permission-tag {
    background-color: #ecf5ff;
  }
  .30 {
  width: 50%;
}
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .btn {
    margin-left: 45px;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }


  .inputWidth{
    width: 210px;
  }
}
</style>

/*****
资源提交依赖 . 备注  
*****/ 