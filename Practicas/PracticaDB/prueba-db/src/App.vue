<template> 
  <div id="app">
    <h1>Vue y firebase</h1>
    <div>
      <h1>agraga un enlace</h1>
      <hr>
      <form @submit.prevent="addLink">
        <input type="text"
        placeholder="Titulo">
      </form>
    </div>
  </div>
</template>

<script>
import firebase,{ functions } from 'firebase';
import func from './vue-temp/vue-editor-bridge';

//configuracion de firebase
let config ={
  apiKey: "AIzaSyDaBUabhMGX08HNHa6Qn03vP1z-sVd7WpE",
    authDomain: "prueba-46ff7.firebaseapp.com",
    databaseURL: "https://prueba-46ff7.firebaseio.com",
    projectId: "prueba-46ff7",
    storageBucket: "prueba-46ff7.appspot.com",
    messagingSenderId: "528197201609"
};

let app = firebase.initializeApp(config);
//conexion a la db
let db=app.database();

//coleccion de la base de datos
// si la referencia no existe firebase la crea
let linksRef = db.ref('links');

export default {
  name: 'App',
  firebase:{
    links:linksRef
  },
  methods:{
    addLink:function(){

    }
  }
}
</script>


<style>

</style>
