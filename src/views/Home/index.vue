<template>
  <div class="goods">
    <div ref="menuWrapper" class="menu-wrapper">
      <ul>
        <li
          v-for="(item, index) in item1"
          :key="item"
          class="menu-item"
          :class="{ current: currentIndexnum === index }"
          @click="selectMenu(index, $event)"
        >
          <span class="text border-1px">{{ item }}</span>
        </li>
      </ul>
    </div>
    <div ref="foodsWrapper" class="foods-wrapper">
      <ul>
        <li v-for="item in item1" :key="item" class="food-list food-list-hook">
          <h1 class="title">{{ item }}dd</h1>
          <ul>
            <!-- eslint-disable-next-line vue/no-template-shadow -->
            <li v-for="item in item2" :key="item" class="food-item border-1px">
              {{ item }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'

export default {
  data() {
    return {
      leftclick: false,
      listHeight: [],
      currentIndexnum: 0,
      scrollY: 0,
      item1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88],
      item2: ['a', 'b', 'c', 'd', 'e', 'f']
    }
  },
  watch: {
    currentIndexnum(value) {
      console.log('watch')

      this.scroolmenuitem(value - 3)
    }
  },
  created() {
    this.$nextTick(() => {
      this._initScroll()
      this._calulateHeight()
    })
  },
  methods: {
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 3
      })
      this.foodsScroll.on('scroll', pos => {
        if (this.leftclick) {
          return
        }
        this.scrollY = Math.abs(Math.round(pos.y))

        for (let i = 0; i < this.listHeight.length; i++) {
          const height1 = this.listHeight[i]
          const height2 = this.listHeight[i + 1]
          if (this.scrollY >= height1 && this.scrollY < height2) {
            this.currentIndexnum = i
          }
        }
      })
    },
    _calulateHeight() {
      const foodList = this.$refs.foodsWrapper.getElementsByClassName(
        'food-list-hook'
      )

      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < foodList.length; i++) {
        const item = foodList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },

    scroolmenuitem(index) {
      const menuitemlist = this.$refs.menuWrapper.getElementsByClassName(
        'menu-item'
      )
      const el = menuitemlist[index]
      this.menuScroll.scrollToElement(el, 300)
    },
    leftclickfalse() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(false)
        }, 600)
      })
    },
    selectMenu(index, event) {
      if (!event._constructed) {
        return
      }
      this.leftclick = true
      this.currentIndexnum = index
      const foodList = this.$refs.foodsWrapper.getElementsByClassName(
        'food-list-hook'
      )
      const el = foodList[index];
      (async() => {
        this.foodsScroll.scrollToElement(el, 300)
        this.leftclick = await this.leftclickfalse()
      })()
    }
  }
}
</script>

<style lang="stylus" scoped>
border-1px($color) {
  position: relative;

  &:after {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border: 1px solid $color;
    content: '';
  }
}

.goods {
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;

  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;

    .menu-item {
      display: table;
      height: 54px;
      width: 56px;
      padding: 0 12px;
      line-height: 14px;

      &.current {
        background: #ffffff;
        font-weight: 700;
      }

      .text {
        display: table-cell;
        width: 56px;
        vertical-align: middle;
        border-1px(rgba(7, 17, 27, 0.1));
        font-size: 12px;
      }
    }
  }

  .foods-wrapper {
    flex: 1;

    .title {
      padding-left: 14px;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9dde1;
      font-size: 12px;
      color: rgb(147, 153, 159);
      background: #f3f5f7;
    }

    .food-item {
      display: flex;
      margin: 18px;
      padding-bottom: 18px;
      border-1px(rgba(7, 17, 27, 0.1));
    }
  }
}
</style>
