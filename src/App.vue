<template>
  <v-app>
 
       <toolbar></toolbar>
       
    <v-main>
     
      <router-view/>
    </v-main>


  </v-app>
</template>

<script>
import toolbar from './components/layouts/ToolBar.vue'

export default {
  name: 'App',
  components:{toolbar},
  data: () => ({
    
  }),
}
</script>
