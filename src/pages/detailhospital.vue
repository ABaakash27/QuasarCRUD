<template>
    <q-card flat bordered class="my-card">
        <q-card-section>
            <div class="text-h6">Hospital Details</div>
        </q-card-section>
        <q-card-section>
            <q-item-section> <b>ID  :</b> {{data.hospital_id}}</q-item-section>
        </q-card-section>
        <q-separator inset />
        <q-card-section>
            <q-item-section><b>Name  :</b>{{data.hospital_name}}</q-item-section>
        </q-card-section>
        <q-separator inset />
        <q-card-section>
            <q-item-section><b>Address  :</b>{{data.hospital_address}}</q-item-section>
        </q-card-section>
        <q-separator inset />
        <q-card-section>
            <q-item-section><b>Contact No.  :</b>{{data.hospital_contact_no}}</q-item-section>
        </q-card-section>
        <q-separator inset />
        <q-card-section>
            <q-item-section><b>Email ID  :</b>{{data.hospital_email_id}}</q-item-section>
        </q-card-section>
        <q-separator inset />
        <q-card-section>
            <q-item-section><b>Web Address  :</b>{{data.hospital_website}}</q-item-section>
        </q-card-section>
        <q-separator inset />
        <q-card-section>
            <q-item-section><b>Country  :</b>{{data.country}}</q-item-section>
        </q-card-section>
        <q-separator inset />
        <q-card-section>
        <q-item-section><b>State  :</b>{{data.state}}</q-item-section>
        </q-card-section>
        <q-separator inset />
        <q-card-section>
            <q-item-section><b>District  :</b>{{data.district}}</q-item-section>
        </q-card-section>
        <q-separator inset />
        <q-card-section>
        <q-item-section><b>City  :</b>{{data.city}}</q-item-section>
        </q-card-section>
        <q-separator inset />
        <q-card-section>
            <q-item-section><b>Village  :</b>{{data.village}}</q-item-section>
        </q-card-section>
    </q-card>
</template>
<script>
export default {
    data(){

        var token1=localStorage.getItem('token')
        console.log(token1)


        var id = this.$route.params.id
        console.log(id)

        if ( token1 == null )
        { 
            this.$router.push({path: '/'})
        }
        else
        {
            
            this.$axios.get('http://127.0.0.1:8000/api/hospitaleditget/'+id,+token1)
               .then((response) => {
                this.data = response.data
               console.log(response)
               })
        }

        return{
           token1,
           data:[],
           hospital_data:[],
        }
    }
}
</script>
<style>

</style>