<template>
   <div>
      <el-card class="box-card">
         <div slot="header" class="clearfix">
            <h1>Formulario</h1>
         </div>
         <p>Nombre</p>
         <el-input v-model="nombre" placeholder="Nombre"></el-input>
         <p>Apellido</p>
         <el-input v-model="apellido" placeholder="Apellido"></el-input>
         <p>Fecha de nacimiento</p>
         <el-date-picker
      v-model="tiempo"
      type="datetime"
      placeholder="Fecha" format="yyyy/MM/dd" value-format="yyyy-MM-dd">
    </el-date-picker>
         <p>Ciudad</p>
         <el-select v-model="value" placeholder="Cuidad">
            <el-option v-for="item in ciudades" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
         </el-select>
         <p>Sexo</p>
         <el-radio v-model="sexo" label="Masculino">Masculino</el-radio>
         <el-radio v-model="sexo" label="Femenino">Femenino</el-radio>
         <p>Estado</p>
         <el-switch v-model="status" active-text="Activo" inactive-text="Inactivo" active-color="#13ce66" inactive-color="#ff4949">
         </el-switch>
         <p>Direccion de entrega</p>
         <el-input type="textarea" :rows="2" v-model="direccion" placeholder="Ingresar direccion..."></el-input>
         <br><br>
         <el-button type="success" @click="guardar(table)" v-if="validar">Guardar</el-button>
      </el-card>
      <br>
      <el-button type="primary" icon="el-icon-edit-outline">Clientes</el-button>
   </div>
</template>
<script>
/* eslint-disable */
import lista from './lista.vue'
   export default {
     name: 'formulario',
     components:{
         lista
     },
     data(){
           return{
               verLista:false,
               visualizar: false,
                   ingresar: false,
                   nombre: '',
                   apellido: '',
                   sexo: '',
                   status: true,
                   direccion: '',
                   value: '',
                   tiempo:'',
                   ciudades: [{
                       value: 'Arraijan',
                       label: 'Arraijan'
                   }, {
                       value: 'Chepo',
                       label: 'Chepo'
                   }, {
                       value: 'Gorgona',
                       label: 'Gorgona'
                   }, {
                       value: 'San carlos',
                       label: 'San carlos'
                   }, {
                       value: 'La palma',
                       label: 'La palma'
                   }, {
                       value: 'Capira',
                       label: 'Capira'
                   }],
                   //Tabla
                   table: [{
                       nombre: '',
                       apellido: '',
                       cuidad: '',
                       sexo: '',
                       status: '',
                       direccion: ''
                   }]
           }
       },
       methods: {
               guardar: function(datos) {
                   this.table.push({
                       nombre: this.nombre,
                       apellido: this.apellido,
                       cuidad: this.value,
                       sexo: this.sexo,
                       status: this.status ? 'Activo' : 'Inactivo',
                       direccion: this.direccion,
                       tiempo: this.tiempo
                   }),
                   console.log('estoy en formulario  '+datos)
                   this.$emit('formulario_datos',datos)
                   this.nombre = '',
                       this.apellido = '',
                       this.value = '',
                       this.sexo = '',
                       this.status = true,
                       this.direccion = '',
                       this.tiempo=''
               }
   },computed: {
               validar: function() {
                   return this.nombre && this.apellido && this.value &&
                       this.sexo && this.direccion != ''
               }
   }
   }
</script>