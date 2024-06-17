<script>
// @ is an alias to /src
import InputVue from '@/components/InputVue.vue';
import { mapActions } from 'vuex';
import { v4 as uuidv4 } from 'uuid';
import ListaTareasVue from '@/components/ListaTareas.vue';


export default {
  name: "HomeView",
  components: {
    InputVue,
    ListaTareasVue
  },
  data() {
    return {
      tarea: {
        id:"",
        nombre: "",
        categorias: [],
        estado: "",
        numero:0,
      },
    };
  },

  methods:{

    ...mapActions(["ejecutarMutacion"]),

    procesarFormulario(){
      if(this.tarea.nombre === ""){
        alert("campo Vacio")
        return
      }

      //generamos un id aleatorio para nuestra tarea

      this.tarea.id = uuidv4()
      

      //usamos la accion que importamos desde el store para guardar nuestra tarea en el store 
      this.ejecutarMutacion(this.tarea)

      //limpiamos los campos
      this.tarea = {
        id:"",
        nombre: "",
        categorias: [],
        estado: "",
        numero:0,
      }
      
    }
  },

    //vamos a usar el localStorage , el created nos permite ejecutar algo justo antes de que la instancia de vue se haya terminado de procesar, por lo que justo cuando abramos esta pagina , se va a almacenar lo del localStorage en la variable almacenamientoDelNavegador , al obtener ese almacenamiento , guardamos eso en el arreglo tareas

    // created:{
    //   crearLocalStorage(){
    //     let localStorage = JSON.parse(localStorage.getItem("tareas"))
    //   }
    // }

  

};
</script>



<template>
  <form @submit.prevent="procesarFormulario">
    <InputVue :tarea="tarea"/>
  </form>
  <!-- <p>{{ tarea }}</p> -->

  <ListaTareasVue/>
  
</template>



<style>
/* Puedes ajustar el espaciado con CSS si es necesario */
.mt-3 {
  margin-top: 1rem; /* Ajusta este valor según sea necesario */
}
</style>
