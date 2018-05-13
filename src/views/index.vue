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
      .regular(12px);
      .el-row {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .el-col {
        border-radius: 4px;
      }
      .bg-purple-dark {
        background: #99a9bf;
      }
      .bg-purple {
        background: #d3dce6;
      }
      .bg-purple-light {
        background: #e5e9f2;
      }
      .grid-content {
        border-radius: 4px;
        min-height: 36px;
      }
      .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
      }
    }
  }
</style>
