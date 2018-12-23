<template>
    <div>
        <input type="text" placeholder="Nombre">
        {{nombre}}
    </div>
</template>

<script>
export default {
  name: 'pd',
  data () {
    return {
        nombre:''
    }
  }
}
</script>