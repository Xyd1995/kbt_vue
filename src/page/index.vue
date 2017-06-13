<template>
	<div id="page-index">
		<p @click="Path">跳转</p>
	</div>
</template>

<script>
export default {
  data () {
    return {
      txt: '你好来自page文件'
    }
  },
  methods: {
    Path: function () {
      var _this = this
      setTimeout(function () {
        _this.$router.push({path: '/test'})
      }, 2000)
    }
  }
}
</script>

<style>
</style>
