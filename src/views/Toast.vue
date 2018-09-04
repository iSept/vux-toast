<template>
  <div id="home">
    <div class="example">
      <button @click="showToast">showToast</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      show: false
    }
  },
  methods: {
    showToast () {
      this.$toast({
        // value: true,
        message: '这里是提示信息',
        duration: '3000',
        overlay: false
      })
    }
  }
}
</script>

<style lang="less">
.example {
  text-align: center;
  margin-bottom: 20px;
  button {
    border: 1px solid #ccc;
    height: 30px;
    background: #fff;
  }
}
</style>
