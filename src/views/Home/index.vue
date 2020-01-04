<template>
  <div class="box">
    <div class="left" />
    <div class="right">
      <box-item :data="data" />
    </div>
  </div>
</template>
<script>
import BoxItem from '../../components/Box'
export default {
  components: {
    BoxItem
  },
  computed: {
    data() {
      return this.$store.state.seatinfo.data
    }
  }
}
</script>
<style   scoped>
.box {
  display: flex;
  height: 100%;
}
.left {
  background-color: rgba(121, 121, 121, 0.158);
  width: 25%;
  height: 100%;
  overflow: scroll;
}
.right {
  width: 75%;
  height: 100%;
  overflow: scroll;
}
</style>
