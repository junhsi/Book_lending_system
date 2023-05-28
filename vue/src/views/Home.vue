<template>
<el-container>
  <el-aside width="200px">
      <SideMenu></SideMenu>
  </el-aside>

  <el-container>
    <el-header>
      <strong>圖書借閱系統</strong>
      <div class="header-avater">
          <el-avatar size="medium" src="userinfo.avater"/>

          <el-dropdown>
              <span class="el-dropdown-link">
                {{userinfo.username}}<i class="el-icon-arrow-down el-icon--right"></i>
              <el-icon class="el-icon--right">
                  <arrow-down />
              </el-icon>
              </span>
              <template #dropdown>
              <el-dropdown-menu>
                  <el-dropdown-item>
                    <router-link to="/SideMenu_element/userinfo">會員中心</router-link>
                  </el-dropdown-item>
                  <el-dropdown-item @click.native="logout">登出</el-dropdown-item>
              </el-dropdown-menu>
              </template>
          </el-dropdown>

          <el-link href="/login" target="_blank">連結1</el-link>
          <el-link href="/login" target="_blank">連結2</el-link>
      </div>
	  </el-header>

    <el-main>
      <router-view></router-view>
    </el-main>

  </el-container>
</el-container>
</template>





<script>

import SideMenu from "./SideMenu_element/SideMenu";
  export default {
      name: 'Home',
      components: {
          SideMenu
      },
      data() {
        return {
          userinfo: {
            id: "",
            username: "",
            avater: ""
          }
        }
      },
      created() {
        this.getUserInfo()
      },
      methods: {
        getUserInfo() {
          this.$axios.get("/SideMenu_element/userinfo").then(res => {
            this.userinfo = res.data.data
          })
        },
        logout() {
          this.$axios.post("/logout").then(res => {
            localStorage.clear()
            sessionStorage.clear()
            this.$store.commit("resetState")
            this.$router.push("/")
          })
        }
      }
  }

</script>
  


<style scoped>

.el-container {
      height: 100%;
  }

  .header-avater {
      float: right;
      width: 210px;
      display: flex;
      justify-content: space-around;
      align-items: center;
  }

  .el-header {
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 60px;
  }

  .el-aside {
      background-color: #D3DCE6;
      color: #333;

      line-height: 200px;
  }

  .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      line-height: 160px;
  }

  .el-dropdown-link {
      cursor: pointer;
      color: #409EFF;
  }
  .el-icon-arrow-down {
      font-size: 12px;
  }

</style>