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
import { Dimensions, Platform } from "react-native";


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