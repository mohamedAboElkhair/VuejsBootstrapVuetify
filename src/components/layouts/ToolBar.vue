<template>

<div>
  <div class="d-flex justify-space-between ">
    <h2 class="ma-2 pa-2" >hello world </h2>
    <h2 class="ma-2 pa-2">N </h2>
    <h2 class="ma-2 pa-2" >i</h2>
  </div>
  <div>
    <v-toolbar
      dark
      elevated
      :elevation="4"
      prominent
      image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Vuetify</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon></v-icon>
      </v-btn>
    </v-toolbar>
  </div>
    
</div>
    </template>
    
    <script>
      export default {
        data: () => ({
          // loggedIn: User.loggedIn(),
          // userAdmin: User.admin(),
          drawer: false,
           group: null,
          elevation: 20,
          //  items: [
          //     // { title: 'Home', icon: 'mdi-home-city' , to:'/',show:User.loggedIn(),color:'#b19a77'},
          //   // { title: 'Users', icon: 'mdi-account-group-outline', to:'/user' ,show:User.loggedIn() },
          //     {  title: 'Note', icon: 'mdi-settings' ,to:'/' ,show:User.loggedIn(),color:'#b19a77', adminUser : User.admin()},
          //     { title: 'UserNote', icon: 'mdi-account-card-details', to:'/UserNote',show:User.loggedIn() ,color:'#b19a77',adminUser : User.admin()},
          //     {  title: 'Categry', icon: 'mdi-settings' ,to:'/createcategry' ,show:User.loggedIn(),color:'#b19a77', adminUser : User.admin()},
          //     { title: 'Uesr', icon: 'mdi-account-card-details', to:'/creatUesr',show:User.loggedIn() ,color:'#b19a77',adminUser : User.admin()},
              
          //     { title: 'Login', icon: 'mdi-login' , to:'/login',show:!User.loggedIn() ,color:'#b19a77' , adminUser : true  },
          //     { title: 'LogOut', icon: 'mdi-logout', to:'/logout',show:User.loggedIn(), color:'#b19a77', adminUser : true  },
            
          //   ],
            v_app_bar_color: "#1F7087",
          slider:52,
        }),
      //   created() {
      //   EventBus.$on("logout", () => {
      //   User;
      //   });
      // }
      }
      
    </script>
    
    <style>
    
    </style>
    