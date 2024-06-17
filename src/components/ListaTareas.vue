<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
        
    }
  },
  methods: {
    ...mapActions(["ejecutarMutacionEliminar"]),
  },
  computed: {
    //importamos nuestras tareas del store
    ...mapState(["tareas"]),
  },
};
</script>

<template>
  <table class="table table-primary">
    <thead>
      <tr>
        <th scope="col">#id</th>
        <th scope="col">Nombre</th>
        <th scope="col">Categorias</th>
        <th scope="col">Estado</th>
        <th scope="col">Numero</th>
        <th scope="col">Accion</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="tarea in tareas"
        :key="tarea.id"
        :class="tarea.estado === 'Urgente' ? 'table-danger' : 'table-success'"
      >
        <th scope="row">{{ tarea.id }}</th>
        <td>{{ tarea.nombre }}</td>
        <td>
          <span v-for="(categoria, index) in tarea.categorias" :key="index"
            >{{ categoria }} <br
          /></span>
        </td>
        <td>{{ tarea.estado }}</td>

        <td>{{ tarea.numero }}</td>
        <td>
          <button
            type="button"
            class="btn btn-danger"
            @click="ejecutarMutacionEliminar(tarea.id)"
          >
            Eliminar</button
          ><router-link class="btn btn-info" :to="{name:'EditarTarea',params:{id:tarea.id}}">Editar</router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style></style>
