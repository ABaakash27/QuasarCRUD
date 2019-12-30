<template>

    
<div class="q-pa-md">

    <!-- {{token1.username}} -->
   <q-toolbar-title class="text-center text-weight-bold" style="font-size:20px;margin-bottom:30px">Hospital Details</q-toolbar-title>
    <q-input outlined bottom-slots v-model="data.hospital_name" label="Search" dense>
        <template v-slot:append>
          <q-icon v-if="search !== ''" name="close" @click="data.hospital_name = ''" class="cursor-pointer" />
          <q-icon name="search" @click="search(data.hospital_name)"/>
        </template>
    </q-input>
    <q-separator inset />
    
    <!-- <q-select
          outlined
          v-model="name"
          :options="hospital_data"
          :option-value="opt => opt.id"
          :option-label="opt => opt.name"
          emit-value
          map-options
        ></q-select>
    <q-separator inset /><br>
    <div align="center">
          <q-btn 
          color="primary"
          label="Search" @click="search(name)" /><br>
    </div>       -->
   <br>

    <q-list bordered separator>
      <q-item 
      v-for="hospd in hospital_data"
      :key="hospd.id">
        <q-item-section>{{hospd.id}}</q-item-section>
        <q-item-section>{{hospd.name}}</q-item-section>
        <q-item-section>{{hospd.address}}</q-item-section>
       
              <q-btn 
              flat 
              round
              dense
              color="primary" 
              icon="edit"
              @click="Edit(hospd.id)"
              />
               <q-btn 
              flat 
              round
              dense
              color="primary" 
              icon="details"
              @click="Detail(hospd.id)" />
              
              <q-btn 
              flat 
              round
              dense
              color="primary" 
              icon="delete"
              @click="Delete(hospd.id)" />
              
              <!-- <q-dialog v-model="showEditTask">
                  <edit-task @close="showEditTask = false" />
              </q-dialog> -->
      </q-item>
    </q-list>
  </div>

  
</template>
<script>
import { LocalStorage } from 'quasar'
import { Dialog } from 'quasar'
import {mapActions} from 'vuex'
import edithospitalVue from './edithospital.vue'

export default {


 
  // props:['demo','id'],
    data(){

      

        var token1=localStorage.getItem('token')
        console.log(token1)

        if ( token1 == null )
        { 
            this.$router.push({path: '/'})
        }
        else
        {
            var baseurl='http://127.0.0.1:8000/api/'
            this.$axios.get(baseurl+'hospitalget',+token1)
               .then((response) => {
               console.log(response)
         
               for(var i=0; i<response.data.length;i++)
               {
                  this.hospital_data.push({id:response.data[i].hospital_id,name:response.data[i].hospital_name,address:response.data[i].hospital_address});
               }
               console.log(this.hospital_data)
                  
               })
        }


        return{
           token1,
           data:[],
           username:'',
           hospital_data:[],
           id:'',
           name:'',
           address:'',
           hospital_name:'',
           showEditTask: false,
           
         }
    },
 computed: {
    //    token(){
    //        return this.$store.getters['demo/token']
    //    }
   } ,
   methods:{
     ...mapActions('demo',['deletehospitaldata']),
      Delete(id){
        console.log(id)
        this.$q.dialog({
        title: 'Confirm',
        message: 'You Really Want to Delete?',
        cancel: true,
        persistent: true
      }).onOk(() => {
         this.$axios.delete('http://127.0.0.1:8000/api/hospitaldeleteapi/'+id)
           .then((response) => {
           console.log(response)
           })
        
      })
      },
      Edit(id){
          console.log(id)
          // var id = this.$route.query.id
          this.$router.push({path: '/edithospital/'+id})
      },
      Detail(id){
        console.log(id)
        this.$router.push({path: '/detailhospital/'+id})
      },
      search(name){
        console.log(name)
        this.$axios.get('http://127.0.0.1:8000/api/hospitallistserach/?search='+name)
           .then((response) => {
           console.log(response)
           })
      }

   },
   components:{
      'edithospital':require('pages/edithospital.vue').default
    }

}
</script>