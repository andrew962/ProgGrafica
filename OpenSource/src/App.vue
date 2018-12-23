 <template>
    <root>
      <app-navigation></app-navigation>
    </root>
</template>

<script>
import React from "react";
import { StackNavigator, DrawerNavigator } from "vue-native-router";
import { Root } from "native-base";
import Login from "./screens/header/login.vue"; //listo
import amarok from "./screens/header/amarok"; //listo
import apachesoft from "./screens/header/apachesoft"; //listo
import asterik from "./screens/header/asterik"; //listo
import atom from "./screens/header/atom"; //listo
import blender from "./screens/header/blender"; //listo
import brackets from "./screens/header/brackets"; //listo
import ember from "./screens/header/ember"; //listo
import emule from "./screens/header/emule";
import filezilla from "./screens/header/filezilla";
import fontawe from "./screens/header/fontawe";
import ghost from "./screens/header/ghost";
import gimp from "./screens/header/gimp";
import grunt from "./screens/header/grunt";
import infrarecorder from "./screens/header/infrarecorder";
import ipcop from "./screens/header/ipcop";
import laravel from "./screens/header/laravel";
import notepad from "./screens/header/notepad";
import openoffice from "./screens/header/openoffice"; //listo
import osticket from "./screens/header/osticket";
import pattern from "./screens/header/pattern";
import pdrcreator from "./screens/header/pdrcreator";
import pidgin from "./screens/header/pidgin"; //listo
import proyectos from "./screens/header/proyectos.vue"; //listo
import react from "./screens/header/react";
import sevenzip from "./screens/header/sevenzip";
import thunderbird from "./screens/header/thunderbird"; //listo
import visual from "./screens/header/visual";
import vlc from "./screens/header/vlc";
import yarn from "./screens/header/yarn";
import formulario from "./screens/header/formulario";
/*import  from "./screens/header/"; 
import  from "./screens/header/";*/


const Drawer = DrawerNavigator(
  {
    Login: { screen: Login }
  },
  {
    initialRouteName: "Login",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
  }
);

const AppNavigation = StackNavigator(
  {
    Drawer: { screen: Drawer },
    proyectos: { screen: proyectos },
    thunderbird: { screen: thunderbird },
    openoffice: { screen: openoffice },
    pidgin: { screen: pidgin },
    amarok: { screen: amarok },
    apachesoft: { screen: apachesoft },
    asterik: { screen: asterik },
    atom: { screen: atom },
    blender: { screen: blender },
    brackets: { screen: brackets },
    ember: {screen: ember},
    emule: {screen: emule},
    filezilla: {screen: filezilla},
    fontawe: {screen: fontawe},
    ghost: {screen: ghost},
    gimp: {screen: gimp},
    grunt: {screen: grunt},
    infrarecorder: {screen: infrarecorder},
    ipcop: {screen: ipcop},
    laravel: {screen: laravel},
    notepad: {screen: notepad},
    osticket: {screen: osticket},
    pattern: {screen: pattern},
    pdrcreator: {screen: pdrcreator},
    react: {screen: react},
    sevenzip: {screen: sevenzip },
    visual: {screen: visual},
    vlc: {screen: vlc},
    yarn: {screen: yarn},
    formulario: {screen: formulario},
    /*: {screen: },
    : {screen: },
    : {screen: },
    : {screen: },
    : {screen: },*/
    
  },
  {
    //initialRouteName: "Drawer",
    headerMode: "none"
  }
);
export default {
  components: { Root, AppNavigation }
};
</script> 

