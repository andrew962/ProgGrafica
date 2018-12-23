<template>
  <nb-container :style="{backgroundColor: '#fff'}">
        <nb-header>
          <nb-left>
              <nb-icon :name="'logo-tux'" />
          </nb-left>
          <nb-body>
            <nb-title>Optudy Crime</nb-title>
          </nb-body>
          <nb-right />
        </nb-header>

        <nb-content padder>
          <nb-form>
            <nb-item>
              <nb-input placeholder="Usuario" />
            </nb-item>
            <nb-item last>
              <nb-input placeholder="Contraseña" secureTextEntry />
            </nb-item>
            </nb-form>
            <nb-button block :style="{ margin: 15, marginTop: 50 }" :onPress="GoBtnPress">
              <nb-text>Iniciar sesión</nb-text>
            </nb-button>
        </nb-content>

        <nb-footer>
          <nb-footer-tab>
            <nb-button active full>
              <nb-text>Open Source</nb-text>
            </nb-button>
          </nb-footer-tab>
        </nb-footer>
      </nb-container>
</template>

<script>
import { Internet, Permissions } from "expo";
import firebase from 'firebase'
import { Dimensions, Platform } from "react-native";

let config = {
    apiKey: "AIzaSyDaBUabhMGX08HNHa6Qn03vP1z-sVd7WpE",
    authDomain: "prueba-46ff7.firebaseapp.com",
    databaseURL: "https://prueba-46ff7.firebaseio.com",
    projectId: "prueba-46ff7",
    storageBucket: "prueba-46ff7.appspot.com",
    messagingSenderId: "528197201609"
}

//Utilizando firebase y haciendo connecion con la DB
//app es la variable de la base datos para poder ser utilizada
// db es la base de datos de nuestra aplicacion, y la estamos conectando con la base de datos de firebase.
//db es la variable que vamos a poder utilizar dentro de nuestra aplicacion
let app = firebase.initializeApp(config)
const provider = new firebase.auth.GoogleAuthProvider();
let db = app.database()

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data: function() {
    return {
      
    }
  },
  methods: {
    GoBtnPress: function() {
      this.navigation.navigate("proyectos");
    }
  }
};
</script>