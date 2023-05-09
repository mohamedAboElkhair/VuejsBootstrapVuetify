<template>

<div>
  <v-layout  justify-center  class="justify-center mb-3" > 

   <h1> Old NewsPaper </h1> 
  </v-layout>
  
    <v-card  class="mx-auto ml-5 mr-5 mt-1" overflow-hidden >

    <v-system-bar color="" >
    <v-spacer></v-spacer>
    </v-system-bar>

    <v-app-bar  color="#fff">
    <v-app-bar-nav-icon color="#fff" @click="drawer = true"></v-app-bar-nav-icon>
    <v-toolbar-title ></v-toolbar-title>
    <v-spacer></v-spacer>
        <h1>Journalist</h1>
    </v-app-bar>
    </v-card>
     <v-navigation-drawer class="mt-1 ml-2  rounded-card2" v-model="drawer"    
      absolute
      temporary
      color="black"
      height="500px">
        
   <v-list dense>
    <v-list-item  to="/"  >
    <v-list-item-content  >
    <v-list-item-title class="colorFont"> <span class="fontSizeName"> Note</span>
              
    </v-list-item-title>
    </v-list-item-content>
    </v-list-item>
    <v-divider
    color="#b19a77"
    class="my-1"
    ></v-divider>
    <v-list-item   v-for="item in items"
    :key="item.title"
    :to="item.to"
     >
    <v-list-item-action>
    <v-icon :color="item.color" >{{ item.icon }}</v-icon>
    </v-list-item-action>
    <v-list-item-content>
    <v-list-item-title class="colorFont2">{{ item.title }}</v-list-item-title>
    </v-list-item-content>
    </v-list-item>
    </v-list>
 </v-navigation-drawer>
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
    