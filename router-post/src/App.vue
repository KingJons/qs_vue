<template>
  <div id="app">
    <el-badge class="item" :value="1" :max="9">
      <el-button size="medium" @click="addComment" nativeType="submit">评论</el-button>
    </el-badge>
    <el-badge class="item" :value="10" :max="9" isDot>
      <el-button type="primary" size="mini" :disabled="saveDisabled" @click="doSave">发布</el-button>
    </el-badge>
    <el-badge class="item" :value="10" :max="9">
      <el-button type="text" size="small">前往</el-button>
    </el-badge>
  </div>
</template>

<script>
import ElBadge from '@/components/ElBadge'
import ElButton from '@/components/ElButton'
export default {
  name: 'app',
  data(){
    return {
      saveDisabled: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.saveDisabled = true
    },5000)
  },
  components: {
    ElButton,
    ElBadge
  },
  methods: {
    addComment() {
      console.log('添加评论');
    },
    doSave() {
      console.log('发布');
    }
  }
}
</script>

<style>

</style>
