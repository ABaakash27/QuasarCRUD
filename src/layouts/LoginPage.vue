<template>
<q-card class="my-card q-pa-md q-ma-none fixed-center">
      <q-card-section>
          <q-toolbar-title class="text-center text-weight-bold q-mb-lg" style="font-size:30px">
            Login
        </q-toolbar-title>
        <q-separator/>
      <q-form 
        @submit="login()"
        class="q-gutter-md">
          <div class="q-pa-md" >
                <q-item-label class="q-mb-lg">Username</q-item-label>
                <q-input outlined v-model="username" :rules="[val => !!val || 'Field is required']"/><br>
                
                
                <q-item-label class="q-mb-lg">Password</q-item-label>
                <q-input outlined v-model="pass" type="password" :rules="[val => !!val || 'Field is required']"/><br>
                
                 
                 <div align="center">
                 <q-btn color="primary" type='submit' label="Login" />
                 <!-- <q-btn color="primary"  label="Reset" /> -->
                 </div>
                 </div>
            
      </q-form>
    </q-card-section>
</q-card>
</template>
<script>
import { Dialog } from 'quasar'
import {mapActions} from 'vuex'
export default {
     data(){
      return{
        username:'',
        pass:'',
        data:[]
      }
   },
    methods:
   {
     ...mapActions('demo',['tokenlogin']),
     login(){
              var creds = {username:this.username,password:this.pass}
              // "username="+this.username+
              // "&password="+this.pass
              console.log(creds);
              if(this.username && this.pass) 
              {
                  this.tokenlogin(creds)
              }
              else
              {
                  // this.$router.push('/')
              }
    }
  

  
  // computed: {
  //      token(){
  //          return this.$store.getters['demo/token']
  //      }
  //  } ,
    // abc(){
    // console.log('//////////')
    // var creds = 
    // "username="+this.username+
    // "&password="+this.pass
  
    //   this.$axios.post('http://127.0.0.1:8000/api/login-api', creds)
    //   .then((response) => {
    //     console.log(response.data)
    //     var response_token = response.data['token']
    //     console.log(response_token)

    
    //     this.$q.localStorage.set(response_token, response_token)
    //     let value = this.$q.localStorage.getItem(response_token)
    //     console.log(value,'****value***')
      //  var settoken=localStorage.setItem('token',token);
      //  console.log(settoken)
        
        
        
        // console.log(response.data.status)
        // console.log(!response.data.status)
  //       if(!response.data.status)
  //       {
  //          this.$q.dialog({message:response.data.message})
  //       }
  //       else
  //       {
  //         this.$q.dialog({message:'Login Successfull'})
  //         this.$router.push('/dashboard')
  //       }
  //     })
  //    }
  //  }

}
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>