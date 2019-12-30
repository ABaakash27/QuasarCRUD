<template>
<q-card flat bordered class="my-card q-ma-lg">
    <q-toolbar-title class="text-center text-weight-bold" style="font-size:30px">Edit Hospital Details</q-toolbar-title>
    <!-- <q-item 
      v-for="hospd in hospital_data"
      :key="hospd.id"
      >
        <q-item-section>{{hospd.id}}</q-item-section>
        <q-item-section>{{hospd.name}}</q-item-section>
        <q-item-section>{{hospd.address}}</q-item-section>
       </q-item> -->
  <q-form 
      @submit="onSubmit">
   <div class="row q-ma-lg">
      <div class="col-md-6">
          <q-item-label class="q-mb-lg">Hospital Name</q-item-label>
          <q-input outlined v-model="data.hospital_name" style="max-width:450px"/>
      </div>
      <div class="col-md-6">
          <q-item-label class="q-mb-lg">Address</q-item-label>
          <q-input v-model="data.hospital_address" outlined autogrow type="textarea" style="max-width:450px"  />
      </div>   
    </div>
    <div class="row q-ma-lg">
      <div class="col-md-6">
           <q-item-label class="q-mb-lg">Contact No.</q-item-label>
           <q-input outlined v-model="data.hospital_contact_no"  style="max-width:450px" />
      </div>
      <div class="col-md-6">
            <q-item-label class="q-mb-lg">Website</q-item-label>
            <q-input outlined v-model="data.hospital_website"  style="max-width:450px" />
      </div>
    </div>

    <div class="row q-ma-lg">
      <div class="col-md-6">
           <q-item-label class="q-mb-lg">Email ID</q-item-label>
            <q-input outlined v-model="data.hospital_email_id" type="email" style="max-width:450px"/>
      </div>
      <div class="col-6">
        <q-item-label class="q-mb-lg">Country</q-item-label>
        <q-select
          outlined
          v-model="country"
          :options="country_data"
          :option-value="opt => opt.id"
          :option-label="opt => opt.name"
          emit-value
          map-options
          style="max-width: 300px"
        ></q-select>
          <!-- <select v-model="country">
            <option v-for="option in country_data" v-bind:value="option.id"
            v-bind:key="option.value">
              {{ option.name }}
            </option>••••••••
          </select> -->
      </div>
    </div>
    <div class="row q-ma-lg">
      <div class="col-6">
           <q-item-label class="q-mb-lg">State</q-item-label>
           <!-- <select v-model="state">
            <option v-for="option in state_data" v-bind:value="option.id"
            v-bind:key="option.value">
              {{ option.name }}
            </option>
          </select> -->
          <q-select
          outlined
          v-model="data.state"
          :options="state_data"
          :option-value="opt => opt.id"
          :option-label="opt => opt.name"
          emit-value
          map-options
          style="max-width: 300px"
        ></q-select>
      </div>
      <div class="col-6">
            <q-item-label class="q-mb-lg">District</q-item-label>
            <!-- <select v-model="district">
            <option v-for="option in district_data" v-bind:value="option.id"
            v-bind:key="option.value">
              {{ option.name }}
            </option>
          </select> -->

          <q-select
          outlined
          v-model="data.district"
          :options="district_data"
          :option-value="opt => opt.id"
          :option-label="opt => opt.name"
          emit-value
          map-options
          style="max-width: 300px"
        ></q-select>
      </div>
    </div>
    
    <div class="row q-ma-lg">
        <div class="col-6">
            <q-item-label class="q-mb-lg">City</q-item-label>
              <!-- <select v-model="city">
            <option v-for="option in city_data" v-bind:value="option.id"
            v-bind:key="option.value">
              {{ option.name }}
            </option>
          </select> -->
          <q-select
          outlined
          v-model="data.city"
          :options="city_data"
          :option-value="opt => opt.id"
          :option-label="opt => opt.name"
          emit-value
          map-options
          style="max-width: 300px"
        ></q-select>
      </div>
      <div class="col-md-6">
           <q-item-label class="q-mb-lg">Village</q-item-label>
           <q-input outlined v-model="data.village"  :options="options" style="max-width:450px" />
      </div>
    </div>

    <div class="row q-ma-lg">
  <!-- <div class="col-md-6">
      <select v-model="height">
        <option v-for="option in heightOptions" v-bind:value="option.value"
        v-bind:key="option.value">
          {{ option.label }}
        </option>
      </select>
  </div> -->
  <!-- <div class="col-md-6">
      <select v-model="height">
        <option v-for="option in country_data" v-bind:value="option.id"
        v-bind:key="option.value">
          {{ option.name }}
        </option>
      </select>
  </div> -->
    <div class="col-md-6">
     
    </div>
    </div>
     <div align="center">
        <q-btn  color="primary" label="Submit" type="submit" />
        <q-btn  color="primary" label="Reset" type="reset" class="q-ml-sm" />
     </div>
  </q-form>
</q-card>

</template>
<script>
import axios from 'axios'
export default {
 
  data(){

    var token1=localStorage.getItem('token')
    console.log(token1)



    if ( token1 == null )
    { 
        this.$router.push({path: '/'})
    }
    else
    {
                //Hospital Get API
                var id = this.$route.params.id
                console.log(id)
                this.$axios.get('http://127.0.0.1:8000/api/hospitaleditget/'+id,+token1)
                .then((response) => {
                  this.data = response.data
                  console.log(this.data)
                  //  for(var i=0; i<response.data.length;i++)
                  // {
                  //  this.hospital_data.push({id:response.data[i].hospital_id,name:response.data[i].hospital_name,address:response.data[i].hospital_address});
                  // }
                  // console.log(this.hospital_data)
                  
                  // console.log(response.data.hospital_name)
                  
                  // var hospital_name1 = response.data.hospital_name
                  // console.log(hospital_name1)
              
                
                })
                
            // console.log(this.hospital_name1)

              var baseurl='http://127.0.0.1:8000/api/'
              this.$axios.get(baseurl+'get-country',+token1)
                .then((response) => {
                  console.log(response)
            
                  for(var i=0; i<response.data.length; i++)
                  {
                    this.country_data.push({name:response.data[i].country_name,id:response.data[i].country_id});
                  }
                  console.log(this.country_data)
                  
                })


              this.$axios.get(baseurl+'get-state')
                .then((response) => {
                  console.log(response)

                  for(var i=0; i<response.data.length; i++)
                  {
                    this.state_data.push({name:response.data[i].state_name,id:response.data[i].state_id});
                  }

                  console.log(this.state_data)
                })

                this.$axios.get(baseurl+'get-district')
                .then((response) => {
                  console.log(response)

                  for(var i=0; i<response.data.length; i++)
                  {
                    this.district_data.push({name:response.data[i].district_name,id:response.data[i].district_id});
                  }

                  console.log(this.district_data)
                })

              this.$axios.get(baseurl+'get-city')
                .then((response) => {
                  console.log(response)

                  for(var i=0; i<response.data.length; i++)
                  {
                    this.city_data.push({name:response.data[i].city_name,id:response.data[i].city_id});
                  }

                  console.log(this.city_data)
                })
    }

    return{
      id:'',
      token1,
      hospital_data:[],
      hospital_name1:'',
      hospital_name:'',
      hospital_address : '',
      hospital_contact_no : '',
      hospital_website : '',
      hospital_email_id : '',
      country : '', 
      state : '',
      district : '',
      city : '',
      village : '',
      options : [],
      data : [],
      country_data : [],
      state_data : [],
      district_data : [],
      city_data : [],
      country_data_id :[],
      response_token:'', 
    }
   
  },

 methods:{
    onSubmit(){
      console.log('submit')
        // this.country = data.country
        var postdata = {
          hospital_name:this.data.hospital_name,
          hospital_address:this.data.hospital_address, 
          hospital_contact_no:this.data.hospital_contact_no,
          hospital_website:this.data.hospital_website, 
          hospital_email_id:this.data.hospital_email_id,
          country:this.data.country,
          state:this.data.state,
          district:this.data.district,
          city:this.data.city,
          village:this.data.village,
        };

        console.log(this.data.country)
        // this.$refs.desc_ma.validate()

        this.$axios.put('http://127.0.0.1:8000/api/hospitalupdate/'+this.$route.params.id,postdata)
        .then((response) => {
            console.log(response);
            console.log(response.config.data, '****----');
            console.log(response.status);
        })
     },
    //  onReset(){        };

    //    console.log('reset')
    //  },
 }
}
</script>