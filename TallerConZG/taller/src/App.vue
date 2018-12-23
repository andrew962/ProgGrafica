<template>
  <div id="app">
    <div class="container-fluid">
      <table class="table">
      <thead>
        <tr>
          <th v-for="({ key, name }) of columns" :key="key">
            {{ name }}
          </th>
        </tr>
      </thead>
      <button class="btn btn-success" style="cursor: pointer;" @click="sortBy(key)">Desendente</button>&nbsp;
      <button class="btn btn-success" style="cursor: pointer;" @click="sortBy2(key)">Asendente</button>
      <tbody>
        <tr v-for="person of people">
          <td v-for="column of columns">{{ person[column.key] }}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>
<script>
//vue life cicle
import people from './data/people.json'

export default {
  name: 'App',

  data(){
    return{
      people: [],
      columns: []
    }
  },
  computed: {
    peopleSortedOut() {
      return this.people
    }
  },
  mounted(){
   const columnsKeyName = new Map()

   columnsKeyName.set('name','Nombre');
   columnsKeyName.set('height','Altura');
   columnsKeyName.set('hair_color','Color de cabello');
   columnsKeyName.set('skin_color','Color de piel');
   columnsKeyName.set('eye_color','Color de ojo');
   columnsKeyName.set('birth_year','Fecha de nacimiento');
   columnsKeyName.set('gender','Sexo');
   this.columns = Array.from(columnsKeyName).map(([key,name])=>{
     return Object.assign({},{key,name});
   });
   this.people = people.results;
   console.log(this.people);
  },
  methods: {
      sortBy(key, event) {
        this.peopleSortedOut.sort((a, b) => {
        return b.height-a.height
          
        })
    },
    sortBy2(key, event) {
      this.peopleSortedOut.sort((a, b) => {
      return a.height-b.height
        
      })
    }
  }
}
</script>
