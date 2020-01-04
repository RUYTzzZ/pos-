<template>
  <div id="app">
    <div id="container">
      <router-view />
    </div>
    <div id="tabbar">
      <cube-tab-bar
        v-model="selectedLabelDefault"
        :show-slider="true"
        :data="tabs"
        :use-transition="true"
        @change="changeHandler"
      />
    </div>
  </div>
</template>
<script>
import { seat } from '../api/Home'

export default {

  // 要用到哪些子组件（如果组件已是最小粒度，那么可省略该属性）
  components: {
    // ChildComponents
  },
  data() {
    return {
      selectedLabelDefault: '/index/home',
      tabs: [
        {
          label: '位置',
          icon: 'cubeic-home',
          value: '/index/home'
        },
        {
          label: '菜单',
          icon: 'cubeic-like',
          value: '/index/menu'
        },
        {
          label: '订单',
          icon: 'cubeic-vip',
          value: '/index/order'
        },
        {
          label: '我的',
          icon: 'cubeic-person',
          value: '/index/my'
        }
      ]
    }
  },

  computed: {},
  created() {
    seat().then(data => {
      this.$store.commit('setseatinfo', data.data)
      console.log(data.data)
    })
  },

  methods: {
    // clickHandler(label) {
    //   // if you clicked home tab, then print 'Home'
    //   console.log(label);
    // },
    changeHandler(path) {
      console.log(path)
      this.$router.push(path)
    }
  }
}
</script>
<style  >
html,
body,
#app {
  width: 100%;
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
}

#container {
  flex: 1;
  overflow: scroll;
}
#tabbar {
  font-size: 20px;
  background-color: rgb(238, 238, 238);
}
</style>
