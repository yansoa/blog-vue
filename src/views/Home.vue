<script setup>
import Aside from './layout/components/Aside.vue'
import Main from './layout/components/Main.vue'
import Footer from './layout/components/Footer.vue'
import Header from './layout/components/Header.vue'
</script>
<template>
    <div class="common-layout">
        <el-container class="el-container">
            <Aside></Aside>
            <el-container class="el-container__el-container">
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
            </el-container>
        </el-container>
    </div>
</template>
<style lang="less" scoped>
.el-container {
    /* 100%: 只是铺满当前的元素，也就是它会受限于父元素 */
    /* vh: 不会受限于父元素 */
    height: 100vh;
    width: 100vw;

    .el-container__el-container {
        /* 网页变成弹性布局 */
        display: flex;
        flex-direction: column;
    }
}

#app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
</style>