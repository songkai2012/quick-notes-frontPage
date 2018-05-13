<template>
  <div class="chip">
    <div class="container">1212121</div>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  name: 'index',
  data () {
    return {
      pageId: '01020420',
      activityId: '00122153'
    }
  },

  components: {

  },

  created () {

  },

  mounted () {
  },

  activated () {

  },

  methods: {

  },

  computed: {

  },

  filters: {

  }
}
</script>

<style scoped type="text/less" lang="less">
  @import '../style/index.less';

  .chip{
    .container{
      width: 700px;
      height: 150px;
      background: red;
      .regular(12px);
    }
  }
</style>
