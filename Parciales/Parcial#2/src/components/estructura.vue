<template>
  <div id="estructura">
        <el-container>
            <el-container>
                <el-header height="">
                </el-header>
                <el-main height="">
                    <formulario/>
                    <lista/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
/* eslint-disable */
import lista from './lista.vue'
import formulario from './formulario.vue'

export default {
  name: 'estructura',
  components:{
      formulario,
      lista
  },
  data(){
        return{
        }
    }
}
</script>