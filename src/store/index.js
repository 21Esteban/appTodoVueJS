import { createStore } from 'vuex'

export default createStore({
  state: {
    tareas:[],
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
    }
  },
  actions: {
    //est accion la vamos a llamar desde nuestra HomeView para guardar la tarea , hay que pasarle como argumento la tarea para que nuestro metodo la reciba
    ejecutarMutacion({commit},tarea){
      commit("setTarea",tarea)
    } 
  },
  modules: {
  }
})
