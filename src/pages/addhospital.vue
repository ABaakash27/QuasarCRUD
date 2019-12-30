<template>
<q-card flat bordered class="my-card q-ma-lg">
    <q-toolbar-title class="text-center text-weight-bold" style="font-size:30px">Add Hospital Details</q-toolbar-title>
  <q-form 
      @submit="onSubmit"
      @reset="onReset">
   <div class="row q-ma-lg">
      <div class="col-md-6">
          <q-item-label class="q-mb-lg">Hospital Name</q-item-label>
          <q-input outlined v-model="name" style="max-width:450px"  :rules="[val => !!val || 'Field is required']"/>
      </div>
      <div class="col-md-6">
          <q-item-label class="q-mb-lg">Address</q-item-label>
          <q-input v-model="address" outlined autogrow type="textarea" style="max-width:450px"  :rules="[val => !!val || 'Field is required']" />
      </div>   
    </div>
    <div class="row q-ma-lg">
      <div class="col-md-6">
           <q-item-label class="q-mb-lg">Contact No.</q-item-label>
           <q-input outlined v-model="contact_no"  style="max-width:450px"  :rules="[val => !!val || 'Field is required']" />
      </div>
      <div class="col-md-6">
            <q-item-label class="q-mb-lg">Website</q-item-label>
            <q-input outlined v-model="web_name"  style="max-width:450px"  :rules="[val => !!val || 'Field is required']"/>
      </div>
    </div>

    <div class="row q-ma-lg">
      <div class="col-md-6">
           <q-item-label class="q-mb-lg">Email ID</q-item-label>
            <q-input outlined v-model="email" type="email" suffix="@gmail.com" style="max-width:450px"  :rules="[val => !!val || 'Field is required']"/>
      </div>
      <div class="col-6">
        <q-item-label class="q-mb-lg">Country</q-item-label>
        <q-select
          outlined
          v-model="country"
          :options="options"
          :option-value="opt => opt.id"
          :option-label="opt => opt.name"
          emit-value
          map-options
         
          fill-input
          use-input
          @filter="filterFn"
          style="max-width: 300px"
          :rules="[val => !!val || 'Field is required']"
        ></q-select>
          <!-- <select v-model="country">
            <option v-for="option in country_data" v-bind:value="option.id"
            v-bind:key="option.value">
              {{ option.name }}
            </option>
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
          v-model="state"
          :options="option1"
          :option-value="opt => opt.id"
          :option-label="opt => opt.name"
          emit-value
          map-options

          fill-input
          use-input
          @filter="filterFn"
          style="max-width: 300px"
          :rules="[val => !!val || 'Field is required']"
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
          v-model="district"
          :options="option2"
          :option-value="opt => opt.id"
          :option-label="opt => opt.name"
          emit-value
          map-options
          fill-input
          use-input
          @filter="filterFn"
          style="max-width: 300px"
          :rules="[val => !!val || 'Field is required']"
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
          v-model="city"
          :options="option3"
          :option-value="opt => opt.id"
          :option-label="opt => opt.name"
          emit-value
          map-options
          fill-input
          use-input
          @filter="filterFn"
          style="max-width: 300px"
          :rules="[val => !!val || 'Field is required']"
        ></q-select>
      </div>
      <div class="col-md-6">
           <q-item-label class="q-mb-lg">Village</q-item-label>
           <q-input outlined v-model="village"  :options="options" style="max-width:450px"  :rules="[val => !!val || 'Field is required']"/>
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
      token1,
    
      name : '',
      address : '',
      contact_no : '',
      web_name : '',
      email : '',
      country : '', 
      state : '',
      district : '',
      city : '',
      village : '',
      options : [],
      option1:[],
      option2:[],
      option3:[],
      data : [],
      country_data : [],
      state_data : [],
      district_data : [],
      city_data : [],
      country_data_id :[],
      response_token:'',
      // getcountry:'',
      // heightOptions:[{label:'abc',
      // value:'1'}]
     
     
    }
    //  let value = this.$q.localStorage.getItem(response_token)
    // console.log(value, '************ value ***********')
    // console.log(this.heightOptions, '*********************')
  },

  // computed: {
  // country_data () {
  //   //  return [ { value: this.country_data } ]
  //   let options = country_data.map(opt => ({value: opt.country_id}))
  //  }
  // },

 methods:{
    onSubmit(){
      console.log('submit')
      
        var postdata = {
          hospital_name:this.name,
          hospital_address:this.address, 
          hospital_contact_no:this.contact_no,
          hospital_website:this.web_name, 
          hospital_email_id:this.email,
          country:this.country,
          state:this.state,
          district:this.district,
          city:this.city,
          village:this.village,
        };

        // this.$refs.desc_ma.validate()

        this.$axios.post('http://127.0.0.1:8000/api/hospital', postdata)
        .then((response) => {
            console.log(response);
            console.log(response.config.data, '****----');
            console.log(response.status);
        })
     },
     onReset(){
       console.log('reset')
     },

      filterFn (val, update, abort) {
      update(() => {
        const needle = val.toLowerCase()
        this.options = this.country_data.filter(v => v.name.toLowerCase().indexOf(needle) > -1)
        this.option1 = this.state_data.filter(v => v.name.toLowerCase().indexOf(needle) > -1)
        this.option2 = this.district_data.filter(v => v.name.toLowerCase().indexOf(needle) > -1)
        this.option3 = this.city_data.filter(v => v.name.toLowerCase().indexOf(needle) > -1)
      })
    }
 }
}
</script>