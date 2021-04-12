<template>
  <div id="app" :style="{height:fullHeight}">
    <router-view/>
  </div>

</template>

<script >
export default {
  name: 'App',
  data () {
    return {
      fullHeight: document.documentElement.clientHeight
    }
  },
  created: function () {
    if (sessionStorage.getItem("store") ) {
      this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
      sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
  },
  mounted: function () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.fullHeight = document.documentElement.clientHeight
        that.fullHeight = window.fullHeight + 'px'
      })()
    };

  },
  methods: {
  }
}
</script>

<!--全局样式-->
<style lang="scss">
  @import "assets/css/App/App.scss";
</style>
<!--<style  src="@/assets/css/App/App.scss"></style>-->