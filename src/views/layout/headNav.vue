<template>
  <header class="head-nav rflex " :style="{ left: headNavWidth + 'px' }" id="header_container">
    <div class="right-nav" ref="rightNav">
      <top-menu></top-menu>
      <div class="userinfo-right rflex">
        <div class="userinfo">
          <el-menu class="el-menu-demo" mode="horizontal">

            <el-submenu index="2" popper-class="infoItem">
              <template slot="title">
                <div class="welcome">
                  <span class="name">{{ $t("commons.hi") }},</span>
                  <span class="name avatarname"> {{ this.uname }}</span>
                </div>
                <img :src="avatar" class="avatar" alt="" />
              </template>
              <el-menu-item index="2-3" @click="setDialogInfo('logout')">{{ $t("commons.quit") }}
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import * as mUtils from "@/utils/mUtils";
import { setToken, getToken } from "@/utils/auth";
import store from "@/store";
import topMenu from "./topMenu";
import wechatImg from "@/assets/img/wechat.jpg";
import qqImg from "@/assets/img/qq.png";
import logoImg from "@/assets/img/logo.png";
import chinaImg from "@/assets/img/china.svg";
import americaImg from "@/assets/img/america.svg";

export default {
  name: "head-nav",
  data () {
    return {
      uname: '用户',
      logo: logoImg,
      langLogo: chinaImg,
      chinaImg: chinaImg,
      americaImg: americaImg,
      wechat: {
        wechatImg: wechatImg,
        isWechat: false
      },
      qq: {
        qqImg: qqImg,
        isQq: false
      },
      menu: {
        userBgcolor: "#f0f2f5"
      }
    };
  },
  components: {
    topMenu
  },
  computed: {
    ...mapGetters(["name", "avatar", "sidebar"]),
    headNavWidth () {
      // return document.body.clientWidth - this.sidebar.width;
      return this.sidebar.width;
    }
  },
  created () { },
  mounted () {
    this.uname = localStorage.getItem('adminUser') || '用户'
  },
  methods: {
    showWechat () {
      this.wechat.isWechat = true;
    },
    hideWechat () {
      this.wechat.isWechat = false;
    },
    showQq () {
      this.qq.isQq = true;
    },
    hideQq () {
      this.qq.isQq = false;
    },
    logout () {
      this.$store.dispatch("LogOut").then(() => {
        location.reload();
      });
    },
    /**
     * 弹出框-修改密码或者系统设置
     * @param {string} cmditem 弹框类型
     */
    setDialogInfo (cmditem) {
      switch (cmditem) {
        case "info":
          this.$router.push("/infoManage/infoShow/infoShow1");
          break;
        case "pass":
          this.$router.push("/infoManage/infoModify/infoModify1");
          break;
        case "logout":
          this.logout();
          break;
      }
    },
    // 切换语言
    changeLocale (type) {
      setToken("lang", type);
      this.$i18n.locale = type;
      if (type === "en") {
        this.langLogo = this.americaImg;
      } else {
        this.langLogo = this.chinaImg;
      }
      setToken("langLogo", this.langLogo);
    }
  }
};
</script>

<style scoped lang='scss'>
.right-nav {
	display: flex;
	flex: 1;
	width: calc(100% - 180px);
	padding-right: 15px;
	justify-content: space-between;
	box-shadow: 0px 2px 5px 0px rgba(237, 233, 233, 0.5);
}
.head-nav {
	position: fixed;
	top: 0;
	right: 0;
	z-index: 29;
	transition: width 0.2s;
	justify-content: space-between;
	height: 60px;
	box-sizing: border-box;
	background: #fff;
	.logout {
		vertical-align: middle;
		cursor: pointer;
	}
}
.middle {
	align-items: center;
	border: 1px solid;
}
.userinfo-right {
	padding: 0 10px;
	justify-content: space-between;
}
.userinfo {
	line-height: 60px;
	text-align: right;
}
.avatar {
	width: 32px;
	height: 32px;
	border-radius: 50%;
	vertical-align: middle;
	display: inline-block;
}
.langAvatar {
	width: 24px;
	height: 24px;
	border-radius: 50%;
	vertical-align: middle;
	display: inline-block;
}
.welcome {
	display: inline-block;
	vertical-align: middle;
	padding: 0 5px;
	.name {
		line-height: 20px;
		text-align: center;
		font-size: 12px;
	}
	.avatarname {
		color: #a9d86e;
		font-weight: bolder;
		font-size: 13px;
	}
}

.userName {
	cursor: pointer;
	margin-right: 5px;
}
.border {
	border: 1px solid;
}
.notify-row {
	line-height: 60px;
	flex: 1;
	ul {
		display: flex;
		justify-content: space-around;
	}
}

ul.top-menu > li {
	position: relative;
}
</style>
