<template>
  <div class="login-page" :style="{backgroundImage: 'url(' + BackImg + ')',height:windHeight}">
    <div class="loginBox">
      <div class="loginBoxForm">
        <img src="../../assets/img/velg.jpeg" alt="" class="loginBoxFormImg">
        <div class="loginBoxFormTit">THE ERP FRAMEWORK</div>
        <el-form label-position="right" label-width="80px" ref="formLogin" :model="formLogin" :rules="rules" style="margin-top: 40px">
          <el-form-item label="用户名称:" prop="name">
            <el-input v-model="formLogin.name" clearable></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="pwdWord">
            <el-input v-model="formLogin.pwdWord" clearable show-password></el-input>
          </el-form-item>

        </el-form>

        <el-button type="primary" class="loginBoxFormBtn" @click="submitForm('formLogin')">登 陆</el-button>
      </div>
    </div>
  </div>
</template>

<script src="@/assets/js/login/login.js"></script>

<style scoped lang="scss">
  @import "src/assets/css/login/login.scss";
</style>