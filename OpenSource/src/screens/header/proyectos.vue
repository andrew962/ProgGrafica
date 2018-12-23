<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
        <nb-header searchBar rounded>

          <nb-item>
              <nb-button
              transparent
              :onPress="() => this.props.navigation.goBack()">
              <nb-icon name="arrow-back" />
            </nb-button>
            <nb-input v-model="query" placeholder="Buscar por nombre..." />
            <nb-button
              transparent
              :onPress="GoBtnPress">
              <nb-icon name="bulb"/>
            </nb-button>
          </nb-item>

        </nb-header>
        <nb-content padder>
            <nb-card v-for="item in buscar" :key="item.route">
                <nb-card-item bordered button :onPress="() => handleListItemClick(item)">
                    <nb-left>
                        <nb-thumbnail :source="item.logo"></nb-thumbnail>
                        <nb-body>
                            <nb-text>{{item.nombre}}</nb-text>
                        </nb-body> 
                    </nb-left>
                    <nb-right>
                      <nb-text>{{item.categoria}}</nb-text>
                    </nb-right>
                </nb-card-item> 

                <nb-card-item>
                    <nb-body>
                        <image :source="item.imagen" class="card-item-image" :style="stylesObj.cardItemImage"/>
                        <nb-text :style="stylesObj.justify">{{ item.resena }}</nb-text> 
                    </nb-body>
                </nb-card-item>
                <nb-card-item :style="{ paddingVertical: 0 }">
                </nb-card-item>
            </nb-card>
        </nb-content>
      </nb-container>
</template>

<script>
import React, { Component } from 'react';
import { Constants } from 'expo';
import { Dimensions,Linking,AppRegistry } from "react-native";
//Importando imagenes
import logothunderbird from "../../../assets/thunderbird/thunderbird-logo.png";
import thunderbird from "../../../assets/thunderbird/thunderbird.jpg";

import openoffice from "../../../assets/apache/apache.png"
import openofficelogo from "../../../assets/apache/apachelogo.jpg"

import pidgin from "../../../assets/pidgin/pidgin.jpg"
import pidginlogo from "../../../assets/pidgin/pidginlogo.png"

import amarok from "../../../assets/amarok/amarok.png"
import amaroklogo from "../../../assets/amarok/amaroklogo.png"

import apachesoft from "../../../assets/apachesoft/apache.png"
import apachesoftlogo from "../../../assets/apachesoft/apachelogo.png"

import asterik from "../../../assets/asterik/asterik.png"
import asteriklogo from "../../../assets/asterik/asteriklogo.jpg"

import atom from "../../../assets/atom/atom.jpg"
import atomlogo from "../../../assets/atom/atomlogo.png"

import blender from "../../../assets/blender/blender.png"
import blenderlogo from "../../../assets/blender/blenderlog.png"

import brackets from "../../../assets/brackets/brackets.png"
import bracketslogo from "../../../assets/brackets/bracketslogo.png"

import ember from "../../../assets/ember/ember.png"
import emberlogo from "../../../assets/ember/emberlogo.jpeg"

import emule from "../../../assets/emule/emule.jpeg"
import emulelogo from "../../../assets/emule/emulelogo.gif"

import filezilla from "../../../assets/filezilla/filezilla.png"
import filezillalogo from "../../../assets/filezilla/filezillalogo.png"

import font from "../../../assets/fontawo/font.png"
import fontlogo from "../../../assets/fontawo/fontlogo.png"

import ghost from "../../../assets/ghost/ghost.png"
import ghostlogo from "../../../assets/ghost/ghostlogo.jpg"

import gimp from "../../../assets/gimp/gimp.png"
import gimplogo from "../../../assets/gimp/gimplogo.png"

import grunt from "../../../assets/grunt/grunt.png"
import gruntlogo from "../../../assets/grunt/gruntlogo.png"

import infra from "../../../assets/infrarecoder/infra.png"
import infralogo from "../../../assets/infrarecoder/infralogo.png"

import ipcorp from "../../../assets/ipcorp/ipcorp.jpg"
import ipcorplogo from "../../../assets/ipcorp/ipcorplogo.gif"

import laravel from "../../../assets/laravel/laravel.png"
import laravelogo from "../../../assets/laravel/laravelogo.png"

import notepad from "../../../assets/notepad/notepad.png"
import notepadlogo from "../../../assets/notepad/notepadlogo.png"

import osticket from "../../../assets/osticket/osticket.png"
import osticketlogo from "../../../assets/osticket/osticketlogo.jpg"

import patter from "../../../assets/pattern/patter.png"
import patterlogo from "../../../assets/pattern/patterlogo.png"

import pdfcreator from "../../../assets/pdfcreator/pdfcreator.png"
import pdfcreatorlogo from "../../../assets/pdfcreator/pdfcreatorlogo.png"

import react from "../../../assets/react/react.png"
import reactlogo from "../../../assets/react/reactlogo.png"

import sevenzip from "../../../assets/sevenzip/sevenzip.png"
import sevenziplogo from "../../../assets/sevenzip/sevenziplogo.jpg" 

import visual from "../../../assets/visualcode/visual.png"
import visualogo from "../../../assets/visualcode/visualogo.png"

import vlc from "../../../assets/vlc/vlc.jpg"
import vlclogo from "../../../assets/vlc/vlclogo.png"

import yarn from "../../../assets/yarn/yarn.png"
import yarnlogo from "../../../assets/yarn/yarnlogo.png"

/*import  from "../../../assets//"
import  from "../../../assets//"*/

const deviceWidth = Dimensions.get("window").width;
export default {
    //Rutas de navegacion
  props: {
    navigation: {
      type: Object
    }
  },
  data:{
      //Referncia de Imagenes
        logothunderbird,
        thunderbird,
        openoffice,
        openofficelogo,
        pidgin,
        pidginlogo,
        amarok,
        amaroklogo,
        apachesoft,
        apachesoftlogo,
        asterik,
        asteriklogo,
        atom,
        atomlogo,
        blender,
        blenderlogo,
        brackets,
        bracketslogo,
        ember,
        emberlogo,
        emule,
        emulelogo,
        filezilla,
        filezillalogo,
        font,
        fontlogo,
        ghost,
        ghostlogo,
        gimp,
        gimplogo,
        grunt,
        gruntlogo,
        infra,
        infralogo,
        ipcorp,
        ipcorplogo,
        laravel,
        laravelogo,
        notepad,
        notepadlogo,
        osticket,
        osticketlogo,
        patter,
        patterlogo,
        pdfcreator,
        pdfcreatorlogo,
        react,
        reactlogo,
        sevenzip,
        sevenziplogo,
        visual,
        visualogo,
        vlc,
        vlclogo,
        yarn,
        yarnlogo,
      //Estilo de css propio de react para dar forma a la app
      stylesObj: {
        cardItemImage: {
          resizeMode: "cover",
          width: deviceWidth / 1.18
        },
        justify:{
            justifyContent:'center'
        }
      },
      //Nuestro objeto que contiene los datos
      cateData:[{
          categoria:'Oficina',
          nombre:'Thungerbird',
          resena:'es un proyecto desarrollado también por Mozilla.org. Se trata de una aplicación de correo electrónico segura, rápida y fácil con las mejores implementaciones de la industria como filtros inteligentes anti-spam, un corrector ortográfico incorporado, soporte de extensiones, ect.',
          logo:logothunderbird,
          imagen:thunderbird,
          route: "thunderbird",
      },{ 
          categoria:'Oficina',
          nombre:'OpenOffice.org',
          resena:'es una herramienta y alternativa ofimatica totalmente gratuita, compatible con la mayoría de suites de oficina, entre ellas se encuentra Microsoft Office.',
          imagen:openoffice,
          logo:openofficelogo,
          route: "openoffice"
      },{ 
          categoria:'Oficina',
          nombre:'Pidgin',
          resena:'es un cliente de mensajería instantánea multiprotocolo, por lo que, no sólo es un sustituto libre del Live! Messenger de Microsoft, sino que además, te permitirá gestionar todas tu cuentas de mensajería en un sólo programa, desde un interfaz elegante, cómodo e intuitivo. Soporta los protocolos MSN (Live! Messenger), XAMPP (Google Talk y similares), AIM, y muchos más.',
          logo:pidginlogo,
          imagen:pidgin,
          route: "pidgin"
      },{ 
          categoria:'Multimedia',
          nombre:'Amarok',
          resena:'es un reproductor de música que puede competir perfectamente con programas como iTunes o WindowsMediaPlayer. Tiene una muy buena gestión de la biblioteca de música.',
          imagen:amarok,
          logo:amaroklogo,
          route: "amarok"
      },{ 
          categoria:'Administracion',
          nombre:'Apache',
          resena:'es un servidor web HTTP de código abierto, para plataformas Unix (BSD, GNU/Linux, etc.), Microsoft Windows, Macintosh y otras, que implementa el protocolo HTTP/1.1 y la noción de sitio virtual según la normativa RFC 2616',
          imagen:apachesoft,
          logo:apachesoftlogo,
          route: "apachesoft"
      },{ 
          categoria:'Administracion',
          nombre:'Asterisk',
          resena:'es un programa de software libre (bajo licencia GPL) que proporciona funcionalidades de una central telefónica (PBX). Como cualquier PBX, se puede conectar un número determinado de teléfonos para hacer llamadas entre sí dentro de una misma organización e incluso acceder a comunicaciones fuera de la misma a la PSTN o conectando a un proveedor de VoIP o bien a una RDSI tanto básicos como primarios. ',
          imagen:asterik,
          logo:asteriklogo,
          route: "asterik"
      },{ 
          categoria:'Desarrollo',
          nombre:'Atom',
          resena:'es uno de los editores de texto más populares entre los codificadores porque es hackeable en su esencia: al ser un proyecto de código abierto, los usuarios pueden personalizarlo para que se ajuste a sus necesidades específicas.',
          imagen:atom,
          logo:atomlogo,
          route: "atom"
      },{ 
          categoria:'Multimedia',
          nombre:'Blender',
          resena:'es un programa informático multi plataforma, dedicado especialmente al modelado, iluminación, renderizado, animación y creación de gráficos tridimensionales. También de composición digital utilizando la técnica procesal de nodos, edición de vídeo, escultura (incluye topología dinámica) y pintura digital. En Blender, además, se pueden desarrollar vídeo juegos ya que posee un motor de juegos interno.',
          imagen:blender,
          logo:blenderlogo,
          route: "blender"
      },{ 
          categoria:'Desarrollo',
          nombre:'Brackets',
          resena:'un proyecto de código abierto que comenzó su vida en Adobe, es un editor de código ligero y moderno centrado en las tecnologías web.',
          imagen:brackets,
          logo:bracketslogo,
          route: "brackets"
      },{ 
          categoria:'Desarrollo',
          nombre:'Ember.js',
          resena:'se presenta a sí mismo como "un marco para crear aplicaciones web ambiciosas". Una de las características más importantes es su enlace de datos; los objetos en Ember pueden unir propiedades entre sí, de modo que cuando una propiedad cambia en un objeto, la otra se mantiene sincronizada.',
          imagen:ember,
          logo:emberlogo,
          route: "ember"
      },{ 
          categoria:'Multimedia',
          nombre:'eMule',
          resena:'es, a día de hoy, el cliente de intercambio "peer-to-peer" más popular. Gracias a su política de código abierto, son muchos los desarrolladores que se animan a contribuir con el proyecto, lo que convierte a la red en algo que se hace más eficaz con cada nuevo lanzamiento.',
          imagen:emule,
          logo:emulelogo,
          route: "emule"
      },{ 
          categoria:'Desarrollo',
          nombre:'Font awesome',
          resena:'es realmente impresionante: hay aproximadamente 1,500 iconos de fuentes libres contenidos en una sola fuente, que constituyen "un lenguaje pictográfico de acciones relacionadas con la web". Los íconos son infinitamente escalables, por lo que se ven iguales en cualquier tamaño, y puedes estilizarlos con CSS. ',
          imagen:font,
          logo:fontlogo,
          route: "fontawe"
      },{ 
          categoria:'Administracion',
          nombre:'Filezilla',
          resena:'es un cliente de FTP sencillo, fácil de usar, potente y libre.',
          imagen:filezilla,
          logo:filezillalogo,
          route: "filezilla"
      },{ 
          categoria:'Desarrollo',
          nombre:'Ghost',
          resena:'La plataforma de blogs Ghost se volvió loca cuando fue financiada con éxito a través de Kickstarter, superando su solicitud original de £ 25,000 y eventualmente aportó más de £ 196,000 en fondos. El proyecto de código abierto ahora es mantenido por la organización sin fines de lucro Ghost Foundation más algunos colaboradores independientes.',
          imagen:ghost,
          logo:ghostlogo,
          route: "ghost"
      },{ 
          categoria:'Multimedia',
          nombre:'GIMP',
          resena:'es un programa de manipulación de imágenes del proyecto GNU, sirve para procesar gráficos y fotografías digitales. También se puede utilizar GIMP para crear imágenes animadas sencillas. Remplaza al popular Photoshop.',
          imagen:gimp,
          logo:gimplogo,
          route: "gimp"
      },{ 
          categoria:'Desarrollo',
          nombre:'Grunt',
          resena:'le permite automatizar tareas comunes utilizando JavaScript. Puede realizar tareas mundanas y repetitivas como minificación, compilación, pruebas de unidad y alineación con casi ningún esfuerzo. Y como Grunt es extensible, si alguien no ha creado lo que necesitas, puedes crear y publicar fácilmente tu propio complemento de Grunt.',
          imagen:grunt,
          logo:gruntlogo,
          route: "grunt"
      },{ 
          categoria:'Oficina',
          nombre:'InfraRecorder',
          resena:'es una suite para grabar todo tipo de CD y DVD. No es tan grade como Nero, pero para ¿realmente para qué lo usas? Para grabar y imagenes de CD (ISOs) y para copiar CDs y DVDs. Pues eso lo hace este software libre.',
          imagen:infra,
          logo:infralogo,
          route: "infrarecorder"
      },{ 
          categoria:'Administracion',
          nombre:'IPCop',
          resena:'es una distribución Linux que implementa un cortafuegos (o firewall) y proporciona una simple interfaz web de administración basándose en una computadora personal. Originalmente nació como una extensión (fork) de la distribución SmoothWall ',
          imagen:ipcorp,
          logo:ipcorplogo,
          route: "ipcop"
      },{ 
          categoria:'Desarrollo',
          nombre:'Laravel',
          resena:'Es un proyecto gratuito de código abierto que se presenta a sí mismo como el marco para los artesanos web. En otras palabras, las personas que valoran el código es elegante, simple y fácil de leer, y ayuda a los equipos e individuos a crear aplicaciones bien hechas rápidamente.',
          imagen:laravel,
          logo:laravelogo,
          route: "laravel"
      },{ 
          categoria:'Oficina',
          nombre:'NotePad++',
          resena:'es un editor de código fuente para programadores. Soporta los más populares lenguages de programación: php, html, java, javascript, sql, c, pascal, delphi, ect.',
          imagen:notepad,
          logo:notepadlogo,
          route: "notepad"
      },{ 
          categoria:'Administracion',
          nombre:'osTicket',
          resena:'es un sistema de tickets de soporte de código abierto ampliamente utilizado. Integra a la perfección las consultas creadas a través de correo electrónico, teléfono y formularios web en una interfaz web multiusuario sencilla y fácil de usar. Administre, organice y archive todas sus solicitudes y respuestas de soporte en un solo lugar, a la vez que brinda a sus clientes la responsabilidad y la capacidad de respuesta que merecen.',
          imagen:osticket,
          logo:osticketlogo,
          route: "osticket"
      },{ 
          categoria:'Desarrollo',
          nombre:'Pattern Lab',
          resena:'es un conjunto de herramientas diseñadas para ayudarlo a construir sitios utilizando los principios del diseño atómico.',
          imagen:patter,
          logo:patterlogo,
          route: "pattern"
      },{ 
          categoria:'Oficina',
          nombre:'PDFCreator',
          resena:'es un programa utilizado para crear ficheros PDF a partir de cualquier documento. Esto es gracias a una impresora virtual: basta con enviar el documento a la impresora virtual, y PDFCreator lo traducirá a PDF.',
          imagen:pdfcreator,
          logo:pdfcreatorlogo,
          route: "pdrcreator"
      },{ 
          categoria:'Desarrollo',
          nombre:'React Native',
          resena:'permite a los usuarios crear aplicaciones móviles nativas con solo JavaScript y es increíblemente popular en GitHub. Es similar a React (la popular biblioteca de JavaScript para crear interfaces de usuario), excepto que sus componentes básicos son componentes nativos en lugar de componentes web.',
          imagen:react,
          logo:reactlogo,
          route: "react"
      },{ 
          categoria:'Oficina',
          nombre:'7-zip',
          resena:'es otro descompresor multiformato, traducido a 53 idiomas que mejora la compresión en un 50% frente a los compresores ZIP estándar. Como soporta formato RAR, entre otros muchos, puedes dejar a un lado WinRAR.',
          imagen:sevenzip,
          logo:sevenziplogo,
          route: "sevenzip"
      },{ 
          categoria:'Desarrollo',
          nombre:'Visual Studio Code',
          resena:'Este editor gratuito de código de fuente abierta de Microsoft tiene una serie de excelentes funciones que hacen que la codificación sea más rápida. Existe una función llamada IntelliSense que proporciona terminaciones inteligentes; comandos Git incorporados; depuración desde dentro del editor y mucho más.',
          imagen:visual,
          logo:visualogo,
          route: "visual"
      },{ 
          categoria:'Multimedia',
          nombre:'VideoLan',
          resena:'es un reproductor multimedia que trae consigo sus propios codecs. Así, si no has instalado niguno en tu PC no tendrás problemas para reproducir ningún formato. Sustituible por Windows Media Player.',
          imagen:vlc,
          logo:vlclogo,
          route: "vlc"
      },{ 
          categoria:'Desarrollo',
          nombre:'Yarn',
          resena:'ofrese un sistema de código abierto, ultra rápido, mega-seguro y súper confiable, el proyecto de código abierto Yarn es un competidor del administrador de paquetes de nodos.',
          imagen:yarn,
          logo:yarnlogo,
          route: "yarn"
      }],
      query:''
  },
  methods:{
    handleListItemClick: function(dataObj) {
      this.navigation.navigate(dataObj.route);
    },
    GoBtnPress: function() {
      this.navigation.navigate("formulario");
    }
  },
  computed:{
      //esta propiedad es para hacer el filtro por el nombre
    buscar:function(){
      //Lo que estamos introduciendo
      let query = this.query
      return this.cateData.filter(function(item){
        return item.nombre.includes(query)
      })
    }
    }
  }
</script>


<style>
.mb-15 {
  margin-bottom: 15;
}
.card-item-image {
  align-self: center;
  height: 150;
  margin-vertical: 5;
}
</style>
