<template>
  <q-layout view="hHh lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          HIS & EMR
        </q-toolbar-title>

         <!-- <q-toolbar-title 
          @click="logout()">
         Logout
        </q-toolbar-title> -->
        <!-- <div>Logout</div> -->
        <q-btn  label="Logout" @click="logout()"/>
      </q-toolbar>
    </q-header>
    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label"/>
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      bordered
      content-class="bg-primary"
    >
      <q-list>
        <q-item-label header class="text-white"></q-item-label>
        
        <q-item
        v-for="nav in navs"
        :key="nav.label"
        :to="nav.to"
        class="text-white"
        exact
        clickable>
        <q-item-section avatar>
          <q-icon :name="nav.icon"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{nav.label}}</q-item-label>
        </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      navs: [
        {
          label:'Dashboard',
          icon : 'home',
          to : '/dashboard'
        },
        {
          label:'Hospital',
          icon : 'add_circle_outline',
          to : '/addhospital'
        },

      ]
    }
  },
  methods : {
    openURL,

    logout()
    {
        var token1=localStorage.removeItem('token')
        console.log(token1)
        this.$router.push({path: '/'})
    }
  }
}
</script>

<style lang="scss">
  @media screen and (min-width:768px) {
    .q-footer{
      display:none;
    }
  }

  .q-drawer{
    .q-router-link-exact-active{
      color: rgb(252, 249, 249) !important;
    }
  }
</style>