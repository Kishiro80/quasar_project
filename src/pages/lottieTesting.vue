<template>
  <q-page padding>
    <div class="row">
      <div>
    <h3 v-scrollanimation>Made With Lottifiles</h3>
  </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      defaultOptions: {
        animationData: animationData.default,
      },
    }
  },
}
</script>
