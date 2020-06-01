<template>
    <div class="login-style">

        <div class="from-style">
            <div class="name">登录系统</div>
            <el-form :label-position="left" label-width="80px" :model="formLabelAlign">
                <div>
                    <el-input v-model="formLabelAlign.name"></el-input>
                </div>
                <div >
                    <el-input v-model="formLabelAlign.region"></el-input>
                </div>
                <el-checkbox-group v-model="formLabelAlign.type">
                    <el-checkbox label="记住密码" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form>
            <div >
                <el-button type="primary" class="buttom-w" @click="login">登录</el-button>
            </div>

        </div>








    </div>
</template>
<script>
export default {
    data(){
        return {
            formLabelAlign:{
                name:'',
                region:'',
                type:[],
            },

        }
    },
    methods:{
        login:function () {
          this.$router.push('/HelloWorld');
        }
    }

}
</script>
<style>
    .name{
        font-size: 20px;
        font-weight: bold;
    }
    .buttom-w{
        width:100%;

    }
.login-style{
    width:100%;
    height:100%;



}
    .from-style{
        line-height: 60px;
        width: 25%;
        border-radius: 20px;
        background-color: #FFFFFF;
        padding:50px 50px;
        box-shadow: 0px 0px 22px 5px #eeeeee;
        position:absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
</style>
