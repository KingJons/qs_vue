<template>
    <div class="comment">
        <comment-form @addComment="addComment"></comment-form>
        <comment-List :List="List"/>
        <pagination @transferPage="getPage" :totalCount="totalCount" :currentPage="currentPage"/>
    </div>
</template>
<script>
import CommentForm from './CommentForm.vue';
import CommentList from './CommentList.vue';
import Pagination from './Pagination.vue';
export default {
    data(){
        return {
            totalCount: 0,
            currentPage: 1,
            pagesize: 3,
            totalData: [],
            List: []
        }
    },
    methods: {
        addComment (msg) {
            console.log(msg);
            this.totalData.push({text:msg});
            this.totalCount = this.totalData.length;
            // 数据驱动界面
            // 单向数据绑定 v-bind:(数据) = ""  data => template
            // 双向数据绑定 input -> data  data <=> template  性能差些
            if (this.totalCount <= this.pagesize) {
                this.List = this.totalData;
            } else {
                this.List = this.totalData.slice(this.totalCount - this.pagesize);
            }
            this.currentPage = 1;
            this.List.reverse();
        },
        getPage (curr) {
            this.currentPage = curr;
            if(this.totalCount <= this.pagesize) {
                this.List = this.totalData;
            }else {
                let pages = Math.ceil(this.totalCount / this.pagesize);
                let res = this.totalCount % this.pagesize;
                let start = this.totalCount - this.currentPage * this.pagesize;
                if(start < 0) start = 0;
                this.List = this.totalData.slice(start, start + this.pagesize);
            }
            this.List.reverse();
        }
    },
    components: {
        Pagination,
        CommentForm,
        CommentList
    }
}
</script>
<style>

</style>
