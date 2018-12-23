<template>
    <div id="lista">
        <br>
        <el-card class="box-card">
        <div slot="header" class="clearfix">
            <h1>Listado</h1>
        </div>
        <table @formulario_datos="recibir(objeto)"/>
        {{datos}}
        </el-card>
    </div>
</template>
<script>
/* eslint-disable */
    export default{
        name:'lista',
        data:function(){
                return{
                    datos:''
                }
            },
        methods:{
            recibir:function(objeto){
                console.log('estoy en lista '+objeto)
                this.datos = objeto
            },
        }
    }
</script>