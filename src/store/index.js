import { createStore } from 'vuex'

export default createStore({
  state: {
    //guardamos las tareas del almacenamiento local del navegador en nuestra store 
    tareas:JSON.parse(localStorage.getItem('tareas')) || [],
    tarea: {
      id:"",
      nombre: "",
      categorias: [],
      estado: "",
      numero:0,
    },
  },
  getters: {
  },
  mutations: {
    //aqui como vamos guardar algo en nuestra state lo añadimos y pasamos la tarea que vamos a agregar
    setTarea(state,tarea){

      state.tareas.push(tarea)
      //aqui definimos un objeto para usar el local storage , llamado tareas y para guardarlo como un objeto las tareas , usamos un json.stringify para transformar ese arreglo de objetos
      localStorage.setItem("tareas", JSON.stringify(state.tareas))
    },

    deleteTarea(state,id){
     state.tareas = state.tareas.filter((tarea)=>{
      if(tarea.id != id) {
        
        return true
      }
      
      return false
     })

     localStorage.setItem("tareas", JSON.stringify(state.tareas))
    }

  },
  actions: {
    //est accion la vamos a llamar desde nuestra HomeView para guardar la tarea , hay que pasarle como argumento la tarea para que nuestro metodo la reciba
    ejecutarMutacion({commit},tarea){
      commit("setTarea",tarea)
    } ,

    ejecutarMutacionEliminar({commit},id){
      commit("deleteTarea",id)
    }
  },
  modules: {
  }
})
