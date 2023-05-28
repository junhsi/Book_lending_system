<template>

<div style="width: 100%">
    <el-table
        :data="tableData"
        border
        style="width: 100%; height: 100%;">
        <el-table-column
            fixed
            prop="id"
            label="ISBN"
            width="150">
        </el-table-column>
        <el-table-column
            prop="name"
            label="書名"
            width="600">
        </el-table-column>
        <el-table-column
            prop="author"
            label="作者"
            width="350">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="介紹"
            width="200">
        </el-table-column>
    </el-table>

        <el-pagination
            background
            layout="prev, pager, next"
            page-size="10"
            :total="this.total"
            @current-change="page">
        </el-pagination>

    </div>

</template>
  
  
<script>

    export default {
    name: 'Book_borrowed',
    data() {
        return {
            tableData: null,
            total: null
        }
    },
    created(){
        /*
        this.$axios.get('http://localhost:8181/book/allbook').then(res => {
            console.log(res)
            this.tableData = res.data.content;
            this.total = res.data.totalElements;
        })
        */
    }
}
</script>
    
  
  
<style scoped>



</style>