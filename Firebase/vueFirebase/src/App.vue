<!-- eslint-disable -->
<template>
  <div id="app" class="container">
    <h1>VueFirebase</h1>
    <br><br>
    <div class="card">
      <div class="card-header">
        <h2>Agrega algun nombre</h2>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="addNom">
          <label for="">Nombre</label>
          <input type="text" placeholder="Nombre" v-model="newUser.usuario" id="" class="form-control">
          <br>
          <input type="text" placeholder="Apellido" v-model="newUser.password" class="form-control">
          <br>
          <input type="submit" class="btn btn-info" value="Agregar">
        </form>
      </div>
      <hr>
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Usuario y Password</h2>
        </div>
        <div v-for="item in usuarios" :key="item.id">
        </div>
        <div class="card-body">
          <table class="table table-striped">
            
            <thead>
              <th>Nombre</th>
              <th>Password</th>
              <th>Eliminar</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in usuarios" :key="index">
                <td>{{ item.usuario }}</td>
                <td>{{ item.password }}</td>
                <td>
                  <!-- deleteNom(item) aqui por referencia le estamos pasando un item para que el pueda solamente escger
                  uno solo salcandole el .key -->
                  <button v-on:click="deleteNom(item)" class="btn btn-danger">
                    <i class="fa fa-trash-o"></i>
                  </button>                 
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Firebase,{ functions } from 'firebase'

//Trayendo la configuracion de firebase en config
//Inicializando la DB
let config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
}

//Utilizando firebase y haciendo connecion con la DB
//app es la variable de la base datos para poder ser utilizada
// db es la base de datos de nuestra aplicacion, y la estamos conectando con la base de datos de firebase.
//db es la variable que vamos a poder utilizar dentro de nuestra aplicacion
let app = Firebase.initializeApp(config)
let db = app.database()

/* Defininedo una coleccion en la base de datos llamada 'nombres',
si no esta creada firebase la creara por nosotros*/
// se iguala a una variable para poderla utilizar refNom
let refNom = db.ref('User')


export default {
  name: 'App',
  //firebase nos proporciona un metodo
  firebase:{
    //aqui le estamos diciendo que estamos haciendo referencia a coleccion que definimos arriba
    usuarios:refNom
  },methods:{
    //metodo para agragar el nombre
    addNom:function(){
      //console.log(this.newUser)
      //Hacemos referencia a la base de datos con la coleccion que creamos arriba
      // .push() es para insertar un dato dentro de la coleccion
      refNom.push(this.newUser)
      //this.newUser.usuario = ''
      //this.newUser.password = ''
    },
    deleteNom:function(item){
      console.log(item);
      //aqui le estamos pasando unicamente un solo valor de la base de datos
      refDatos.child(item['.key']).remove();
      
    }
  },
  data(){
    return{
      //objeto para ver en donde se guardaran los datos
      newUser:{
        usuario:'',
        password:''
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
