import { LocalStorage, Loading } from 'quasar'
import axios from 'axios'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.prototype.$axios = axios

const state = {
        // token : "Radhika",
    // token:localStorage.getItem(token)
}
const mutations = {

}

const actions = {

  tokenlogin({}, payload)
	{
		console.log('*auth_login*')
		console.log('payload:', payload)
		axios.post('http://127.0.0.1:8000/api/login-api', payload)
		.then((response) => {
				// this.data = response.data;
				console.log(response.data);
				console.log(response.data.token)
				localStorage.setItem('token', response.data.token)

				 console.log(response.data['status'], '////')
         localStorage.setItem('status', response.data['status'])
                 
    if(response.data['status'])
    {
      
        this.$router.push({path: '/dashboard'})
    }
      else
      {
        console.log('**** else part ***')
        this.show=true;
        // this.alert1 = true;

      }
        },
          error => {
            console.log('********* error *********');
            console.log(error)
        });
      },
      // deletehospitaldata(id)
      // {
      //   console.log(id,'*******id******')
      //   // var baseurl='http://127.0.0.1:8000/api/'
      //   // axios.delete('http://127.0.0.1:8000/api/hospitaldeleteapi/?id='+id)
      //   //    .then((response) => {
      //   //    console.log(response)
     
      //     //  for(var i=0; i<response.data.results.length; i++)
      //     //  {
      //     //     this.hospital_data.push({id:response.data.results[i].hospital_id,name:response.data.results[i].hospital_name,address:response.data.results[i].hospital_address,id:response.data.results[i].hospital_id});
      //     //  }
      //     //  console.log(this.hospital_data)
              
      //      })
      // }
}

const getters = {
//    radhika(){
//         this.$axios.post('http://127.0.0.1:8000/api/login-api', creds)
  
//    },
   
    // token:(state) => {
    //     return state.token
    // },
    
}
export default{
    namespaced : true,
    state,
    mutations,
    actions,
    getters

}