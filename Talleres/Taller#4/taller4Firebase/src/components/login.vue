<template>
    <div class="login">
        <form v-on:submit.prevent="addNombre">
            <label for="Nombre">Nombre</label>
            <br>
            <br>
            <input type="text" placeholder="Nombre" style="aling:center;" v-model="lista_nombre.nombre">
            <br>
            <br>
            <input type="submit" value="Agregar">
        </form>
        <br><br>
        <tr v-for="(item,index) in nombres" :key="index">
            <td style="aling:center;">{{ index }} - {{ item.nombre }}&nbsp;</td>
            <td><button v-on:click="borrar(item)">Borrar</button></td>
        </tr>
    </div>
</template>
<script>
/* eslint-disable */
import Firebase,{ functions } from 'firebase'

let config = {
    apiKey: "AIzaSyAzu9ky-NCh-_YCmDeH4cFjEBZxN_PiTo8",
    authDomain: "taller4-d6d44.firebaseapp.com",
    databaseURL: "https://taller4-d6d44.firebaseio.com",
    projectId: "taller4-d6d44",
    storageBucket: "taller4-d6d44.appspot.com",
    messagingSenderId: "635266986809"
};
let app = Firebase.initializeApp(config);
let db = app.database();
let refNom = db.ref('nombres')

    export default{
        name:'login',
        data(){
            return{
                lista_nombre:{
                    nombre:''
                }
            }
        },
        firebase:{
            nombres:refNom
        },
        methods:{
            addNombre(){
                console.log(this.lista_nombre.nombre)
                refNom.push(this.lista_nombre)
                this.lista_nombre.nombre = ''
            },
            borrar(item){
                refNom.child(item['.key']).remove()
            }
        }
    }
</script>