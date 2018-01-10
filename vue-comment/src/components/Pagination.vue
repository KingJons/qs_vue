<template>
  <div>
      <el-col :span="24" class="pagination">
          <el-pagination layout="prev, pager, next" :current-page="currentPage" :page-size="pagesize" :total="totalCount" style="float:right;" @current-change="handleCurrentPage"></el-pagination>
      </el-col>
  </div>
</template>
<script>
export default {
    data() {
        return {
            pagesize: 3
        }
    },
    props: ['totalCount', 'currentPage'],
    methods: {
        handleCurrentPage (val) {
            this.$emit('transferPage', val);
        }
    }
}
</script>
<style>
.toolbar {
  background: #f2f2f2;
  padding: 10px;
  margin: 10px 0px;
}
.el-form-item {
  margin-bottom: 10px;
}

</style>
