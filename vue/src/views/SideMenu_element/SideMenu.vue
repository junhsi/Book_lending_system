<template>
    <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#fff">

                <router-link :to="menu.path" v-for="menu in menuList">
                    <el-menu-item :index="menu.name">
                        <template #title>{{menu.title}}</template>
                    </el-menu-item>
                </router-link>

                <el-sub-menu :index="library.name" v-for="library in libraryList">
                    <template #title>{{library.title}}</template>
                    <router-link :to="item.path" v-for="item in library.children">
                        <el-menu-item :index="item.name">{{item.title}}</el-menu-item>
                    </router-link>
                </el-sub-menu>

    </el-menu>
</template>



<script>

export default {
    name: 'SideMenu',
    data() {
        return {
            menuList: [
                {
                    name: 'title',
                    title: '首頁',
                    path: '/index',
                    component: '../Index.vue',
                    children: []
                },
                {
                    name: 'userinfo',
                    title: '使用者訊息',
                    path: '/SideMenu_element/userinfo',
                    component: '/UserInfo.vue',
                    children: []
                }
            ],
            libraryList: [
                {
                    name: 'library',
                    title: '圖書館藏書',
                    path: '',
                    children: [
                        {
                            name: 'book_borrowed',
                            title: '已借閱',
                            path: '/SideMenu_element/book_borrowed',
                            component: '/Book_borrowed.vue', 
                            children: []
                        },
                        {
                            name: 'book',
                            title: '所有藏書',
                            path: '/SideMenu_element/book',
                            component: '/Book.vue',
                            children: []
                        },
                    ]
                }
            ]
        }
    },
    methods: {

    }
}

</script>


<style scoped>

    .el-menu-vertical-demo {
        height: 100%;
    }

</style>