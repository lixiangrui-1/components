<template>
  <a-collapse v-model:activeKey="activeKey" accordion>
    <a-collapse-panel :header="item.key" v-for="(item, index) of ui" :key="index">
      <div v-for="(item,index) of item.value" :key="index">{{item}}</div>
    </a-collapse-panel>
  </a-collapse>
</template>
<script>
export default {
  setup() {
    const ui = [{key:'基本组件',value: [1,2,4]}]
    return {
        ui
    };
  },
};
</script>