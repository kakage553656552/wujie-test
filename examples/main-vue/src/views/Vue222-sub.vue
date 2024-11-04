<template>
  <!--单例模式，name相同则复用一个无界实例，改变url则子应用重新渲染实例到对应路由 -->
  <WujieVue width="100%" height="100%" name="vue222" :url="vue222Url"></WujieVue>
</template>

<script>
import hostMap from "../../wujie-config/hostMap";

export default {
  computed: {
    vue222Url() {
      return hostMap("//localhost:9999/") + `#/${this.$route.params.path}`;
    },
  },
  methods: {
    jump(name) {
      this.$router.push({ name });
    },
  },
};
</script>

<style lang="scss" scoped></style>
