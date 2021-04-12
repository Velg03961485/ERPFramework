<template>
  <div class="dashboard-container" style="background:#fff;padding:220px 0;">
    <img
      src="../../assets/img/welcome.png"
      alt=""
      style="margin:auto;display:block"
    />
    <!-- <component :is="currentRole" /> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import adminDashboard from "./admin";
import editorDashboard from "./editor";

export default {
  name: "Dashboard",
  components: { adminDashboard, editorDashboard },
  data() {
    return {
      currentRole: "adminDashboard",
      pageSize: 10,
      curPage: 1
    };
  },
  computed: {
    ...mapGetters(["roles"])
  },
  methods: {},
  created() {
    sessionStorage.removeItem("businessChannelSearchList")
    if (!this.roles.includes("1")) {
      this.currentRole = "editorDashboard";
    }
  }
};
</script>

