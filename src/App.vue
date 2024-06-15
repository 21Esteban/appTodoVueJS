<script>

import Navbar from "./components/Navbar.vue"

export default{
  components:{
    Navbar
  }
}


</script>



<template>
 <Navbar/>
 <div class="container">
  <!-- Content here -->

   <router-view/>
</div>
  
</template>

<style>

</style>


<!-- la idea de todo esto es que aqui en nuestra app que es lo que se renderiza siempre queremos que el navbar siempre este activo por lo que lo renderizamos y el <router-view/>
va a tomar la vista de cada una de nuestras vistas de acuerdo a nuestra ruta -->