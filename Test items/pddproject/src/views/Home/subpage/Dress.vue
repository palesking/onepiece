<template>
  <div class="dress">
      <van-grid :column-num="5" id="grid" style="margin-top:-6px">
        <van-grid-item v-for="(item) in categorys" :key="item.id" :icon="item.img" :text="item.title" />
      </van-grid>
  </div>
</template>

<script>

export default {
  name: 'dress',
  data() {
    return {

    }
  },
  
}
</script>