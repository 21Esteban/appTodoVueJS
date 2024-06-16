<template>
  <div class="mb-3 mt-3">
      <label for="exampleInputEmail1" class="form-label"
        >Ingrese el nombre</label
      >
      <input class="form-control" v-model.trim="tarea.nombre" />
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value="javaScript"
        id="flexCheckIndeterminate"
        v-model="tarea.categorias"
      />
      <label class="form-check-label" for="flexCheckIndeterminate">
        javaScript
      </label>
    </div>

    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value="NodeJS"
        id="flexCheckIndeterminate"
        v-model="tarea.categorias"
      />
      <label class="form-check-label" for="flexCheckIndeterminate">
        NodeJS
      </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault1"
        value="Urgente"
        v-model="tarea.estado"
      />
      <label class="form-check-label" for="flexRadioDefault1"> Urgente </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault2"
        value="Relax"
        v-model="tarea.estado"
      />
      <label class="form-check-label" for="flexRadioDefault2"> Relax </label>
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text">0.00</span>
      <input
        type="number"
        class="form-control"
        aria-label="Dollar amount (with dot and two decimal places)"
        v-model="tarea.numero"
      />
    </div>
    <button type="submit" class="btn btn-primary" :disabled="activeButton">Enviar</button>
</template>

<script>
export default {
  props:{
    tarea:Object
  },

  computed:{
    activeButton(){
      return this.tarea.nombre.length === 0 ? true : false
    }
  }

}
</script>

<style>

</style>