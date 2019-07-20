<template>
  <div class="card">
    <div class="card-header">
      Voitures
    </div>
    <div class="card-body">
      <input v-model="search" type="text" placeholder="Rechercher" class="form-control">
      <hr>
      <ul class="list-group">
        <li v-for="car in carsSearch" :key="car" class="list-group-item">
          {{car}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {carSearchMixin} from './carSearch.mixin';


export default {
  name: 'Child',
  data(){
    return {
      search : 'tesla'
    }
  },
  mixins : [carSearchMixin], 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
