<template>
  <div id="login">
        <el-container>
            <el-container>
                <el-header height="">
                    <!-- Header content -->
                    <el-row :gutter="10">
                        <el-col :span="4">
                            <div class="grid-content"></div>
                        </el-col>
                        <el-col :span="16">
                            <h1>Login</h1>
                        </el-col>
                        <el-col :span="4">
                            <div class="grid-content"></div>
                        </el-col>
                    </el-row>

                </el-header>
                <el-main height="">
                    <!-- Main content -->
                    <el-row :gutter="20">
                        <el-col :span="4">
                            <div class="grid-content"></div>
                        </el-col>
                        <el-col :span="16">
                            <el-form :model="form" ref="form" label-width="80px">
                                <el-form-item label="Usuario">
                                    <el-input v-model="form.usuario" type="text" placeholder="Usuario"></el-input>
                                </el-form-item>
                                <el-form-item label="Contraseña">
                                    <el-input v-model="form.contra" type="password" placeholder="Contraseña"></el-input>
                                </el-form-item>
                                <el-form-item label="">
                                    <router-link to="/estructura">
                                    <el-button type="primary" @click="validar">Enviar</el-button>
                                    </router-link>
                                </el-form-item>
                            </el-form>
                        </el-col>
                        <el-col :span="4"></el-col>
                    </el-row>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'formulario',
  data() {
    return{
            form: {
                usuario: '',
                contra: ''
            }
    }
        },
        methods: {
            validar() {
                if (this.form.usuario == '' && this.form.contra == '') {
                    console.log('Salio bien')
                    this.$message({
                        message: 'Puedes ingresar',
                        type: 'success'
                    })
                } else {
                    console.log('Mal')
                    this.$message.error({
                        message: 'Algo anda mal'
                    })
                }
            }
        }
}
</script>
    <style>
        .el-row {
            margin-bottom: 20px;
            &:last-child {
                margin-bottom: 0;
            }
        }
        
        .grid-content {
            border-radius: 4px;
            min-height: 36px;
        }
    </style>