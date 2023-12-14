<template>
  <q-page padding>
    <h2>mom</h2>
  </q-page>
</template>

<script>
export default {
  async created(){
    const character = await this.$axios.get('https://www.breakingbadapi.com/api/characters/${this.$route.params.id}')
    console.log(character.data);//check data fetch from api appear or not
    this.character = character.data[0]

  },
  data(){
    return{
      character:''
    }
  }
}
</script>
