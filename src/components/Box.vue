<template>
  <div>

    <div v-for="(item ) in data" :key="item">
      <div class="boxitem">
        <div>{{ item.description }}</div>
      </div>
      <div style="height:20px" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => {}
    }
  }
}
</script>
<style   scoped>
.boxitem {
  background: rgb(238, 246, 248);
  height: 60px
}
</style>
