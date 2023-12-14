<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-tabs switch-indicator><!--dynamic route == :to -->
        <q-toolbar-title>
          TO DO LIST APP AND API EXAMPLE
        </q-toolbar-title>
        <q-route-tab class="" icon="home" to="/" replace label="Homepage"/>
        <q-route-tab class="" icon="question" to="/aboutPage" replace label="about"/>
        <!--
        <q-route-tab icon="egg" :to="{name:profile, params:{id:1}}" replace label="Walter White"/>
        <q-route-tab icon="man" :to="{name:profile, params:{id:2}}" replace label="Jesse Pinkman"/>
        <q-route-tab icon="people" :to="{name:profile, params:{id:'random'}}" replace label="Random"/>
        -->
      </q-tabs>
    </q-header>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view :key="$route.params.id"/>
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  // name: 'LayoutName',

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
