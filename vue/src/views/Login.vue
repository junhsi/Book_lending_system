<template>
  <el-row class="row-bg" justify="center">

    <el-col :xl="6" :lg="7">
      <h2>這是我</h2>
      <el-image :src="require('@/assets/junhsi.jpg')"></el-image>
      <p>很高興認識你</p>
      <p>登入需求請右轉</p>
    </el-col>

    <el-col :span="1">
      <el-divider direction="vertical" ></el-divider>
    </el-col>

    <el-col :span="6" xl="6" lg="7" class="col-right">

      <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="demo-loginForm">
        <el-form-item label="帳號" prop="username" style="width: 380px;">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密碼" prop="password" style="width: 380px;">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item label="驗證瑪" prop="code" style="width: 380px;">
          <el-input v-model="loginForm.code" style="width: 172px; float: left"></el-input>
          <el-image :src="captchaImg" class="captchaImg"></el-image>
        </el-form-item>


        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">登入</el-button>
          <el-button @click="resetForm('loginForm')">清空</el-button>
        </el-form-item>
      </el-form>

    </el-col>

  </el-row>

</template>

<script>

export default {
  name: 'Login',
  data() {
      return {
        loginForm: {
          username: '',
          password: '',
          code: '',
          token: ''
        },
        rules: {
          username: [
            { required: true, message: '請輸入手機號碼', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '請輸入密碼', trigger: 'blur' }
          ],
          code: [
            { required: true, message: '請輸入驗證瑪', trigger: 'blur' },
            { min: 4, max: 4, message: '長度為 4 個字符', trigger: 'blur' }
          ],
        },
        captchaImg: null
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('submit!!');
            this.$axios.post('/login', this.loginForm).then(res => {
              const jwt = res.headers['authorization']
              this.$store.commit('SET_TOKEN', jwt)
              this.$router.push("/index")
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      getCaptcha() {
        this.$axios.get('/captcha').then(res => {
          console.log("/captcha")
          console.log(res)
          this.loginForm.token = res.data.data.token
          this.captchaImg = res.data.data.captchaImg
        })
      }
    },
    created() {

    }
  }
</script>

<style scoped>

  .row-bg {
    background-color: #FAFAFA;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
  }

  .el-divider {
    height: 200px;
  }


  .captchaImg {
    float: left;
    margin-left: 8px;
    border-radius: 4px;
    height: 40px;
    width: 100px;
  }

</style>