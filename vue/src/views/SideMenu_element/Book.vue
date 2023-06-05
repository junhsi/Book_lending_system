<template>

    <div style="width: 100%">
        <el-table
            :data="tableData"
            border
            style="width: 100%; height: 100%;">
            <el-table-column
                prop="isbn"
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
                prop="introduction"
                label="介紹"
                width="200">
            </el-table-column>
        </el-table>
    </div>

</template>
  
  
<script>

export default {
    name: 'Book',
    data() {
        return {
            tableData: null
        }
    },
    created(){
        this.$axios.get('http://localhost:8181/allbook').then(res => {
            console.log(res.data)
            this.tableData = res.data;
        })
    }
}


</script>
    
  
  
<style scoped>



</style>